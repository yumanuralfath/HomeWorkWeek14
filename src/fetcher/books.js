import { Base_URL } from "@/lib/baseUrl";

//Fetch to Delete A Book
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

//Fetch to Create A Book
export const createBook = async (params) => {

  try {

    const response = await fetch(`${Base_URL}/book`, {
      method: "POST",
      body: JSON.stringify(params)
    })

    return response
  } catch (err) {
    throw new Error({ message: err.response.message })
  }
}

//Fetch to Upload Image a Book
export const imageBook = async (file) => {
  try {

    const data = new FormData()
    data.set('file', file)

    const res = await fetch(`${Base_URL}/upload`, {
      method: 'POST',
      body: data
    })
    if (!res.ok) throw new Error(await res.text())
    const imagePath = await res.text();
    return imagePath;
  } catch (e) {
    console.error(e);
    return null; // Mengembalikan null jika terjadi error
  }
}