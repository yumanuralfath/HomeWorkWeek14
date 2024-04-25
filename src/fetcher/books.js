import { Base_URL } from "@/lib/baseUrl";

export const deleteBook = async (id) => {
  try {

    const response = await fetch(`${Base_URL}/book/${id}`, {
      method: "DELETE"
    })

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message })
  }
}

export const imageBook = async (file) => {
  try {
    const data = new FormData()
    data.set('file', file)

    const res = await fetch(`${Base_URL}/upload`, {
      method: 'POST',
      body: data
    })
    if (!res.ok) throw new Error(await res.text())
  } catch (e) {
    console.error(e)
  }
}
