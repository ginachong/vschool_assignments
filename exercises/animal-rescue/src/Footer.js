import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <div className="footer">
      <SocialIcon className="social" url="https://twitter.com/ginachongblog" />
      <SocialIcon className="social" url="https://www.facebook.com/GinaChongBlog/" />
      <SocialIcon className="social" url="https://www.instagram.com/gina.chong/" />
    </div>
  )
}

