import axios from 'axios';

const api = axios.create({
  baseURL: 'https://stephen-king-api.onrender.com/', // Altere para a URL correta da API
});

export const getBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar a lista de livros:", error);
    throw error; // Lança o erro para ser tratado no componente
  }
};

export const getBookDetails = async (id: string) => {
  try {
    const response = await api.get(`/books/${id}`); // Use o id aqui para formar a URL
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do livro com id ${id}:`, error);
    throw error; // Lança o erro para ser tratado no componente
  }
};
