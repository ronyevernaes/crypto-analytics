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

export function post<T>(values: T) {
  return fetch(`${BACKEND_URL}/rates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
}