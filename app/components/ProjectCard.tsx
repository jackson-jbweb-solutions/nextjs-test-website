import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Image src={project.mainImage} alt={project.title} width={100} height={100} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
