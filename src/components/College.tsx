'use client'

import { Marker, Popup } from 'react-leaflet'

interface Props {
  name: string,
  latitude: number,
  longitude: number
}

export default function College({ name, latitude, longitude }:Props) {  
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>{name}</Popup>
    </Marker>
  )
}
