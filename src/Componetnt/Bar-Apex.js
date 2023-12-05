import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
// import json from json;


function LineChart() {
  const [categorySales, setCategorySales] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('E:\cusmat\public\csvjson.json');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

       
        const newCategorySales = {};

        jsonData.forEach(item => {
          const category = item['Category'];
          const sales = item['Sales'];

          if (category in newCategorySales) {
            newCategorySales[category] += sales;
          } else {
            newCategorySales[category] = sales;
          }
        });

        setCategorySales(newCategorySales);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const chartData = Object.entries(categorySales).map(([category, totalSales]) => ({
    name: category,
    data: totalSales
  }));

  return (
    <React.Fragment>
      <div className='container-fluid mt-3 mb-3'>
        <h2>Line Chart - Category-wise Total Sales</h2>
        <Chart
          type='line'
          width={1450}
          height={550}
          series={chartData}
          options={{
            title: { text: 'Category-wise Total Sales' },
            xaxis: { title: { text: 'Category' } },
            yaxis: { title: { text: 'Total Sales' } }
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default LineChart;
