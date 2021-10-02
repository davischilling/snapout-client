import React, { useContext, useState } from 'react'
import { ReactYouTubeLite } from 'react-youtube-lite'
import {
    PageContent, PageTitle
} from '../components'
import { AppContext } from '../contexts/app-cotext'
import { MediaType } from '../interfaces'


export const VideoGridSection = React.memo(() => {
    const { data } = useContext(AppContext)
    const section = data.sections.find(section => {
        return section.entityName === 'medias'
      })
      const [sectionTitle] = useState<string | undefined>(section?.sectionTitle)

    return (
        <div id="media">
            <br/>
            <br/>
            <PageTitle
                title={sectionTitle ?? ''}
                pageStyle={"01"}
                pageTitle={"01"}
            />
            <PageContent>
            {
                data.medias?.map(({
                    id,
                    youtubeUrlId,
                    videoTitle
                }: MediaType) => (
                    <div className="col-md-6 col-xs-12 mb-0" key={id} style={{
                        marginBottom: 20, paddingBottom: 30
                    }}>
                        <div className="video-item">
                            <div className="video-media">
                                <div className="yt-lite">
                                    <ReactYouTubeLite
                                        url={`https://www.youtube.com/embed/${youtubeUrlId}`}
                                        title={videoTitle}
                                    />
                                </div>

                            </div>
                            <h2>{videoTitle}</h2>
                        </div>
                    </div>
                ))
            }
            </PageContent>
        </div>
    )
})