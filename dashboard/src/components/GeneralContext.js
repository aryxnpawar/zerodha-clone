import React, { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [buyWindowData, setBuyWindowData] = useState({
    isOpen: false,
    uid: "",
    price: 0,
  });

  const [sellWindowData, setSellWindowData] = useState({
    isOpen: false,
    uid: "",
    price: 0,
  });

  const [holdingsUpdated, setHoldingsUpdated] = useState(0);
  const [ordersUpdated, setordersUpdated] = useState(0);

  const openBuyWindow = (uid, price) =>
    setBuyWindowData({ isOpen: true, uid, price });

  const closeBuyWindow = () => {
    setBuyWindowData({ isOpen: false, uid: "", price: 0 });
    setHoldingsUpdated((prev) => prev + 1);
    setordersUpdated((prev) => prev + 1);

  };

  const openSellWindow = (uid, price) =>
    setSellWindowData({ isOpen: true, uid, price });

  const closeSellWindow = () => {
    setSellWindowData({ isOpen: false, uid: "", price: 0 });
    setHoldingsUpdated((prev) => prev + 1);
    setordersUpdated((prev) => prev + 1);
  };

  return (
    <GeneralContext.Provider
      value={{ openBuyWindow, closeBuyWindow, openSellWindow, closeSellWindow,holdingsUpdated,ordersUpdated }}
    >
      {children}
      {buyWindowData.isOpen && (
        <BuyActionWindow
          uid={buyWindowData.uid}
          stockPrice={buyWindowData.price}
        />
      )}
      {sellWindowData.isOpen && (
        <SellActionWindow
          uid={sellWindowData.uid}
          stockPrice={sellWindowData.price}
        />
      )}
    </GeneralContext.Provider>
  );
};
