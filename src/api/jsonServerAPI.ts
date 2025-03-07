const HOST = 'http://localhost:3100'

function query(url: string) {
  return fetch(`${HOST}/${url}`)
}

export async function getData(url: string) {
  return await query(url).then((res) => res.json())
}
