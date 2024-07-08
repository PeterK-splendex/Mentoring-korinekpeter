import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Profile() {
  const name = useSelector((state: RootState) => state.user.name);
  const email = useSelector((state: RootState) => state.user.email);
  const role = useSelector((state: RootState) => state.user.role);

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p className="text-gray-700 text-sm mb-2">Email: {email}</p>
        <p className="text-gray-700 text-sm">Role: {role}</p>
      </div>
    </div>
  );
}

export default Profile;
