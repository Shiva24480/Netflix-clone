import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile';
import MyList from './pages/MyList';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  // console.log(user);

  return (
    <div className="App">
      {user === 'guest' ? (
        <Login />
      ) :
        (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mylist" element={<MyList />} />
          </Routes>
        )
      }
    </div>
  );
}

export default App;
