"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import UserLocation from "./UserLocation";
import College from "./College";

export default function Map({ props }: any) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <UserLocation />
      {props.map((e: any) => (
        <College
          key={e.id}
          collegeId={e.id}
          name={e.name}
          latitude={e.latitude}
          longitude={e.longitude}
        />
      ))}
    </MapContainer>
  );
}
