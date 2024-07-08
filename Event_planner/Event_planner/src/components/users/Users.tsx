import { useNavigate } from 'react-router-dom';
import { useUsers } from './UsersContext';
import axios from 'axios';

function Users() {
  const { users, loading, error, fetchUsers } = useUsers();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => fetchUsers())
      .catch((err) => console.error(err));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        onClick={() => navigate('/adduser')}
      >
        Add User
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/users/${user.id}`);
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    {user.name}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role === 'user' ? (
                    <>
                      <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:shadow-outline"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => navigate(`/userform/${user.id}`)}
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    'Cannot edit other admins'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
