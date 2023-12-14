import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import OnlineShop from '../src/Components/OnlineShop/OnlineShop';
import News from './Components/News';
import Settings from './Components/Settings';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/Dialogs container';
import UsersContainer from './Components/Users/Users container';
import ProfileContainer from './Components/Profile/Profile Container';
import HeaderContainer from './Components/Header/Header container';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';


const App = (props) => {
  return (
    <div className='App-wrapper'>
      <HeaderContainer store={props.store} />
      <Navbar />
      <div className='App-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer store={props.store} />}></Route>
          <Route path='/dialogs' element={<DialogsContainer store={props.store} />}></Route>
          <Route path='/users' element={<UsersContainer store={props.store} />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/online-shop' element={<OnlineShop />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
