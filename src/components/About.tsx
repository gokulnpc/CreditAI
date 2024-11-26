import React from "react";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import TeamMember from "./TeamMember";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Transforming private credit through innovation and technology",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building solutions that address real industry challenges",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI and blockchain",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality and reliability",
    },
  ];

  const team = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      name: "David Chen",
      role: "CEO & Co-founder",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      name: "Sarah Thompson",
      role: "CTO",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      name: "Michael Roberts",
      role: "Head of AI",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      name: "Emily Martinez",
      role: "Head of Product",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About CreditAI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize private credit analysis through
            artificial intelligence and blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion
            for innovation and excellence.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
