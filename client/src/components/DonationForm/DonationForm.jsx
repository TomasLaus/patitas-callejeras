import { useState } from "react"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios'
import '../../App.css'



const DonationForm = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_MP_PUBLIC_KEY
    initMercadoPago(apiKey)

    const [amount, setAmount] = useState(1)
    const [totalAmount, setTotalAmount] = useState(100)

    const [preferenceId, setPreferenceId] = useState(null)

    const handleButtonClick = (amount) => {
        setAmount(amount)
        setTotalAmount(amount * 100) 
    }
    
    const handleInputChange = (e) => {
        setAmount(e.target.value)
        setTotalAmount(e.target.value * 100) 
    }



    
    //MERCADO PAGO FUNCTIONS


    const createPreference = async () => {
        try {
          const response = await fetch('https://patitas-callejeras-back.vercel.app/create_preference', {
            method: 'POST',
            body: JSON.stringify({
              description: 'gracias por los cafecitos',
              price: totalAmount,
              quantity: 1
            })
          });
          const data = await response.json();
          const { id } = data;
          setPreferenceId(id);
        } catch (error) {
          console.log(error);
        }
    };
    

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    }


  return (
    <>

    <div>
        <button type="button" className="donate-button" onClick={() => handleButtonClick(3)}>3 🍪</button>
        <button type="button" className="donate-button" onClick={() => handleButtonClick(5)}>5 🍪</button>
        <button type="button" className="donate-button" onClick={() => handleButtonClick(10)}>10 🍪</button>
    </div>

        <div className="input-container">
            <input type="number" className="donate-input" min={1} value={amount} onChange={handleInputChange} />
            <p className="donate-amount">Donar {amount} {amount == 1 ? 'croqueta por $' : 'croquetas por $'}{totalAmount} 💝 </p>
        </div>

        <div>
            <button className="donate-link" onClick={handleBuy}>Aceptar</button>
            {preferenceId && <Wallet initialization={{preferenceId}} />}
        </div>
    </>
  )
}

export default DonationForm