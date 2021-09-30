import React from 'react'
import { Link } from "react-router-dom";
import { MemberType } from '../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type props = {
  member: MemberType
}

export const TeamMember = ({
  member
}: props) => {
  const { id, alt, memberUrlPage, image, name, role } = member

  return (
    <div className="col-md-3 col-sm-6 col-xs-12 mb-0 centered">
      <div className="team-member triggerAnimation animated" data-animate="fadeInUp" style={{ marginBottom: 20 }}>
        <Link to={`${memberUrlPage}-${id}`}>
            <LazyLoadImage
              alt={alt}
              width={262}
              height={262}
              src={image}
            />
            {/* <img src={`${image}?size=262x262`} alt={alt} /> */}
            <h2>
              {name}
            </h2>
            <span>{role}</span>
        </Link>
      </div>
    </div>
    )
}