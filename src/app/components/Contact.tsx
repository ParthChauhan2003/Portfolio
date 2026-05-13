import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', projectType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);

  // Refs for focusing invalid fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const projectTypeRef = useRef<HTMLButtonElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const projectTypeOptions = [
    "Test Automation",
    "Manual Testing",
    "API Testing",
    "Performance Testing",
    "QA Consulting",
    "Other"
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
    setSubmitSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { name: '', email: '', projectType: '', message: '' };
    let isValid = true;
    let firstErrorField: 'name' | 'email' | 'projectType' | 'message' | null = null;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'email';
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Project type is required';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'projectType';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      isValid = false;
      if (!firstErrorField) firstErrorField = 'message';
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', projectType: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } else {
      // Focus the first invalid field
      if (firstErrorField === 'name') nameRef.current?.focus();
      else if (firstErrorField === 'email') emailRef.current?.focus();
      else if (firstErrorField === 'projectType') projectTypeRef.current?.focus();
      else if (firstErrorField === 'message') messageRef.current?.focus();
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isDropdownOpen && focusedOptionIndex !== -1) {
        selectOption(projectTypeOptions[focusedOptionIndex]);
      } else {
        setIsDropdownOpen(true);
        setFocusedOptionIndex(0);
      }
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      projectTypeRef.current?.focus();
    } else if (isDropdownOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedOptionIndex(prev => (prev < projectTypeOptions.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedOptionIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Tab') {
        setIsDropdownOpen(false);
      }
    } else if (e.key === 'ArrowDown' && !isDropdownOpen) {
      e.preventDefault();
      setIsDropdownOpen(true);
      setFocusedOptionIndex(0);
    }
  };

  useEffect(() => {
    if (isDropdownOpen && focusedOptionIndex !== -1) {
      // Logic to sync selection if needed or just handle via keyboard selection
    }
  }, [focusedOptionIndex, isDropdownOpen]);

  const selectOption = (option: string) => {
    setFormData(prev => ({ ...prev, projectType: option }));
    if (errors.projectType) {
      setErrors(prev => ({ ...prev, projectType: '' }));
    }
    setIsDropdownOpen(false);
    projectTypeRef.current?.focus();
  };

  const engagementModels = [
    { title: "Hourly QA Support", desc: "Flexible testing as needed" },
    { title: "Project-Based Testing", desc: "Dedicated scope and timeline" },
    { title: "Long-Term QA Collaboration", desc: "Seamless team integration" },
    { title: "Flexible Pricing Models", desc: "Tailored to your budget" }
  ];

  return (
    <section id="contact" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 ${darkMode ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`}>
            Contact Section
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let’s Build Reliable Software Together
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Planning to launch or scale your product? I’ll help you ensure it's stable, secure, and ready for users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Engagement Options */}
            <div>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Engagement Options</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {engagementModels.map((model, index) => (
                  <div key={index} className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                    <h4 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{model.title}</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Get */}
            <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-blue-900/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>📝 What You’ll Get</h3>
              <ul className="space-y-4">
                {[
                  "Free 20-minute consultation",
                  "Identification of QA gaps",
                  "Automation strategy suggestions",
                  "Release optimization insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                  <a href="mailto:Parthc004@gmail.com" className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-600`}>Parthc004@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/parth-chauhan-7a79131ba" target="_blank" rel="noopener noreferrer" className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-600`}>in/parthchauhan</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className={`p-8 rounded-3xl border shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100'}`} onSubmit={handleSubmit}>
              <h3 className={`text-xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Start a Free QA Consultation</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Name <span className="text-red-500">*</span></label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all ${errors.name
                      ? 'border-red-500 focus:ring-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                      : `focus:ring-blue-500/20 focus:border-blue-500 shadow-sm ${darkMode ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-200 bg-gray-50 text-gray-900'}`
                      } ${darkMode ? 'placeholder-gray-600' : 'placeholder-gray-400'}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email <span className="text-red-500">*</span></label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all ${errors.email
                      ? 'border-red-500 focus:ring-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                      : `focus:ring-blue-500/20 focus:border-blue-500 shadow-sm ${darkMode ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-200 bg-gray-50 text-gray-900'}`
                      } ${darkMode ? 'placeholder-gray-600' : 'placeholder-gray-400'}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label id="projectType-label" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Project Type <span className="text-red-500">*</span></label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      ref={projectTypeRef}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      onKeyDown={handleDropdownKeyDown}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      aria-labelledby="projectType-label"
                      aria-invalid={!!errors.projectType}
                      aria-describedby={errors.projectType ? "projectType-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all flex items-center justify-between focus:ring-4 ${errors.projectType
                        ? 'border-red-500 ring-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                        : isDropdownOpen
                          ? `ring-blue-500/20 border-blue-500`
                          : `focus:ring-blue-500/20 focus:border-blue-500 ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500/50 shadow-sm`
                        } ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
                    >
                      <span className={formData.projectType === '' ? (darkMode ? 'text-gray-600' : 'text-gray-400') : ''}>
                        {formData.projectType || 'Select a project type'}
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    </button>

                    {/* Custom Dropdown Options */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          data-lenis-prevent="true"
                          className={`absolute w-full mt-2 rounded-xl border shadow-2xl z-50 max-h-60 overflow-y-auto custom-scrollbar overscroll-contain ${darkMode ? 'bg-gray-800 border-gray-700 shadow-black/50' : 'bg-white border-gray-100 shadow-gray-200/50'
                            }`}
                        >
                          <ul role="listbox" aria-labelledby="projectType-label" className="py-2 focus:outline-none">
                            {projectTypeOptions.map((option, index) => (
                              <li
                                key={option}
                                role="option"
                                aria-selected={formData.projectType === option}
                                onClick={() => selectOption(option)}
                                onMouseEnter={() => setFocusedOptionIndex(index)}
                                className={`px-4 py-3 cursor-pointer transition-colors flex items-center justify-between ${index === focusedOptionIndex
                                  ? (darkMode ? 'bg-gray-700 text-blue-400' : 'bg-gray-50 text-blue-600')
                                  : ''
                                  } ${formData.projectType === option
                                    ? (darkMode ? 'bg-blue-900/40 text-blue-400 font-bold' : 'bg-blue-50 text-blue-700 font-bold')
                                    : (darkMode ? 'text-gray-300' : 'text-gray-700')
                                  }`}
                              >
                                <span>{option}</span>
                                {formData.projectType === option && <CheckCircle2 size={16} />}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.projectType && (
                    <p id="projectType-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                      {errors.projectType}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Project Details <span className="text-red-500">*</span></label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    data-lenis-prevent="true"
                    placeholder="Tell me about your project, timeline, and requirements..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all resize-none custom-scrollbar overscroll-contain ${errors.message
                      ? 'border-red-500 focus:ring-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                      : `focus:ring-blue-500/20 focus:border-blue-500 shadow-sm ${darkMode ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-200 bg-gray-50 text-gray-900'}`
                      } ${darkMode ? 'placeholder-gray-600' : 'placeholder-gray-400'}`}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl text-white font-bold transition-all flex justify-center items-center gap-2 shadow-lg focus:ring-4 focus:outline-none ${submitSuccess
                    ? 'bg-green-600 hover:bg-green-700 shadow-green-500/30 focus:ring-green-500/20'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 focus:ring-blue-500/20'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 active:scale-95'}`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : submitSuccess ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  {isSubmitting ? "Sending..." : submitSuccess ? "Message Sent!" : "Book My Consultation"}
                </button>
                <div aria-live="polite" className="sr-only">
                  {submitSuccess ? "Form submitted successfully. We will get back to you soon." : ""}
                  {errors.name || errors.email || errors.projectType || errors.message ? "The form has errors. Please fix them to continue." : ""}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
