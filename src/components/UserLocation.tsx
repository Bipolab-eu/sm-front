import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

export default function UserLocation () {

  const [center, setcenter] = useState(Object)

  const map = useMap()

  const userPosition = map.getCenter() // almacena la posición inicial del usuario
  
  useEffect(() => {
    map.locate({setView: true}); // geolocaliza al usuario

    map.on('locationfound', (e) => setcenter(e.latlng) ) // actualiza la posición del usuario

    return () => {
      map.off('locationfound'); // Limpia el evento cuando el componente se desmonta
    }

  }, [map])

  return (
    <Marker
      position={userPosition}
    >
      <Popup>
        Hey ! I live here: { [center.lat, center.lng] }
      </Popup>
    </Marker>
  );
}
