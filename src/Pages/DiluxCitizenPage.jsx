import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Building2, GraduationCap, HandCoins, ShieldCheck, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../Components/HeroSection";
import { WhatsAppIcon } from "../Components/WhatsAppIcon";
import { Footer } from "../Components/Footer";
import { diluxCitizenHeroSlides } from "../content";
import "./DiluxCitizenPage.css";

import roleInterns from "../assets/hero/contact/contact-1.webp";
import roleSponsors from "../assets/hero/contact/contact-2.webp";
import roleCorpers from "../assets/hero/contact/contact-3.webp";
import roleStudents from "../assets/hero/dilux-hero2.jpg";
import roleAssociates from "../assets/hero/contact/dilux-group-photo.jpeg";

const citizenRoles = [
  {
    id: 1,
    title: "Interns",
    badge: "Early Career Growth",
    summary:
      "Build experience with Dilux while gaining access to a trusted property network that values fresh ideas and disciplined execution.",
    description:
      "Interns become part of a professional ecosystem that introduces them to land advisory, client engagement, documentation, and the practical side of property sales.",
    highlights: [
      "Hands-on exposure to land and property sales",
      "Mentorship from experienced Dilux professionals",
      "A clear path to become a full Dilux advocate",
    ],
    image: roleInterns,
  },
  {
    id: 2,
    title: "Sponsors",
    badge: "Capital & Visibility",
    summary:
      "Sponsors help expand the Dilux reach by funding opportunities, supporting community-led property projects, and opening doors for more buyers.",
    description:
      "Whether you are supporting a project, backing high-potential land deals, or helping new clients access verified properties, your partnership strengthens the ecosystem.",
    highlights: [
      "Support verified land and property opportunities",
      "Expand your influence through trusted real estate growth",
      "Receive visibility through Dilux-backed initiatives",
    ],
    image: roleSponsors,
  },
  {
    id: 3,
    title: "Corpers",
    badge: "Service with Purpose",
    summary:
      "Corpers bring credibility, reach, and discipline to the Dilux community while helping connect communities to secure property options.",
    description:
      "This role is designed for young graduates who want meaningful service, professional networking, and a platform to support land ownership conversations in a structured way.",
    highlights: [
      "Represent Dilux in communities and outreach programs",
      "Learn the real estate value chain from the ground up",
      "Create long-term opportunities through trusted referrals",
    ],
    image: roleCorpers,
  },
  {
    id: 4,
    title: "IT Students",
    badge: "Digital Access",
    summary:
      "IT students help Dilux build digital experiences, automation tools, and modern property platforms that make buying and selling easier.",
    description:
      "From customer-facing solutions to lead management systems, this role empowers technology-driven citizens to shape the future of property access.",
    highlights: [
      "Contribute to digital property tools and innovation",
      "Work with a forward-thinking property network",
      "Grow your portfolio while building practical tech skills",
    ],
    image: roleStudents,
  },
  {
    id: 5,
    title: "Associate Citizens",
    badge: "Community Leadership",
    summary:
      "Associate citizens are trusted members of the Dilux community who help connect verified buyers, landowners, and investors to the right opportunities.",
    description:
      "This includes individuals who can represent Dilux, introduce property opportunities, and support the mission of making land ownership clear, secure, and accessible for everyone.",
    highlights: [
      "Gain access to a verified property sales network",
      "Support land ownership conversations with confidence",
      "Create recurring opportunities through trusted referrals",
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
                  Dilux Citizen is built for people who want more than a transaction. It is for interns, sponsors, corpers, IT students, and associate citizens who can help buyers, sellers, and investors access verified land and property opportunities with clarity, confidence, and professionalism.
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
                  <Link to="/contact-us" className="citizen-login-btn citizen-login-btn-secondary">
                    Request Login Access
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
                    <Link to="/contact-us" className="citizen-login-btn">
                      Login to Portal
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
