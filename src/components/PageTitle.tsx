import React from 'react'

type props = {
  title: string
  subtitle?: string
  style: string
  pageTitle: string
}

export const PageTitle = ({ title, subtitle, style, pageTitle }: props) =>
<div className={`page-title page-title-style-${style} page-title-${pageTitle}`}>
  <div className="container">
      <div className="row">
          <div className="col-md-12">
              <div className="pt-heading triggerAnimation animated" data-animate="fadeInUp">
                  {
                    title && <h1>{title}</h1>
                  }
                  {
                    subtitle && <span style={{ color: 'white' }}>{subtitle}</span>
                  }
              </div>
          </div>
      </div>
  </div>
</div>