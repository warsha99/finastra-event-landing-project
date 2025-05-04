// src/components/Agenda.jsx
import { FaCalendarAlt, FaDownload } from 'react-icons/fa';

export default function Agenda() {
  const agendaItems = [
    {
      time: "09:30 AM",
      title: "Registration & Welcome Coffee",
      type: "registration",
      icon: "📝",
      duration: "30 min",
      speaker: "",
      description: ""
    },
    {
      time: "10:00 AM",
      title: "Opening Remarks",
      type: "opening",
      icon: "🎙️",
      duration: "10 min",
      speaker: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
      description: ""
    },
    {
      time: "10:10 AM",
      title: "Keynote: Digital Transformation in a Gen AI World",
      type: "keynote",
      icon: "🎤",
      duration: "20 min",
      speaker: "Siobhan Byron, Executive Vice President, Finastra Universal Banking",
      description: "Exploring the impact of generative AI on banking transformation"
    },
    {
      time: "10:30 AM",
      title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
      type: "presentation",
      icon: "📊",
      duration: "30 min",
      speaker: "Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
      description: "Identifying strategic opportunities in the current market landscape"
    },
    {
      time: "11:00 AM",
      title: "Panel: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
      type: "panel",
      icon: "💬",
      duration: "30 min",
      speaker: "Moderator: Hamid Nirouzad, Managing Director - Africa, Finastra\nPanelists: Ahmad Hamdy (Incolease), Riham Ismail (FABMISR)",
      description: "Strategies for customer acquisition in competitive markets"
    },
    {
      time: "11:30 AM",
      title: "Panel: Customer Retention - Keeping Customers When Loyalty Is Dead",
      type: "panel",
      icon: "💬",
      duration: "30 min",
      speaker: "Moderator: Karim El Mourabet, Finastra\nPanelists: Heba Yehia (AAIB), Ismail Ali (CARITech), Mohamed Elazzazy (Al-Baraka Bank)",
      description: "Innovative approaches to customer retention"
    },
    {
      time: "12:00 PM",
      title: "Coffee Break & Networking",
      type: "break",
      icon: "☕",
      duration: "30 min",
      speaker: "",
      description: ""
    },
    {
      time: "12:30 PM",
      title: "Panel: Cost to Serve - Deliver Customer Delight",
      type: "panel",
      icon: "💬",
      duration: "30 min",
      speaker: "Moderator: Narendra Mistry, Finastra\nPanelists: Shehab Moustafa (Money Fellows), Matthew Hughes (Atos), Emad Shawky (Banque Misr)",
      description: "Balancing service quality with operational efficiency"
    },
    {
      time: "01:00 PM",
      title: "The Essential Elements: What do you need to be 'all things to all people'?",
      type: "presentation",
      icon: "📊",
      duration: "30 min",
      speaker: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking",
      description: "Building adaptable banking platforms"
    },
    {
      time: "01:30 PM",
      title: "Making the case for change: The Question is How",
      type: "case-study",
      icon: "📋",
      duration: "20 min",
      speaker: "Marwan Abouzeid, Principal Solutions Consultant, Finastra",
      description: "Practical approaches to driving organizational change"
    },
    {
      time: "01:50 PM",
      title: "Closing Remarks",
      type: "closing",
      icon: "🎙️",
      duration: "10 min",
      speaker: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
      description: ""
    },
    {
      time: "02:00 PM",
      title: "Lunch & Networking",
      type: "break",
      icon: "🍽️",
      duration: "60 min",
      speaker: "",
      description: ""
    }
  ];

  const handleAddToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Finastra Event//EN',
      'BEGIN:VEVENT',
      'DTSTART:20231123T093000',
      'DTEND:20231123T140000',
      'SUMMARY:Reimagine Banking with Finastra',
      'DESCRIPTION:Digital transformation conference for banking leaders',
      'LOCATION:Dusit Thani Dubai',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'finastra-event.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSessionBadge = (type) => {
    const badges = {
      keynote: { text: "Keynote", color: "bg-cogent-orange" },
      panel: { text: "Panel", color: "bg-finastra-blue" },
      presentation: { text: "Presentation", color: "bg-purple-500" },
      caseStudy: { text: "Case Study", color: "bg-green-500" },
      registration: { text: "Registration", color: "bg-gray-500" },
      break: { text: "Break", color: "bg-yellow-500" },
      opening: { text: "Opening", color: "bg-blue-400" },
      closing: { text: "Closing", color: "bg-blue-400" }
    };
    return badges[type] || { text: type, color: "bg-gray-300" };
  };

  return (
    <section id="agenda" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-finastra-blue mb-2">Event Agenda</h2>
          <p className="text-xl text-gray-600">April 09, 2025 | The Nile Ritz-Carlton, Cairo, Egypt</p>
          
          
        </div>
        
        <div className="max-w-4xl mx-auto">
          {agendaItems.map((item, index) => {
            const badge = getSessionBadge(item.type);
            return (
              <div 
                key={index} 
                className={`py-5 ${index !== agendaItems.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-medium text-finastra-blue">{item.time}</p>
                        {item.duration && (
                          <p className="text-sm text-gray-500">{item.duration}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className={`text-xs text-white px-2 py-1 rounded-full ${badge.color}`}>
                        {badge.text}
                      </span>
                    </div>
                    
                    {item.speaker && (
                      <p className="text-gray-500 mt-1 whitespace-pre-line">{item.speaker}</p>
                    )}
                    
                    {item.description && (
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleAddToCalendar}
              className="flex items-center justify-center gap-2 bg-finastra-blue hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              <FaCalendarAlt /> Add Entire Event to Calendar
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-finastra-blue text-finastra-blue hover:bg-finastra-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              <FaDownload /> Download Detailed Agenda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}