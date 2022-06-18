import ProjectTile from '../components/ProjectTile'
import Title from '../components/Title'

export default function Projects() {
  return (
    <div className="flex justify-center pt-2 bg-secondaryPurple h-fit pb-12">
      <div className="w-3/4">
        <div className="flex justify-end">
          <Title title="Personal Projects" isPurple={false} />
        </div>
        <div className="flex flex-col pt-3">
            <div className="flex justify-evenly">
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
            </div>
            <br />
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
