import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import API from "../utils/api";

const LOGIN_URL = "http://localhost:3000/login";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.post("/")
      .then((res) => {
        console.log("VERIFY RESPONSE:", res.data);

        if (!res.data.status) {
          window.location.href = LOGIN_URL;
        } else {
          setUser(res.data.user);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("VERIFY ERROR:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading TradeSphere...</div>;
  }

  if (!user) {
    return <div>Verification failed. Check console.</div>;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;