import React, { useEffect } from 'react';
import { personalInfo, projects, experiences, skills, awards } from '../data';
import ProjectCard from '../components/ProjectCard';
import HeroClock from '../components/HeroClock';
import { Mail, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  // Scroll Restoration Logic
  useEffect(() => {
    const SCROLL_KEY = 'home_scroll_pos';
    const savedPosition = sessionStorage.getItem(SCROLL_KEY);

    if (savedPosition) {
      // Restore position immediately upon mount
      window.scrollTo(0, parseInt(savedPosition, 10));
    }

    return () => {
      // Save position when unmounting (leaving the page)
      sessionStorage.setItem(SCROLL_KEY, window.scrollY.toString());
    };
  }, []);

  // Simple fade-in effect on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-20">
      
      {/* 1. HERO (Clock) */}
      <HeroClock projects={projects} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24 mt-12 md:mt-24">

        {/* 2. PERSONAL PROFILE (Bio) */}
        <section className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
          <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">01 介绍｜Profile</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              {personalInfo.title}
            </h3>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light">
                {personalInfo.bio}
              </p>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDUCATION */}
        <section className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
           <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">02 教育｜Education</h2>
           </div>
           <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 hover:shadow-apple transition-shadow duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <div className="w-11 h-11 rounded-sm">
                    <img 
                      src="https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/CAA.png" 
                      alt="School Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight">{personalInfo.education.school}</h4>
                </div>
                <span className="text-zinc-500 font-mono mt-4 md:mt-0 text-sm md:text-base bg-white px-4 py-1.5 rounded-full border border-zinc-200/60 shadow-sm">{personalInfo.education.degree}</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium text-lg pl-1">{personalInfo.education.dept}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200/50 pt-8">
                 <div>
                   <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block mb-2">Performance</span>
                   <p className="text-zinc-900 font-medium text-lg">GPA: {personalInfo.education.gpa}</p>
                 </div>
                 <div>
                   <span className="text-xs uppercase text-zinc-400 tracking-wider font-semibold block mb-2">Key Courses</span>
                   <p className="text-zinc-500 text-sm leading-relaxed">{personalInfo.education.courses}</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. SKILLS */}
        <section className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
           <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">03 技能｜Skill</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                 <h4 className="text-xl font-medium mb-6">软件</h4>
                 <div className="flex flex-wrap gap-x-4 gap-y-3">
                   {skills.software.map(s => (
                     <span key={s} className="text-zinc-600 border-b border-zinc-200 pb-0.5 hover:border-black hover:text-black transition-colors">{s}</span>
                   ))}
                 </div>
              </div>
              <div>
                 <h4 className="text-xl font-medium mb-6">技能</h4>
                 <div className="flex flex-wrap gap-3">
                   {skills.capabilities.map(c => (
                     <span key={c} className="px-4 py-2 bg-white border border-zinc-100 shadow-sm rounded-full text-sm text-zinc-600">
                       {c}
                     </span>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. PORTFOLIO (Grid) */}
        <section id="portfolio" className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
          <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">04 项目作品｜Selected Works</h2>
             <span className="text-zinc-400 font-mono text-xs">ALL PROJECTS ({projects.length})</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 6. EXPERIENCE */}
        <section className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
           <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">05 项目经历｜Experience</h2>
           </div>
           <div className="space-y-12">
             {experiences.map((exp, index) => (
               <div key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-zinc-50 rounded-3xl p-6 -mx-6 transition-colors duration-300">
                 <div className="md:col-span-3">
                    <span className="font-mono text-zinc-400 text-sm py-1 px-3 bg-zinc-100 rounded-full inline-block">{exp.period}</span>
                 </div>
                 <div className="md:col-span-9">
                    <h4 className="text-2xl font-semibold tracking-tight mb-2">{exp.company}</h4>
                    <p className="text-zinc-800 font-medium mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      {exp.role}
                    </p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, tIndex) => (
                        <li key={tIndex} className="text-zinc-500 leading-relaxed text-sm pl-4 border-l border-zinc-200">
                          {task}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* 7. HONORS (Awards) */}
        <section className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
           <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">06 荣誉｜Certificate</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-4 p-6 border border-zinc-100 rounded-2xl hover:border-zinc-300 transition-colors">
                  <span className="text-zinc-300 font-mono text-sm">0{i+1}</span>
                  <span className="text-zinc-800 font-medium">{award.title}</span>
                </div>
              ))}
           </div>
        </section>

        {/* 8. CONTACT */}
        <section id="contact" className="opacity-0 translate-y-8 transition-all duration-1000 ease-silky animate-on-scroll">
           <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-zinc-100 pb-4">
             <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">07 联系｜Contact</h2>
           </div>
           
           <div className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden group">
              {/* Background Image - Placeholder URL to be replaced by user */}
              <div className="absolute inset-0 z-0 bg-black">
                 <img 
                   src="https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/contactmebg.gif" 
                   alt="Contact Background" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                 />
                 <div className="absolute inset-0 bg-black/50" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-white">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full mb-8 overflow-hidden backdrop-blur-sm border border-white/10 p-1">
                   {/* Avatar Image */}
                   <img 
                      src="https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/FANGZhenhuang400x400.png"
                      alt="Fang Zhenhuang" 
                      className="w-full h-full rounded-full object-cover"
                   />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Create Together</h3>
                <p className="text-zinc-300 max-w-xl mx-auto mb-10 text-lg font-light">
                  Always open to discussing design work or partnership opportunities.
                </p>
                
                <a 
                  href={`mailto:${personalInfo.contact.email}`}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Home;