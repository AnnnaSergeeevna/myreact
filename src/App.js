import React, { useState } from "react"

import logo from './logo.svg';
import classes from './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import OnlineShop from '../src/Components/OnlineShop/OnlineShop';
import News from './Components/News';
import FoodPlan from './Components/FoodPlan';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/Dialogs container';
import UsersContainer from './Components/Users/Users container';
import ProfileContainer from './Components/Profile/Profile Container';
import HeaderContainer from './Components/Header/Header container';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';


const App = (props) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  // const blockStyles = {
  //   backgroundColor: `rgb(${(200 - sliderValue) * 1.26}, ${(200 - sliderValue) * 1.06}, ${(200 - sliderValue) * 0.86})`,

  // };

  return (
    <div className='App'>
      <div className='App-wrapper'>
        <HeaderContainer store={props.store} />
        <Navbar />
        <div className='App-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer store={props.store} />}></Route>
            <Route path='/dialogs' element={<DialogsContainer store={props.store} />}></Route>
            <Route path='/users' element={<UsersContainer store={props.store} />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/news' element={<News onChange={handleSliderChange} sliderValue={sliderValue} />}></Route>
            <Route path='/online-shop' element={<OnlineShop />}></Route>
            <Route path='/foodplan' element={<FoodPlan />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div >
  );
}
export default App;
