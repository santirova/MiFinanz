import axios from "axios";
const api = process.env.API;

export const axiosMiFinanz = axios.create({
  baseURL: api
});
