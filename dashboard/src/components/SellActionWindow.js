import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, stockPrice }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [order, setOrder] = useState({ qty: 1, price: stockPrice });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setOrder({ qty: 1, price: stockPrice });
    setError("");
  }, [uid, stockPrice]);

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
    return true;
  };

  const handleSell = async () => {
    if (!validateOrder()) return;

    setIsLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: order.qty,
          price: order.price,
          mode: "SELL",
        },
        {
          timeout: 5000,
        }
      );
    } catch (err) {
      console.error("Error:", err);
      setError(err.response?.data?.message || "Failed to place sell order");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    closeSellWindow();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSell();
    } else if (e.key === "Escape") {
      closeSellWindow();
    }
  };

  return (
    <div className="container" id="sell-window" onKeyDown={handleKeyPress}>
      <div className="buy-window-header">
        <h3>{uid}</h3>
        <button className="close-btn" onClick={closeSellWindow} type="button">
          ×
        </button>
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
        <span>Proceeds: ₹{totalValue}</span>
        <div>
          <button
            className="btn btn-red"
            onClick={handleSell}
            disabled={isLoading}
            type="button"
          >
            {isLoading ? "Placing..." : "Sell"}
          </button>
          <button
            className="btn btn-grey"
            onClick={closeSellWindow}
            disabled={isLoading}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
