
'use client';
import React, { useEffect, useState } from 'react';
import DashboardComponent from '@/components/DashboardComponent';

export default function SurveyPreview() {

  const onClickSubmit = () => {
    localStorage.setItem('isOneRegistered', 'true')
    window.location.href = '/WasteCategoryFinal'

  }

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
      marginTop: '15px'
    },
    th: {
      border: '1px solid #ccc',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      textAlign: 'left',
      fontSize: '14px'
    },
    td: {
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '14px'
    },
    editButton: {
      color: 'green',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontWeight: 'bold'
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

  return (
    <DashboardComponent>
      <div style={{ maxWidth: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            gap: '40px', // adds space between items
            padding: '20px', // adds padding around the items
          }}
        >
          <div style={{ width: '180px', textAlign: 'center' }}>
            <strong>GST Number</strong><br />
            24AAACC1206D1ZM
          </div>

          <div style={{ width: '180px', textAlign: 'center' }}>
            <strong>Legal Name</strong><br />
            Pavan Pvt Ltd
          </div>

          <div style={{ width: '180px', textAlign: 'center' }}>
            <strong>Type of Company</strong><br />
            medium
          </div>

          <div style={{ width: '180px', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}>
            View Full Details
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
          }}
        >
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'gray',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Part A
          </button>

          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'gray',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Part B
          </button>

          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'gray',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Part C
          </button>

          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#9CBC4C',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Part D
          </button>
        </div>
        <div style={styles.page}>
          <div style={styles.heading}>
            Pertaining to waste
          </div>

          <div style={styles.card}>
            <div style={styles.subheading}>
              State-Wise category-wise quantity of (Pre + Post-Consumer) PW Generated (TPA)
            </div>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th} rowSpan="2">S.No</th>
                  <th style={styles.th} rowSpan="2">State Name</th>
                  <th style={styles.th} rowSpan="2">Year</th>
                  <th style={styles.th} rowSpan="2">Category of Plastic</th>
                  <th style={styles.th} colSpan="2">Pre Consumer Waste</th>
                  <th style={styles.th} colSpan="2">Post Consumer Waste</th>
                  <th style={styles.th} rowSpan="2">Action</th>
                </tr>
                <tr>
                  <th style={styles.th}>Plastic Qty (TPA)</th>
                  <th style={styles.th}>Recycled Plastic (%)</th>
                  <th style={styles.th}>Plastic Qty (TPA)</th>
                  <th style={styles.th}>Recycled Plastic (%)</th>
                </tr>
              </thead>
             <tbody>
  <tr>
    <td style={styles.td} rowSpan="3">01</td>
    <td style={styles.td} rowSpan="3">Delhi</td>
    <td style={styles.td} rowSpan="3">2021-22</td>

    <td style={styles.td}>Rigid Plastics (Cat-I)</td>
    <td style={styles.td}>120</td>
    <td style={styles.td}>115</td>
    <td style={styles.td}>5</td>
    <td style={styles.td}>95.83%</td>
    <td style={styles.td}><span style={styles.editButton}>Edit</span></td>
  </tr>
  <tr>
    <td style={styles.td}>Flexible Plastic (Cat-II)</td>
    <td style={styles.td}>200</td>
    <td style={styles.td}>180</td>
    <td style={styles.td}>20</td>
    <td style={styles.td}>90.00%</td>
    <td style={styles.td}><span style={styles.editButton}>Edit</span></td>
  </tr>
  <tr>
    <td style={styles.td}>MLP (Cat-III)</td>
    <td style={styles.td}>300</td>
    <td style={styles.td}>270</td>
    <td style={styles.td}>30</td>
    <td style={styles.td}>90.00%</td>
    <td style={styles.td}><span style={styles.editButton}>Edit</span></td>
  </tr>
</tbody>

            </table>
          </div>

          <div style={styles.buttonGroup}>
            <button style={styles.saveButton}>Save</button>
<button
  style={styles.nextButton}
  onClick={() => (onClickSubmit())}
>
  Submit
</button>
          </div>
        </div>

      </div>
    </DashboardComponent>
  );
}

