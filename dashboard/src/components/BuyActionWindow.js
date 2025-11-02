import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, stockPrice }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [order, setOrder] = useState({ qty: 1, price: stockPrice });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setOrder({ qty: 1, price: stockPrice });
    setError("");
  }, [uid, stockPrice]);

  const margin = (order.qty * order.price * 0.2).toFixed(2); 
  const totalValue = (order.qty * order.price).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
    setError(""); 
  };

  const validateOrder = () => {
    if (order.qty <= 0) {
      setError("Quantity must be greater than 0");
      return false;
    }
    if (order.price <= 0) {
      setError("Price must be greater than 0");
      return false;
    }
    if (order.qty > 10000) {
      setError("Maximum quantity is 10,000");
      return false;
    }
    return true;
  };

  const handleBuy = async () => {
    console.log("1. handleBuy started");
    
    if (!validateOrder()) {
      console.log("2. Validation failed");
      return;
    }
  
    console.log("3. Setting loading to true");
    setIsLoading(true);
    setError("");
  
    try {
      console.log("4. Sending axios request");
      const response = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: order.qty,
        price: order.price,
        mode: "BUY",
      });
      console.log("5. Request completed", response);
    } catch (err) {
      console.error("6. Error caught:", err);
    } finally {
      console.log("7. Finally block executing");
      console.log("8. Setting loading to false");
      setIsLoading(false);
      console.log("9. Calling closeBuyWindow");
      closeBuyWindow();
      console.log("10. closeBuyWindow called");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleBuy();
    } else if (e.key === "Escape") {
      closeBuyWindow();
    }
  };

  return (
    <div className="container" id="buy-window" onKeyDown={handleKeyPress}>
      <div className="buy-window-header">
        <h3>{uid}</h3>
        <button className="close-btn" onClick={closeBuyWindow}>×</button>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              min="1"
              value={order.qty}
              onChange={handleChange}
              disabled={isLoading}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              min="0.05"
              value={order.price}
              onChange={handleChange}
              disabled={isLoading}
            />
          </fieldset>
        </div>

        <div className="order-summary">
          <div className="summary-row">
            <span>Total value:</span>
            <span>₹{totalValue}</span>
          </div>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="buttons">
        <span>Margin required ₹{margin}</span>
        <div>
          <button 
            className="btn btn-blue" 
            onClick={handleBuy}
            disabled={isLoading}
          >
            {isLoading ? "Placing..." : "Buy"}
          </button>
          <button 
            className="btn btn-grey" 
            onClick={closeBuyWindow}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;