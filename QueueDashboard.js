// components/QueueDashboard.js

import React from "react";

export default function QueueDashboard({ queue, onUpdateStatus }) {
  return (
    <div className="queue-dashboard">
      {queue.length === 0 ? (
        <p>No patients currently waiting.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Symptoms</th>
              <th>Temprature</th>
              <th>Heart Rate</th>
              <th>Urgency Score</th>
              <th>Status</th>
              <th>Arrival Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.symptoms}</td>
                <td>{patient.vitals.temperature.toFixed(1)}</td>
                <td>{patient.vitals.heartRate}</td>
                <td>{patient.urgencyScore}</td>
                <td>{patient.status}</td>
                <td>{patient.arrivalTime.toLocaleTimeString()}</td>
                <td>
                  {patient.status !== "treated" && (
                    <button onClick={() => onUpdateStatus(patient.id, "treated")}>
                      Mark Treated
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
