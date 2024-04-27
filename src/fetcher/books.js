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
    if (!res.ok) throw new Error(await res.text());
    const imagePath = await res.json();
    const cleanedImagePath = imagePath.replace(/^public\//, '');
    const baseUrl = "http://localhost:3000"; 
    const imageUrl = `${baseUrl}/${cleanedImagePath}`;
    console.log(imageUrl, "<<<<")

    return imageUrl;
  } catch (e) {
    console.error(e);
    return null; // Mengembalikan null jika terjadi error
  }
}

//fetch updateBook
export const updateBook = async (id, newData) => {
  console.log(id, newData);
  try {
    const response = await fetch(`${Base_URL}/book/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newData),
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

//Get Book By id
export const getDetailBookById = async (id) => {
  try {
    const response = await fetch(`${Base_URL}/book/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

//get All book
export const getAllbook = async (id) => {
  try {
    const response = await fetch(`${Base_URL}/book/`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error({ message: err });
  }
};