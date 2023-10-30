import axios from "axios";

export const axiosMiFinanz = axios.create({
  baseURL: "http://localhost:3001",
});
