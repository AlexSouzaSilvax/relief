/*import axios from "axios";

export const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.crossystem.com.br/lirida/api",  
});*/

export function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}