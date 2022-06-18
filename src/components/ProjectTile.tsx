interface Props {
	title: String;
	imageURL: String;
	githubURL: String;
}

export default function ProjectTile(props: Props) {

	return (
		<div className="h-72 w-72 rounded-md bg-white">
			<img src="./src/media/projectImages/funFarms.jpg" alt="Fun Farms image" className="w-full h-full relative hover:blur-sm" />
			<h1 className="absolute pt-36 pl-36 transform text-white">{props.title}</h1>
		</div>
	)
}
