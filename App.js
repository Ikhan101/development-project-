import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Tescoamazon from './components/Tescoamazon';
import Aldiamazon from './components/Aldiamazon';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;

    // Check if the item is already present in the cart
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const updatedCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, amount: product.amount + d };
      }
      return product;
    });

    setCart(updatedCart);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show && <Tescoamazon handleClick={handleClick} />}
      {show && <Aldiamazon handleClick={handleClick} />}
      {show && <Amazon handleClick={handleClick} />}
      {!show && <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
      {warning && <div className='warning'>Item is already added to your cart</div>}
    </React.Fragment>
  );
};

export default App;




// import React , {useState} from 'react';
// import Navbar from './components/Navbar';
// import Tescoamazon from './components/Tescoamazon';
// import Aldiamazon from './components/Aldiamazon';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import './styles/amazon.css';


// const App = () => {
// 	const [show, setShow] = useState(true);
// 	const [cart , setCart] = useState([]);
// 	const [warning, setWarning] = useState(false);




// 	const handleClick = (item)=>{
// 		let isPresent = false;
// 		cart.forEach((product)=>{
// 			if (item.id === product.id)
// 			isPresent = true;
// 		})
// 		if (isPresent){
// 			setWarning(true);
// 			setTimeout(()=>{
// 				setWarning(false);
// 			}, 2000);
// 			return ;
// 		}
// 		setCart([...cart, item]);
// 	}

// 	const handleChange = (item, d) =>{
// 		let ind = -1;
// 		cart.forEach((data, index)=>{
// 			if (data.id === item.id)
// 				ind = index;
// 		});
// 		const tempArr = cart;
// 		tempArr[ind].amount += d;

// 		if (tempArr[ind].amount === 0)
// 			tempArr[ind].amount = 1;
// 		setCart([...tempArr])
// 	}

//   return (
// 	<React.Fragment>
// 		<Navbar size={cart.length} setShow={setShow} />
// 		{
// 			show ? <Tescoamazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// 		}
//     {
//       show ? <Aldiamazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
//     }
//     {
//       show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
//     }
// 		{
// 			warning && <div className='warning'>Item is already added to your cart</div>
// 		}
// 	</React.Fragment>
//   )
// }

// export default App

