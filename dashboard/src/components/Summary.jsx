import React, { useState } from "react";
import API from "../utils/api";
import "./Summary.css";

const Summary = ({ user }) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateAIReport = async () => {
    try {
      setLoading(true);
      setReport(null);

      const res = await API.get("/ai/portfolio-report");

      if (res.data.success) {
        setReport(res.data.report);
      } else {
        setReport({
          error: "AI report generation failed.",
        });
      }
    } catch (error) {
      console.log(error);

      setReport({
        error: "Something went wrong while generating report.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-page">
      <div className="username">
        <h6>Hi, {user?.username || "Trader"}!</h6>
        <p>Welcome to your TradeSphere dashboard</p>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <div className="summary-card-header">
            <p>Equity</p>
            <span>Available margin</span>
          </div>

          <div className="summary-main">
            <h3>₹3.74k</h3>
            <p>Margin available</p>
          </div>

          <div className="summary-details">
            <p>
              Margins used <span>₹0</span>
            </p>
            <p>
              Opening balance <span>₹3.74k</span>
            </p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-card-header">
            <p>Holdings</p>
            <span>13 stocks</span>
          </div>

          <div className="summary-main">
            <h3 className="profit">₹1.55k</h3>
            <p>
              P&amp;L <span className="profit">+5.20%</span>
            </p>
          </div>

          <div className="summary-details">
            <p>
              Current value <span>₹31.43k</span>
            </p>
            <p>
              Investment <span>₹29.88k</span>
            </p>
          </div>
        </div>
      </div>

      <div className="ai-report-card">
        <h3>🤖 AI Portfolio Health Report</h3>

        <button onClick={generateAIReport} disabled={loading}>
          {loading ? "Generating..." : "Generate Report"}
        </button>
        {report?.error && <p className="ai-error">{report.error}</p>}
        {report && !report.error && (
          <div className="ai-report-output">
            <div className="ai-score-row">
              <div>
                <h4>Portfolio Score</h4>
                <h2>{report.score}/100</h2>
              </div>

              <div>
                <h4>Risk Level</h4>
                <h2>{report.riskLevel}</h2>
              </div>
            </div>

            <p>
              <strong>Diversification:</strong> {report.diversification}
            </p>

            <h4>Strengths</h4>
            <ul>
              {report.strengths?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Weaknesses</h4>
            <ul>
              {report.weaknesses?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Suggestions</h4>
            <ul>
              {report.suggestions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>
              <strong>Summary:</strong> {report.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
