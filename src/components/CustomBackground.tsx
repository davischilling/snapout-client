import React from 'react'

type props = {
  img: string
}

export const CustomBackground = ({ img }: props) =>
  <div className={`page-content custom-background custom-section-padding ${img} mb-130 bkg-border`}>
    <div className="container">
        <div className="row">
        </div>
    </div>
  </div>