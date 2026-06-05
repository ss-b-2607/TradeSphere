import React from "react";

function AMC() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Demat AMC (Annual Maintenance Charge)</h2>

      <p className="border-start border-primary border-4 bg-light p-3 d-inline-block">
        Free for first year *
      </p>

      <p className="mt-4">From second year onwards, for BSDA accounts:</p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>₹4 lakh – ₹10 lakh</td>
            <td>₹100 per year + 18% GST, charged quarterly</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300 per year + 18% GST, charged quarterly</td>
          </tr>
        </tbody>
      </table>

      <p>
        For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
        holdings value, charged quarterly.
      </p>
    </div>
  );
}

export default AMC;