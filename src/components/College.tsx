'use client'

import Link from 'next/link'
import { Marker, Popup } from 'react-leaflet'

interface Props {
  collegeId: Number,
  name: string,
  latitude: number,
  longitude: number
}

export default function College({ collegeId, name, latitude, longitude }:Props) {  
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <Link href={`/map/${collegeId}`}>
          {name}
        </Link>
      </Popup>
    </Marker>
  )
}
