import ProjectTile from '../components/ProjectTile'
import Title from '../components/Title'

export default function Projects() {
  return (
    <div className="flex justify-center pt-2 bg-secondaryPurple h-fit pb-12">
      <div className="w-6/12">
        <div className="flex justify-end">
          <Title title="Personal Projects" isPurple={false} />
        </div>
        
        <div className="grid grid-cols-3 gap-10 pt-3">
			<ProjectTile />
			<ProjectTile />
			<ProjectTile />

			<ProjectTile />
			<ProjectTile />
			<ProjectTile />
        </div>
      </div>
    </div>
  )
}
