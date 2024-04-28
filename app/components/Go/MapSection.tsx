"use client";

import React, { useState, useCallback, useEffect, useContext } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { sourceContext } from "@/app/context/sourceContext";
import { destinationContext } from "@/app/context/destinationContext";

const containerStyle = {
  width: "65vw",
  height: "85vh",
};

const MapSection = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 17.4,
    lng: 78.47,
  });

  const { source, setSource } = useContext(sourceContext);
  const { destination, setDestination } = useContext(destinationContext);

  useEffect(() => {
    console.log("Inside Map Section", source);

    if (source.lat && source.lng && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });

      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }

    console.log("Center is set to ", { lat: source.lat, lng: source.lng });
  }, [source]);

  useEffect(() => {
    console.log("Inside Map Section", destination);

    if (destination.lat && destination.lng && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }

    console.log("Center is set to ", { lat: source.lat, lng: source.lng });
  }, [destination]);

  // const onLoad = useCallback(function callback(map: google.maps.Map | null) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={(map) => setMap(map)}
      // onUnmount={onUnmount}
    >
      <MarkerF
        position={{ lat: source.lat, lng: source.lng }}
        icon={{
          url: "/Images/lad.jpg",
          scaledSize: {
            width: 20,
            height: 20,
          },
        }}
      />
    </GoogleMap>
  );
};

export default MapSection;
