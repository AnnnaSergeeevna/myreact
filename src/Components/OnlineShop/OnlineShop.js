import Shop from './Shop.js';
import Header from './Header.jsx';
import classes from '../OnlineShop/CoffeeShop.css';


function CoffeeShop(props) {
  return (
    <div className='body'>
      <Header />
      <Shop />
    </div>

  );
}

export default CoffeeShop;
