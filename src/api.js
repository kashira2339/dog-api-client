import fetch from "isomorphic-fetch";

export const getDogs = async () => {
  return fetch(`http://localhost:8080/dogs`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }).then(response => response.json());
};

export const getDog = async ({ id }) => {
  return fetch(`http://localhost:8080/dogs/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }).then(response => response.json());
};

export const createDog = async ({ name, gender, birthday }) => {
  return fetch(`http://localhost:8080/dogs`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ name, gender, birthday })
  }).then(response => response.ok);
};

export const updateDog = async ({ id, name, gender, birthday }) => {
  return fetch(`http://localhost:8080/dogs/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ name, gender, birthday })
  }).then(response => response.json());
};

export const deleteDog = async ({ id }) => {
  return fetch(`http://localhost:8080/dogs/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }).then(response => response.ok);
};
