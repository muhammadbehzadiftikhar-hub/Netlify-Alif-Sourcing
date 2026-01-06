import React from 'react';
import { Target, Eye, Shield, Leaf, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gray-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1E4D6B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 uppercase tracking-tighter leading-none">Who We Are</h1>
          <p className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Your Global Textile Partner</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8"></div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-tighter leading-tight">A Legacy of Excellence in Sourcing</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Alif Design And Sourcing USA is a full-service textile & apparel sourcing company dedicated to helping brands bring their vision to life. With over 45 years of experience in global sourcing, product development, and quality management, we bridge the gap between creative design and reliable manufacturing.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our presence in key manufacturing hubs like Jaipur and Dhaka allows us to offer real-time insights and unparalleled control over the production process. We pride ourselves on transparency, ethical practices, and a commitment to sustainable growth for our partners.
            </p>
          </div>
          <div className="relative group order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590050752117-23a9d7fc217d?q=80&w=1200&auto=format&fit=crop" 
                alt="Hawa Mahal - A symbol of textile heritage in Jaipur" 
                className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-10 hidden md:block shadow-2xl z-10 border border-white/10">
              <span className="text-6xl font-black block leading-none mb-1">45+</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] leading-tight">Years<br/>Experience</span>
            </div>
            {/* Mobile Experience Indicator */}
            <div className="md:hidden mt-6 bg-accent text-white p-6 text-center rounded-sm">
               <span className="text-4xl font-black block leading-none mb-1">45+</span>
               <span className="text-xs font-bold uppercase tracking-[0.2em]">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Cards */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 border border-gray-100 shadow-sm rounded-sm hover:shadow-lg transition-shadow duration-300">
            <Target className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-tighter">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide transparent, ethical, and efficient sourcing solutions that empower fashion brands to succeed in an ever-evolving global market.
            </p>
          </div>
          <div className="bg-white p-12 border border-gray-100 shadow-sm rounded-sm hover:shadow-lg transition-shadow duration-300">
            <Eye className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-tighter">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted partner in apparel sourcing and manufacturing support, setting new standards for quality and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">Core Values</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Shield className="w-10 h-10" />, title: 'Quality' },
            { icon: <Zap className="w-10 h-10" />, title: 'Transparency' },
            { icon: <Heart className="w-10 h-10" />, title: 'Reliability' },
            { icon: <Leaf className="w-10 h-10" />, title: 'Sustainability' }
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
              <h4 className="font-bold uppercase tracking-widest text-sm group-hover:text-accent transition-colors">{v.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;