import React, { useContext, useState } from 'react'
import { CustomBackground, PageContent } from '../components'
import { AppContext } from '../contexts/app-cotext'
import { ContactType } from '../interfaces'

export const ContactSection = React.memo(() => {
  const { data } = useContext(AppContext)
  const section = data.sections.find(section => {
    return section.entityName === 'contacts'
  })
  const [sectionTitle] = useState<string | undefined>(section?.sectionTitle)

  const contact: ContactType = data.contacts[0]
  return (
    <div id="contact">
      <CustomBackground img={"bkg-img02"}/>
      <PageContent>
        <div className="col-md-12 mb-0">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>{sectionTitle}</h2>
            </div>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
        <div className="col-md-12 col-sm-12 centered">
            <h3>{contact?.message}</h3>
            <ul className="default-list">
                <li>{contact?.email}</li>
                <li><br /></li>
                <li>Manager di eventi: {contact?.eventManager}</li>
                <li>telefono: {contact?.phone}</li>
            </ul>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
      </PageContent>
    </div>
  )
})