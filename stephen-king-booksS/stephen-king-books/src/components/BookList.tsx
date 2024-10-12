import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api';
import { Link } from 'react-router-dom';

// Defina a interface para o Livro
interface Book {
  id: string;
  title: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]); // Inicialize corretamente como um array de livros
  const [error, setError] = useState<string | null>(null); // Estado para lidar com erros

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        setError('Erro ao carregar a lista de livros');
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div>{error}</div>; // Exibir a mensagem de erro
  }

  return (
    <div>
      <h1>Livros de Stephen King</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
