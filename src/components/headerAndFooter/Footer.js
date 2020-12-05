import React from 'react'

export default function Footer() {
  const FOOTER_STYLE = {
    fontSize: ".75rem",
    position: "relative",
    marginTop: "auto",
  }

  const FOOTER_TEXT = {
    paddingTop: "15px",
    paddingBottom: "15px",
  }

  const LINK_BAR = {
    width: "100%",
    height: "40px",
    paddingTop: "10px",
    postion: "absolute",
    textAlign: "center",
    bottom: "0px",
    backgroundColor: "#3f484f",
  }


  return (
    <div style={FOOTER_STYLE} className="bg-dark text-white-50">
      <div style={FOOTER_TEXT} className="container my-1">
        <i>“Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.”</i>
        <p className="mb-0">- Arnold Schwarzenegger</p> 
      </div>

      <div style={LINK_BAR} >
        <a className="pt-5 text-white-50" href="http://www.oscarchavez.com" target="_blank" rel="noreferrer">www.OscarChavez.com</a>
      </div>
    </div>
  )
}
