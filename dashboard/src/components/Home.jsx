import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import API from "../utils/api";

const LOGIN_URL =
  "https://trade-sphere-ffyhr5gyt-ss-b-2607s-projects.vercel.app/login";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.post("/")
      .then((res) => {
        if (!res.data.status) {
          window.location.href = LOGIN_URL;
        } else {
          setUser(res.data.user);
          setLoading(false);
        }
      })
      .catch(() => {
        window.location.href = LOGIN_URL;
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
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;