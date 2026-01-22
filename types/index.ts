export interface Flight {
  id: string;
  airline: string;
  flightNo: string;
  departure: { time: string; date: string; code: string };
  arrival: { time: string; date: string; code: string };
  duration: string;
  price: string;
}
