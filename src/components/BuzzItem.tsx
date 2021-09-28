import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type props = {
  url: string
  img: string
  authorUrl: string
  authorName: string
  categoryUrl: string
  categoryName: string
  date: string
  eventUrl: string
  eventName: string
}

export const BuzzItem = ({
  url,
  img,
  authorUrl,
  authorName,
  categoryUrl,
  categoryName,
  date,
  eventUrl,
  eventName
}: props) =>
  <div className="owl-item">
    <div className="latest-post-item clearfix">
        <div className="post-container clearfix">
            <div className="post-media">
                <a href={url}>
                    <LazyLoadImage
                      alt={"Post media"}
                      width={360}
                      height={252}
                      src={img}
                    />
                    {/* <img src={img} alt="Musician HTML template for music industry - musicians, bands and music blogs"/> */}
                </a>
            </div>

            <div className="post-body">
                <ul className="post-meta">
                    <li className="post-author">By: <a href={authorUrl}>{authorName}</a></li>
                    <li className="post-category"><a href={categoryUrl}>{categoryName}</a></li>
                    <li className="post-date">{date}</li>
                </ul>
                <h3><a href={eventUrl}>{eventName}</a></h3>
            </div>
        </div>
    </div>
  </div>