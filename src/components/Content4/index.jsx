import React from "react";
import logoimg1 from "../../assets/fi-chevron-down-MTf.png";
import logoimg2 from "../../assets/fi-chevron-down-ErM.png";
import logoimg3 from "../../assets/fi-chevron-down-K6Z.png";
import logoimg4 from "../../assets/fi-chevron-down-o5j.png";
import logoimg5 from "../../assets/fi-chevron-down-jS9.png";
import "./style.css";
import {Link} from "react-router-dom" ;

const Content4 = () => {
    return(
<div class="auto-group-2" >
        <div class="banner">
            <p class="sewa-mobil-lokasimu">Sewa Mobil di (Lokasimu) Sekarang</p>
            <p class="lorem-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div class="button-mulai-sewa-mobil">Mulai Sewa Mobil</div>
            </div>
        <div class="faq-1">
            <div class="text-faq">
                <p class="frequently">Frequently Asked Question</p>
                <p class="lorem-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="list-faq">
                <div class="list-faq-1">
                    <p>Apa saja syarat yang dibutuhkan?</p>
                    <img src={logoimg1} />
                    {/* <img src="asset/fi-chevron-down-MTf.png" alt=""> */}
                </div>
                <div class="list-faq-2">
                    <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                    <img src={logoimg2} />
                    {/* <img src="asset/fi-chevron-down-ErM.png" alt=""> */}
                </div>
                <div class="list-faq-3">
                    <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                    <img src={logoimg3} />
                    {/* <img src="asset/fi-chevron-down-K6Z.png" alt=""> */}
                </div>
                <div class="list-faq-4">
                    <p>Apakah Ada biaya antar-jemput?</p>
                    <img src={logoimg4} />
                    {/* <img src="asset/fi-chevron-down-o5j.png" alt=""> */}
                </div>
                <div class="list-faq-5">
                    <p>Bagaimana jika terjadi kecelakaan</p>
                    <img src={logoimg5} />
                    {/* <img src="asset/fi-chevron-down-jS9.png" alt=""> */}
                </div>
            </div>
        </div>
    </div>
    )
    }

    export default Content4;