import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function WeatherChart({ data }) {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map((d) => d.temperature),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        tension: 0.2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  // Cleanup previous chart instance when the component unmounts
  useEffect(() => {
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={chartData} options={options} />;
}

export default WeatherChart;
