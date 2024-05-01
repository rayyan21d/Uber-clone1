import React, { useContext, useEffect, useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  MarkerF,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import { sourceContext } from "@/app/context/sourceContext";
import { destinationContext } from "@/app/context/destinationContext";

const containerStyle = {
  width: "65vw",
  height: "85vh",
};

const MapSection = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 17.4, lng: 78.47 });

  const { source, setSource } = useContext(sourceContext) || {
    source: null,
    setSource: () => {},
  };
  const { destination, setDestination } = useContext(destinationContext) || {
    destination: null,
    setDestination: () => {},
  };
  const [
    directions,
    setDirections,
  ] = useState<google.maps.DirectionsResult | null>(null);

  useEffect(() => {
    if (source && source.lat && source.lng && map) {
      map.panTo({ lat: source.lat, lng: source.lng });
      setCenter({ lat: source.lat, lng: source.lng });
    }

    if (source && destination) {
      getDirections();
    }
  }, [source, destination, map]);

  const getDirections = () => {
    if (!source || !destination) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.log("Error in getting directions");
        }
      }
    );
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={(map) => setMap(map)}
    >
      {source && (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: "/Images/city.jpg",
            scaledSize: {
              width: 20,
              height: 20,
              equals: () => true,
            },
          }}
        />
      )}

      {destination && (
        <Marker
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: "/Images/city.jpg",
            scaledSize: {
              width: 20,
              height: 20,
              equals: () => true,
            },
          }}
        />
      )}

      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
            polylineOptions: {
              strokeColor: "black",
              strokeOpacity: 1,
              strokeWeight: 4,
            },
          }}
        />
      )}
    </GoogleMap>
  );
};

export default MapSection;
