/**
 * /*import axios from "axios";
 *
 * export const api = axios.create({
 *   baseURL: "https://cors-anywhere.herokuapp.com/http://api.crossystem.com.br/lirida/api",
 * });
 *
 * @format
 */

export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function getDtHrAtual() {
  var date = new Date();
  var data = date.toLocaleString().substr(0, 10);
  var hora = date.toLocaleString().substr(11, 5);
  //"22:05 • 04/09/2020"
  return `${hora} • ${data}`;
}

export  function pegaIndexLista(lista, id) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      return i;
    }
  }
}