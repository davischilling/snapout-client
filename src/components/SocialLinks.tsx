import React from 'react'

type social = {
  url: string
  icon: string
}

type props = {
  socials: social[]
}

export const SocialLinks = ({
  socials
}: props) =>
  <ul className="social-links">
    {
      socials.map(({ url, icon }: social) => (
        <li key={`${url}-${icon}`}>
            <a target="_blank" rel="noreferrer" href={url} className={icon} style={{ display: 'none' }}>Social link</a>
        </li>
      ))
    }
  </ul>