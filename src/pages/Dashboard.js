import React, { useState, useEffect } from 'react';
import { fetchOpenTrades } from '../services/metaApiService';

function Dashboard() {
  const [openTrades, setOpenTrades] = useState([]);

  useEffect(() => {
    const loadOpenTrades = async () => {
      const trades = await fetchOpenTrades();
      setOpenTrades(trades);
    };

    loadOpenTrades();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <ul>
        {openTrades.map((trade, index) => (
          <li key={index}>
            {trade.symbol}: {trade.volume}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
