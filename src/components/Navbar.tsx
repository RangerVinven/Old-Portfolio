import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-mainPurple text-white flex items-center pt-2">
        <div className="shrink-0">
            <a href="#home"><h1 className="text-2xl font-bold ml-2">Daniel McPherson</h1></a>
        </div>
        <div className="w-full flex justify-end">
            <div className="w-6/12 flex justify-evenly">
                <a href="#home"><h1 className="text-2xl">Home</h1></a>
                <a href="#aboutMe"><h1 className="text-2xl">About Me</h1></a>
                <a href="#projects"><h1 className="text-2xl">Projects</h1></a>
                <a href="#experience"><h1 className="text-2xl">Experience</h1></a>
                <a href="#skills"><h1 className="text-2xl">Skills</h1></a>
            </div>
        </div>
    </div>
  )
}
