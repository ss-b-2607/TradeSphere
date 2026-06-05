import React from "react";

const apps = [
  {
    name: "Console",
    description: "Portfolio analytics and tax reports",
    icon: "📊",
  },
  {
    name: "Coin",
    description: "Direct mutual fund investments",
    icon: "🪙",
  },
  {
    name: "Varsity",
    description: "Learn trading and investing",
    icon: "📚",
  },
  {
    name: "Sensibull",
    description: "Options trading platform",
    icon: "⚡",
  },
];

function Apps() {
  return (
    <div className="apps-page">
      <div className="page-header">
        <div>
          <h3 className="title">Apps</h3>
          <p className="page-subtitle">
            Explore trading and investing tools
          </p>
        </div>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon">{app.icon}</div>

            <h4>{app.name}</h4>

            <p>{app.description}</p>

            <button className="btn btn-blue">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;