import axios from "axios";
const api = process.env.NEXT_PUBLIC_API;

export const axiosMiFinanz = axios.create({
  baseURL: api
});
