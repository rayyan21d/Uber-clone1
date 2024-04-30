// sourceContext.ts
import { createContext } from 'react';

interface Location {
  lat: number;
  lng: number;
  name?: string;
  label?: string;
}

export const destinationContext = createContext<{ destination: Location; setDestination: (value: Location) => void } | null>(null);


