import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { styled } from "@mui/material/styles";
import "leaflet/dist/leaflet.css";


const outerbounds = [[50.505, -29.09]
[52.505, 29.09]]
function AreaMap() {
  return (
   
        <MapContainer bounds={outerbounds} zoom={13} center={51.505 -0.09} scrollWheelZoom={false} style={{width:"100%", height: "100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  
  )
}

export default AreaMap