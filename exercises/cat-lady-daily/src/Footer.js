import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {withData} from "./DataProvider"
import {withRouter} from "react-router-dom"

function Footer(props) {
  return (
    <div className={props.location.pathname === "/" ? "homeFooter" : props.location.pathname === "/tictactoe" ? "gameFooter" : "footer"}>
      <SocialIcon className="social" url="https://twitter.com/ginachongblog" />
      <SocialIcon className="social" url="https://www.facebook.com/GinaChongBlog/" />
      <SocialIcon className="social" url="https://www.instagram.com/gina.chong/" />
    </div>
  )
}

export default withRouter(withData(Footer));