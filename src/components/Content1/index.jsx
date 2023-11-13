import React from "react";
import logoimg from "../../assets/mercedes.png";
import "./style.css";
import {Link} from "react-router-dom" ;

const Content1 = () => {
    return (
        <div class="hero-section">
        <div class="container-bg">
     </div>
     <div class = "img-car">
        <div class= "bg">

        </div>
        <div class="img">
        <img src={logoimg} />
        </div>

     </div>
     <p class="sewa-rental-mobil">
        Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
    </p>
    <p class="selamat-datang">
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap 
        melayani kebutuhanmu untuk sewa mobil selama 24 jam.
    </p>
    <Link to={"/carsearch"}>
   <button class = "button">Mulai Sewa Mobil</button>
    </Link>
</div> 


        
    );
};

export default Content1;
