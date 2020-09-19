const getData = (API_URL) => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(reponse => reponse)
    .catch(error => error);
};

export default getData;
