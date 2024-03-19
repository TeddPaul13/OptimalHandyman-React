import React from 'react'
import {useRef, useEffect} from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { styled } from "@mui/material/styles";
import "leaflet/dist/leaflet.css";
import { map } from 'leaflet';
import { useMediaQuery } from '@mui/material';

// Define the bounds for Western Sydney
const westernSydneyBounds = [
  [-33.786, 150.827], // Southwest coordinates
  [-33.657, 150.946]  // Northeast coordinates (Annangrove)
];

function AreaMap() {

  const mapRef = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width:600px)')

 const handleMap = (map) =>{
  mapRef.current = map;
  map.fitBounds(westernSydneyBounds)
 }
 
  return (
   
        <MapContainer  center={[-33.727, 150.852]} zoom={12} whenCreated={handleMap} zoomControl={false} dragging={false} scrollWheelZoom={false} doubleClickZoom={false} style={{width:"100%", height: "100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  )
}

export default AreaMap