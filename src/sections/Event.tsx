import React, { useContext, useState } from 'react'
import {
    CustomBackground, Event,
    // PageBtn,
    PageContent,
    SectionTitle
} from '../components'
import { AppContext } from '../contexts/app-cotext'
import { EventType } from '../interfaces'

export const EventSection = React.memo(() => {

    const { data } = useContext(AppContext)
    const section = data.sections.find(section => {
        return section.entityName === 'events'
      })
      const [sectionTitle] = useState<string | undefined>(section?.sectionTitle)

    return (
        <div id="events">
            <CustomBackground img={"bkg-img01"} />
            <PageContent
            pageContentClasses={"custom-background"}
            rowClasses={"mb-80"}
            // pageBtn={<PageBtn url={"#"} text={"View all dates"} />}
            >
            <SectionTitle title={sectionTitle ?? ''} />
            <div className="col-md-12">
                <div className="pi-events events-style-02">
                    {
                        data.events?.map(({
                            id,
                            weekDay,
                            dayMonth,
                            city,
                            local
                        }: EventType) => (
                            <Event
                                key={id}
                                subtitle={weekDay}
                                date={dayMonth}
                                locationSubtitle={city}
                                locationUrl={"#"}
                                locationText={local}
                                tickets={[
                                    { name: "Fan club", isSoldOut: true, ticketUrl: "" },
                                    { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
                                    { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
                                ]}
                            />
                        ))
                    }
                </div>
            </div>
            </PageContent>
        </div>
    )
})