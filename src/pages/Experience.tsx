import ExperienceItem from '../components/ExperienceItem';
import Title from '../components/Title';

export default function Experience() {
  return (
    <div className="flex justify-center py-2 pb-4">
      <div className="w-4/6">
            <Title title="Professional Experience" isPurple={true} />
            <ExperienceItem title="Code Club Assistant" dates="Aug 2021 - Mar 2022" description="I was an assistant at the Inverurie Academy coding club, helping S1-S3s become curious about programming and problem solving." />
            <ExperienceItem title="Lorem Ipsum Dolor" dates="Jan 2021 - Dec 2022" description="Senectus et netus et malesuada fames ac turpis egestas integer." />
            <ExperienceItem title="Lorem Ipsum Dolor" dates="Jan 2021 - Dec 2022" description="Senectus et netus et malesuada fames ac turpis egestas integer." />
      </div>
    </div>
  )
}
