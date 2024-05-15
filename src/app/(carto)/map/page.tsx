import Map from '@/components/Map'
import { getColleges } from '@/lib/api'

export default async function MapPage() {
  const colleges = await getColleges()

  return (
    <Map props={colleges} />
  )
}
