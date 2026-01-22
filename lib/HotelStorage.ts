const STORAGE_KEY = 'trip_itinerary_hotels';

export const getStoredHotels = (): any[] => {
  if (typeof window === 'undefined') return [];

  const data = localStorage.getItem(STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error parsing hotels from storage', error);
    return [];
  }
};

export const saveHotelToStorage = (hotel: any) => {
  const current = getStoredHotels();
  const updated = [...current, hotel];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

// export const removeHotelFromStorage = (id: string | number) => {
//   const current = getStoredHotels();
//   const updated = current.filter((h: any) => h.id !== id);

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//   return updated;
// };
