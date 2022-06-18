interface Props {
	title: String;
	dates: String;
	description: String;
}

export default function ExperienceItem(props: Props) {
  return (
	<div className="mb-2">
		<div className="flex">
			<h1 className="font-bold text-2xl mr-2">{props.title}</h1>
			<h1 className="text-2xl">({props.dates})</h1>
		</div>
		<p>{props.description}</p>
	</div>
  )
}
