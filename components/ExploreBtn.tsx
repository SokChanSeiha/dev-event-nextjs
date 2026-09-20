'use client'

import Image from 'next/image'
import posthog from 'posthog-js'

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST,
)

const ExploreBtn = () => {
  const handleExploreClick = () => {
    if (isPostHogConfigured) {
      posthog.capture('events_explore_clicked')
    }
  }

  return (
    <button 
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={handleExploreClick}>
      <a href="#events">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="Arrow down" height={24} width={24} />
      </a>
    </button>
  )
}

export default ExploreBtn