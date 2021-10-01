import React, { useContext, useState } from 'react';
import {
    PageContent, TeamMember
} from '../components';
import { AppContext } from '../contexts/app-cotext';

export const BandMembersSection = () => {

    const { data } = useContext(AppContext)
    const section = data.sections.find(section => {
        return section.entityName === 'members'
      })
      const [sectionTitle] = useState<string | undefined>(section?.sectionTitle)

    return (
        <div id="members">
            <br/>
            <br/>
            <br/>
            <br/>
            <PageContent>
                <div className="col-md-12 centered clearfix mb-0">
                    <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                        <h2>{sectionTitle}</h2>
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