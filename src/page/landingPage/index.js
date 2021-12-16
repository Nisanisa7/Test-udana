import React from "react";
import { ChatLogo } from "../../assets/icon";
import {
  Analisa,
  Start,
  UMKM,
  KopiCandu,
  MrBig,
  NasiBalap,
  Nyoklat,
  HabaHaus,
  HelloSugar,
} from "../../assets/image";
import { Buttons, CardRetail } from "../../components";

import { StyledPage, BusinessPartner, AboutUs } from "./styled";

const LandingPage = () => {
  return (
    <StyledPage>
      <main id="main-site">
        <div className="banner">
          <div className="container"></div>
        </div>
        <div className="yellow-line"></div>
      </main>
      <div className="how-it-work">
        <div className="container">
          <div className="first-section">
            <div className="title">
              <b>
                Menjadi Investor <br />
                UMKM itu gampang
              </b>
            </div>
            <div className="description">
              Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana
              saja.
            </div>
          </div>
          <div className="second-section">
            <div className="first-step">
              <img src={UMKM} alt="" />
              <div className="item-title">
                <h3>UMKM</h3>
              </div>
              <div className="description-item">
                Temukan usaha yang anda minati pada galeri.
              </div>
            </div>
            <div className="second-step">
              <img src={Analisa} alt="" />
              <div className="item-title">
                <h3>Analisa Bisnis</h3>
              </div>
              <div className="description-item">
                Lakukan analisa profil bisnis dan pengusaha.
              </div>
            </div>
            <div className="thrice-step">
              <img src={Start} alt="" />
              <div className="item-title">
                <h3>Mulai Berinvestasi</h3>
              </div>
              <div className="description-item">
                Menjadi investor startup dengan modal minimal 100.000 Rupiah.
              </div>
            </div>
          </div>
        </div>
      </div>
{/* halo */}
      <div className="container">
      <BusinessPartner className="latest">
          <div className="title">
            <h2>
              <b> Siap Memulai Berbisnis?</b>
            </h2>
          </div>
          <div className="sub-title">
            Tentukan bisnis waralaba pilihan Anda sekarang
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4 column">
              <div className="wrapper-card">
                <CardRetail
                  className="card"
                  header="F&B"
                  name="Rindu Candu Milk Bar"
                  image={KopiCandu}
                  footer=""
                />
              </div>
            </div>
            <div className="col-md-4 column">
              <div className="wrapper-card">
                <CardRetail
                  className="card"
                  header="F&B"
                  name="Mr.Big"
                  image={MrBig}
                  footer=""
                />
              </div>
            </div>
            <div className="col-md-4 column">
              <div className="wrapper-card">
                <CardRetail
                  className="card"
                  header="F&B"
                  name="Nasi Balap"
                  image={NasiBalap}
                  footer=""
                />
              </div>
            </div>
            <div className="col-md-4 column">
              <div className="wrapper-card">
                <CardRetail
                  className="card"
                  header="F&B"
                  name="Nyoklat Teen"
                  image={Nyoklat}
                  footer=""
                />
              </div>
            </div>
            <div className="col-md-4 column">
              <div className="wrapper-card">
                <CardRetail
                  className="card"
                  header="F&B"
                  name="Haba Haus"
                  image={HabaHaus}
                  footer=""
                />
              </div>
            </div>
            <div className="col-md-4 column">
              <div className="wrapper-card">
                <CardRetail
                  className="card"
                  header="F&B"
                  name="Hello Sugar"
                  image={HelloSugar}
                  footer=""
                />
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button>
              {" "}
              <b> Lihat semua </b>
            </button>
          </div>
      </BusinessPartner>
        <AboutUs>
          <div className="plans">
            <div className="section1">
              <label>
                Kami Siap <br />
                Membantu Anda
              </label>
              <p>
                Apabila Anda ingin mengetahui lebih lanjut mengenai Udana.
                Silahkan menghubungi kami
              </p>
            </div>
            <div className="section2">
              <label>
                Kami Siap <br />
                Membantu Anda
              </label>
              <p>
                Apabila Anda ingin mengetahui lebih lanjut mengenai Udana.
                Silahkan menghubungi kami
              </p>
            </div>
            <div className="section3">
              <div className="hidden">
                  empty
              </div>
            </div>
          </div>
        </AboutUs>
      </div>
      <Buttons className="button" color="yellow-rounded">
        <img src={ChatLogo} alt="" />
      </Buttons>
    </StyledPage>
  );
};

export default LandingPage;
