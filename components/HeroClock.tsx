import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface HeroClockProps {
  projects: Project[];
}

const HeroClock: React.FC<HeroClockProps> = ({ projects }) => {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(160); // Default radius
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  
  // Settings
  const DURATION_PER_CYCLE = 45000; // 45 seconds for full rotation
  const TOTAL_ITEMS = projects.length;
  const SECTOR_ANGLE = 360 / TOTAL_ITEMS;

  // Responsive Radius Logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setRadius(120); // Mobile: Compact
      } else if (width < 1280) {
        setRadius(160); // Tablet/Laptop: Medium
      } else {
        setRadius(220); // Desktop: Large & Impactful
      }
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animate = (time: number) => {
    if (startTimeRef.current === null) startTimeRef.current = time;
    const timeElapsed = time - startTimeRef.current;
    
    // Calculate rotation (0 to 360)
    const newRotation = (timeElapsed % DURATION_PER_CYCLE) / DURATION_PER_CYCLE * 360;
    setRotation(newRotation);

    // Calculate active index based on rotation
    const normalizedRotation = newRotation % 360;
    const index = Math.floor((normalizedRotation + (SECTOR_ANGLE / 2)) / SECTOR_ANGLE) % TOTAL_ITEMS;
    
    setActiveIndex(index);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Helper to position items in a circle
  // 0 deg is top (12 o'clock)
  const getPosition = (index: number, r: number) => {
    const angle = (index * SECTOR_ANGLE) - 90; // -90 to start at 12 o'clock
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * r,
      y: Math.sin(radian) * r,
      angle: angle
    };
  };

  const activeProject = projects[activeIndex];

  return (
    // Added md:pb-32 to shift the visual center upwards
    <section className="h-screen w-full flex flex-col md:flex-row bg-white pt-20 md:pb-32 relative z-0 overflow-hidden">
      
      {/* LEFT: Clock UI */}
      {/* Changed bg-zinc-50/50 to bg-white for pure white look */}
      <div className="w-full md:w-[60%] relative flex items-center justify-center bg-white order-1">
        
        {/* Dial Container - Responsive sizing based on radius */}
        <div 
          className="relative flex items-center justify-center xl:pl-10"
          style={{
            width: radius * 2 + 100 + 'px', // Dynamic container size
            height: radius * 2 + 100 + 'px'
          }}
        >
          
          {/* Rotating Hand Container */}
          <div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
            style={{ 
              transform: `rotate(${rotation}deg)` 
            }}
          >
             {/* The Hand Line - Length scales with radius */}
             <div 
                className="absolute left-1/2 top-1/2 w-[2px] bg-red-600 -translate-x-1/2 -translate-y-full origin-bottom"
                style={{ height: radius * 0.9 + 'px' }}
             >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-600 rounded-full" />
             </div>
          </div>

          {/* Project Titles / Dates */}
          {projects.map((project, index) => {
            const pos = getPosition(index, radius); 
            const isActive = index === activeIndex;
            
            const isRightSide = pos.x > 10;
            const isLeftSide = pos.x < -10;
            const alignClass = isRightSide ? 'text-left origin-left' : isLeftSide ? 'text-right origin-right' : 'text-center origin-center';
            
            // Dynamic text spacing
            const gap = 30;
            const textWidth = 220; 
            
            let marginLeft = '-110px'; // Default center
            if (isRightSide) marginLeft = `${gap}px`;
            if (isLeftSide) marginLeft = `-${textWidth + gap}px`;

            return (
              <div
                key={project.id}
                className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 pointer-events-none transition-all duration-300 ${alignClass}`}
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px) translateY(-50%)`,
                  width: `${textWidth}px`, 
                  marginLeft: marginLeft,
                }}
              >
                <span 
                  className={`block text-xs md:text-sm font-medium leading-tight transition-all duration-300 ${
                    isActive 
                      ? 'text-red-600 scale-125 font-bold' 
                      : 'text-zinc-300 grayscale scale-100'
                  }`}
                >
                  {isActive ? project.date.replace('@', '') : project.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Image Preview */}
      <div className="w-full md:w-[40%] relative bg-white order-2 flex items-center justify-center p-12 md:p-16 xl:p-24 border-l border-zinc-50">
        <div className="w-full max-w-[400px] md:max-w-[480px] h-full flex flex-col justify-center">
          
          {/* ASPECT RATIO CONTROL: Change aspect-[4/3] to aspect-video (16:9), aspect-square (1:1), etc. */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-apple-hover transition-all duration-700 ease-silky bg-zinc-50 border border-zinc-100">
             {projects.map((p, idx) => (
               <Link
                key={p.id}
                to={`/project/${p.id}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-silky bg-white group cursor-pointer ${
                  idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
               >
                  <img 
                    src={p.imageUrl} 
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  
                  {/* Overlay Info on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl flex items-center gap-2">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
               </Link>
             ))}
          </div>

          <div className="mt-6 md:mt-8 text-center md:text-left h-32 shrink-0">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2 text-zinc-900 truncate">
              {activeProject?.title}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 flex-wrap">
               {activeProject?.category.slice(0,3).map((cat, i) => (
                 <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 uppercase tracking-wider border border-zinc-200/50">{cat}</span>
               ))}
            </div>
             <p className="text-zinc-400 text-xs md:text-sm line-clamp-3 font-light leading-relaxed">
              {activeProject?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroClock;