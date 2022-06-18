interface Props {
    title: String;
    isPurple: boolean;
}

export default function Title(props: Props) {

    const textSize = "text-4xl ";
    const styling = props.isPurple ? "text-mainPurple font-bold mb-2" : "text-white font-bold mb-2"

    return (
        <h1 className={textSize+styling}>{props.title}</h1>
    )
}
