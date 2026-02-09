import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group relative block w-full h-full bg-white rounded-xl overflow-hidden border border-zinc-100 transition-all duration-700 ease-silky hover:shadow-apple-hover hover:scale-[1.01]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-50">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-silky group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col justify-between h-auto min-h-[180px]">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{project.category[0]}</span>
            <span className="text-zinc-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3 tracking-tight leading-snug group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium text-zinc-500 bg-zinc-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;