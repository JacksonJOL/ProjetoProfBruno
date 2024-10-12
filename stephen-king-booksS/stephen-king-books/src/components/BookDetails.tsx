// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getBookDetails } from '../services/api';

// // Defina a interface para o Livro
// interface Book {
//   id: string;
//   title: string;
//   synopsis: string;
//   publicationYear: number;
//   genre: string;
// }

// const BookDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [book, setBook] = useState<Book | null>(null); // Usar a interface Book
//   const [error, setError] = useState<string | null>(null); // Estado para lidar com erros

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const data = await getBookDetails(id);
//         setBook(data);
//       } catch (error) {
//         setError('Erro ao carregar detalhes do livro');
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>; // Exibir a mensagem de erro
//   }

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{book.title}</h1>
//       <p><strong>Sinopse:</strong> {book.synopsis}</p>
//       <p><strong>Ano de Publicação:</strong> {book.publicationYear}</p>
//       <p><strong>Gênero:</strong> {book.genre}</p>
//     </div>
//   );
// };

// export default BookDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../services/api';

// Defina a interface para o Livro
interface Book {
  id: string;
  title: string;
  synopsis: string;
  publicationYear: number;
  genre: string;
}

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Verificar se o ID existe antes de fazer a requisição
        if (id) {
          const data = await getBookDetails(id);
          setBook(data);
        } else {
          setError('ID do livro não fornecido');
        }
      } catch (error) {
        setError('Erro ao carregar detalhes do livro');
      }
    };

    fetchBookDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>; // Exibir a mensagem de erro
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Sinopse:</strong> {book.synopsis}</p>
      <p><strong>Ano de Publicação:</strong> {book.publicationYear}</p>
      <p><strong>Gênero:</strong> {book.genre}</p>
    </div>
  );
};

export default BookDetails;

