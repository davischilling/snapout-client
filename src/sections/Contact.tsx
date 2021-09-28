import React, { useContext, useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import { CustomBackground, PageContent } from '../components'
import { AppContext } from '../contexts/app-cotext'
import { ContactType } from '../interfaces'

const ContactSection = () => {

  const { data } = useContext(AppContext)
  const [sectionTitle, setSectionTitle] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (data.sections.length > 0) {
      data.sections.find(section => {
        if (section.entityName === 'contacts') {
          setSectionTitle(section.sectionTitle)
        }
      })
    }
  }, [data.sections])

  if (Object.keys(data.contacts).length === 0) {
      return <div id="contact">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <PageContent>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Loader
                          type="Puff"
                          color="#e21f2f"
                          height={80}
                          width={80}
                      />
                      </div>
                  </PageContent>
              </div>
  }

  const contact: ContactType = data.contacts[0]
  return (
    <div id="contact">
      <CustomBackground img={"bkg-img02"}/>
      <PageContent>
        <div className="col-md-12 mb-0">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>{sectionTitle ? sectionTitle : ''}</h2>
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
}

export default ContactSection