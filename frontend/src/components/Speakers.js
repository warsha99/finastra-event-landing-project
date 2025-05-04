import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTimes } from 'react-icons/fa';

const SpeakerCard = ({ speaker, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <div className="relative group">
        <img 
          src={speaker.image} 
          alt={speaker.name}
          className="w-full h-64 object-cover group-hover:opacity-90 transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
          <p className="text-white font-medium">View Profile →</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-finastra-blue">{speaker.name}</h3>
        <p className="text-cogent-orange mb-2">{speaker.title}</p>
        <p className="text-gray-600 text-sm line-clamp-2">{speaker.company}</p>
      </div>
    </motion.div>
  );
};

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: "Al-Baraka Bank Egypt",
      
      fullBio: "Mohamed leads IT Governance and Change Management at Al-Baraka Bank Egypt, a leading financial institution in Egypt. Previously worked with McKinsey & Company advising financial institutions.",
      image: "/images/speakers/speaker1.jpg",
      linkedin: "https://linkedin.com/in/alexjohnson",
      session: "Panel: Customer-Centric Digital Transformation"
    },
    {
      id: 2,
      name: "Mr. Shehab Moustafa",
      title: "Country Center of Excellence Director",
      company: "Money Fellows",
      
      fullBio: "Shehab leads Money Fellows' country center of excellence in Egypt. Previously worked with McKinsey & Company advising financial institutions.",
      image: "/images/speakers/speaker2.jpg",
      linkedin: "https://linkedin.com/in/sarahwilliams",
      session: "Panel: Customer-Centric Digital Transformation"
    },
    {
      id: 3,
      name: "Mr. Marwan Abouzeid",
      title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
      company: "Finastra",
      
      fullBio: "Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise. \n\n\n\n\n\n\n\nHis role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction.\n\n\n\n\n\n\n\n Marwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation. \n\n\n\n\n\n\n\nPrior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor’s degree in computer science from The American University in Cairo.",
      image: "/images/speakers/speaker3.jpg",
      linkedin: "https://linkedin.com/in/rajpatel",
      session: "Panel: Customer-Centric Digital Transformation"
    },
    {
      id: 4,
      name: "Mr. Karim El Mourabet",
      title: "Solution Consulting Director - MEA",
      company: "Finastra",
     
      fullBio: "Karim El Mourabet leads the Retail Banking Solution Consulting team at Finastra, covering Middle East & Africa. He has over 12 years’ experience in retail banking software implementation and consulting and working with Digital Banks. He previously led the Innovation services for Finastra Global Services team and worked on Next Gen implementation services, including core banking migrations. Prior to re-joining Finastra, he was global head of solution consulting at Fidor, working on designing and launching digital banks globally. He holds a Masters of Science in Project Management and a Bachelor’s in Business Administration from the American University of Beirut.",
      image: "/images/speakers/speaker4.jpg",
      linkedin: "https://linkedin.com/in/fatimaalmansoori",
      session: "Case Study: Open Banking Implementation"
    },
    {
      id: 5,
      name: "Ms. Siobhan Byron",
      title: "Executive Vice President, Universal Banking",
      company: "Finastra",

      fullBio: "Siobhan oversees Universal Banking, including market leading core banking and digital solutions globally. She has more than 25 years of experience in IT and channel management, as well as leading and growing prominent technology companies across financial services, insurance, manufacturing, and public sectors. Siobhan is a strong advocate for diversity and inclusion. She is the Executive Sponsor for the company’s LGBTQ+ and Friends initiatives and supports Women@Finastra. Based in Canada, Siobhan enjoys spending down time with her family and friends, travelling, reading, and watching her son play hockey.",
      image: "/images/speakers/speaker5.jpg",
      linkedin: "https://linkedin.com/in/davidchen",
      session: "Demo: Building on FusionFabric.cloud"
    },
    {
      id: 6,
      name: "Mr. Narendra Mistry",
      title: "Chief Product and Technology Officer Universal Banking",
      company: "Finastra",
      
      fullBio: "Narendra leads the global product and technology organization for Universal Banking as the Chief Product and Technology Officer (CPTO). Narendra has been in the financial software industry for more than 25 years and his career with Finastra spans more than 13 years in various leadership roles, including running product for International Retail. He has experience building new SaaS businesses in Digital Essence cloud banking, whilst ensuring a robust product and go-to-market strategy. Narendra was instrumental in the very successful Equation N-2 program and the Midas Service Pack program that have made the Midas and Equation business extremely stable over the years.\n\n\n\n\n\n\n\nDuring his time at Finastra, Narendra has built a strong reputation of being a trusted leader who has been central to many successes on our journey. Narendra is based in London.",
      image: "/images/speakers/speaker6.jpg",
      linkedin: "https://linkedin.com/in/nouraalsayed",
      session: "Presentation: Digital Engagement Metrics"
    },
    {
      id: 7,
      name: "Mr. Ahmed Hamdy Bahey El Din",
      title: "Head of Information Technology",
      company: "Incolease",
      
      fullBio: "Ahmed Hamdy is a results-driven IT professional with extensive experience leading IT departments and delivering innovative solutions. As the IT Head at Incolease, he manages all IT operations, ensuring strategic alignment, process optimization, and efficient resource management. With over 18 years of experience, his career highlights include managing complex projects at EFG-HERMES, Corplease, and Atos, focusing on business process automation and efficiency improvements. Ahmed's expertise includes ERP systems, leasing, factoring, and securitization, and he holds certifications in CBAP® and ITIL® Foundation.",
      image: "/images/speakers/speaker7.jpg",
      linkedin: "https://linkedin.com/in/michaelbrown",
      session: "Closing Remarks"
    },
    {
      id: 8,
      name: "Mr. Emad Shawky Habib Hanna",
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
      
      fullBio: "Emad Shawky Habib Hanna manages DIFC's fintech accelerator program and sandbox initiatives. Previously worked with the Central Bank of UAE on regulatory frameworks for emerging technologies.",
      image: "/images/speakers/speaker8.jpg",
      linkedin: "https://linkedin.com/in/aishakhan",
      session: "Panel: Bank-Fintech Collaboration"
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-finastra-blue mb-2">Featured Speakers</h2>
          <p className="text-xl text-gray-600">Industry leaders sharing their insights</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard 
              key={speaker.id} 
              speaker={speaker} 
              onClick={() => setSelectedSpeaker(speaker)}
            />
          ))}
        </div>

        {/* Speaker Modal */}
        <AnimatePresence>
          {selectedSpeaker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button 
                    className="absolute top-4 right-4 text-gray-500 hover:text-finastra-blue transition"
                    onClick={() => setSelectedSpeaker(null)}
                  >
                    <FaTimes size={24} />
                  </button>
                  
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    <div className="md:col-span-1">
                      <img 
                        src={selectedSpeaker.image} 
                        alt={selectedSpeaker.name}
                        className="w-full rounded-lg shadow-md"
                      />
                      <div className="mt-6 space-y-2">
                        <h3 className="text-2xl font-bold text-finastra-blue">{selectedSpeaker.name}</h3>
                        <p className="text-cogent-orange font-medium">{selectedSpeaker.title}</p>
                        <p className="text-gray-600">{selectedSpeaker.company}</p>
                        <a 
                          href={selectedSpeaker.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-finastra-blue hover:text-blue-700 mt-4"
                        >
                          <FaLinkedin className="mr-2" size={20} />
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="prose max-w-none">
                        <h4 className="text-xl font-bold text-finastra-blue mb-4">Biography</h4>
                        <div className="space-y-4">
                          {selectedSpeaker.fullBio.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-gray-700">{paragraph}</p>
                          ))}
                        </div>
                        
                        <h4 className="text-xl font-bold text-finastra-blue mb-4">Session</h4>
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-cogent-orange">
                          <p className="font-medium">{selectedSpeaker.session}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}