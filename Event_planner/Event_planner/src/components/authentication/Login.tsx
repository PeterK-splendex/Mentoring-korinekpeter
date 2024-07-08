import { useDispatch } from "react-redux";
import { login } from '../../store/userSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const name = 'login name';
    const email = 'login email';
    dispatch(login({ name, email, role: "user" }));
    navigate('/profile');
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
