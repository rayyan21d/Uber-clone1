import React, { useEffect, useState, useContext } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { sourceContext } from "@/app/context/sourceContext";
import { destinationContext } from "@/app/context/destinationContext";

interface InputSectionProps {
  InputType: string;
}

export const InputSection: React.FC<InputSectionProps> = ({ InputType }) => {
  const [value, setValue] = useState<any | null>(null);
  const [placeholder, setPlaceholder] = useState<string | null>(null);

  const sourceContextValue = useContext(sourceContext);
  const destinationContextValue = useContext(destinationContext);

  // Ensure that context values are not null before destructuring
  const { source, setSource } = sourceContextValue || {};
  const { destination, setDestination } = destinationContextValue || {};

  // Declare the types of place and type
  interface PlaceInterface {
    label: string;
    value: {
      place_id: string;
    };
  }

  const getLatAndLng = async (place: PlaceInterface, type: string) => {
    if (place != null && setSource && setDestination) {
      const placeId = await place.value.place_id;
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails({ placeId }, (place, status) => {
        if (
          place != null &&
          status === "OK" &&
          place.geometry &&
          place.geometry.location
        ) {
          if (type === "PickUp" && setSource) {
            setSource({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              name: place?.formatted_address,
              label: place?.name,
            });
          } else if (setDestination) {
            setDestination({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              name: place?.formatted_address,
              label: place?.name,
            });
          }
        } else {
          console.log("Error in fetching longitude and latitude");
        }
      });
    }
  };

  useEffect(() => {
    setPlaceholder(
      InputType === "PickUp" ? "PickUp Location" : "DropOff Location"
    );
  }, [InputType]);

  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          value: value,
          onChange: (newValue) => {
            if (newValue != null) {
              getLatAndLng(newValue, InputType);
            }
            setValue(newValue);
          },
          placeholder: placeholder || "",
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
