import Title from '../components/Title'
import ProjectTile from '../components/ProjectTile'

export default function Projects() {
  return (
    <div className="flex justify-center pt-2 bg-secondaryPurple h-fit pb-12">
		<div className="w-4/6">
			<div className="flex justify-end">
				<Title title="Personal Projects" isPurple={false} />
			</div>
			
			<div className="grid grid-cols-3 gap-y-8 justify-evenly pt-3">
				<ProjectTile title="Fun Farms" imageURL="./src/media/projectImages/funFarms.jpg" githubURL="https://github.com/RangerVinven/Portfolio" />
				<ProjectTile title="Project Title" imageURL="./src/media/projectImages/funFarms.jpg" githubURL="https://github.com/RangerVinven/Portfolio" />
				<ProjectTile title="Project Title" imageURL="./src/media/projectImages/funFarms.jpg" githubURL="https://github.com/RangerVinven/Portfolio" />
				
				<ProjectTile title="Project Title" imageURL="./src/media/projectImages/funFarms.jpg" githubURL="https://github.com/RangerVinven/Portfolio" />
				<ProjectTile title="Project Title" imageURL="./src/media/projectImages/funFarms.jpg" githubURL="https://github.com/RangerVinven/Portfolio" />
				<ProjectTile title="Project Title" imageURL="./src/media/projectImages/funFarms.jpg" githubURL="https://github.com/RangerVinven/Portfolio" />
			</div>
		</div>
    </div>
  )
}
