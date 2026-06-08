import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import API from "../utils/api";

const LOGIN_URL = "https://trade-sphere-ss-b-2607s-projects.vercel.app/login";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("tradesphereToken");

    if (!token) {
      window.location.href = LOGIN_URL;
      return;
    }

    API.post(
      "/",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        console.log("VERIFY RESPONSE:", res.data);

        if (!res.data.status) {
          localStorage.removeItem("tradesphereToken");
          localStorage.removeItem("tradesphereUser");
          window.location.href = LOGIN_URL;
        } else {
          setUser(res.data.user);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("VERIFY ERROR:", err);
        localStorage.removeItem("tradesphereToken");
        localStorage.removeItem("tradesphereUser");
        window.location.href = LOGIN_URL;
      });
  }, []);

  if (loading) {
    return <div>Loading TradeSphere...</div>;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
