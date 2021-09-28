import React, { useContext, useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import {
  PageContent
} from '../components';
import { AppContext } from '../contexts/app-cotext';

const AboutSection = () => {

  const { data } = useContext(AppContext)
  const [sectionTitle, setSectionTitle] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (data.sections.length > 0) {
      data.sections.find(section => {
        if (section.entityName === 'paragraphs') {
          setSectionTitle(section.sectionTitle)
        }
      })
    }
  }, [data.sections])

  if (Object.keys(data.paragraphs).length === 0) {
      return <div id="aboutSnapOut">
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

  return (
    <div id="aboutSnapOut">
      <br/>
      <br/>
      <br/>
      <br/>
      <PageContent>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
        <div className="col-md-8 centered">
          <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
              <h2>{sectionTitle ? sectionTitle : ''}</h2>
          </div>
          {
            data.paragraphs?.map(p => (
              <p key={p.id}>
                {
                  p.paragraph
                }
              </p>
            ))
          }
        </div>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
      </PageContent>
    </div>
  )
}

export default AboutSection