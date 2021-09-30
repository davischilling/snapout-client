import React, { useContext, useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import {
  PageContent, PageTitle
} from '../components'
import { AppContext } from '../contexts/app-cotext'
import { MediaType } from '../interfaces'

import { ReactYouTubeLite } from 'react-youtube-lite';

const VideoGridSection = () => {

    const { data } = useContext(AppContext)
    const [sectionTitle, setSectionTitle] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (data.sections.length > 0) {
            for (const section of data.sections) {
                if (section.entityName === 'medias') {
                    setSectionTitle(section.sectionTitle)
                }
            }
        }
    }, [data.sections])

    if (Object.keys(data.medias).length === 0) {
        return <div id="media">
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
        <div id="media">
            <br/>
            <br/>
            <PageTitle
                title={sectionTitle ? sectionTitle : ''}
                style={"01"}
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
}

export default VideoGridSection