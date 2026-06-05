import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

const WatchList = () => {
  const [searchText, setSearchText] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut, gold"
          className="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <span className="counts">{filteredWatchlist.length} / 50</span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <div className="watchlist-number">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>

        <span className="settings">⚙</span>
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  const directionClass = stock.isDown ? "down" : "up";

  return (
    <li
      className="watchlist-row"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={`stock-name ${directionClass}`}>{stock.name}</p>

        {showActions && <WatchListActions uid={stock.name} />}

        <div className="item-info">
          <span className={directionClass}>{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className={directionClass} />
          ) : (
            <KeyboardArrowUp className={directionClass} />
          )}

          <span className={directionClass}>{stock.price}</span>
        </div>
      </div>
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="watchlist-actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="watch-btn buy"
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          B
        </button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="watch-btn sell"
          onClick={() => generalContext.openSellWindow(uid)}
        >
          S
        </button>
      </Tooltip>

      <Tooltip
        title="Market depth"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="watch-btn action">
          <BarChartOutlined className="watch-icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="watch-btn action">
          <MoreHoriz className="watch-icon" />
        </button>
      </Tooltip>
    </div>
  );
};
