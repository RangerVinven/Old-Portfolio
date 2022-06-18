import React from 'react'

interface Props {
    title: String;
    isPurple: boolean;
}

export default function Title(props: Props) {

    const textSize = "text-2xl ";
    const styling = props.isPurple ? "text-mainPurple font-bold" : "text-white font-bold"

    return (
        <h1 className={textSize+styling}>{props.title}</h1>
    )
}
