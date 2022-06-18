interface Props {
	title: string;
	githubURL: string;
}

export default function ProjectTile(props: Props) {
  return (
    <div className="h-72 w-72 bg-white rounded-md p-1">
        <h1 className="text-lg">{props.title}</h1>
		<img src="./src/media/projectImage.png" alt="Project Image" className="w-full h-52 mb-2" />
		<div className="flex justify-end">
			<a href={props.githubURL} target="_blank" rel="noopener noreferrer">
				<img src="./src/media/githubBlack.png" alt="GitHub Icon" className="h-10 w-10" />
			</a>
		</div>
    </div>
  )
}
