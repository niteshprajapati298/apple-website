import React, { useEffect, useRef, useState } from 'react';
import { hightlightsSlides } from '../constants';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    const current = videoRef.current[videoId];
    if (!current) return;

    ScrollTrigger.create({
      trigger: current,
      toggleActions: 'restart none none none',
      start: 'top 80%',
      onEnter: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  });

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => {
    setLoadedData((prev) => [...prev, e]);
  };

  useEffect(() => {
    let span = videoSpanRef.current;

    if (span[videoId]) {
      gsap.fromTo(
        span[videoId],
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: 'left',
          duration: videoRef.current[videoId]?.duration || 5,
          ease: 'linear',
        }
      );
    }
  }, [videoId, startPlay]);

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case 'video-last':
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
          videoId: i + 1,
        }));
        break;
      case 'video-reset':
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case 'play':
        setVideo((prev) => ({
          ...prev,
          isPlaying: true,
        }));
        break;
      case 'pause':
        setVideo((prev) => ({
          ...prev,
          isPlaying: false,
        }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex justify-center items-center rounded-3xl overflow-hidden bg-black'>
                <video
                  playsInline
                  preload='auto'
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                  onEnded={() => {
                    i === hightlightsSlides.length - 1
                      ? handleProcess('video-last', i)
                      : handleProcess('video-end', i);
                  }}
                  className='w-full h-full object-cover'
                >
                  <source src={list.video} type='video/mp4' />
                </video>
              </div>
              <div className='absolute top-12 left-[5%] z-10'>
                {list.textLists.map((text) => (
                  <p
                    key={text}
                    className='md:text-2xl text-xl font-medium text-white'
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='relative flex justify-center items-center mt-10'>
        <div className='flex justify-center items-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className='absolute h-full w-full rounded-full bg-blue-500'
              />
            </span>
          ))}
        </div>

        <button className='control-btn ml-4'>
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={
              isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'
            }
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
