import React from "react";

const roadmap = [
  {
    title: "Q1 2025",
    milestones: [
      "Launch HealthX Ecosystem Whitepaper",
      "Secure Initial Funding & Partnerships",
      "Develop MVP Platform (Health Consultations & Records)",
    ],
  },
  {
    title: "Q2 2025",
    milestones: [
      "Token Generation Event (TGE) & ICO",
      "Launch HealthX Platform Beta",
      "Integrate Staking & Governance Features",
    ],
  },
  {
    title: "Q3 2025",
    milestones: [
      "Launch Full HealthX Platform (Mainnet)",
      "Expand Ecosystem with New Partnerships",
      "Initiate Health Data Contribution Programs",
    ],
  },
  {
    title: "Q4 2025",
    milestones: [
      "Launch Community Referral Program",
      "Expand to New Markets and Regions",
      "Launch Advanced Health Analytics and AI Features",
    ],
  },
  {
    title: "2026 & Beyond",
    milestones: [
      "Launch Decentralized Health Data Marketplace",
      "Explore Integration with Wearables and IoT Devices",
      "Pioneer Blockchain-based Health Insurance Solutions",
    ],
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="py-20 bg-blue-50" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            HealthX Roadmap
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our Vision for the Future of HealthX
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {roadmap.map((item, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {item.title.split(" ")[0]}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
              <ul className="space-y-4">
                {item.milestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-600">{milestone}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
