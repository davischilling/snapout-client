import React from 'react'

type props = {
  title: string
  subtitle?: string
  pageStyle: string
  pageTitle: string
}

export const PageTitle = ({ title, subtitle, pageStyle, pageTitle }: props) =>
<div className={`page-title page-title-style-${pageStyle} page-title-${pageTitle}`}>
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