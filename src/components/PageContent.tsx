import React, { ReactNode } from 'react'

type props = {
  pageContentClasses?: string
  containerClasses?: string
  rowClasses?: string
  pageBtn?: ReactNode
  children: ReactNode
}

export const PageContent = ({
  pageContentClasses,
  containerClasses,
  rowClasses,
  pageBtn,
  children
}: props) =>
  <div className={`page-content ${pageContentClasses}`}>
    <div className={`container ${containerClasses}`}>
      <div className={`row ${rowClasses}`}>
        {children}
      </div>
      {pageBtn}
    </div>
  </div>