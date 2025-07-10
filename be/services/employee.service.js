import { db } from "../config/db.js"
import { doc, setDoc } from "firebase/firestore"

const createEmployee = async (data) => {
  try {
    await setDoc(doc(db, "employees", data.email), {
      name: "Employee 1",
      email: "123@gmail.com",
      address: "USA",
      phone: "123456789",
      role: "admin",
    })

    return data
  } catch (err) {
    throw new Error(err)
  }
}

export { createEmployee }
