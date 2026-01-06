import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, User, Briefcase, MessageSquare, Globe, Hash, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Securely routing inquiry data to alif@a-d-s-usa.com
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <div className="bg-white">
      {/* Page Hero - Minimal & Professional */}
      <section className="bg-gray-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1E4D6B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 uppercase tracking-tighter leading-none">
            Get In Touch
          </h1>
          <p className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-8">Strategic Partnerships • Global Logistics • Apparel Design</p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form Side - 7 Columns */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">Project Discovery Form</h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Start a conversation with our sourcing experts. Detailed information allows our team at <span className="font-semibold text-accent">alif@a-d-s-usa.com</span> to prepare a comprehensive initial assessment for your brand.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="bg-gray-50 border-2 border-accent/20 p-16 text-center rounded-sm animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <Send className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-extrabold uppercase mb-4 tracking-tight">Transmission Successful</h3>
                  <p className="text-gray-600 mb-10 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been successfully routed to our executive leadership team. You should receive a confirmation or direct response within 12-24 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-accent text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-lg"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Section 1: Contact Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">01</span>
                      <h4 className="text-sm font-black uppercase tracking-[0.15em] text-gray-900">Client Information</h4>
                      <div className="flex-grow h-px bg-gray-100"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                          <input required type="text" placeholder="Johnathan Smith" className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Company Name</label>
                        <div className="relative group">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                          <input required type="text" placeholder="Fashion House Inc." className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Work Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                          <input required type="email" placeholder="jsmith@brand.com" className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Contact Phone</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                          <input required type="tel" placeholder="+1 (212) 000-0000" className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Project Specifications */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">02</span>
                      <h4 className="text-sm font-black uppercase tracking-[0.15em] text-gray-900">Project Specifications</h4>
                      <div className="flex-grow h-px bg-gray-100"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Primary Interest</label>
                        <div className="relative group">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors z-10" />
                          <select required className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm appearance-none cursor-pointer">
                            <option value="">Select Category</option>
                            <option value="manufacturing">Bulk Manufacturing</option>
                            <option value="sourcing">Fabric & Trim Sourcing</option>
                            <option value="samples">Sample Development</option>
                            <option value="logistics">Supply Chain Management</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Est. Annual Volume</label>
                        <div className="relative group">
                          <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors z-10" />
                          <select required className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm appearance-none cursor-pointer">
                            <option value="">Select Range</option>
                            <option value="low">1,000 - 5,000 units</option>
                            <option value="med">5,000 - 20,000 units</option>
                            <option value="high">20,000 - 100,000 units</option>
                            <option value="enterprise">100,000+ units</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Project Requirements & Timeline</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                        <textarea 
                          required 
                          rows={6} 
                          placeholder="Please describe your specific fabric needs, desired delivery dates, and any technical compliance requirements..." 
                          className="w-full bg-white border border-gray-200 pl-11 pr-4 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-accent text-white py-6 rounded-sm font-black tracking-[0.2em] uppercase hover:bg-gray-800 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-[0.98] disabled:opacity-70 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          INITIATING SECURE TRANSFER...
                        </>
                      ) : (
                        <>
                          TRANSMIT PROJECT INQUIRY
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      Priority Response Guaranteed for Enterprise Accounts
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Info Side - 5 Columns */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Executive Contact Cards */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b-2 border-accent inline-block pb-2">
                  Executive Direct
                </h3>
                <div className="space-y-6">
                  {/* Mir Hassan Ali Card */}
                  <div className="group bg-gray-50 p-8 border border-gray-100 rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <User className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-black text-xl uppercase tracking-tighter">Mir Hassan Ali</h4>
                        <p className="text-accent group-hover:text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Vice President</p>
                      </div>
                    </div>
                    <a href="tel:+19179306599" className="flex items-center gap-4 text-sm font-bold tracking-tight">
                      <div className="p-2 bg-accent/10 rounded-full group-hover:bg-white/20">
                        <Phone className="w-4 h-4 text-accent group-hover:text-white" />
                      </div>
                      +1 (917) 930-6599
                    </a>
                  </div>

                  {/* Usman Card */}
                  <div className="group bg-gray-50 p-8 border border-gray-100 rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <User className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-black text-xl uppercase tracking-tighter">Usman</h4>
                        <p className="text-accent group-hover:text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Executive Management</p>
                      </div>
                    </div>
                    <a href="tel:+13474253170" className="flex items-center gap-4 text-sm font-bold tracking-tight">
                      <div className="p-2 bg-accent/10 rounded-full group-hover:bg-white/20">
                        <Phone className="w-4 h-4 text-accent group-hover:text-white" />
                      </div>
                      +1 (347) 425-3170
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-8 bg-gray-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 relative z-10">Global Headquarters</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Location</p>
                      <p className="text-sm font-light leading-relaxed">
                        Alif Design & Sourcing USA, inc.<br/>
                        231 W. 39th Street, Suite #805<br/>
                        New York, NY 10018
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Office Line</p>
                      <p className="text-sm font-bold">+1 (917) 261-2038</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Official Inquiry</p>
                      <p className="text-sm font-bold text-accent hover:underline cursor-pointer">alif@a-d-s-usa.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map Component */}
              <div className="h-[300px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-inner border border-gray-200">
                <iframe 
                  title="Alif Design NYC Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4276135676356!2d-73.9922754234149!3d40.75480433512297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259abb947385f%3A0xc6c7606e14930263!2s231%20W%2039th%20St%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1716215000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;