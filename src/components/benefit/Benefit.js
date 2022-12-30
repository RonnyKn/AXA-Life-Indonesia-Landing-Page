import "./Benefit.css"
import React from "react"
import icon1 from "../../assets/icon_1.png"
import icon2 from "../../assets/icon_2.png"
import icon3 from "../../assets/icon_3.png"
import icon4 from "../../assets/icon_4.png"
import icon5 from "../../assets/icon_5.png"
import icon6 from "../../assets/icon_6.png"

const Benefit = () => {
  return (
    <section className="benefit">
      <div className="container">
        <h1>
          Keuntungan mendaftar
          <span className="text-blue"> AXA Life Indonesia </span> di Pilihkartu
        </h1>
        <div className="benefit-container">
          <div className="benefit-column1">
            <div className="benefit1">
              <p>
                Diberikan gratis secara cuma-cuma tanpa premi PREMI:RP 0
                (NOLRUPIAH)
              </p>

              <div className="icon">
                <img src={icon1} alt="icon1" />
              </div>
            </div>
            <div className="benefit1">
              <p>
                Santunan meninggal dunia akibat kecelakaan sebesar Rp
                25.000.000,- (dua puluh lima juat rupiah).
              </p>
              <div className="icon">
                <img src={icon2} alt="icon4" />
              </div>
            </div>
            <div className="benefit1">
              <p>
                Perlindungan Asuransi GRATIS akan diberikan kepada pemegang
                kartu kredit yang mendaftar program AXA Care Protection melalui
                pilihkartu.com
              </p>
              <div className="icon">
                <img src={icon3} alt="icon4" />
              </div>
            </div>
          </div>

          <div className="benefit-column2">
            <div className="benefit1">
              <div className="icon">
                <img src={icon4} alt="icon4" />
              </div>
              <p>
                Pendaftar yang lolos verifikasi dari Tim AXA berhak mendapat
                perlindungan Asuransi Kecelakaan diri selama 3 bulan.
              </p>
            </div>
            <div className="benefit1">
              <div className="icon">
                <img src={icon5} alt="icon4" />
              </div>
              <p>
                Santunan meninggal dunia akibat kecelakaan sebesar Rp
                25.000.000,- (dua puluh lima juat rupiah).
              </p>
            </div>
            <div className="benefit1">
              <div className="icon">
                <img src={icon6} alt="icon4" />
              </div>
              <p>
                Perlindungan Asuransi GRATIS akan diberikan kepada pemegang
                kartu kredit yang mendaftar program AXA Care Protection melalui
                pilihkartu.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit
