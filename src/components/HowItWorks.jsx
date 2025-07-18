import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {
  const videoRef = useRef()

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip Image Animation */}
        <div id="chip" className="flex justify-center items-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col items-center text-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Video Section */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative flex justify-center items-center">
            <div className="overflow-hidden relative z-10">
              <img src={frameImg} alt="frame" className="bg-transparent" />
            </div>
            <div className="hiw-video absolute top-0 left-0 w-full h-full">
              <video
                className="pointer-events-none w-full h-full object-cover"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
        </div>

        {/* Text Section */}
        <div className="hiw-text-container flex flex-col md:flex-row gap-10">
          {/* Left Side Text */}
          <div className="flex flex-1 justify-center flex-col gap-6">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">best graphic performance by far</span>.
            </p>
            <p className="hiw-text g_fadeIn">
              Mobile <span className="text-white">games will look and feel so immersive</span>, with
              incredibly detailed environments and characters.
            </p>
          </div>

          {/* Right Side Highlight Text */}
          <div className="flex flex-1 justify-center flex-col items-center g_fadeIn text-center">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
