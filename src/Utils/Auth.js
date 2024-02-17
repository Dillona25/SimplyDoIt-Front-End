import { baseUrl } from "../Utils/Api";
import processServerResponse from "../Utils/ProcessServerRes";

export const loginUser = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const registerUser = (email, password, name, avatar) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Getting the token of the authorized user
export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
