import {
  ChartNoAxesColumnDecreasing,
  BadgeCheck,
  Settings,
  Briefcase,
  MapPin,
  TrendingUp,
} from "lucide-react";

import land1Src from "./src/assets/land1.jpg";
import land2Src from "./src/assets/land2.jpg";

import testimonial1 from "./src/assets/testimonials/iRE.jpeg";
import testimonial2 from "./src/assets/testimonials/uifaces-human-avatar.jpg";
import testimonial3 from "./src/assets/testimonials/uifaces-popular-avatar (1).jpg";
import testimonial4 from "./src/assets/testimonials/uifaces-popular-avatar.jpg";

import diluxGmo from "./src/assets/team/IRE.jpeg";
import diluxAssociate1 from "./src/assets/team/lawrence.jpeg";
import diluxAssociate2 from "./src/assets/team/liuyt.jpeg";
import diluxAssociate3 from "./src/assets/team/precious.jpeg";
import diluxAssociate4 from "./src/assets/team/dilux-associate.jpeg";
import diluxAssociate5 from "./src/assets/team/dilux-associate (2).jpeg";

import heroSectionImage1 from "./src/assets/hero/dilux-hero1.jpg";
import heroSectionImage2 from "./src/assets/hero/dilux-hero2.jpg";
import heroSectionImage3 from "./src/assets/hero/dilux-hero3.jpg";

import phoneHeroSectionImage3 from "./src/assets/hero/phone-dilux-hero3.jpg";
import phoneHeroSectionImage2 from "./src/assets/hero/phone-dilux-hero2.jpg";
import phoneHeroSectionImage1 from "./src/assets/hero/phone-dilux-hero1.jpg";

import heroContactImg1 from "./src/assets/hero/contact/contact-1.webp";
import heroContactImg2 from "./src/assets/hero/contact/contact-2.webp";
import heroContactImg3 from "./src/assets/hero/contact/contact-3.webp";
import heroContactImg4 from "./src/assets/hero/contact/dilux-group-photo.jpeg";
import heroContactImg5 from "./src/assets/hero/contact/gmo-with-associate.jpeg";


import roiStartIllustration from "./src/assets/illustrations/start-investing-illustration.jpg";
import roiIllustration from "./src/assets/illustrations/roi-illustration.jpg";

export const heroSlides = [
  {
    id: 1,
    heading: "Verified Documents. Zero Risk. Period.",
    subtext:
      " We deal in 100% vetted titles. Your investment is legally bulletproof.",
    image: heroSectionImage1,
    phoneImage: phoneHeroSectionImage1,
    link: "/properties",
    cta: "See Available Lands",
  },
  {
    id: 2,
    heading: "Your Money, Growing by 25% to 40% Every Year.",
    subtext:
      "Why save in a bank when land appreciates faster? Secure high-growth plots in Aviation City, Photon City, Garland Mega City, and other properties in strategic locations",
    image: heroSectionImage2,
    phoneImage: phoneHeroSectionImage2,
    link: "/investment-plan",
    cta: "Get ROI Breakdown",
  },
  {
    id: 3,
    heading: "Luxury Land. Low Entry. High Reward.",
    subtext:
      "Premium estates shouldn't be out of reach. Start your land banking journey with flexible payment plans designed for smart earners.",
    image: heroSectionImage3,
    phoneImage: phoneHeroSectionImage3,
    link: "/investment-plan",
    cta: "View Payment Plans",
  },
  {
    id: 4,
    heading: "Instant Allocation. Build Your Legacy.",
    subtext: " Join 500+ investors who built their future with Dilux.",
    phoneImage: phoneHeroSectionImage1,
    image: heroSectionImage1,
    link: "/contact-us",
    cta: "Talk to an Expert",
  },
];

export const investmentHeroSlides = [
  {
    id: 1,
    heading: "A Contracted 23% - 25%  Return in 10 Months.",
    subtext:
      "This is not speculation. It’s a documented investment plan with clearly defined entry, tenure, and exit. Minimum entry is ₦1,000,000, secured against verified land assets.",
    image: heroSectionImage1,
    phoneImage: phoneHeroSectionImage1,
    cta: "Meet an Expert",
    link: "/contact-us#contact-form-section",
  },
  {
    id: 2,
    heading: "Backed by Real Land. Protected by Law.",
    subtext:
      "Every naira invested is tied to government-verified land with valid title documentation. Your capital is protected by tangible assets — not promises.",
    image: heroSectionImage2,
    phoneImage: phoneHeroSectionImage2,
    cta: "Learn More",
    link: "/contact-us#contact-form-section",
  },
  {
    id: 3,
    heading: "Designed for Serious Investors, Not Gamblers.",
    subtext:
      "If your money is idle or losing value, this plan puts it to work with a fixed 25% - 23% return over a short 10-month cycle — no market swings, no guesswork.",
    image: heroSectionImage3,
    phoneImage: phoneHeroSectionImage3,
    cta: "See Proof",
    link: "/contact-us#contact-form-section",
  },
  {
    id: 4,
    heading: "Why Smart Investors Leverage This Opportunity.",
    subtext:
      "Our investors understand one thing: when returns are structured, asset-backed, and time-bound, capital moves fast. Many raise funds elsewhere to take full advantage.",
    image: heroSectionImage1,
    phoneImage: phoneHeroSectionImage1,
    cta: "Meet an Expert",
    link: "/contact-us#contact-form-section",
  },
];

export const contactHeroSlides = [
  {
    id: 1,
    heading: "Visit the Land. Verify Everything Yourself.",
    subtext:
      "Book a guided site visit and experience the location, documentation, and development firsthand. Our team will walk you through every detail before you invest.",
    image: heroContactImg1,
    phoneImage: heroContactImg1,
    link: "/contact-us#location-map-section",
    cta: "See Physical Location",
  },
  
  {
    id: 2,
    heading: "See the Location. Meet the Experts.",
    subtext:
      "Visit our office or schedule a private estate tour. Our team will answer your questions, explain the investment process, and show you available plots.",
    image: heroContactImg4,
    phoneImage: heroContactImg4,
    link: "/contact-us#contact-form-section",
    cta: "Contact Us",
  },
  {
    id: 3,
    heading: "Speak With Our Investment Advisors.",
    subtext:
      "Whether online or in person, our experts are ready to guide you through every step — from property selection to securing your land.",
    image: heroContactImg3,
    phoneImage: heroContactImg3,
    link: "/contact-us#contact-form-section",
    cta: "Talk to an Expert",
  },
    {
    id: 4,
    heading: "See the Location. Meet the Experts.",
    subtext:
      "Visit our office or schedule a private estate tour. Our team will answer your questions, explain the investment process, and show you available plots.",
    image: heroContactImg2,
    phoneImage: heroContactImg2,
    link: "/contact-us#contact-form-section",
    cta: "Contact Us",
  },
];

export const whatWeOffer = [
  {
    id: 1,
    icon: <ChartNoAxesColumnDecreasing size={30} />,
    name: "See First. Pay Later.",
    description:
      "At DILUX, we start with trust — not money.We take you for a free site inspection before any payment discussion. You see the land yourself. You visit our branch office. You know who we are and where we operate from.No pressure. No hidden demands.Just clarity before commitment.",
    bgcolor: "bg-dark-maroon",
  },
  {
    id: 2,
    icon: <BadgeCheck size={30} />,
    name: "Documentation That Protects You",
    description:
      "We don’t joke with paperwork.Every client receives a minimum of two valid documents. We ensure proper processing because true ownership is backed by paper — not promises.Your land is protected legally and properly.",
    bgcolor: "bg-dark-maroon",
  },
  {
    id: 3,
    icon: <Settings size={30} />,
    name: "Secure Allocation & Transparent Payment",
    description:
      "With DILUX, you don’t pay and wait.Once payment is confirmed, allocation is immediate. You know exactly where your plot is — where it starts and where it ends.All payments go through our recognized company account and are fully documented.No personal accounts.No delays.No uncertainty",
    bgcolor: "bg-light-gold ",
  },
];

export const landListings = [
  {
    id: 1,
    title: "Photon City Estate",
    location: "Aihuobabunbekun, off Oluku, Benin City",
    imageURL: land1Src,
    size: "450sqm (approx 100X50ft)",
    status: ["Available", "Rapidly Developing", "20hr Power"],
    security: "Aihuobunbekun Community Approval",
    oldPrice: 1850000, 
    newPrice: 1650000, 
    ctaLink: "/listings/photon-city",
  },
  {
    id: 2,
    title: "Garland MegaCity Estate",
    location: "Egba Area, Benin City",
    imageURL: land2Src,
    size: "450sqm (approx 100X50ft)",
    status: ["Available", "Phases 1 & 2 Sold Out", "Best Value"],
    security: "Evbo-Iyamu Community Approval",
    oldPrice: 1300000,
    newPrice: 1000000,
    ctaLink: "/listings/garland-megacity",
  },
];

export const clientTestimonials = [
  {
    image: testimonial1,
    id: 1,
    quote:
      "The 24% returns were delivered exactly as promised. Dilux is the most secure investment platform I've used. They handle the legal work with complete transparency.",
    name: "A. Williams",
    location: " Abuja",
    job: "Investor",
  },
  {
    image: testimonial2,
    id: 2,
    quote:
      "Finding legally vetted land has always been a challenge, but Dilux made the entire process seamless and trustworthy. Highly recommend their auditing service and professional approach.",
    name: "T. Okoro",
    location: " Lagos",
    job: "Entrepreneur",
  },
  {
    image: testimonial3,
    id: 3,
    quote:
      "Our capital was secured, and the monthly income arrived on time. The personalized consultation was key to our decision and provided a clear path to growth.",
    name: "C. Eke",
    location: "Port Harcourt",
    job: "Software Developer",
  },
  {
    image: testimonial4,
    id: 4,
    quote:
      "Exceptional service from start to finish. The team is knowledgeable, and the property titles were clean and verified, which gave me total confidence in my purchase.",
    name: "J. Adewale",
    location: "UK (united Kingdom)",
    job: "Senetor",
  },
  {
    image: testimonial1,
    id: 5,
    quote:
      "Dilux is a game-changer in real estate investment. Their guarantee gave me peace of mind, and the asset value has already exceeded my expectations.",
    name: "M. Udoma",
    location: "Kano",
    job: "Bank Manager",
  },
];

export const diluxTeam = [
  {
    name: "Daniel Kelechi, iRE",
    position: "GMD, Dilux Properties",
    image: diluxGmo,
    bio: "Visionary leader with 15+ years in land acquisition and wealth preservation.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Lawrence Equaleona",
    position: "Admin, Inspection and allocation office",
    image: diluxAssociate1,
    bio: "Expert at identifying high-yield undeveloped plots before they hit the open market.",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Precious Igben",
    position: "Dilux Land Manager & Human Resource manager",
    image: diluxAssociate3,
    bio: "Specialist in land titles and zoning laws to ensure a 100% risk-free purchase for our clients.",
    socials: { linkedin: "#" },
  },
  {
    name: "Miracle Ehigiegba",
    position: "Sales and Marketing Manager",
    image: diluxAssociate2,
    bio: "Ensures every acre sold by Dilux is precisely mapped and structurally sound for development.",
    socials: { linkedin: "#" },
  },
  {
    name: "Mrs Rebecca Chizoba",
    position: "Dilux Associaate",
    image: diluxAssociate4,
    bio: "Helps investors turn raw land into high-performing real estate portfolios.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Omotoso Abiodun Moses",
    position: "Dilux Associate",
    image: diluxAssociate5,
    bio: "Dedicated to providing a seamless 'white-glove' experience from inquiry to deed transfer.",
    socials: { linkedin: "#", instagram: "#" },
  },
];

export const diluxFaqs = [
  {
    id: 1,
    question: "Is Dilux Properties a certified real estate company in Nigeria?",
    answer:
      "Yes, Dilux is a fully registered and certified real estate firm  with the Corporate Affairs Commission (CAC) and the Economic and Financial Crimes Commision (EFCC) . ",
  },
  {
    id: 2,
    question: "Does Dilux office has a physical office ?",
    answer:
      "Yes, dilux properties operate from a physical office . you are welcome to visit us for consultations , inquires , and transaction processing at : G10, Elizabeth Nmoye Plaza, 188 Uselu Lagos Road, Benin City Nigeria. We are always available to meet our client in person.  ",
  },
  {
    id: 5,
    question:
      "I live abroad. How can I safely buy land or invest with Dilux from the Diaspora?",
    answer:
      "We have a dedicated process for our Diaspora clients. We provide virtual tours, digital documentation, and secure payment gateways. You can also appoint a legal representative in Nigeria to verify documents on your behalf before closing.",
  },
  {
    id: 7,
    question: "Can I visit the site before making a payment?",
    answer:
      "Absolutely. It is mandatory that you  inspect your property of interest before any transaction with us. We conduct free site inspections from Monday to Saturday.",
  },
  {
    id: 8,
    question: "What happens after I make my full payment?",
    answer:
      "Upon completion and confirmation of payment, the next phase is documentation processing followed by physical allocation of the property",
  },
];

export const adsData = [
  {
    id: 1,
    heading: "50ft x 100ft for only ₦600k!",
    subtext:
      "Flash Sale: Own a full plot in a fast-developing zone at an impossible price. Instant allocation guaranteed.",
    btnText: "Grab This Deal",
    link: "/properties",
  },
  {
    id: 2,
    heading: "Earn 24% Profit in 12 Months",
    subtext:
      "Why let your money sit in a bank? Our Land Buy-Back scheme outpaces inflation with guaranteed ROI.",
    btnText: "Start Investing",
    link: "/investment-plan",
  },
  {
    id: 3,
    heading: "100% Gov't Backed - View CofO",
    subtext:
      "Sleep easy with 100% legal security. Verified titles and Government-approved certificates available for inspection.",
    btnText: "Verify Now",
    link: "/properties",
  },
];

export const roiCards = [
  {
    id: 1,
    image: roiStartIllustration,
    title: "Start With ₦1,000,000+",
    shortDesc:
      "A premium entry point for serious investors ready to leverage structured land banking for wealth creation.",
    longDesc:
      "This opportunity is specifically curated for high-intent, serious, and hard-working individuals who are ready to commit a minimum capital of ₦1 million into our structured land banking model.\n\n By pooling these resources, we are able to move swiftly in the real estate market, acquiring large tracts of land in high-potential areas before prices skyrocket. Your capital isn't just sitting in a bank; it is actively deployed to secure physical assets in fast-developing corridors.\n\n This stage is the bedrock of your investment, ensuring that you enter the market at the lowest possible price point to maximize your eventual exit spread.",
    icon: <Briefcase size={35} />,
    bg: "bg-green",
  },
  {
    id: 2,
    image: roiIllustration,
    title: "Strategic Land Banking",
    shortDesc:
      "Strategic acquisition and positioning in Nigeria's most promising growth corridors for maximum value appreciation.",
    longDesc:
      "Our strategy goes far beyond simply buying land. We identify 'growth corridors'—regions where government infrastructure, industrial expansion, and residential demand are projected to intersect. We acquire these lands at their raw, early-stage prices and then strategically position them for massive value increase. This is achieved through active land management, perimeter fencing, and wait-period optimization. By timing the market cycle perfectly, we create a high-demand asset. This meticulous, data-driven approach is the engine that drives our projected 24% return, turning a passive holding into a high-performance financial instrument within a crisp 10-month window.",
    icon: <MapPin size={35} />,
    bg: "bg-light-gold",
  },
  {
    id: 3,
    image: roiIllustration,
    title: "Capital + 24% Return",
    shortDesc:
      "Enjoy a guaranteed exit strategy with your initial capital plus a highly competitive 24% return on investment.",
    longDesc:
      "The climax of the investment cycle is the payout phase. At the conclusion of the 10-month period, the land assets are liquidated or refinanced based on their new appreciated value.\n\n As an investor, you receive your full initial capital back along with a surplus return of up to 24%. Unlike the volatile stock market or depreciating currency, this growth is directly tied to the physical reality of land development and urban expansion in Nigeria. \n\n It is a wealth-building strategy built on tangible assets, providing you with a transparent, predictable, and highly rewarding exit. This is not speculation; it is a structured financial harvest from a real-world asset cycle.",
    icon: <TrendingUp size={35} />,
    bg: "bg-green",
  },
];
