/* eslint-disable semi */
/* eslint-disable linebreak-style */
// getting data from the API
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
export const get = async (endPoint) => {
  const result = await fetch(`${url}${endPoint}`);
  return result.json();
};
// post data to the API
export const post = async (endPoint, body) => {
  const result = await fetch(`${url}${endPoint}`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
  return result.json();
};
