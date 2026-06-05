import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import API from "../utils/api";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.post("/")
      .then((res) => {
        if (!res.data.status) {
          window.location.href = "http://localhost:3000/login";
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        Loading TradeSphere...
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};
export default Home;

