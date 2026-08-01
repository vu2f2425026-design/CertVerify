import React from 'react';
import StatusBadge from './StatusBadge';
import './CertificateTable.css';

function CertificateTable({ records }) {
  return (
    <div className="cert-table__wrapper">
      <table className="cert-table">
        <thead>
          <tr>
            <th>Student name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Issue date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((row) => (
            <tr key={`${row.name}-${row.course}`}>
              <td>{row.name}</td>
              <td>{row.course}</td>
              <td>{row.grade}</td>
              <td>{row.issueDate}</td>
              <td>
                <StatusBadge status={row.status} />
              </td>
              <td className="cert-table__actions">
                <button onClick={() => alert(`Viewing record for ${row.name}`)}>View</button>
                <button onClick={() => alert(`Revoking certificate for ${row.name}`)}>Revoke</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CertificateTable;
