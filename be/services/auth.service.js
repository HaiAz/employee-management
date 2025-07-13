import { db } from "../config/db.js"
import { doc, getDoc, setDoc, deleteDoc, query, collection, where, getDocs } from "firebase/firestore"
import { generateCode } from "../utils/number.js"
import twilio from "twilio"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const JWT_SECRET = process.env.JWT_SECRET
const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const createMessage = async (otp) => {
  await client.messages.create({
    body: `${otp} is your login code`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+84981660700",
  })
}

const createNewAccessCode = async (data) => {
  let fieldName = "phone"
  if (data.email) {
    fieldName = "email"
  }

  try {
    const q = query(collection(db, "employees"), where(fieldName, "==", data[fieldName]))
    const snapshot = await getDocs(q)
    const isExist = snapshot.size > 0 ? true : false

    if (!isExist) {
      throw new Error("Field is not exist!")
    }

    const otp = generateCode()
    const now = new Date()
    const expireDate = new Date(now.getTime() + 5 * 60 * 1000)

    let initData = {
      otp: otp,
      expireDate: expireDate,
      createdAt: now,
    }

    if (fieldName == "phone") {
      initData.phone = data[fieldName]
    } else {
      initData.email = data[fieldName]
    }

    await setDoc(doc(db, "verification", String(data[fieldName])), {
      ...initData,
    })
  } catch (err) {
    throw new Error(err)
  }
}

const validateAccessCode = async (data) => {
  let fieldName = "phone"
  if (data.email) {
    fieldName = "email"
  }

  console.log("data[fieldName]", data[fieldName])

  const docRef = doc(db, "verification", String(data[fieldName]))
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const verificationData = docSnap.data()
    const now = new Date()
    if (!(now > verificationData.createdAt.toDate() && now < verificationData.expireDate.toDate())) {
      throw new Error("OTP is expired.")
    }

    if (verificationData.otp !== data.otp) {
      throw new Error("Wrong OTP.")
    }

    const q = query(collection(db, "employees"), where(fieldName, "==", data[fieldName]))
    const snapshot = await getDocs(q)
    const isExist = snapshot.size > 0 ? true : false

    if (!isExist) {
      throw new Error("User is not exist!")
    }

    const userData = snapshot.docs[0].data()
    const token = generateToken(userData)

    await deleteDoc(doc(db, "verification", String(data[fieldName])))

    return token
  } else {
    throw new Error("No such document!")
  }
}

const generateToken = async (data) => {
  const token = jwt.sign(
    {
      ...data,
    },
    JWT_SECRET,
    { expiresIn: "30d" },
  )

  return token
}

const validateToken = async (token) => {
  try {
    const data = jwt.verify(token, JWT_SECRET)
    return data
  } catch (err) {
    throw new Error("Invalid token")
  }
}

export { createNewAccessCode, validateAccessCode, validateToken, generateToken }
