import { getColleges } from "@/lib/api"
import Map from "@/components/Map"

export default async function Home() {
  const colleges = await getColleges()

  return (
    <Map props={colleges} />
  )
}
