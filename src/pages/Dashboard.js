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
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Type</th>
            <th>Volume</th>
            <th>Profit</th>
            <th>Swap</th>
          </tr>
        </thead>
        <tbody>
          {openTrades.map((trade, index) => (
            <tr key={index}>
              <td>{trade.symbol}</td>
              <td>{trade.type}</td>
              <td>{trade.volume}</td>
              <td>{trade.profit}</td>
              <td>{trade.swap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
