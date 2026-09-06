import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_CONTENT } from '../data/content';
import { ProjectItem } from '../types';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2.5 block">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk',sans-serif]">
              Proven Precision in Production
            </h2>
          </div>

          <button
            id="view-all-projects-btn"
            onClick={onViewAllProjects}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS_CONTENT.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-900/85 text-blue-400 backdrop-blur-md border border-slate-700/60">
                    {proj.clientIndustry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold font-['Space_Grotesk',sans-serif] text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {proj.volume}
                </span>

                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
