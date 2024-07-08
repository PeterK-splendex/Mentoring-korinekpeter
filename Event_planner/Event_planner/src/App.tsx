import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import Sidebar from './components/general/Sidebar.tsx';
import Login from './components/authentication/Login.tsx';
import Register from './components/authentication/Register.tsx';
import Profile from './components/general/Profile.tsx';
import Users from './components/users/Users.tsx';
import Events from './components/events/Events.tsx';
import Authors from './components/authors/Authors.tsx';
import { AuthorsProvider } from './components/authors/AuthorsContext.tsx';
import { UsersProvider } from './components/users/UsersContext.tsx';
import { EventsProvider } from './components/events/EventsContext.tsx';
import AuthorDetail from './components/authors/AuthorDetail.tsx';
import UserDetail from './components/users/UserDetail.tsx';
import EventDetail from './components/events/EventDetail.tsx';
import "./App.css";
import AuthorForm from './components/authors/AuthorForm.tsx';
import UserForm from './components/users/UserForm.tsx';
import EventForm from './components/events/EventForm.tsx';

function App() {
  return (
    <Provider store={store}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 ml-[170px] p-4 bg-gray-100">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<UsersProvider><Users /></UsersProvider>} />
              <Route path="/events" element={<EventsProvider><Events /></EventsProvider>} />
              <Route path="/authors" element={<AuthorsProvider><Authors /></AuthorsProvider>} />
              <Route path="/authors/:id" element={<AuthorsProvider><AuthorDetail /></AuthorsProvider>} />
              <Route path="/addauthor" element={<AuthorsProvider><AuthorForm /></AuthorsProvider>} />
              <Route path="/authorform/:id" element={<AuthorsProvider><AuthorForm /></AuthorsProvider>} />
              <Route path="/userform/:id" element={<UsersProvider><UserForm /></UsersProvider>} />
              <Route path="/adduser" element={<UsersProvider><UserForm /></UsersProvider>} />
              <Route path="/eventform/:id" element={<AuthorsProvider><EventsProvider><EventForm /></EventsProvider></AuthorsProvider>} />
              <Route path="/addevent" element={<AuthorsProvider><EventsProvider><EventForm /></EventsProvider></AuthorsProvider>} />
              <Route path="/users/:id" element={<UsersProvider><UserDetail /></UsersProvider>} />
              <Route path="/events/:id" element={<EventsProvider><EventDetail /></EventsProvider>} />
            </Routes>
          </div>
        </div>
    </Provider>
  );
}

export default App;
