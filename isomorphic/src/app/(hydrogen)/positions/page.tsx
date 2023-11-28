import React, { useEffect, useState } from 'react';
import { fetchOpenTrades } from 'path-to-metaApiService'; // Update with the correct path
import ControlledTable from 'path-to-ControlledTable'; // Update with the correct path to ControlledTable

export default function PositionsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const trades = await fetchOpenTrades();
      setData(trades);
    };

    loadData();
  }, []);

  // Define your table columns here
  const columns = [
    // Example column definition
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      // Add other column properties as needed
    },
    // Add more column definitions...
  ];

  return (
    <div>
      <ControlledTable
        isLoading={false} // Replace with actual loading state if needed
        data={data}
        columns={columns}
        // Add other props as needed
      />
    </div>
  );
}
