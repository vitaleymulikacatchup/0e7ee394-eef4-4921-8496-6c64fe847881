"use client"

import { CheckCircle, Clock, MessageSquare, Settings, TrendingUp, Users, Zap } from 'lucide-react';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "about" },
            { name: "Solutions", id: "feature" },
            { name: "About", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Innovative IT Solutions for Modern Business"
          description="We deliver cutting-edge technology solutions that transform businesses, streamline operations, and drive digital innovation for companies of all sizes."
          tag="IT Excellence"
          tagIcon={Zap}
          buttons={[
            { text: "Our Services", href: "about" },
            { text: "Get Quote", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484386222-nkenny1f.jpg",
              imageAlt: "Modern office technology workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484387635-eg4q07pt.jpg",
              imageAlt: "Software development team collaboration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484389146-u5azn13j.jpg",
              imageAlt: "Digital innovation technology solutions"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484390269-aas0rt5k.jpg",
              imageAlt: "IT consulting professional meeting"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="At TechFlow, we bridge the gap between complex technology and business success. Our expert team delivers innovative IT solutions that empower organizations to achieve their digital transformation goals while maintaining security, scalability, and efficiency."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Core Services"
          description="Comprehensive IT solutions designed to accelerate your business growth"
          tag="Services"
          tagIcon={Settings}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Cloud Migration",
              description: "Seamless transition to cloud infrastructure with enhanced security and scalability",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484386222-nkenny1f.jpg",
              imageAlt: "Cloud migration services"
            },
            {
              id: "02",
              title: "Cybersecurity",
              description: "Advanced threat protection and security audits to safeguard your digital assets",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484387635-eg4q07pt.jpg",
              imageAlt: "Cybersecurity solutions"
            },
            {
              id: "03",
              title: "Software Development",
              description: "Custom applications and software solutions tailored to your business needs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484389146-u5azn13j.jpg",
              imageAlt: "Software development services"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Proven Results"
          description="Numbers that showcase our commitment to excellence"
          tag="Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Clients",
              value: "500+"
            },
            {
              id: "2",
              icon: Clock,
              title: "Years Experience",
              value: "15"
            },
            {
              id: "3",
              icon: CheckCircle,
              title: "Projects Completed",
              value: "2,000+"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from companies we've helped transform"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, InnovateCorps",
              testimonial: "TechFlow completely transformed our IT infrastructure. Their cloud migration service was seamless and our productivity has increased by 40%.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484393945-tjho9sfo.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO, DataWorks",
              testimonial: "The cybersecurity solutions provided by TechFlow saved us from potential threats. Their proactive approach is exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484394793-7prcz0h8.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Operations Director, FlexiTech",
              testimonial: "Outstanding software development services. They delivered exactly what we needed on time and within budget.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484395963-6soef2h3.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Founder, StartupHub",
              testimonial: "TechFlow's expertise in digital transformation helped us scale our business efficiently. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763484397222-1ad9l94u.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Business?"
          description="Get in touch with our IT experts to discuss your technology needs and discover how we can help drive your success."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your IT needs and goals...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechFlow"
          copyrightText="© 2025 TechFlow. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Cloud Migration", href: "about" },
                { label: "Cybersecurity", href: "about" },
                { label: "Software Development", href: "about" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Help Center", href: "contact" },
                { label: "Documentation", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}