const { GoogleGenAI } = require("@google/genai");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

module.exports.generatePortfolioReport = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    const positions = await PositionsModel.find({});
    const orders = await OrdersModel.find({});

    console.log("Holdings:", holdings.length);
    console.log("Positions:", positions.length);
    console.log("Orders:", orders.length);

    const prompt = `
You are a portfolio analyst for a MERN trading platform named TradeSphere.

Analyze this user's portfolio data.

Holdings:
${JSON.stringify(holdings, null, 2)}

Positions:
${JSON.stringify(positions, null, 2)}

Orders:
${JSON.stringify(orders, null, 2)}

Return ONLY valid JSON.
Do not return markdown.
Do not add explanation outside JSON.

JSON format:
{
  "score": number,
  "riskLevel": "Low" | "Medium" | "High",
  "diversification": "short diversification analysis",
  "strengths": ["point 1", "point 2"],
  "weaknesses": ["point 1", "point 2"],
  "suggestions": ["point 1", "point 2"],
  "summary": "short beginner-friendly final summary"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text.trim();

    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    const parsedReport = JSON.parse(text);

    res.status(200).json({
      success: true,
      report: parsedReport,
    });
  } catch (error) {
    console.log("AI Report Error:", error);

    res.status(500).json({
      success: false,
      message: "AI report generation failed",
    });
  }
};