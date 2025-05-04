export default function EventDetails() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-cogent-orange">
              <h3 className="text-2xl font-bold mb-4 text-finastra-blue">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-cogent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>9th April 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-cogent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Time</p>
                    <p>9:30 AM - 2:00 PM GMT+2</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 text-cogent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Venue</p>
                    <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-finastra-blue">About The Event</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.

Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.

Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.

Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-finastra-blue">Who Should Attend</h3>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                {[
                  "Retail Banking Executives",
                  "Heads of Digital Transformation",
                  "Chief Technology Officers",
                  "Innovation Leaders",
                  "Heads of Retail Banking",
                  "Digital Product Managers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-cogent-orange mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}