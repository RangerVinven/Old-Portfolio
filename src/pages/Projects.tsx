import React from 'react'
import ProjectTile from '../components/ProjectTile'

export default function Projects() {
  return (
    <div className="flex justify-center pt-2 bg-secondaryPurple h-fit pb-12">
      <div className="w-3/4">
        <div className="flex justify-end">
            <h1 className="text-2xl text-white font-bold">Personal Projects</h1>
        </div>
        <div className="flex flex-col pt-3">
            <div className="flex justify-evenly">
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
            </div>
            <br />
            <div className="flex justify-evenly">
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
            </div>
        </div>
      </div>
    </div>
  )
}
