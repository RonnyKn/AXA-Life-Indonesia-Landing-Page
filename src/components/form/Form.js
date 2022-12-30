import "./Form.css"
import React from "react"

const Form = () => {
  return (
    <section className="form">
      <div className="container form-container">
        <h1>
          Dapatkan Perlindungan
          <span className="text-blue">AXA Care Protection </span> Sekarang
        </h1>
        <h5>Cukup isi data diri Anda pada form dibawah ini</h5>
        <form className="form-content">
          <div className="form-label">
            <label> Nama Lengkap</label>
            <label> Tanggal Lahir (dd/mm/yy)</label>
            <label> Email</label>
            <label> Nomor Ponsel</label>
            <label>Memiliki Kartu Kredit</label>
          </div>
          <div className="form-input">
            <input type="text" />
            <div className="input-date">
              <input type="date" />
              <input type="date" />
              <input type="date" />
            </div>
            <input type="email" />
            <input type="number" />

            <div className="checkbox">
              <input type="checkbox" defaultChecked />
              <label>VISA</label>
              <input type="checkbox" />
              <label>MASTERCARD</label>
              <input type="checkbox" />
              <label>BCA CARD</label>
              <input type="checkbox" />
              <label>lainya</label>
            </div>

            <div className="form-agreement">
              <button>
                <span className="text-blue ">
                  Syarat dan ketentuan Aplikasi
                </span>
              </button>
              <div className="agreement-check">
                <input type="checkbox" className="check-1" />
                <label>
                  Saya mengetahui dan menyetujui syarat dan ketentuan diatas
                  serta bersedia dihubungi oleh PT. AXA Life Indonesia untuk
                  mendapatkan penjelasan tentang produk dan informasi lainnya
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
