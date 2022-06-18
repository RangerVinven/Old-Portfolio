import React from 'react'

import ExperienceItem from '../components/ExperienceItem';

export default function Experience() {
  return (
    <div className="flex justify-center py-2 pb-4">
      <div className="w-3/4">
        <h1 className="text-2xl text-mainPurple font-bold mb-2">Professional Experience</h1>
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
      </div>
    </div>
  )
}
