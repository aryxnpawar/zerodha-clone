import React from "react";
import { useState } from "react";
import { useContext } from "react";
import {GeneralContext} from "./GeneralContext";
import { watchlist } from "../data/data";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,

} from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grow, Tooltip } from "@mui/material";


const WatchList = () => {
 
  
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  let [showWatchListActions, setShowWatchListActions] = useState(false);
  let handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };
  let handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} stockPrice={stock.price}/>}
    </li>
  );
};

const WatchListActions = ({ uid,stockPrice }) => {
 const { openBuyWindow,openSellWindow } = useContext(GeneralContext); 
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => openBuyWindow(uid,stockPrice)}>Buy</button>
        </Tooltip>

        <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={()=>openSellWindow(uid,stockPrice)}>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartIcon />
          </button>
        </Tooltip>
        <Tooltip title="action" arrow TransitionComponent={Grow}>
          <button><MoreHorizIcon/></button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
