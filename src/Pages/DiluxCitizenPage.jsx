import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  ClipboardList,
  GraduationCap,
  HandCoins,
  Headset,
  Map,
  MapPinned,
  Megaphone,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../Components/HeroSection";
import { WhatsAppIcon } from "../Components/WhatsAppIcon";
import { Footer } from "../Components/Footer";
import { diluxCitizenHeroSlides } from "../content";
import "./DiluxCitizenPage.css";

import roleInterns from "../assets/dilux-citizen.webp";
import roleSponsors from "../assets/hero/contact/contact-2.webp";
import roleCorpers from "../assets/hero/contact/contact-3.webp";
import roleStudents from "../assets/dilux-citizen.webp";
import roleAssociates from "../assets/hero/contact/dilux-group-photo.jpeg";

const citizenRoles = [
  {
    id: 1,
    title: "Interns",
    badge: "Learn • Practice • Earn",

    summary:
      "Join the Dilux Academy and gain real-world experience in Business Development and Real Estate while earning commissions from live property sales.",

    description:
      "Train for 6 or 12 months through hands-on mentorship, then apply your skills by marketing verified Dilux properties and earning a percentage(%) commission on every successful sale.",

    highlights: [
      "6 to 12 months of mentorship",
      "Access to verified Dilux properties",
      "Earn percentage(%) commission on every sale",
    ],

    image: roleInterns,
  },

  {
    id: 2,
    title: "Dilux Sponsors | Partners",
    badge: "Build the Future With Us",

    summary:
      "Join a select group of visionaries helping shape the future of land ownership and business education.",

    description:
      "Partner with Dilux to expand access to verified land while empowering the next generation of entrepreneurs through practical business education.",

    highlights: [
      "Recognized Dilux Growth Partner",
      "Support future entrepreneurs",
      "Invest in land and education",
    ],

    image: roleSponsors,
  },

  {
    id: 3,
    title: "Corpers",
    badge: "Serve • Grow • Earn",

    summary:
      "Complete your NYSC with practical experience, mentorship, and rewarding real estate opportunities.",

    description:
      "Whether Dilux is your PPA or not, you can access our property portfolio, gain industry experience, and earn commissions while building valuable professional skills.",

    highlights: [
      "Ideal NYSC opportunity (legally approved)",
      "Access to all Dilux properties",
      "Mentorship and commissions",
    ],

    image: roleCorpers,
  },

  {
    id: 4,
    title: "IT Students",
    badge: "Industry Experience",

    summary:
      "Gain practical real estate experience that complements your classroom knowledge.",

    description:
      "Estate Management students receive hands-on industry training, work with verified properties, and earn a percentage(%) commission on every successful sale.",

    highlights: [
      "Ideal for Estate Management students",
      "Practical market experience",
      "Earn percentage(%) commission",
    ],

    image: roleStudents,
  },

  {
    id: 5,
    title: "Associates",
    badge: "Sell Without Limits",

    summary:
      "Join the Dilux network and create income by connecting buyers with trusted property opportunities.",

    description:
      "Enjoy flexible access to our verified property portfolio, build your network, and earn by referring and marketing quality real estate opportunities.",

    highlights: [
      "Flexible participation",
      "Verified property access",
      "Grow your income",
    ],

    image: roleAssociates,
  },
];

const roleIcons = [
  <GraduationCap size={18} />,
  <HandCoins size={18} />,
  <ShieldCheck size={18} />,
  <Building2 size={18} />,
  <Users size={18} />,
];

const staffDepartments = [
  {
    title: "General Managing Director (GMD)",
    subtitle: "Leadership & Strategy",
    icon: <BriefcaseBusiness size={22} />,
    responsibilities: [
      "Provides vision and leadership",
      "Makes strategic business decisions",
      "Approves major transactions and partnerships",
      "Represents the company publicly",
    ],
  },
  {
    title: "General Manager",
    subtitle: "Operations & Delivery",
    icon: <Building2 size={22} />,
    responsibilities: [
      "Oversees daily operations",
      "Supervises all departments",
      "Ensures company targets are achieved",
      "Reports directly to the GMD",
    ],
  },
  {
    title: "Sales Head",
    subtitle: "Growth & Revenue",
    icon: <TrendingUp size={22} />,
    responsibilities: [
      "Generates leads",
      "Markets company properties",
      "Conducts client follow-up",
      "Closes sales",
      "Prepares sales reports",
    ],
  },
  {
    title: "Inspection & Allocation Manager",
    subtitle: "Site Coordination",
    icon: <MapPinned size={22} />,
    responsibilities: [
      "Schedules site inspections",
      "Coordinates transportation",
      "Allocates plots",
      "Maintains allocation records",
      "Verifies land documentation",
      "Ensures correct plot allocation",
    ],
  },
  {
    title: "Customer Service",
    subtitle: "Client Support",
    icon: <Headset size={22} />,
    responsibilities: [
      "Handles customer inquiries",
      "Resolves complaints",
      "Provides after-sales support",
      "Maintains client relationships",
    ],
  },
  {
    title: "Marketing Officer",
    subtitle: "Brand & Outreach",
    icon: <Megaphone size={22} />,
    responsibilities: [
      "Creates marketing campaigns",
      "Manages social media",
      "Organizes promotional events",
      "Generates qualified leads",
    ],
  },
  {
    title: "Admin",
    subtitle: "Operations Support",
    icon: <ClipboardList size={22} />,
    responsibilities: [
      "Maintains company records",
      "Prepares reports",
      "Coordinates meetings",
      "Handles office administration",
    ],
  },
  {
    title: "Accountant",
    subtitle: "Finance & Reporting",
    icon: <Wallet size={22} />,
    responsibilities: [
      "Manages finances",
      "Processes payments",
      "Prepares financial reports",
      "Maintains accounting records",
    ],
  },
  {
    title: "Legal Officer",
    subtitle: "Compliance & Contracts",
    icon: <Scale size={22} />,
    responsibilities: [
      "Verifies land documents",
      "Drafts agreements",
      "Handles legal matters",
      "Ensures compliance",
    ],
  },
  {
    title: "Human Resources",
    subtitle: "People & Culture",
    icon: <UsersRound size={22} />,
    responsibilities: [
      "Recruits staff",
      "Conducts orientation",
      "Monitors performance",
      "Enforces company policies",
    ],
  },
  {
    title: "Academy Coordinator",
    subtitle: "Dilux Real Estate & Business Academy",
    icon: <GraduationCap size={22} />,
    responsibilities: [
      "Organizes training",
      "Coordinates orientation",
      "Tracks attendance",
      "Oversees certification",
    ],
  },
  {
    title: "Media & Creative Officer",
    subtitle: "Content & Branding",
    icon: <Camera size={22} />,
    responsibilities: [
      "Designs graphics",
      "Produces photos & videos",
      "Manages branding",
      "Creates promotional content",
    ],
  },
  {
    title: "Field Officer",
    subtitle: "Property Intelligence",
    icon: <Map size={22} />,
    responsibilities: [
      "Scouts new properties",
      "Inspects sites",
      "Monitors projects",
    ],
  },
];

export function DiluxCitizenPage() {
  return (
    <div className="dilux-citizen-page">
      <Helmet>
        <title>Dilux Citizen | Roles, Access and Property Opportunities</title>
        <meta
          name="description"
          content="Discover the Dilux Citizen network: interns, sponsors, corpers, IT students, and associate citizens who help connect people to verified land and property opportunities."
        />
        <link rel="canonical" href="https://diluxproperties.com.ng/dilux-citizen" />
      </Helmet>

      <WhatsAppIcon />
      <HeroSection heroSlides={diluxCitizenHeroSlides} />

      <main className="dilux-citizen-main">
        <section className="citizen-intro-section">
          <div className="container">
            <div className="citizen-intro-card">
              <div className="citizen-intro-copy">
                <span className="citizen-pill">Dilux Citizen Program</span>
                <h2>Become a trusted part of the Dilux property network.</h2>
                <p>
                  Dilux Citizen program is built for people who want more than a transaction. It is for interns, sponsors, corpers, IT students, and associate citizens who can help buyers, sellers, and investors access verified land and property opportunities with clarity, confidence, and professionalism.
                </p>
                <div className="citizen-highlights-row">
                  <div className="citizen-highlight-item">
                    <BadgeCheck size={18} />
                    <span>Verified access to property opportunities</span>
                  </div>
                  <div className="citizen-highlight-item">
                    <BadgeCheck size={18} />
                    <span>Professional support for land and property sales</span>
                  </div>
                </div>
              </div>
              <div className="citizen-intro-visual">
                <div className="citizen-visual-card">
                  <p className="visual-label">Who can join</p>
                  <h3>Everyone with purpose, credibility, and a desire to grow.</h3>
                  <p>
                    From young professionals to strategic partners, each member plays a role in expanding access to secure property opportunities.
                  </p>
                  <Link to="https://app.diluxproperties.com.ng/associate/profile" target="_blank" className="citizen-login-btn citizen-login-btn-secondary">
                    Login  | Sign Up
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="citizen-roles" className="citizen-roles-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Member roles</p>
              <h2>Choose the role that fits your journey.</h2>
              <p>
                Each Dilux Citizen group is designed to support a unique contribution while giving access to opportunities to connect buyers, sellers, and investors around verified land and property deals.
              </p>
            </div>

            <div className="citizen-role-grid">
              {citizenRoles.map((role, index) => (
                <article className="citizen-role-card" key={role.id}>
                  <div className="citizen-role-media">
                    <img src={role.image} alt={role.title} loading="lazy" />
                  </div>
                  <div className="citizen-role-body">
                    <div className="citizen-role-badge">
                      {roleIcons[index]}
                      <span>{role.badge}</span>
                    </div>
                    <h3>{role.title}</h3>
                    <p className="citizen-role-summary">{role.summary}</p>
                    <p>{role.description}</p>
                    <ul>
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link to="https://app.diluxproperties.com.ng/sign-in" target="_blank" className="citizen-login-btn">
                      Login to Portal
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="citizen-careers-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Career opportunities</p>
              <h2>Join Our Professional Team</h2>
              <p>
                Behind every successful property transaction is a team of professionals. From leadership and legal compliance to customer service, media and field operations, every department plays a vital role in delivering the Dilux experience.
              </p>
            </div>

            <div className="citizen-department-grid">
              {staffDepartments.map((department) => (
                <article className="citizen-department-card" key={department.title}>
                  <div className="citizen-department-icon">{department.icon}</div>
                  <div className="citizen-department-header">
                    <h3>{department.title}</h3>
                    {department.subtitle ? <p className="citizen-department-subtitle">{department.subtitle}</p> : null}
                  </div>
                  <ul className="citizen-department-list">
                    {department.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="citizen-cta-card">
              <div className="citizen-cta-copy">
                <p className="section-kicker">Grow with Dilux</p>
                <h3>Build Your Career With Dilux</h3>
                <p>
                  Whether you&apos;re passionate about management, sales, customer service, legal services, finance, media or field operations, Dilux offers opportunities to grow while helping people own verified land with confidence.
                </p>
              </div>
              <div className="citizen-cta-actions">
                <Link to=""  className="citizen-login-btn coming-soon">
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
                <Link to="" className="citizen-login-btn citizen-login-btn-secondary coming-soon">
                  Contact HR
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
