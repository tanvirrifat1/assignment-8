import React, { useState } from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const [breaks, setBreak] = useState([])

    let total = 0
    for (const product of cart) {
        total = total + product.time
    }

    return (
        <div>
            <div className='menu'>
                <h1>Tanvir Ahmed Rifat</h1>
                <p>Web-Developer</p>
                <div className='menu-info'>
                    <h5>Weight: 57</h5>
                    <h5>Height: 5.4</h5>
                    <h5>Age: 20</h5>
                </div>
            </div>
            <div>
                <h2 className='break'>Add A Break</h2>
                <div className='btn-timer'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
            <div>
                <h2 className='details'>Exercise Details</h2>

                <h5 className='menu-timer'>Exercise time : {total}</h5>
                <h5 className='menu-timer2'>Break time :</h5>

            </div>
            <p></p>
            <div >
                <button className='button'>
                    <p>Complete</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;