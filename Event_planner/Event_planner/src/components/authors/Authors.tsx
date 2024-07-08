import { useNavigate } from 'react-router-dom';
import { useAuthors } from './AuthorsContext';
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import axios from 'axios';
interface Author {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  bornDate: Date;
  specializations: string[];
}

function Authors() {
  const { authors, loading, error, fetchAuthors } = useAuthors();
  const navigate = useNavigate();
  const userRole = useSelector((state: RootState) => state.user.role);

  const handleDelete = async (authorId: number) => {
    try {
      await axios.delete(`http://localhost:3000/authors/${authorId}`);
      fetchAuthors(); 
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Authors</h2>
      {userRole === 'admin' && ( 
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          onClick={() => navigate('/addauthor')}
        >
          Add Author
        </button>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Specializations</th>
              {userRole === 'admin' && <th className="border border-gray-300 px-4 py-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {authors.map((author: Author) => (
              <tr key={author.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/authors/${author.id}`);
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    {author.firstName} {author.lastName}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{author.specializations.join(', ')}</td>
                {userRole === 'admin' && (
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(author.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => navigate(`/authorform/${author.id}`)}
                    >
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Authors;
