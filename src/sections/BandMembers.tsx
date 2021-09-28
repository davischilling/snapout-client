import React, { useContext, useEffect, useState } from 'react'
import {
  PageContent, TeamMember
} from '../components'
import Loader from "react-loader-spinner";
import { AppContext } from '../contexts/app-cotext'

const BandMembersSection = () => {

    const { data } = useContext(AppContext)
    const [sectionTitle, setSectionTitle] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (data.sections.length > 0) {
          data.sections.find(section => {
            if (section.entityName === 'members') {
              setSectionTitle(section.sectionTitle)
            }
          })
        }
    }, [data.sections])

    if (Object.keys(data.members).length === 0) {
        return <div id="members">
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
        <div id="members">
            <br/>
            <br/>
            <br/>
            <br/>
            <PageContent>
                <div className="col-md-12 centered clearfix mb-0">
                    <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                        <h2>{sectionTitle ? sectionTitle : ''}</h2>
                    </div>
                </div>
                {
                    data.members?.map(member => (
                        <TeamMember
                            key={member.id}
                            member={member}
                        />
                    ))
                }
            </PageContent>
        </div>
    )
}

export default BandMembersSection