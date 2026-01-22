import { apiClient } from './ApiClient';

export const bookingApi = {
  searchDestination: (query: string) =>
    apiClient.get('/hotels/searchDestination', { params: { query } }),

  getHotels: (params: {
    dest_id: string;
    arrival_date: string;
    departure_date: string;
  }) => apiClient.get('/hotels/searchHotels', { params }),

  getFlights: (params: { fromId: string; toId: string; date: string }) =>
    apiClient.get('/flights/searchFlights', { params }),

  getActivities: (dest_id: string) =>
    apiClient.get('/attractions/searchAttractions', {
      params: { dest_id },
    }),
};
