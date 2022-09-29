import React, { useState } from 'react';
import './Cart.css'
import Swal from 'sweetalert2'

const Cart = ({ cart }) => {
    const [breaks, setBreak] = useState([])



    const handleClick = (id) => {
        const newCart = [...breaks, id]
        setBreak(newCart)
    }


    // let amount = 0;
    // for (const pro of breaks) {
    //     amount = amount + pro.breaks
    // }

    let total = 0
    for (const product of cart) {
        total = total + product.time
    }
    const handlerButton = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
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
                    <button onClick={handleClick}>10s</button>
                    <button onClick={handleClick}>20s</button>
                    <button onClick={handleClick}>30s</button>
                    <button onClick={handleClick}>40s</button>
                </div>
            </div>
            <div>
                <h2 className='details'>Exercise Details</h2>

                <h5 className='menu-timer'>Exercise time : {total}</h5>
                <h5 className='menu-timer2'>Break time :{breaks.length} </h5>

            </div>
            <p></p>
            <div >
                <button onClick={handlerButton} className='button'>
                    <p>Complete</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;