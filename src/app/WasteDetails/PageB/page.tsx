import React from 'react';

const ConsentDetailsPage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
        CPCB/SPCB Environmental Monitoring & EPR Compliance
      </h2>

      <section style={{ marginBottom: '30px' }}>
        <h3>Account Details</h3>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="gstNumber">GST Number:</label><br />
            <input type="text" id="gstNumber" name="gstNumber" defaultValue="27ABCDE1234F1Z5" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="legalName">Legal Name:</label><br />
            <input type="text" id="legalName" name="legalName" defaultValue="Recycler" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="companyType">Type of Company:</label><br />
            <input type="text" id="companyType" name="companyType" defaultValue="Small" style={{ width: '100%', padding: '8px' }} />
          </div>
        </div>
      </section>

      <nav style={{ marginBottom: '20px' }}>
        <button style={{ marginRight: '10px' }}>Part A</button>
        <button style={{ marginRight: '10px', backgroundColor: '#007bff', color: '#fff' }}>Part B</button>
        <button style={{ marginRight: '10px' }}>Part C</button>
        <button>Part D</button>
      </nav>

      <section>
        <h3>Liquid Effluent & Gaseous Emissions from Production Facility</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>State</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Water App No</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Water Validity</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Water Consent Doc</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Air App No</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Air Validity</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Air Consent Doc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <select>
                  <option>Select</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <input type="text" placeholder="Enter" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <input type="date" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <input type="file" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <input type="text" placeholder="Enter" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <input type="date" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <input type="file" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button>Add More</button>
        <button>Save</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ConsentDetailsPage;
