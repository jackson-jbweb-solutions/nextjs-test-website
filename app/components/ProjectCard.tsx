import Image from 'next/image';

interface Project {
  mainImage: string;
  title: string;
  description: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <Image src={project.mainImage} alt={project.title} width={100} height={100} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
