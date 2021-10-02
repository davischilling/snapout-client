import React, { useContext, useState } from 'react';
import {
  PageContent
} from '../components';
import { AppContext } from '../contexts/app-cotext';

export const AboutSection = React.memo(() => {

  const { data } = useContext(AppContext)
  const section = data.sections.find(section => {
    return section.entityName === 'paragraphs'
  })
  const [sectionTitle] = useState<string | undefined>(section?.sectionTitle)

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
              <h2>{sectionTitle}</h2>
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
})

// export default AboutSection