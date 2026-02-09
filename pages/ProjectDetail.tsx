import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { ArrowLeft, Clock, Tag, ArrowUpRight } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 px-6">
        <h2 className="text-2xl font-medium">Project not found</h2>
        <Link to="/" className="text-zinc-500 hover:text-black underline underline-offset-4">Return Home</Link>
      </div>
    );
  }

  return (
    <article className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-silky">
      
      {/* Header */}
      <div className="mb-16 w-full max-w-full">
        <div className="flex flex-wrap gap-3 mb-6">
          {project.category.map(cat => (
             <span key={cat} className="px-3 py-1 bg-black text-white text-xs uppercase tracking-wider font-medium rounded-full">
               {cat}
             </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-6 leading-[1.1] break-words w-full">
          {project.title}
        </h1>
        <div className="flex items-center gap-6 text-zinc-500 text-sm font-medium">
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {project.date}
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full rounded-3xl overflow-hidden bg-zinc-100 mb-12 md:mb-20 shadow-apple border border-zinc-100/50">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-auto block"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 w-full max-w-full">
        
        {/* Left Sidebar: Meta */}
        <div className="md:col-span-4 space-y-8 md:space-y-12 w-full min-w-0">
           <div className="w-full">
             <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4 border-b border-zinc-100 pb-2">Overview｜简介</h3>
             <p className="text-zinc-600 leading-relaxed text-lg font-light break-words">
               {project.description}
             </p>
           </div>

           <div className="w-full">
             <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4 border-b border-zinc-100 pb-2">Technologies｜技术</h3>
             <div className="flex flex-wrap gap-2">
               {project.tags.map(tag => (
                 <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 text-zinc-600 text-sm border border-zinc-100 max-w-full break-all">
                   <Tag size={12} className="shrink-0" />
                   <span className="truncate">{tag}</span>
                 </span>
               ))}
             </div>
           </div>
        </div>

        {/* Right Content: Details */}
        <div className="md:col-span-8 w-full min-w-0">
           <div className="prose prose-lg md:prose-xl prose-zinc max-w-none mb-12 w-full break-words">
             {project.longDescription && project.longDescription.length > 0 ? (
               <div className="space-y-6 md:space-y-8">
                 {project.longDescription.map((para, i) => (
                   <p key={i} className="text-zinc-600 leading-relaxed font-light w-full">
                     {para}
                   </p>
                 ))}
               </div>
             ) : (
               <p className="text-zinc-600 leading-relaxed font-light italic w-full">
                 Detailed case study content coming soon...
               </p>
             )}
           </div>

           {/* Dynamic Gallery with Captions */}
           {project.gallery && project.gallery.length > 0 && (
             <div className="space-y-12 border-t border-zinc-100 pt-12 w-full max-w-full">
                {project.gallery.map((item, index) => (
                  <div key={index} className="space-y-3 group w-full min-w-0">
                     <div className="w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm transition-shadow duration-500 hover:shadow-md">
                        <img 
                          src={item.imageUrl} 
                          alt={item.caption} 
                          className="w-full h-auto block" 
                          loading="lazy" 
                        />
                     </div>
                     <p className="text-sm text-zinc-500 font-light tracking-wide text-center md:text-left border-l-2 border-transparent pl-0 md:pl-3 md:border-zinc-100 break-words w-full">
                       {item.caption}
                     </p>
                  </div>
                ))}
             </div>
           )}

           {/* Video Embed Section */}
           {project.videoEmbed && (
             <div className="mt-12 w-full max-w-full space-y-3">
               <div 
                 className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-apple [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:w-full [&>iframe]:h-full"
                 dangerouslySetInnerHTML={{ __html: project.videoEmbed }}
               />
               {project.videoCaption && (
                 <p className="text-sm text-zinc-500 font-light tracking-wide text-center md:text-left border-l-2 border-transparent pl-0 md:pl-3 md:border-zinc-100 break-words w-full">
                   {project.videoCaption}
                 </p>
               )}
             </div>
           )}

           {/* External Links Section */}
           {project.links && project.links.length > 0 && (
             <div className="mt-16 pt-12 border-t border-zinc-100 w-full">
               <h3 className="text-xl font-bold text-zinc-900 mb-6">Links｜相关内容链接</h3>
               <div className="flex flex-col gap-4">
                 {project.links.map((link, i) => (
                   <a 
                     key={i} 
                     href={link.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="group flex items-center justify-between p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 hover:bg-white transition-all duration-300 hover:shadow-apple"
                   >
                     <span className="font-medium text-zinc-900">{link.label}</span>
                     <div className="flex items-center gap-2 text-zinc-400 group-hover:text-black transition-colors">
                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
                        <ArrowUpRight size={18} />
                     </div>
                   </a>
                 ))}
               </div>
             </div>
           )}
        </div>

      </div>
      
      {/* Navigation Footer */}
      <div className="mt-24 md:mt-32 pt-12 border-t border-zinc-100 flex justify-between items-center w-full max-w-full">
        <Link to="/" className="group flex items-center gap-3 text-zinc-500 hover:text-black transition-colors max-w-full">
          <div className="p-3 rounded-full bg-zinc-50 group-hover:bg-zinc-100 transition-colors shrink-0">
            <ArrowLeft size={20} />
          </div>
          <span className="font-medium truncate">Back to Portfolio</span>
        </Link>
      </div>

    </article>
  );
};

export default ProjectDetail;