import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { SERVICES_DATA, WHY_CHOOSE_US, PRODUCTS_DATA, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1590050752117-23a9d7fc217d?q=80&w=2000&auto=format&fit=crop" 
            alt="Hawa Mahal Jaipur - Global sourcing hub" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase tracking-tighter">
                Crafting Quality Apparel with Global Sourcing Excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
                From design to delivery — we simplify apparel manufacturing for brands worldwide. Expert sourcing across Asia & USA for over 45 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-accent text-white px-10 py-4 rounded-sm font-bold text-center tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  GET A QUOTE
                </Link>
                <Link 
                  to="/services" 
                  className="bg-transparent border border-white text-white px-10 py-4 rounded-sm font-bold text-center tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="hidden lg:flex bg-accent p-12 flex-col items-center justify-center text-center shadow-2xl rounded-sm min-w-[280px] border border-white/10">
              <span className="text-8xl font-black block leading-none mb-1">45+</span>
              <span className="text-lg font-bold uppercase tracking-[0.2em] leading-tight">Years<br/>Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">Why Partner With Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-gray-50 hover:shadow-xl transition-shadow duration-300 rounded-sm border border-gray-100">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tighter">Comprehensive Solutions</h2>
            <p className="text-gray-400 font-light">We bridge the gap between creative design and reliable manufacturing through our global network of facilities.</p>
          </div>
          <Link to="/services" className="mt-6 md:mt-0 flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
            VIEW ALL SERVICES <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {SERVICES_DATA.slice(0, 4).map((service) => (
            <div key={service.id} className="group border border-gray-800 p-8 hover:bg-gray-800 transition-all duration-300">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">Product Categories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">Versatile, high-quality manufacturing capabilities for your most essential apparel lines.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_DATA.slice(0, 6).map((product) => (
            <div key={product.id} className="relative group overflow-hidden h-[400px] rounded-sm shadow-lg">
              <img src={product.image} alt={product.category} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-bold uppercase tracking-wider mb-2">{product.category}</h3>
                <Link to="/products" className="inline-block text-white border-b border-white pb-1 text-sm font-bold tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest border-b-2 border-accent pb-2 hover:text-gray-900 hover:border-gray-900 transition-all">
            Browse Full Catalog <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 relative border border-gray-100 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.content}"</p>
              <div>
                <h5 className="font-bold text-gray-900 uppercase text-sm tracking-widest">{t.name}</h5>
                <p className="text-accent text-xs font-bold">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-tighter">Ready to Start Your Next Collection?</h2>
          <Link to="/contact" className="bg-white text-gray-900 px-12 py-5 rounded-sm font-extrabold tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-xl">
            CONTACT US TODAY
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;