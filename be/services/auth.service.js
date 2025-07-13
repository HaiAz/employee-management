import { db } from "../config/db.js"
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"
import { generateCode } from "../utils/number.js";
import twilio from 'twilio'
import dotenv from 'dotenv'
dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const createMessage = async (otp) => {
  await client.messages.create({
    body: `${otp} is your login code`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+84981660700",
  });
}

const createNewAccessCode = async (data) => {
  try {
    const otp = generateCode();
    const now = new Date();
    const expireDate = new Date(now.getTime() + 5 * 60 * 1000);

    await setDoc(doc(db, "verification", String(data.phone)), {
      phone: data.phone,
      otp: otp,
      expireDate: expireDate,
      createdAt: now,
    })

  } catch (err) {
    throw new Error(err)
  }
}

const validateAccessCode = async (data) => {
  const docRef = doc(db, "verification", String(data.phone));
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const verificationData = docSnap.data();
    const now = new Date()

    if (!(now > verificationData.createdAt.toDate() && now < verificationData.expireDate.toDate())) {
      throw new Error("OTP is expired.")
    }

    if (verificationData.otp !== data.otp) {
      throw new Error("Wrong OTP.")
    }

    await deleteDoc(doc(db, "verification", String(data.phone)));
  } else {
    throw new Error("No such document!")
  }
}

export { createNewAccessCode, validateAccessCode }
