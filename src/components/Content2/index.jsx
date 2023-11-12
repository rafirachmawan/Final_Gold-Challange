import React from "react";
import logoimg1 from "../../assets/mask-group.png";
import logoimg2 from "../../assets/group-53.png"
import logoimg3 from "../../assets/iconcomplete.png"
import logoimg4 from "../../assets/iconprice.png"
import logoimg5 from "../../assets/icon24hrs.png"
import logoimg6 from "../../assets/iconprofessional.png"
import "./style.css";
import {Link} from "react-router-dom" ;

const Content2 = () => {
    return (
        <div class="group-1">
        <div class="our-services-1">
            <div class="img-services-1">
                <div class="elipse-1"></div>
                <div class="elipse-2"></div>
                <div class="elipse-3"></div>
                <div class="group-1-1">
                    <div class="elipse-4"></div>
                    <img src={logoimg1} />
                    <div class="girl"></div>
                </div>
            </div>
    
            <div class="desc">
                <p class="best-cars">Best Car Rental for any kind of trip in (Lokasimu)!</p>
            <div class="frame">
                <p class="sewa">
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                </p>
                <div class="frame-1">
                    <div class="frame-2">
                    <img src={logoimg2} />
                        {/* <img src="asset/group-53.png" alt=""> */}
                        <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </div>
                    <div class="auto-group">
                        <div class="group-2">
                        <img src={logoimg2} />
                            {/* <img src="asset/group-53.png" alt=""> */}
                            <p>
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </p>
                        </div>
                        <div class="group-3">
                        <img src={logoimg2} />
                            {/* <img src="asset/group-53.png" alt=""> */}
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>
                        <div class="group-4">
                        <img src={logoimg2} />
                            {/* <img src="asset/group-53.png" alt=""> */}
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>
                        <div class="group-5">
                        <img src={logoimg2} />
                            {/* <img src="asset/group-53.png" alt=""> */}
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
    
        </div>
        <div class="why-us-1">
            <div class="auto-group-1">
                <p class="why-us-1-1">Why Us?</p>
                <p class="why-us-1-2">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div class="list-item">
                <div class="list-item-1">
                <img src={logoimg3} />
                    {/* <img src="asset/iconcomplete.png" alt=""> */}
                    <p class="mobile-lengkap">Mobil Lengkap</p>
                    <p class="tersedia-banyak">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div class="list-item-2">
                <img src={logoimg4} />
                    {/* <img src="asset/iconprice.png" alt=""> */}
                    <p class="harga-murah">Harga Murah</p>
                    <p class="harga-murah-dan">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
                <div class="list-item-3">
                <img src={logoimg5} />
                    {/* <img src="asset/icon24hrs.png" alt=""> */}
                    <p class="layanan-24-jam">Layanan 24 Jam</p>
                    <p class="siap-melayani">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
                <div class="list-item-4">
                <img src={logoimg6} />
                    {/* <img src="asset/iconprofessional.png" alt=""> */}
                    <p class="sopir-profesional">Sopir Profesional</p>
                    <p class="sopir-yang-profesional">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
            </div>
        </div>
    </div>
    
    
   
    );
};
export default Content2;