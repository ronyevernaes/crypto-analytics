const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export function get() {
  return fetch(`${BACKEND_URL}/rates`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data);
};
