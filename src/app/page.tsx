import { getColleges } from "@/lib/api"
import Map from "@/components/Map"

export default async function Home() {
  const { data } :any = await getColleges()
  const colleges = data.map(({ id, attributes: { name, latitude, longitude } }: any) => ({ id, name, latitude, longitude }))

  return (
    <Map props={colleges} />
  )
}
