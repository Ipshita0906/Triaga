// components/AdminAnalyticsDashboard.js

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function AdminAnalyticsDashboard({ queue }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const urgencyCounts = new Array(11).fill(0);
    queue.forEach((p) => {
      urgencyCounts[p.urgencyScore] = (urgencyCounts[p.urgencyScore] || 0) + 1;
    });

    const ctx = chartRef.current.getContext("2d");

    // Destroy old chart if exists to prevent leaks
    if (typeof window.myChart !== "undefined") {
      window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [...Array(11).keys()], // 0-10 urgency score
        datasets: [
          {
            label: "Patient Count by Urgency Score",
            data: urgencyCounts,
            backgroundColor: "#0a9396",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }, [queue]);

  return (
    <div className="analytics-dashboard">
      <canvas ref={chartRef} aria-label="Urgency score distribution bar chart"></canvas>
    </div>
  );
}
