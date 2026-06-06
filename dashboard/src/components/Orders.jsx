import React, { useEffect, useState } from "react";
import API from "../utils/api";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Orders fetch error:", err);
      });
  }, []);

  return (
    <div className="orders-page">
      <div className="orders-card">
        <div className="orders-header">
          <div>
            <h2>Orders</h2>
            <p>Track all your buy and sell orders</p>
          </div>
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="stock-name">{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td>
                  <span
                    className={
                      order.mode === "BUY" ? "badge buy" : "badge sell"
                    }
                  >
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="empty-orders">
            <h3>No orders yet</h3>
            <p>Your placed orders will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;