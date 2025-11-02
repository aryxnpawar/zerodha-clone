import React, { useState,useEffect,useContext } from "react";
import axios from 'axios';
import './Orders.css';
import { GeneralContext } from "./GeneralContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { ordersUpdated } = useContext(GeneralContext);

  useEffect(() => {

    axios.get("http://localhost:3002/getorders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, [ordersUpdated]);

  return (
    <div className="orders">
      <div className="orders-header">
        <h3>Orders</h3>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-main">
                <div className="order-info">
                  <h4 className={order.mode === "BUY" ? "buyOrder" : "sellOrder"}>
                    {order.name}
                  </h4>
                  <span className={`order-mode ${order.mode.toLowerCase()}Order`}>
                    {order.mode}
                  </span>
                </div>
                <div className="order-details">
                  <p>
                    Qty: <span>{order.qty}</span>
                  </p>
                  <p>
                    Price: <span>₹{order.price.toFixed(2)}</span>
                  </p>
                  <p>
                    Total: <span>₹{(order.qty * order.price).toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;