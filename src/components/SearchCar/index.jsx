import React from "react";
// import logoimg from "../../assets/Logo.png";
import "./style.css";
import {Link} from "react-router-dom" ;

const SearchCar = () => {
    return (
        

        
        <div class="frame-1-8Uy">
      <div class="input-369">
        <p class="label-n3j">Nama Mobil</p>
        <div class="input-field-KJZ">Ketik nama/tipe mobil</div>
      </div>
      <div class="input-c2m">
        <p class="label-jt5">Kategori</p>
        <div class="input-field-H8u">
          <div class="auto-group-vnfb-CWm">Masukan Kapasitas Mobil</div>
          <img class="fi-chevron-down-uRB" src="./assets/fi-chevron-down-6Sd.png"/>
        </div>
      </div>
      <div class="input-omT">
        <p class="label-9KX">Harga</p>
        <div class="input-field-V8V">
          <div class="auto-group-jqhs-cU1">Masukan Harga Sewa per Hari</div>
          <img class="fi-chevron-down-KNR" src="./assets/fi-chevron-down-DVB.png"/>
        </div>
      </div>
      <div class="input-csK">
        <p class="label-ZXf">Status</p>
        <div class="input-field-hds">
          <div class="auto-group-i7wh-RZs">Disewa</div>
          <img class="fi-chevron-down-wHK" src="./assets/fi-chevron-down-YNM.png"/>
        </div>
      </div>
      <div class="button-35T">Cari Mobil</div>
    </div>
    

    );
};
export default SearchCar;