import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Code2, ShieldCheck, Layers, Rocket, ArrowRight } from 'lucide-react';

interface PipelineProps {
  darkMode?: boolean; // We might want to enforce dark mode for this specific component or adapt
}

const stages = [
  {
    id: 'local',
    name: 'LOCAL',
    icon: <Monitor size={24} />,
    color: 'text-slate-400',
    bgColor: 'bg-slate-400/10',
    borderColor: 'border-slate-500/30',
    glowColor: 'shadow-slate-500/20',
    status: 'SYNTAX OK',
    subStatus: 'LOCALHOST',
  },
  {
    id: 'dev',
    name: 'DEV',
    icon: <Code2 size={24} />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    status: 'BUILD OK',
    subStatus: 'INTEGRATION',
  },
  {
    id: 'qa',
    name: 'QA',
    icon: <ShieldCheck size={24} />,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
    borderColor: 'border-indigo-500/30',
    glowColor: 'shadow-indigo-500/20',
    status: 'PASSED',
    subStatus: 'AUTOMATION',
  },
  {
    id: 'staging',
    name: 'STAGING',
    icon: <Layers size={24} />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    status: 'RC READY',
    subStatus: 'UAT SIGN-OFF',
  },
  {
    id: 'prod',
    name: 'PROD',
    icon: <Rocket size={24} />,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/30',
    status: 'DEPLOYED',
    subStatus: 'LIVE SYSTEM',
  },
];

export const Pipeline: React.FC<PipelineProps> = ({ darkMode }) => {
  return (
    <section className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-[#F8F9FA]'}`}>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        
        {/* Main Dashboard Container - Permanently Dark */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-[#3c4043] bg-[#202124] overflow-hidden shadow-2xl transition-all duration-300"
        >
          {/* Subtle Grid Background - Permanently Light on Dark */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          ></div>

          <div className="relative z-10 p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 border-b border-[#3c4043]/50 pb-6 transition-colors duration-300">
              
              {/* Mac Traffic Lights & Title */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="flex items-center gap-3 ml-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <h3 className="font-bold tracking-wide text-lg sm:text-xl text-white transition-colors">
                    End-to-End Release Pipeline
                  </h3>
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs">
                <div className="px-3 py-1.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                  EXECUTION: OVERRIDE
                </div>
                <div className="px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1.5">
                  ✓ HEALTHY
                </div>
              </div>
            </div>

            {/* Pipeline Visualizer */}
            <div className="relative mb-16">
              
              {/* Connector Lines (Background) */}
              <div className="absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-[#3c4043] rounded-full hidden md:block opacity-50 shadow-inner transition-colors duration-300"></div>
              <div className="absolute left-8 top-8 bottom-8 w-1 -translate-x-1/2 bg-[#3c4043] rounded-full md:hidden opacity-50 shadow-inner transition-colors duration-300"></div>

              {/* Nodes */}
              <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4">
                {stages.map((stage, index) => (
                  <motion.div 
                    key={stage.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative flex flex-row md:flex-col items-center gap-6 md:gap-0 group"
                  >
                    
                    {/* Top Pill Label (Desktop) */}
                    <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border transition-colors duration-300 text-gray-400 border-gray-700 bg-[#202124]">
                        {stage.name}
                      </span>
                    </div>

                    {/* Left Pill Label (Mobile) */}
                    <div className="md:hidden w-24 text-right">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border transition-colors duration-300 text-gray-400 border-gray-700 bg-[#202124]">
                        {stage.name}
                      </span>
                    </div>

                    {/* Icon Node */}
                    <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 shadow-lg ${stage.bgColor} ${stage.borderColor} ${stage.color} group-hover:${stage.glowColor}`}>
                      {stage.icon}
                    </div>

                    {/* Status Text (Desktop & Mobile) */}
                    <div className="md:absolute md:-bottom-16 md:left-1/2 md:-translate-x-1/2 md:text-center mt-0 md:mt-4">
                      <div className="flex flex-col gap-1.5 font-mono">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded border whitespace-nowrap ${stage.bgColor} ${stage.borderColor} ${stage.color}`}>
                          {stage.status}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wider whitespace-nowrap uppercase">
                          {stage.subStatus}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Breadcrumbs */}
            <div className="mt-20 pt-6 border-t border-[#3c4043]/50 flex items-center justify-center gap-4 text-xs font-mono text-gray-500 transition-colors duration-300">
              <span className="hover:text-blue-500 transition-colors cursor-default uppercase">Code</span>
              <ArrowRight size={14} className="opacity-50" />
              <span className="hover:text-indigo-500 transition-colors cursor-default uppercase">QA</span>
              <ArrowRight size={14} className="opacity-50" />
              <span className="text-emerald-500/80 font-bold hover:text-emerald-400 transition-colors cursor-default uppercase tracking-wider">Deploy</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
