import { useState } from 'react'
import { PlayIcon } from '../icons'
import './AboutVideo.css'

type AboutVideoProps = {
  embedUrl: string
  thumbnail: string
  title: string
}

export function AboutVideo({ embedUrl, thumbnail, title }: AboutVideoProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="about-video about-video--playing">
        <iframe
          className="about-video__frame"
          src={`${embedUrl}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="about-video">
      <img className="about-video__poster" src={thumbnail} alt="" />
      <div className="about-video__shade" aria-hidden="true" />
      <button
        type="button"
        className="about-video__play"
        aria-label={`Play video: ${title}`}
        onClick={() => setPlaying(true)}
      >
        <span className="about-video__play-core">
          <PlayIcon className="about-video__play-icon" />
        </span>
      </button>
      <div className="about-video__bar" aria-hidden="true">
        <span className="about-video__bar-play" />
        <span className="about-video__bar-track">
          <span className="about-video__bar-progress" />
        </span>
        <span className="about-video__bar-time">0:05 / 1:45</span>
      </div>
    </div>
  )
}
