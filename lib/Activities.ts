const STORAGE_KEY = 'trip_itinerary_activities';

export const getStoredActivities = (): any[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveActivityToStorage = (activity: any) => {
  const current = getStoredActivities();
  const updated = [...current, activity];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
