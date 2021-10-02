import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  // CustomBackground,
  PageContent,
  PageTitle
} from '../components'
import { MemberType } from '../interfaces'
import api from '../services/api'
import Loader from "react-loader-spinner";

export const Member = () => {
  const location = useLocation();
  const [member, setMember] = useState<MemberType | undefined>()

  useEffect(() => {
    if (member === undefined) {
      (async () => {
        const id = location.pathname.split('-')[2]
        const { data } = await api.get(`/members/${id}`)
        setMember(data);
      })()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        member !== undefined ? (
          <div>
            <PageTitle
              title={member.name}
              subtitle={member.role}
              pageStyle={"02"}
              pageTitle={member.memberPageInfo.pageTitlePicture}
            />
            <PageContent>
              <div className="col-md-2 hidden-xs hidden-sm">
              </div>
              <div className="col-md-8 centered">
                  <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                      <h2>{member.memberPageInfo.title}</h2>
                  </div>
                  {
                    member.memberPageInfo.paragraphs.map(p => (
                      <p key={p.id}>{p.paragraph}</p>
                    ))
                  }
              </div>
              <div className="col-md-2 hidden-xs hidden-sm">
              </div>
            </PageContent>
            {/* <CustomBackground img={"bkg-img11"} /> */}
            <PageContent>
              <div className="col-md-12 centered">
                <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                    <h2>{member.memberPageInfo.socialsPhrase}</h2>
                </div>
              </div>
              <div className="col-md-12 centered">
                <ul className="social-links filled-circles">
                  {
                    member.memberPageInfo.socials!.map(social => (
                      <li key={social.id}><a href={social.socialUrl} className="triggerAnimation animated" data-animate="fadeInUp"><i className={`fa fa-${social.socialType.toLowerCase()}`}></i></a></li>
                    ))
                  }
                </ul>
              </div>
            </PageContent>

          </div>

          ) : (
            <PageContent>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
              <Loader
                  type="Puff"
                  color="#e21f2f"
                  height={80}
                  width={80}
                />
              </div>
            </PageContent>
        )
      }
    </>
  )
}