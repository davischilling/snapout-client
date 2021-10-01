import React, { useContext } from 'react';
import Loader from "react-loader-spinner";
import { PageContent } from '../components';
import { AppContext } from '../contexts';
import {
  AboutSection,
  BandMembersSection, ContactSection, EventSection, MasterSlider, VideoGridSection
} from '../sections';


export const Main = () => {
  const { loading } = useContext(AppContext)

  return (
    <>
      <MasterSlider />
      {
        loading === false ? (
          <>
            <AboutSection />
            <BandMembersSection />
            <EventSection />
            <VideoGridSection />
            <ContactSection />
          </>
        ) : (
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
        )
      }
    </>
  )
}