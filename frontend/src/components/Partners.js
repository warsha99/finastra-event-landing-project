// src/components/AboutFinastra.jsx
export default function AboutFinastra() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          
          <div className="lg:w-3/3">
            <h2 className="text-3xl font-bold mb-6 text-finastra-blue text-center">About Finastra</h2>
            <div className="prose max-w-none text-gray-700 space-y-4 text-center">
              <p className="mb-4 lg:w-3/4 mx-auto">
                Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses and communities everywhere, our vision is to accelerate the future of Open Finance through technology and collaboration. Our pioneering approach is why we're trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
                </p>
              <p>
                <a 
                  href="https://www.finastra.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-finastra-blue hover:underline font-medium"
                >
                  Visit www.finastra.com
                </a> for more information.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {[
                { label: "Lending Solutions", icon: "💳" },
                { label: "Payments", icon: "↗️" },
                { label: "Treasury", icon: "📊" },
                { label: "Capital Markets", icon: "🌐" },
                { label: "Universal Banking", icon: "🏦" }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                  <span className="mr-2">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}