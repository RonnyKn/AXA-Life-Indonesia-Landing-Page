import "./About.css"
import React from "react"

const About = () => {
  return (
    <section className="about">
      <div className="container about-content">
        <h1 className="about-title">
          Tentang <span>Axa Care Protection</span>
        </h1>
        <p>
          gram asuransi gratis AXA Care Protection merupakan program
          perlindungan berupa asuransi kecelakaan dari asuransi AXA Life
          Indonesia. Peserta yang lolos verifikasi akan mendapatkan benefit
          berupa uang pertanggungan bila terjadi kecelakaan yang mengakibatkan
          meninggal dunia.
        </p>
        <div className="about-button">
          <button type="button">
            <strong> DAFTAR SEKARANG JUGA </strong>
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
