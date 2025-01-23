import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function WeatherChart({ data }) {
  const chartRef = useRef(null);

  // Define datasets for different parameters
  const chartData = {
    labels: data.map((d) => d.date), // Dates on the x-axis
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map((d) => d.temperature), // Temperature data
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Humidity (%)',
        data: data.map((d) => d.humidity), // Humidity data
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Wind Speed (km/h)',
        data: data.map((d) => d.windSpeed), // Wind speed data
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Define options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: `Weather Parameters Over Time at  ${data.map((d) => d.location)}`,
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
          text: 'Values',
        },
      },
    },
  };

  // Clean up chart instance on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.chart?.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={chartData} options={options} />;
}

export default WeatherChart;
