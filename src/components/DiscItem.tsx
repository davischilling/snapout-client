import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type portfolioMeta = {
    url: string
    text: string
}

type props = {
  albumImgUrl: string
  albumImgPath: string
  titleUrl: string
  title: string
  portfoliosMeta: portfolioMeta[]
  audioId: string
  audioUrl: string
}

export const DiscItem = ({
    albumImgUrl,
    albumImgPath,
    titleUrl,
    title,
    portfoliosMeta,
    audioId,
    audioUrl
}: props) =>
  <div className="owl-item">
    <div className="latest-portfolio-item clearfix">
        <div className="portfolio-item-container clearfix">
            <div className="portfolio-img">
                <a href={albumImgUrl}>
                    <LazyLoadImage
                      alt={"Portfolio image"}
                      width={262}
                      height={262}
                      src={albumImgPath}
                    />
                    {/* <img src={albumImgPath} alt="Musician HTML template for music industry - musicians, bands and music blogs"/> */}
                </a>
            </div>
            <h3><a href={titleUrl}>{title}</a></h3>
            <ul className="portfolio-meta">
                {
                    portfoliosMeta.map(({ url, text }: portfolioMeta) => (
                        <li key={`${url}-${text}`}><a href={url}>{text}</a></li>
                    ))
                }
                <li><a href={`#${audioId}`} className="listen-audio-popup-trigger">Listen</a></li>
            </ul>

            <div id={audioId} className="audio-popup mfp-hide">
                <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    src={audioUrl}
                >
                </iframe>
           </div>
        </div>
    </div>
  </div>