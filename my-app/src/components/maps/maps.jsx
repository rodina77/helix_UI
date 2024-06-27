import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./maps.css";
const customIcon = L.icon({
  iconUrl: "/assets/images/map-marker-512.webp",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const SimpleMap = () => {
  const positions = [
    { coords: [51.505, -0.19], message: "DNA lab", phone: "01123456789" },
    { coords: [51.51, -0.12], message: "AlFarid lab", phone: "01234567890" },
    { coords: [51.505, -0.15], message: "ALQema lab", phone: "01123456789" },
    { coords: [51.51, -0.2], message: "tupe lab", phone: "01234567890" },
    { coords: [51.505, -0.11], message: "paternity lab", phone: "01123456789" },
    { coords: [51.51, -0.14], message: "missing lab", phone: "01234567890" },
    {
      coords: [51.515, -0.22],
      message: "Biological lab",
      phone: "09876543210",
    },
  ];
  return (
    <>
      <h2 className="h_map">our labs</h2>
      <p>here u can find our labs there locations and mobile phone </p>

      <MapContainer
        center={positions[0].coords}
        zoom={13}
        style={{ height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((pos, index) => (
          <Marker key={index} position={pos.coords} icon={customIcon}>
            <Popup>
              <b>{pos.message}</b>
              <br />
              Phone: {pos.phone}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default SimpleMap;
