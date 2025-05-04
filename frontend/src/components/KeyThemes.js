// src/components/KeyThemes.jsx
export default function KeyThemes() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-finastra-blue">
            Key Themes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Digital Transformation Roadmaps",
              "Cloud Banking Strategies",
              "Open Banking & APIs",
              "AI & Automation in Banking",
              "Customer Experience Innovation",
              "Regulatory Compliance"
            ].map((theme, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-cogent-orange">
                <h3 className="text-xl font-bold text-finastra-blue mb-3">{theme}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Learn how to build a future-proof digital transformation strategy"}
                  {index === 1 && "Migrate to cloud with proven architecture patterns"}
                  {index === 2 && "Leverage open banking to create new revenue streams"}
                  {index === 3 && "Implement AI solutions that deliver real business value"}
                  {index === 4 && "Design customer journeys that drive engagement"}
                  {index === 5 && "Stay ahead of evolving regulatory requirements"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }