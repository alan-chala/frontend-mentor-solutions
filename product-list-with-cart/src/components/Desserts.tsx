import type { Db } from "../types"

type DessertsProps = {
  db: Db
}

export const Desserts = ({ db } : DessertsProps) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold">
        Desserts
      </h1>
    </section>
  )
}
