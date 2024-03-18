import React from 'react';
import './ExcelTable.css'; // Import the CSS file for ExcelTable

function ExcelTable({ data }) {
  return (
    <div className="excel-table">
      <h1>  </h1>
      {data.map((section, index) => (
        <div key={index} className="section">
          <table>
            <thead>
              <tr>
                {section.headers.map((header, index) => (
                  <th key={index}>{header.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Exclude the first row */}
              {section.rows.slice(1).map((row, index) => (
                <tr key={index}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default ExcelTable;
