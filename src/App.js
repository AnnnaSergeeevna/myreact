
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
import Loader from './Components/Loader/Loader.js';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import CanvasContainer from "../src/Components/Canvas/CanvasContainer";


const App = (props) => {
  // const [sliderValue, setSliderValue] = useState(0);

  // const handleSliderChange = (value) => {
  //   setSliderValue(value);
  // };
  return (
    <div className='App'>
      <div className='App-wrapper'>
        <HeaderContainer store={props.store} />
        <Navbar />
        <div className='App-wrapper-content'>
          <Routes>
            <Route path='/about/:userId?' element={<ProfileContainer store={props.store} />}></Route>
            <Route path='/dialogs' element={<DialogsContainer store={props.store} />}></Route>
            <Route path='/animation' element={<Loader />}></Route>
            <Route path='/users' element={<UsersContainer store={props.store} />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/online-shop' element={<OnlineShop />}></Route>
            <Route path='/tictactoe' element={<CanvasContainer />}></Route>
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
