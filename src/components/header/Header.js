import "./Header.css"
import React from "react"
import slides from "../../assets/slides.png"

const Header = () => {
  return (
    <header className="header">
      <img src={slides} alt="slides" className="header-img" />
    </header>
  )
}

export default Header
