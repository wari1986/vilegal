import React from "react"

export default function SocialNetworkIcons() {
  return (
    <section>
      <div>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=59172712940"
          rel="noreferrer"
        >
          <i className="fa fab fa-whatsapp fa-4x"></i>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.facebook.com/katze.bolivia"
          rel="noreferrer"
        >
          <i className="fa fab fa-facebook fa-4x"></i>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.instagram.com/katze.bolivia/"
          rel="noreferrer"
        >
          <i className="fa fab fa-instagram fa-4x"></i>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="mailto:katze.bolivia@gmail.com"
          rel="noreferrer"
        >
          <i className="fa fab fa-envelope fa-4x"></i>
        </a>
      </div>
    </section>
  )
}
