import React, { useState, useEffect, useMemo } from 'react';
import { fetchOpenTrades } from '../services/metaApiService';

function Dashboard() {
  const [openTrades, setOpenTrades] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedTrades = useMemo(() => {
    let sortableTrades = [...openTrades];
    if (sortConfig.key !== null) {
      sortableTrades.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableTrades;
  }, [openTrades, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

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
            <th onClick={() => requestSort('symbol')}>Symbol</th>
            <th onClick={() => requestSort('type')}>Type</th>
            <th onClick={() => requestSort('volume')}>Volume</th>
            <th onClick={() => requestSort('profit')}>Profit</th>
            <th onClick={() => requestSort('swap')}>Swap</th>
          </tr>
        </thead>
        <tbody>
          {sortedTrades.map((trade, index) => (
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
