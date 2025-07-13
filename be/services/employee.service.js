import { db } from "../config/db.js"
import { doc, setDoc, getDocs, collection } from "firebase/firestore"

const createEmployee = async (data) => {
  try {
    await setDoc(doc(db, "employees", data.email), {
      ...data,
      isVerified: false,
    })

    return data
  } catch (err) {
    throw new Error(err)
  }
}

const getEmployees = async (data) => {
  try {
    const querySnapshot = await getDocs(collection(db, "employees"))
    const retData = []
    querySnapshot.forEach((doc) => {
      retData.push(doc.data())
    })

    return retData;
  } catch (err) {
    throw new Error(err)
  }
}

export { createEmployee, getEmployees }
