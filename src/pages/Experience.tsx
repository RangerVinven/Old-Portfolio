import React from 'react'

import ExperienceItem from '../components/ExperienceItem';
import Title from '../components/Title';

export default function Experience() {
  return (
    <div className="flex justify-center py-2 pb-4">
      <div className="w-3/4">
          <Title title="Professional Experience" isPurple={true} />
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
      </div>
    </div>
  )
}
