import React from 'react'

type props = {
  url: string
  text: string
}

export const PageBtn = ({ url, text }: props) =>
  <div className="row">
    <div className="col-md-12 centered">
      <a href={url} className="btn btn-center triggerAnimation animated centered" data-animate="fadeInUp">
        <span>
            {text}
        </span>
      </a>
    </div>
  </div>