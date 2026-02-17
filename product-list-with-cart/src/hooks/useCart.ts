import { useState } from "react"
import data from '../data/data.json'
import type { Db } from "../types"

export const useCart = () => {

  const [db, setDb] = useState<Db[]>(data)


  return {
    db
  }
}
