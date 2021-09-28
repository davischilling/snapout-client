import React, { lazy, Suspense  } from 'react'

const MasterSlider = lazy(() => import('../sections/MasterSlider'));
const AboutSection = lazy(() => import('../sections/About'));
const BandMembersSection = lazy(() => import('../sections/BandMembers'));
const EventSection = lazy(() => import('../sections/Event'));
const VideoGridSection = lazy(() => import('../sections/VideoGrid'));
const ContactSection = lazy(() => import('../sections/Contact'));

const renderLoader = () => <p>Loading</p>;

export const Main = () => (
  <Suspense fallback={renderLoader()}>
    <MasterSlider />
    <AboutSection />
    <BandMembersSection />
    <EventSection />
    <VideoGridSection />
    <ContactSection />
  </Suspense>
)
