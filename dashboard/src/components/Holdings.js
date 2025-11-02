import React from "react";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";

const Holdings = () => {
  let [holdings, setHoldings] = useState([]);
  const {  holdingsUpdated } = useContext(GeneralContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        let allHoldings = await axios.get("http://localhost:3002/getholdings");
        console.log(allHoldings);
        setHoldings(allHoldings.data);
      } catch (err) {
        console.error("Error fetching holdings", err);
      }
    };
    fetchHoldings();
  }, [holdingsUpdated]);

  // Calculate totals dynamically
  const calculateTotals = () => {
    let totalInvestment = 0;
    let totalCurrentValue = 0;

    holdings.forEach((stock) => {
      totalInvestment += stock.avg * stock.qty;
      totalCurrentValue += stock.price * stock.qty;
    });

    const totalPL = totalCurrentValue - totalInvestment;
    const plPercentage = totalInvestment > 0 
      ? ((totalPL / totalInvestment) * 100) 
      : 0;

    return {
      totalInvestment,
      totalCurrentValue,
      totalPL,
      plPercentage
    };
  };

  const totals = calculateTotals();
  const isProfitOverall = totals.totalPL >= 0;
  const profitClassOverall = isProfitOverall ? "profit" : "loss";

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const pl = currValue - stock.avg * stock.qty;
              const isProfit = pl >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {pl >= 0 ? '+' : ''}{pl.toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totals.totalInvestment.toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).split('.')[0]}
            .<span>{totals.totalInvestment.toFixed(2).split('.')[1]}</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totals.totalCurrentValue.toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).split('.')[0]}
            .<span>{totals.totalCurrentValue.toFixed(2).split('.')[1]}</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={profitClassOverall}>
            {totals.totalPL >= 0 ? '+' : ''}
            {totals.totalPL.toFixed(2)} 
            ({totals.plPercentage >= 0 ? '+' : ''}
            {totals.plPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;