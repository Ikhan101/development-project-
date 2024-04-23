import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";


const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
      <h1 className='Retaillogo'>GrocerySync</h1>
        {

            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>£{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            {/* <span>Total Price of your Cart</span>
            <span>Pounds - £{price}</span> */}

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <a className='retaillogoa' href="https://www.tesco.com/" target="_blank" onClick={() => console.log('Tesco')}>
            <h1 className='Retaillogo'>Tesco</h1>
          </a>
          {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>£{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
             <div className='total'>
            <span>Total Price of Tesco Cart</span>
            <span>Pounds - £{price}</span>

        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <a className='retaillogoa' href="https://www.aldi.co.uk/"  target="_blank"  onClick={()=> console.log( 'Aldi' )}>
            <h1 className='Retaillogo'>ALDI</h1>
          </a>
          {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>£{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
             <div className='total'>
            <span>Total Price of ALDI Cart</span>
            <span>Pounds - £{price}</span>

        </div>
        </div>

    </article>
  )
}

export default Cart
