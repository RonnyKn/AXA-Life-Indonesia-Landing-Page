import "./Alur.css"
import React from "react"
import alurImg from "../../assets/langkah.png"

const Alur = () => {
  return (
    <section className="alur">
      <div className="container alur-container">
        <h1>
          4 langkah mudah mendapatkan Asuransi AXA Life Indonesia di Pilihkartu
        </h1>
        <div className="alur-step">
          <img src={alurImg} alt="langkah.png" />
        </div>
      </div>
    </section>
  )
}

export default Alur
