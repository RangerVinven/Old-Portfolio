export default function Home() {
  return (
    <div className="h-screen w-screen bg-mainPurple">
        <div className="h-full w-full flex items-center justify-center flex-col">
            <img src="src/media/userIcon.png" alt="User Icon" className="h-20 w-20 mb-5" />
            
            <h1 className="text-4xl font-bold text-white">Welcome, I'm Daniel McPherson</h1>
            <h1 className="text-4xl font-bold mt-5 text-white">and I'm a Fullstack Developer</h1>
            
            <div>
                <a href="https://github.com/RangerVinven" target="_blank" rel="noopener noreferrer">
                    <img src="src/media/githubWhite.ico" alt="GitHub Icon" className="h-10 w-10 mt-3" />
                </a>
            </div>
        </div>
    </div>
  )
}
