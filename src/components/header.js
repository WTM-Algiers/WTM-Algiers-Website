import React from "react"
import NB from "../components/navbar"

const Header = () => (
  <header
    style={{
      background: `white`,
      position: "fixed",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.8rem 1.8rem 0.8rem 1.8rem`,
        boxShadow: "0 2px 6px 0 rgba(0,0,0,.12)",

      }}
    >
      <NB />

    </div>
  </header>
)

export default Header
