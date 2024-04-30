// sourceContext.ts
import { createContext } from 'react';

interface Location {
  lat: number;
  lng: number;
  name?: string;
  label?: string;
}

export const sourceContext = createContext<{ source: Location; setSource: (value: Location) => void } | null>(null);
