
// 'use client';
// import React, { useEffect, useState } from 'react';
// import DashboardComponent from '@/components/DashboardComponent';

// export default function SurveyPreview() {
//   const styles = {
//     page: {
//       fontFamily: 'Arial, sans-serif',
//       padding: '20px',
//       backgroundColor: '#f4f4f4'
//     },
//     heading: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       marginBottom: '20px'
//     },
//     card: {
//       backgroundColor: '#fff',
//       padding: '15px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//       marginBottom: '20px'
//     },
//     subheading: {
//       fontSize: '18px',
//       fontWeight: 'bold'
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       backgroundColor: '#fff',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//       marginBottom: '10px'
//     },
//     th: {
//       border: '1px solid #ccc',
//       padding: '10px',
//       backgroundColor: '#f0f0f0',
//       textAlign: 'left'
//     },
//     td: {
//       border: '1px solid #ccc',
//       padding: '10px'
//     },
//     select: {
//       width: '100%',
//       padding: '8px',
//       borderRadius: '4px',
//       border: '1px solid #ccc'
//     },
//     input: {
//       width: '100%',
//       padding: '8px',
//       borderRadius: '4px',
//       border: '1px solid #ccc'
//     },
//     upload: {
//       width: '100%'
//     },
//     addMore: {
//       textAlign: 'right',
//       marginTop: '10px',
//       color: 'green',
//       textDecoration: 'underline',
//       fontWeight: 'bold',
//       cursor: 'pointer'
//     },
//     buttonGroup: {
//       display: 'flex',
//       justifyContent: 'flex-end',
//       gap: '10px',
//       marginTop: '20px'
//     },
//     saveButton: {
//       padding: '10px 20px',
//       backgroundColor: '#fff',
//       color: '#000',
//       border: '1px solid #000',
//       borderRadius: '4px',
//       cursor: 'pointer'
//     },
//     nextButton: {
//       padding: '10px 20px',
//       backgroundColor: '#000',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer'
//     }
//   };

//   return (
//     <DashboardComponent>
//       <div style={{ maxWidth: '100%' }}>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: 'white',
//             gap: '40px', // adds space between items
//             padding: '20px', // adds padding around the items
//           }}
//         >
//           <div style={{ width: '180px', textAlign: 'center' }}>
//             <strong>GST Number</strong><br />
//             27ABCDE1234F1Z5
//           </div>

//           <div style={{ width: '180px', textAlign: 'center' }}>
//             <strong>Legal Name</strong><br />
//             Recycler
//           </div>

//           <div style={{ width: '180px', textAlign: 'center' }}>
//             <strong>Type of Company</strong><br />
//             Small
//           </div>

//           <div style={{ width: '180px', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}>
//             View Full Details
//           </div>
//         </div>

//         <div
//           style={{
//             backgroundColor: 'black',
//             display: 'flex',
//             justifyContent: 'flex-start',
//             alignItems: 'center',
//             gap: '20px',
//             padding: '20px',
//           }}
//         >
//           <button
//             style={{
//               padding: '10px 20px',
//               backgroundColor: 'gray',
//               color: '#000000',
//               border: 'none',
//               borderRadius: '6px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Page A
//           </button>

//           <button
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#9CBC4C',
//               color: '#000000',
//               border: 'none',
//               borderRadius: '6px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Page B
//           </button>

//           <button
//             style={{
//               padding: '10px 20px',
//               backgroundColor: 'gray',
//               color: '#000000',
//               border: 'none',
//               borderRadius: '6px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Page C
//           </button>

//           <button
//             style={{
//               padding: '10px 20px',
//               backgroundColor: 'gray',
//               color: '#000000',
//               border: 'none',
//               borderRadius: '6px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//             }}
//           >
//             Page D
//           </button>
//         </div>
//         <div style={styles.page}>
//           <div style={styles.heading}>
//             Pertaining to Liquid Effluent and Gaseous Emissions from production facilities
//           </div>
//           <div style={styles.card}>
//             <div style={styles.subheading}>Details of consent (Air and Water act)

//             </div>

//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={styles.th}></th>
//                   <th style={styles.th} colSpan="3">Water Act</th>
//                   <th style={styles.th} colSpan="3">Air Act</th>
//                 </tr>
//                 <tr>
//                   <th style={styles.th}>State</th>
//                   <th style={styles.th}>Application No</th>
//                   <th style={styles.th}>Validity of Consent</th>
//                   <th style={styles.th}>Upload Consent Document</th>
//                   <th style={styles.th}>Application No</th>
//                   <th style={styles.th}>Validity of Consent</th>
//                   <th style={styles.th}>Upload Consent Document</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={styles.td}>
//                     <select style={styles.select}>
//                       <option>Select State</option>
//                       <option>Delhi</option>
//                       <option>Haryana</option>
//                     </select>
//                   </td>
//                   <td style={styles.td}><input type="text" style={styles.input} /></td>
//                   <td style={styles.td}><input type="date" style={styles.input} /></td>
//                   <td style={styles.td}><input type="file" style={styles.upload} /></td>
//                   <td style={styles.td}><input type="text" style={styles.input} /></td>
//                   <td style={styles.td}><input type="date" style={styles.input} /></td>
//                   <td style={styles.td}><input type="file" style={styles.upload} /></td>
//                 </tr>
//               </tbody>
//             </table>

//             <div style={styles.addMore}>Add More</div>
//           </div>

//           <div style={styles.buttonGroup}>
//             <button style={styles.saveButton}>Save</button>
//             <button style={styles.nextButton} onClick={()=>window.location.href='/WasteDetailsPageC'}>Next</button>
//           </div>
//         </div>

//       </div>
//     </DashboardComponent>
//   );
// }


'use client';
import React, { useEffect, useRef } from 'react';
import DashboardComponent from '@/components/DashboardComponent';

export default function SurveyPreview() {
  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f4f4f4'
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    card: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    },
    subheading: {
      fontSize: '18px',
      fontWeight: 'bold'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '10px'
    },
    th: {
      border: '1px solid #ccc',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      textAlign: 'left'
    },
    td: {
      border: '1px solid #ccc',
      padding: '10px'
    },
    select: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    upload: {
      width: '100%'
    },
    addMore: {
      textAlign: 'right',
      marginTop: '10px',
      color: 'green',
      textDecoration: 'underline',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
      marginTop: '20px'
    },
    saveButton: {
      padding: '10px 20px',
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    nextButton: {
      padding: '10px 20px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  // Get current week's Monday
  const getMondayDate = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    return monday.toISOString().split('T')[0];
  };

  // Refs for autofill
  const stateRef = useRef(null);
  const waterAppRef = useRef(null);
  const waterDateRef = useRef(null);
  const waterFileRef = useRef(null);
  const airAppRef = useRef(null);
  const airDateRef = useRef(null);
  const airFileRef = useRef(null);

  useEffect(() => {
    const monday = getMondayDate();

    if (stateRef.current) {
      stateRef.current.selectedIndex = 1; // Default to "Delhi"
    }

    if (waterAppRef.current) waterAppRef.current.value = 'WTR12345';
    if (waterDateRef.current) waterDateRef.current.value = monday;
    if (waterFileRef.current) waterFileRef.current.setAttribute('data-fake', 'mock_water.pdf');

    if (airAppRef.current) airAppRef.current.value = 'AIR67890';
    if (airDateRef.current) airDateRef.current.value = monday;
    if (airFileRef.current) airFileRef.current.setAttribute('data-fake', 'mock_air.pdf');
  }, []);

//   return (
//     <DashboardComponent>
//       <div style={{ maxWidth: '100%' }}>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: 'white',
//             gap: '40px',
//             padding: '20px',
//           }}
//         >
//           <div style={{ width: '180px', textAlign: 'center' }}>
//             <strong>GST Number</strong><br />
//             24AAACC1206D1ZM
//           </div>

//           <div style={{ width: '180px', textAlign: 'center' }}>
//             <strong>Legal Name</strong><br />
//             Pavan Pvt Ltd
//           </div>

//           <div style={{ width: '180px', textAlign: 'center' }}>
//             <strong>Type of Company</strong><br />
//             Medium
//           </div>

//           <div style={{ width: '180px', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}>
//             View Full Details
//           </div>
//         </div>

//         <div
//           style={{
//             backgroundColor: 'black',
//             display: 'flex',
//             justifyContent: 'flex-start',
//             alignItems: 'center',
//             gap: '20px',
//             padding: '20px',
//           }}
//         >
//           <button style={{ padding: '10px 20px', backgroundColor: 'gray', color: '#000000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
//             Part A
//           </button>
//           <button style={{ padding: '10px 20px', backgroundColor: '#9CBC4C', color: '#000000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
//             Part B
//           </button>
//           <button style={{ padding: '10px 20px', backgroundColor: 'gray', color: '#000000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
//             Part C
//           </button>
//           <button style={{ padding: '10px 20px', backgroundColor: 'gray', color: '#000000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
//             Part D
//           </button>
//         </div>

//         <div style={styles.page}>
//           <div style={styles.heading}>
//             Pertaining to Liquid Effluent and Gaseous Emissions from production facilities
//           </div>

//           <div style={styles.card}>
//             <div style={styles.subheading}>Details of consent (Air and Water act)</div>

//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={styles.th}></th>
//                   <th style={styles.th} colSpan="3">Water Act</th>
//                   <th style={styles.th} colSpan="3">Air Act</th>
//                 </tr>
//                 <tr>
//                   <th style={styles.th}>State</th>
//                   <th style={styles.th}>Application No</th>
//                   <th style={styles.th}>Validity of Consent</th>
//                   <th style={styles.th}>Upload Consent Document</th>
//                   <th style={styles.th}>Application No</th>
//                   <th style={styles.th}>Validity of Consent</th>
//                   <th style={styles.th}>Upload Consent Document</th>
//                 </tr>
//               </thead>
              // <tbody>
              //   <tr>
              //     <td style={styles.td}>
              //       <select ref={stateRef} style={styles.select}>
              //         <option>Select State</option>
              //         <option>Delhi</option>
              //         <option>Haryana</option>
              //       </select>
              //     </td>
              //     <td style={styles.td}>
              //       <input ref={waterAppRef} type="text" style={styles.input} />
              //     </td>
              //     <td style={styles.td}>
              //       <input ref={waterDateRef} type="date" style={styles.input} />
              //     </td>
              //     <td style={styles.td}>
              //        documents.jpg
              //       {/* <input ref={waterFileRef} type="file" style={styles.upload} /> */}
              //     </td>
              //     <td style={styles.td}>
              //       <input ref={airAppRef} type="text" style={styles.input} />
              //     </td>
              //     <td style={styles.td}>
              //       <input ref={airDateRef} type="date" style={styles.input} />
              //     </td>
              //     <td style={styles.td}>
              //       documents.jpg
              //       {/* <input ref={airFileRef} type="file" style={styles.upload} /> */}
              //     </td>
              //   </tr>
              // </tbody>
//             </table>

//             <div style={styles.addMore}>Add More</div>
//           </div>

//           <div style={styles.buttonGroup}>
//             <button style={styles.saveButton}>Save</button>
//             <button style={styles.nextButton} onClick={() => window.location.href = '/WasteDetailsPageC'}>Next</button>
//           </div>
//         </div>
//       </div>
//     </DashboardComponent>
//   );
// }
// Reusable style constants
const thStyle = {
  padding: '10px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  fontWeight: 'bold',
  fontSize: '14px',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '6px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const selectStyle = {
  width: '100%',
  padding: '6px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};
return (
  <DashboardComponent>
    <div style={{ maxWidth: '100%', fontFamily: 'Inter, sans-serif' }}>
      {/* Top Info Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '20px 40px',
          marginBottom: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {[
          { label: 'GST Number', value: '24AAACC1206D1ZM' },
          { label: 'Legal Name', value: 'Pavan Pvt Ltd' },
          { label: 'Type of Company', value: 'Medium' },
        ].map((item, index) => (
          <div key={index} style={{ width: '180px', textAlign: 'center' }}>
            <strong>{item.label}</strong>
            <br />
            {item.value}
          </div>
        ))}

        <div
          style={{
            width: '180px',
            textAlign: 'center',
            cursor: 'pointer',
            textDecoration: 'underline',
            color: '#007BFF',
          }}
        >
          View Full Details
        </div>
      </div>

      {/* Part Tabs */}
      <div
        style={{
          backgroundColor: '#000',
          display: 'flex',
          gap: '20px',
          padding: '20px 40px',
          borderRadius: '8px',
          marginBottom: '24px',
        }}
      >
        {['Part A', 'Part B', 'Part C', 'Part D'].map((label, idx) => (
          <button
            key={label}
            style={{
              padding: '10px 20px',
              backgroundColor: label === 'Part B' ? '#9CBC4C' : 'gray',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <div style={{ padding: '0 40px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>
          Pertaining to Liquid Effluent and Gaseous Emissions from production facilities
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div style={{ fontWeight: '600', marginBottom: '16px' }}>
            Details of consent (Air and Water act)
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
            <thead>
              <tr>
                <th style={thStyle}></th>
                <th style={thStyle} colSpan={3}>Water Act</th>
                <th style={thStyle} colSpan={3}>Air Act</th>
              </tr>
              <tr>
                <th style={thStyle}>State</th>
                <th style={thStyle}>Application No</th>
                <th style={thStyle}>Validity of Consent</th>
                <th style={thStyle}>Upload Consent Document</th>
                <th style={thStyle}>Application No</th>
                <th style={thStyle}>Validity of Consent</th>
                <th style={thStyle}>Upload Consent Document</th>
              </tr>
            </thead>
                         <tbody>
                <tr>
                  <td style={styles.td}>
                    <select ref={stateRef} style={styles.select}>
                      <option>Select State</option>
                      <option>Delhi</option>
                      <option>Haryana</option>
                    </select>
                  </td>
                  <td style={styles.td}>
                    <input ref={waterAppRef} type="text" style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input ref={waterDateRef} type="date" style={styles.input} />
                  </td>
                  <td style={styles.td}>
                     documents.jpg
                    {/* <input ref={waterFileRef} type="file" style={styles.upload} /> */}
                  </td>
                  <td style={styles.td}>
                    <input ref={airAppRef} type="text" style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    <input ref={airDateRef} type="date" style={styles.input} />
                  </td>
                  <td style={styles.td}>
                    documents.jpg
                    {/* <input ref={airFileRef} type="file" style={styles.upload} /> */}
                  </td>
                </tr>
              </tbody>
          </table>

          <div style={{ color: '#007BFF', cursor: 'pointer', fontWeight: 500 }}>
            + Add More
          </div>
        </div>

        {/* Footer Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px', gap: '12px' }}>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ccc',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Save
          </button>
          <button
            onClick={() => window.location.href = '/WasteDetailsPageC'}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </DashboardComponent>
)};