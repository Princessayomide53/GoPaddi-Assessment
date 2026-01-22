import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://booking-com15.p.rapidapi.com/api/v1',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY!,
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
  },
});
