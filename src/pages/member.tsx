import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  // CustomBackground,
  PageContent,
  PageTitle
} from '../components'
import { MemberType } from '../interfaces'
import api from '../services/api'

export const Member = () => {

  const location = useLocation();
  const [member, setMember] = useState<MemberType | undefined>()
  useEffect(() => {
    fetchMember()
  }, [])

  const fetchMember = async () => {
    try {
      const id = location.pathname.split('-')[2]
      const { data } = await api.get(`/members/${id}`)
      setMember(data);
      console.log(data);

    } catch(err) {
      console.log(err);
    }
  }

  if (!member) {
    return (
      <></>
    )
  }

  const { name, role, memberPageInfo } = member

  return (
    <>
    {
      name && role && memberPageInfo && (
        <div>
          <PageTitle
            title={name}
            subtitle={role}
            style={"02"}
            pageTitle={memberPageInfo.pageTitlePicture}
          />
          <PageContent>
            <div className="col-md-2 hidden-xs hidden-sm">
            </div>
            <div className="col-md-8 centered">
                <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                    <h2>{memberPageInfo.title}</h2>
                </div>
                {
                  memberPageInfo.paragraphs.map(p => (
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
                  <h2>{memberPageInfo.socialsPhrase}</h2>
              </div>
            </div>
            <div className="col-md-12 centered">
              <ul className="social-links filled-circles">
                {
                  memberPageInfo.socials!.map(social => (
                    <li key={social.id}><a href={social.socialUrl} className="triggerAnimation animated" data-animate="fadeInUp"><i className={`fa fa-${social.socialType.toLowerCase()}`}></i></a></li>
                  ))
                }
              </ul>
            </div>
          </PageContent>

        </div>
      )
    }
    </>
  )
}