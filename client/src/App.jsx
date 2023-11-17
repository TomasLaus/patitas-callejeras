import DonationForm from "./components/DonationForm/DonationForm"
import './App.css'
import { useRef } from "react";

function App() {

    const scollToRef = useRef();

  return (
    <>
    <main>

    {/* <!-- ----------------------------------------NAVBAR-----------------------------------------------------> */}
    <nav className="nav nav_top">
        <div className="logo">
            <p className="logo-title">PATITAS CALLEJERAS 🐕</p>
        </div>
        <div className="nav_side">
            <a href="#">INICIO</a>
            <a href="#">NOSOTROS</a>
            <a href="#">DONAR</a>
            <a href="#">CONTACTO</a>
        </div>
    </nav>
    {/* <!-- --------------------------------------------MAIN-----------------------------------------------------------> */}
    <div className="main">
        <div className="main_content">
            <h2>“Dar no es sólo hacer un donativo. Se trata de marcar la diferencia.”
                <br/>
                <span>Echar una mano a los perros que lo NECESITAN!</span>
            </h2>
            <div className="btn" onClick={() => scollToRef.current.scrollIntoView()}>
                <a>DONAR</a>
            </div>
        </div>
    </div>
    {/* <!-- --------------------------------------------SIDE-----------------------------------------------------------> */}
    <div className="side">
        <div className="left">
            <img src="https://th.bing.com/th/id/R.f8be63b1660f3a548195a6e0ba537488?rik=IDRc5wvbD945Dg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fGolden-retriever-dogs-high-definition-wallpapers.jpg&ehk=%2fML5f5zO3erL%2bIZ7z%2flfYR4XEwFFCrtV8p1kVW1PXoo%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        <div className="right">
            <h2>AYUDA A UN PERRO HOY</h2>
            <p>
                Patitas Callejeras es una organización sin fines de lucro que se dedica a rescatar perros abandonados de la calle, curarlos y buscarles hogares amorosos. La organización también trabaja para educar a la comunidad sobre la importancia de cuidar y proteger a los perros. El objetivo final de "Patitas Callejeras" es ver a cada perro rescatado alcanzar su máximo potencial y vivir una vida feliz y saludable 
            </p>
            <div className="side_btn">
                <button onClick={() => scollToRef.current.scrollIntoView()}>UNETE A LA CAUSA</button>
            </div>
        </div>

    </div>
    {/* <!-- --------------------------------------------HOW WE HELP---------------------------------------------------------> */}
    <div className="product">
        <h2>COMO AYUDAMOS</h2>
        <div className="product_container">

            <div className="item">
                <div className="item_img">
                    <img src="https://th.bing.com/th/id/OIP._FNk2B0kKcBsKQ5i5ws5eQHaE7?pid=ImgDet&rs=1"/>
                </div>
                <div className="item_content">
                    <h3>Comida y agua pura</h3><br/>
                    <p>Proporcionamos a los perros rescatados de la calle las necesidades básicas como comida y agua pura.</p>
                    <br/><br/><br/>
                </div>
            </div>
            <div className="item">
                <div className="item_img">
                    <img src="https://th.bing.com/th/id/OIP.S5ySzmEc7lwRHYVwvjmi0gHaFj?pid=ImgDet&rs=1"/>
                </div>
                <div className="item_content">
                    <h3>Atención médica</h3><br/>
                    <p>Los perros rescatados de la calle a menudo sufren de lesiones, enfermedades y desnutrición.</p>
                    <br/><br/><br/>
                </div>
            </div>
            <div className="item">
                <div className="item_img">
                    <img src="https://th.bing.com/th/id/R.27e81ac8e999bee4f6a0386160cf8389?rik=CDUbj0BdGdHsgw&riu=http%3a%2f%2fbestfamilypets.com%2fwp-content%2fuploads%2f2016%2f03%2fdog-health.jpg&ehk=kXDuA43DlPjL5qSz4yMgItjyHSW6C4HRTDGscaqt5Z0%3d&risl=&pid=ImgRaw&r=0"/>
                </div>
                <div className="item_content">
                    <h3>Hogares temporales</h3><br/>
                    <p>Después de recibir atención médica, los perros rescatados necesitan un hogar temporal donde puedan recuperarse y recibir amor y cuidado.</p>
                    <br/><br/><br/>
                </div>
            </div>
    </div>

            
    </div>
    {/* <!-- --------------------------------------------donar--------------------------------------------------------> */}

    <div className="donation_content" id='donation_section'>
        <h2 ref={scollToRef}>Donar croquetas 🍪</h2>
        <DonationForm/>
    </div>




    <hr/>

    </main>

    </>
  )
}

export default App
