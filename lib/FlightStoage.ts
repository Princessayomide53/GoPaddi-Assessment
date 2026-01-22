import { Flight } from '../types';

const STORAGE_KEY = 'trip_itinerary_flights';

export const getStoredFlights = (): Flight[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFlightToStorage = (flight: Flight) => {
  const current = getStoredFlights();
  const updated = [...current, flight];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
