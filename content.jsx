import { ChartNoAxesColumnDecreasing, BadgeCheck,Settings  } from 'lucide-react'

import land1Src from './src/assets/land1.jpg'
import land2Src from './src/assets/land2.jpg'

export const whatWeOffer = [
    {
      id: 1,
      icon: <ChartNoAxesColumnDecreasing size={30} />, 
      name: "Data-Driven Sourcing",
      description: "We leverage exclusive AI-powered market intelligence to identify undervalued, high-growth assets, ensuring maximum profit potential is baked into every acquisition.",
      bgcolor:'bg-dark-maroon',
    },
    {
      id: 2,
      icon: <BadgeCheck size={30} />, 
      name: "Rigorous 50-Point Audit",
      description: "Every property undergoes stringent legal and structural due diligence, guaranteeing your asset is stable, fully compliant, and free from risk before a single dollar is invested.",
      bgcolor:'bg-dark-maroon',
    },
    {
      id: 3,
      icon: <Settings  size={30} />, 
      name: "End-to-End Asset Control",
      description: "We manage the entire investment lifecycle in-house, eliminating third-party inefficiencies and costs, guaranteeing maximum value is returned directly to your portfolio.",
      bgcolor:'bg-light-gold ',
    },
  ]

  export const investmentReturns = [
  {
    capital: '900,000',
    income: '11,160,000',
  },
  {
    capital: '8,000,000',
    income: '9,920,000',
  },
  {
    capital: '7,000,000',
    income: '8,680,000',
  },
  {
    capital: '6,000,000',
    income: '7,440,000',
  },
  {
    capital: '5,000,000',
    income: '6,200,000',
  },
];



export const landListings = [
  {
    id: 1,
    title: "The Heritage Gardens",
    location: "Ibeju-Lekki, Lagos State",
    imageURL: land1Src,
    size: "600 sqm (approx. 100x60ft)",
    status: "New Listing",
    security: "Verified C of O",
    oldPrice: 85000000,
    newPrice: 79900000,
    ctaLink: "/listings/heritage-gardens",
  },
  {
    id: 2,
    title: "Imperial City Phase II",
    location: "Lugbe, Abuja FCT",
    imageURL: land1Src,
    size: "1000 sqm (approx. 100x100ft)",
    status: "Limited Units",
    security: "Govt. Approved Excision",
    oldPrice: 55000000,
    newPrice: 48500000,
    ctaLink: "/listings/imperial-city",
  },
  {
    id: 3,
    title: "Emerald Estate Views",
    location: "Epe Expressway, Lagos",
    imageURL: land1Src,
    size: "450 sqm (approx. 75x60ft)",
    status: "Available",
    security: "Perimeter Fencing Complete",
    oldPrice: 22000000,
    newPrice: 22000000,
    ctaLink: "/listings/emerald-estate",
  },
  // --- Additional 7 Listings ---
  {
    id: 4,
    title: "The Citadel Annex",
    location: "Asaba, Delta State",
    imageURL: land2Src,
    size: "500 sqm (approx. 100x50ft)",
    status: "Fast Selling",
    security: "Deed of Assignment",
    oldPrice: 18000000,
    newPrice: 18000000,
    ctaLink: "/listings/citadel-annex",
  },
  {
    id: 5,
    title: "Ocean View Residences",
    location: "Eleko Beach Road, Lagos",
    imageURL: land2Src,
    size: "800 sqm (approx. 100x80ft)",
    status: "Pre-Launch Price",
    security: "Gazetted Lands",
    oldPrice: 110000000,
    newPrice: 99500000,
    ctaLink: "/listings/ocean-view-residences",
  },
  {
    id: 6,
    title: "Royal Gardens Extension",
    location: "Portharcourt, Rivers State",
    imageURL: land2Src,
    size: "950 sqm (approx. 100x95ft)",
    status: "Available",
    security: "Certificate of Occupancy",
    oldPrice: 38000000,
    newPrice: 38000000,
    ctaLink: "/listings/royal-gardens-ext",
  },
  {
    id: 7,
    title: "Foresight Hub Estate",
    location: "Ibadan, Oyo State",
    imageURL: land1Src,
    size: "600 sqm (approx. 100x60ft)",
    status: "New Listing",
    security: "Approved Survey Plan",
    oldPrice: 15500000,
    newPrice: 14000000,
    ctaLink: "/listings/foresight-hub",
  },
  {
    id: 8,
    title: "Capital Zenith Plots",
    location: "Maitama II, Abuja FCT",
    imageURL: land2Src,
    size: "1200 sqm (approx. 120x100ft)",
    status: "Exclusive Release",
    security: "Allocation Paper Ready",
    oldPrice: 180000000,
    newPrice: 180000000,
    ctaLink: "/listings/capital-zenith",
  },
  {
    id: 9,
    title: "Sunstone Valley Estate",
    location: "Abeokuta, Ogun State",
    imageURL: land2Src,
    size: "400 sqm (approx. 80x50ft)",
    status: "Available",
    security: "Deed of Release",
    oldPrice: 9900000,
    newPrice: 8500000,
    ctaLink: "/listings/sunstone-valley",
  },
  {
    id: 10,
    title: "Lagos Executive Quarters",
    location: "VGC Extension, Lagos",
    imageURL: land1Src,
    size: "750 sqm (approx. 100x75ft)",
    status: "Limited Units",
    security: "Governor's Consent",
    oldPrice: 135000000,
    newPrice: 135000000,
    ctaLink: "/listings/lagos-executive-quarters",
  },
];

export const clientTestimonials = [
  {
    id: 1,
    quote: "The 24% returns were delivered exactly as promised. Dilux is the most secure investment platform I've used. They handle the legal work with complete transparency.",
    name: "A. Williams",
    location: "Investor, Abuja",
  },
  {
    id: 2,
    quote: "Finding legally vetted land has always been a challenge, but Dilux made the entire process seamless and trustworthy. Highly recommend their auditing service and professional approach.",
    name: "T. Okoro",
    location: "First-time Buyer, Lagos",
  },
  {
    id: 3,
    quote: "Our capital was secured, and the monthly income arrived on time. The personalized consultation was key to our decision and provided a clear path to growth.",
    name: "C. Eke",
    location: "Portfolio Manager, Port Harcourt",
  },
  {
    id: 4,
    quote: "Exceptional service from start to finish. The team is knowledgeable, and the property titles were clean and verified, which gave me total confidence in my purchase.",
    name: "J. Adewale",
    location: "Diaspora Investor, UK",
  },
  {
    id: 5,
    quote: "Dilux is a game-changer in real estate investment. Their guarantee gave me peace of mind, and the asset value has already exceeded my expectations.",
    name: "M. Udoma",
    location: "Entrepreneur, Kano",
  },
];