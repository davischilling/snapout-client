export type MemberPageTextType = {
  id: number
  paragraph: string
}

export type SocialsType = {
  id: number
  socialUrl: string
  socialType: string
}

export type MemberPageType = {
  pageTitlePicture: string
  title: string
  paragraphs: MemberPageTextType[]
  socialsPhrase: string
  socials: SocialsType[]
}

export type MemberType = {
  id: number
  name: string
  role: string
  image: string
  alt: string
  memberUrlPage: string
  memberPageInfo: MemberPageType
}
