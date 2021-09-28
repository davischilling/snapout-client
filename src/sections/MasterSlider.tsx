import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from 'keen-slider/react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import Fader from "../components/Fader";

const MasterSlider = () => {
  const [pause, setPause] = useState(false)
  const [fadeOut, setFadeOut] = useState(true)
  const timer: MutableRefObject<any> = useRef()
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1500,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        setFadeOut(!fadeOut)
        slider.next()
      }
    }, 10000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  const toggleFadeOut = () => {
    setFadeOut(!fadeOut)
  }

  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const isMobileScreen = useMediaPredicate("(max-width: 767px)");
  const isLargeScreen = useMediaPredicate("(min-width: 991px)");

  useEffect(() => {
      setIsMobile(isMobileScreen)
  }, []);

  useEffect(() => {
    setIsMobile(isMobileScreen)
  }, [isMobileScreen, isLargeScreen]);


  return (
    <div id="home">
      {
        isMobile ? (
          <div style={{maxHeight: '100vh'}}>
            <div
              style={{
                backgroundImage: `url(${'img/slider/mobile-slider.png'})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                opacity: '50%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
          </div>
        ) : (
          <div ref={sliderRef} className="keen-slider">
            <div
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${'img/slider/musician-music-band-slide-01.webp'})`,
                height: '100vh',
                width: '100vw',
              }}
            >
              <Fader
                fadeOut={fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#e21f2f'}
                text={"Snap - Out"}
                timer={2000}
              />
              <Fader
                fadeOut={fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#fff'}
                text={"GRUPPO DI ROCK INDIE ITALIANO"}
                timer={3500}
                textStyle={"-02"}
              />
            </div>
            <div
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${'img/slider/musician-music-band-slide-02.webp'})`,
                height: '100vh',
                width: '100vw'
              }}
            >
              <Fader
                fadeOut={fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#e21f2f'}
                text={"Snap - Out"}
                timer={2000}
              />
              <Fader
                fadeOut={fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#fff'}
                text={"GRUPPO DI ROCK INDIE ITALIANO"}
                timer={3500}
                textStyle={"-02"}
              />
            </div>
            <div
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${'img/slider/musician-music-band-slide-03.webp'})`,
                height: '100vh',
                width: '100vw'
              }}
            >
              <Fader
                fadeOut={fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#e21f2f'}
                text={"Snap - Out"}
                timer={2000}
              />
              <Fader
                fadeOut={fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#fff'}
                text={"GRUPPO DI ROCK INDIE ITALIANO"}
                timer={3500}
                textStyle={"-02"}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MasterSlider