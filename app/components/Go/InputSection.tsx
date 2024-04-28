import React, { useEffect, useState, useContext } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { sourceContext } from "@/app/context/sourceContext";
import { destinationContext } from "@/app/context/destinationContext";

interface InputSectionProps {
  InputType: string;
}

export const InputSection: React.FC<InputSectionProps> = ({ InputType }) => {
  const [value, setValue] = useState("After relod");
  const [placeholder, setPlaceholder] = useState<string | null>(null);

  const { source, setSource } = useContext(sourceContext);
  const { destination, setDestination } = useContext(destinationContext);

  const getLatAndLng = async (place, type) => {
    // Since the
    console.log("Long and Lang??");
    const placeId = await place.value.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        if (type == "PickUp") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place?.formatted_address,
            label: place?.name,
          });
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place?.formatted_address,
            label: place?.name,
          });
        }
      } else {
        console.log("Error in getting the location");
      }
    });
  };

  useEffect(() => {
    return InputType == "PickUp"
      ? setPlaceholder("PickUp Location")
      : setPlaceholder("DropOff Location");
  }, []);

  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          value: value,
          onChange: (place) => {
            console.log(place);
            getLatAndLng(place, InputType);
            setValue(place.value);
          },
          placeholder: placeholder,
          isClearable: true,
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#e2e8f0",
              width: "full",
            }),
          },
        }}
      />
    </div>
  );
};
