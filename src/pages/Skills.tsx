import React from 'react'
import Title from '../components/Title'

export default function Skills() {
  return (
    <div className="flex justify-center pt-2 bg-secondaryPurple h-fit pb-10">
      <div className="w-3/4">
        <div className="flex justify-end">
            <Title title="Skills" isPurple={false} />
        </div>

        <div className="flex justify-center">
          <div className="flex h-fit mr-1">
            <div>
              <h1 className="text-2xl font-bold mr-9">Languages</h1>
              <p>(Java/Type)Script</p>
              <p>Python</p>
              <p>C#</p>
              <p>Java</p>
              <p>Dart</p>
              <p>SQL</p>
              <p>HTML + CSS</p>
            </div>
            <div className="w-0.5 bg-white"> </div>
          </div>

          <div className="flex h-fit mr-1">
            <div>
              <h1 className="text-2xl font-bold mr-9">Frameworks</h1>
              <p>React</p>
              <p>Angular</p>
              <p>Flutter</p>
            </div>
            <div className="w-0.5 bg-white"> </div>
          </div>

          <div className="flex h-fit mr-1">
            <div>
              <h1 className="text-2xl font-bold mr-9">Databases</h1>
              <p>MySQL</p>
              <p>SQLite</p>
              <p>MongoDB</p>
            </div>
            <div className="w-0.5 bg-white"> </div>
          </div>
          
          <div className="flex h-fit mr-1">
            <div>
              <h1 className="text-2xl font-bold mr-9">DevOps</h1>
              <p>Linux</p>
              <p>Git</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
