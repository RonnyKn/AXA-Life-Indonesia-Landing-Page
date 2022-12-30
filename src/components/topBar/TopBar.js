import "./TopBar.css"
import React from "react"
import logotop from "../../assets/logo.png"

const TopBar = () => {
  return (
    <section className="topbar">
      <div className="container container-topbar">
        <div className="topbar-logo">
          <img src={logotop} alt="logo" />
        </div>
        <div className="topbar-title">
          <h5>Dapatkan Asuransi Gratis Dari AXA Life Indonesia</h5>
          <h1>UNTUK PEMEGANG KARTU KREDIT</h1>
        </div>
        <div className="topbar-nav">
          <button type="button">kembali ke pilih kartu</button>
        </div>
      </div>
    </section>
  )
}

export default TopBar
