import { ChartNoAxesColumnDecreasing, BadgeCheck,Settings, Briefcase,MapPin,TrendingUp  } from 'lucide-react'


import land1Src from './src/assets/land1.jpg'
import land2Src from './src/assets/land2.jpg'

import testimonial1 from './src/assets/testimonials/uifaces-human-avatar (1).jpg'
import testimonial2 from './src/assets/testimonials/uifaces-human-avatar.jpg'
import testimonial3 from './src/assets/testimonials/uifaces-popular-avatar (1).jpg'
import testimonial4 from './src/assets/testimonials/uifaces-popular-avatar.jpg'

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
export const landListings = [
  {
    id: 1,
    title: "The Heritage Gardens",
    location: "Ibeju-Lekki, Lagos State",
    imageURL: land1Src,
    size: "600 sqm (approx. 100x60ft)",
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
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
    status: ["New Listing", "Verified C of O", "Available"],
    security: "Governor's Consent",
    oldPrice: 135000000,
    newPrice: 135000000,
    ctaLink: "/listings/lagos-executive-quarters",
  },
];

export const clientTestimonials = [
  {
    image: testimonial1, 
    id: 1,
    quote: "The 24% returns were delivered exactly as promised. Dilux is the most secure investment platform I've used. They handle the legal work with complete transparency.",
    name: "A. Williams",
    location: " Abuja",
    job:'Investor',
  },
  {
    image: testimonial2,
    id: 2,
    quote: "Finding legally vetted land has always been a challenge, but Dilux made the entire process seamless and trustworthy. Highly recommend their auditing service and professional approach.",
    name: "T. Okoro",
    location: " Lagos",
    job:'Entrepreneur',
  },
  {
    image: testimonial3,
    id: 3,
    quote: "Our capital was secured, and the monthly income arrived on time. The personalized consultation was key to our decision and provided a clear path to growth.",
    name: "C. Eke",
    location: "Port Harcourt",
    job:'Software Developer',
  },
  {
    image: testimonial4,
    id: 4,
    quote: "Exceptional service from start to finish. The team is knowledgeable, and the property titles were clean and verified, which gave me total confidence in my purchase.",
    name: "J. Adewale",
    location: "UK (united Kingdom)",
    job:'Senetor',
  },
  {
    image: testimonial1,
    id: 5,
    quote: "Dilux is a game-changer in real estate investment. Their guarantee gave me peace of mind, and the asset value has already exceeded my expectations.",
    name: "M. Udoma",
    location: "Kano",
    job:'Bank Manager',
  },
];

export const diluxTeam = [
  {
    name: "Marcus Thorne",
    position: "Founder & Chief Strategist",
    image: testimonial1,
    bio: "Visionary leader with 15+ years in land acquisition and wealth preservation.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Chen",
    position: "Head of Land Acquisition",
    image: testimonial2,
    bio: "Expert at identifying high-yield undeveloped plots before they hit the open market.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    name: "David Okoro",
    position: "Senior Property Surveyor",
    image: testimonial3,
    bio: "Ensures every acre sold by Dilux is precisely mapped and structurally sound for development.",
    socials: { linkedin: "#" }
  },
  {
    name: "Elena Rodriguez",
    position: "Legal & Compliance Director",
    image: testimonial4,
    bio: "Specialist in land titles and zoning laws to ensure a 100% risk-free purchase for our clients.",
    socials: { linkedin: "#" }
  },
  {
    name: "Jameson Blake",
    position: "Portfolio Growth Manager",
    image: testimonial1,
    bio: "Helps investors turn raw land into high-performing real estate portfolios.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Amara Williams",
    position: "Client Relations Lead",
    image: testimonial2,
    bio: "Dedicated to providing a seamless 'white-glove' experience from inquiry to deed transfer.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    name: "Samuel Vane",
    position: "Land Development Consultant",
    image: testimonial3,
    bio: "Bridging the gap between raw earth and architectural masterpieces.",
    socials: { linkedin: "#" }
  },
  {
    name: "Isabella Rossi",
    position: "Director of Marketing",
    image: testimonial4,
    bio: "Capturing the story and potential of every property in the Dilux collection.",
    socials: { instagram: "#", twitter: "#" }
  },
  {
    name: "Tunde Bakare",
    position: "Field Operations Manager",
    image: testimonial1,
    bio: "The boots on the ground ensuring site security and infrastructure readiness.",
    socials: { linkedin: "#" }
  },
  {
    name: "Sophia Grant",
    position: "Investment Analyst",
    image: testimonial2,
    bio: "Using data-driven insights to predict the next big 'growth corridor' for land buyers.",
    socials: { linkedin: "#", twitter: "#" }
  }
];

export const diluxFaqs = [
  {
    id: 1,
    question: "Is Dilux Properties a certified real estate company in Nigeria?",
    answer: "Yes, Dilux is a fully registered and certified real estate firm. We pride ourselves on transparency, ensuring all our properties meet legal standards and regulatory requirements to protect our clients' interests."
  },
  {
    id: 2,
    question: "What kind of titles do your lands have? Do they come with a CofO?",
    answer: "We prioritize secure titles. Many of our premium listings come with a Certificate of Occupancy (CofO), Governor’s Consent, or are Free from Government Acquisition. We provide all necessary credentials so you can buy with total peace of mind."
  },
  {
    id: 3,
    question: "How does the 24% Return on Investment (ROI) work?",
    answer: "Our Land Buy-Back scheme allows you to invest in strategic locations with high appreciation rates. With a minimum capital of ₦1 Million, we guarantee a 24% return over a 12-month period, backed by a post-dated cheque and a Deed of Agreement."
  },
  {
    id: 4,
    question: "What is the minimum amount I need to start investing with Dilux?",
    answer: "We believe in making land ownership affordable. You can start your investment journey with Dilux with as little as ₦1 Million. We also offer flexible payment plans to help you become a land owner without financial strain."
  },
  {
    id: 5,
    question: "I live abroad. How can I safely buy land or invest with Dilux from the Diaspora?",
    answer: "We have a dedicated process for our Diaspora clients. We provide virtual tours, digital documentation, and secure payment gateways. You can also appoint a legal representative in Nigeria to verify documents on your behalf before closing."
  },
  {
    id: 6,
    question: "Are there any hidden charges like 'Omonile' fees after purchase?",
    answer: "No. At Dilux, we clear all communal and family hurdles before putting land on the market. Once you pay for your land and its documentation, you are free from any 'Omonile' interference or hidden development levies."
  },
  {
    id: 7,
    question: "Can I visit the site before making a payment?",
    answer: "Absolutely. We conduct free site inspections from Monday to Saturday. We want you to see the 'future foundation' of your investment physically before any commitment is made."
  },
  {
    id: 8,
    question: "What happens after I make my full payment?",
    answer: "Upon completion of payment, you receive your physical allocation and all relevant documents, including the Deed of Assignment and a Survey Plan, confirming you as the rightful owner of the property."
  }
];

export const adsData = [
  {
    id: 1,
    heading: "50ft x 100ft for only ₦600k!",
    subtext: "Flash Sale: Own a full plot in a fast-developing zone at an impossible price. Instant allocation guaranteed.",
    btnText: "Grab This Deal"
  },
  {
    id: 2,
    heading: "Earn 24% Profit in 12 Months",
    subtext: "Why let your money sit in a bank? Our Land Buy-Back scheme outpaces inflation with guaranteed ROI.",
    btnText: "Start Investing"
  },
  {
    id: 3,
    heading: "100% Gov't Backed - View CofO",
    subtext: "Sleep easy with 100% legal security. Verified titles and Government-approved certificates available for inspection.",
    btnText: "Verify Now"
  }
];

 export const roiCards = [
  {
    id: 1,
    title: "Start With ₦1,000,000+",
    text: "This opportunity is designed for serious, hard-working individuals ready to place ₦1 million or more into structured land banking. Your capital is used to acquire land early in fast-developing locations.",
    icon: <Briefcase/>
  },
  {
    id: 2,
    title: "Strategic Land Banking",
    text: "We acquire land at early-stage prices in growth corridors, then position it for value increase through development activity and rising demand. This structured approach is what drives the projected 24% return within a 10-month cycle.",
    icon: <MapPin/>
  },
  {
    id: 3,
    title: "Capital + 24% Return",
    text: "At the end of the 10-month period, investors receive their initial capital plus a return of up to 24%, based on the performance of the land cycle. This is growth tied to real assets, not speculation.",
    icon: <TrendingUp/>
  }
];


