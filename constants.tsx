import React from 'react';
import { 
  Scissors, 
  Search, 
  Settings, 
  ShieldCheck, 
  Truck, 
  BarChart, 
  CheckCircle,
  Globe
} from 'lucide-react';

export const COLORS = {
  primary: '#1F1F1F',
  secondary: '#FFFFFF',
  accent: '#1E4D6B',
  neutral: '#F5F5F5',
  charcoal: '#2D2D2D'
};

export const SERVICES_DATA = [
  {
    id: 'design',
    title: 'Design & Product Development',
    description: 'Custom sketching, tech packs, sampling, and intensive fabric research to bring your creative vision to life.',
    icon: <Scissors className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sourcing',
    title: 'Fabric & Trim Sourcing',
    description: 'Connecting clients with top-tier mills, dyes, and sustainable trim options globally. We provide a curated library of premium textiles.',
    icon: <Search className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1520004434532-668416a08753?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'production',
    title: 'Production Management',
    description: 'End-to-end oversight of production cycles, ensuring timelines and bulk quality standards are met.',
    icon: <Settings className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'quality',
    title: 'Quality Control & Assurance',
    description: 'Rigorous in-house QA inspections at every stage—from raw material to final packing.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'logistics',
    title: 'Logistics & Delivery',
    description: 'Seamless shipping to the USA and worldwide with full tracking and customs coordination.',
    icon: <Truck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PRODUCTS_DATA = [
  {
    id: '1',
    category: 'Cargo Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800',
    description: 'Durable, high-performance utility shorts with reinforced stitching.'
  },
  {
    id: '2',
    category: "Blank Tee's",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: 'Premium heavyweight cotton blanks available in multiple GSM options.'
  },
  {
    id: '3',
    category: 'Denim',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
    description: 'Authentic selvedge and stretch denim for high-end fashion collections.'
  },
  {
    id: '4',
    category: "Hoodie's",
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Superior fleece-lined hoodies with premium ribbing and custom hardware.'
  },
  {
    id: '5',
    category: "Polo",
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800',
    description: 'Classic and modern fit polos in pique and jersey fabrics.'
  },
  {
    id: '6',
    category: "T-Shirt",
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    description: 'High-quality graphic and basic t-shirts with various necklines.'
  },
  {
    id: '7',
    category: "Legging",
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=800',
    description: 'Performance-driven activewear leggings with moisture-wicking technology.'
  },
  {
    id: '8',
    category: "Denim Shorts",
    image: 'https://images.unsplash.com/photo-1591348113547-6ad87019375a?auto=format&fit=crop&q=80&w=800',
    description: 'Fashionable distressed and clean-cut denim shorts for seasonal lines.'
  },
  {
    id: '9',
    category: "Flannel Shirts",
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    description: 'Soft, brushed cotton flannel shirts available in custom yarn-dye checks.'
  },
  {
    id: '10',
    category: "Joggers",
    image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&q=80&w=800',
    description: 'Premium loungewear joggers with tapered fits and elasticized cuffs.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    company: 'Urban Threads',
    content: 'Alif Design has been instrumental in scaling our production. Their attention to quality and detail is unmatched in the industry.',
    rating: 5
  },
  {
    id: '2',
    name: 'David Chen',
    company: 'Peak Performance',
    content: 'The sourcing capabilities they offer saved us months of searching for the right performance fabrics. Truly a strategic partner.',
    rating: 5
  },
  {
    id: '3',
    name: 'James Wilson',
    company: 'Minimalist Collective',
    content: 'Reliability is everything in apparel. Alif Design consistently delivers on time and within budget, with zero compromises on ethics.',
    rating: 5
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Trusted Sourcing Partners',
    description: 'Vast network across Asia and USA ensures competitive pricing and quality.',
    icon: <Globe className="w-10 h-10 text-accent" />
  },
  {
    title: 'End-to-End Solutions',
    description: 'We handle everything from initial design concept to the final delivery.',
    icon: <BarChart className="w-10 h-10 text-accent" />
  },
  {
    title: 'Quick Turnaround',
    description: 'Efficient workflows that prioritize speed without sacrificing quality.',
    icon: <CheckCircle className="w-10 h-10 text-accent" />
  }
];

export const CAPABILITIES = [
  'Material expertise (Cotton, Polyester, Blends)',
  'Custom labels & packaging design',
  'Flexible MOQs for scaling brands',
  'Eco-friendly and sustainable fabric options',
  'Comprehensive factory audits & compliance checks'
];