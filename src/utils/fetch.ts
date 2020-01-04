export const fetchData = ({ id }: { id: number | string }) => {
  const url = `http://127.0.0.1:8081/api/todos?id=${id}`
  return fetch(url, {
    method: 'GET',
  }).then(res => res.json())
}