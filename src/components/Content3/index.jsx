import React from "react";
import logoimg1 from "../../assets/rate.png";
import logoimg2 from "../../assets/star-1-8wB.png";
import logoimg3 from "../../assets/star-2.png";
import logoimg4 from "../../assets/star-3-aSM.png";
import logoimg5 from "../../assets/star-4-ag9.png";
import logoimg6 from "../../assets/star-5-uoX.png";
import logoimg7 from "../../assets/left-button.png";
import logoimg8 from "../../assets/right-button.png";
import "./style.css";
import {Link} from "react-router-dom" ;

const Content3 = () => {
    return (
        <div class="testimonial-1">
        <div class="auto-testi">
            <p class="testimonial-1-1">Testimonial</p>
            <p class="berbagai-review">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div class="list-testi">
            <div class="list-testi-1">
                <div class="list-testi-text">
                <img src={logoimg1} />
                    {/* <img src="asset/rate.png" alt=""> */}
                    <p class="lorem">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="john">John Dee 32, Bromo</p>
                </div>
                <div class="list-img"></div>
            </div>
            <div class="list-testi-2">
                <div class="img-list-testi-2"></div>
                <div class="list-img-2">
                    <div class="rate">
                    <img  class="star-1" src={logoimg2} />
                    <img  class="star-2" src={logoimg3} />
                    <img  class="star-3" src={logoimg4} />
                    <img  class="star-4" src={logoimg5} />
                    <img  class="star-5" src={logoimg6} />
                        {/* <img class="star-1" src="asset/star-1-8wB.png" alt="">
                        <img class="star-2" src="asset/star-2.png" alt="">
                        <img class="star-3" src="asset/star-3-aSM.png" alt="">
                        <img class="star-4" src="asset/star-4-ag9.png" alt="">
                        <img class="star-5" src="asset/star-5-uoX.png" alt=""> */}
                    </div>
                    <p class="lorem-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="john-2">John Dee 32, Bromo</p>
                </div>
            </div>
            <div class="list-testi-3">
                <div class="img-list-testi"></div>
                <div class="list-testi-text2">
                    <div class="rate-2">
                    <img  class="star-1-1" src={logoimg2} />
                    <img  class="star-1-2" src={logoimg3} />
                    <img  class="star-1-3" src={logoimg4} />
                    <img  class="star-1-4" src={logoimg5} />
                    <img  class="star-1-5" src={logoimg6} />
                        {/* <img class="star-1-1" src="asset/star-1.png" alt="">
                        <img class="star-1-2" src="asset/star-2-1yB.png" alt="">
                        <img class="star-1-3" src="asset/star-3.png" alt="">
                        <img class="star-1-4" src="asset/star-4.png" alt="">
                        <img class="star-1-5" src="asset/star-5.png" alt=""> */}
                    </div>
                    <p class="lorem-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                         consectetur adipiscing elit, sed do eiusmod”</p>
                    <p class="john-3"> John Dee 32, Bromo</p>
                </div>
            </div>
        </div>
        <div class="button-carousel">
        <img  class="left-button" src={logoimg7} />
        <img  class="right-button" src={logoimg8} />
            {/* <img class="left-button" src="asset/left-button.png" alt="">
            <img class="right-button" src="asset/right-button.png" alt=""> */}
        </div>
    </div>
    );
};
export default Content3;