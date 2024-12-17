import React from "react";

const TableComponent = ({ data }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Title */}
    

      {/* Scrollable Table */}
      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "16px",
          }}
        >
          <thead>
            <tr>
              <th style={headerCellStyle}>Problem/Diagnosis</th>
              <th style={headerCellStyle}>Description</th>
              <th style={headerCellStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => (
              <tr key={index}>
                <td style={rowCellStyle}>{item.problem}</td>
                <td style={rowCellStyle}>{item.description}</td>
                <td style={rowCellStyle}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles for table cells
const headerCellStyle = {
  borderBottom: "2px solid #ddd",
  padding: "10px 15px",
  backgroundColor: "#f0f0f0",
  fontWeight: "bold",
  position: "sticky",
  top: "0",
  zIndex: "1",
};

const rowCellStyle = {
  borderBottom: "1px solid #ddd",
  padding: "10px 15px",
};

export default TableComponent;
