import { notFound } from 'next/navigation';
import { projects, getProject } from '@/lib/projects';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.card.title} — Mahmoud Abdelnasser`,
    description: project.sub,
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
