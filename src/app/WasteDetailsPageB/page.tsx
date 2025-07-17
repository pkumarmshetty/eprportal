
'use client';
import styles from "./styles";
import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import DashboardComponent from '@/components/DashboardComponent';

export default function SurveyPreview() {
    const [model, setModel] = useState<Model | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('survey-schema');
    console.log('🔍 Loaded survey schema:', stored);

        if (stored) {
            try {
                const parsed = JSON.parse(stored);

                // ✅ Ensure it's an array and get the first schema
                const schema = Array.isArray(parsed) ? parsed[0] : parsed;

                const surveyModel = new Model(schema);

                // Hide completed page and prevent auto-submit behavior
                surveyModel.showNavigationButtons = false;
                surveyModel.showCompletedPage = false;

                surveyModel.onComplete.add((sender) => {
                    console.log('✅ Submitted Data:', sender.data);
                    sender.clear(); // reset form fields
                    sender.isCompleted = false; // keep showing form
                });

                setModel(surveyModel);
            } catch (err) {
                console.error('❌ Failed to parse stored survey JSON:', err);
            }
        }
    }, []);

  const handleSubmit = () => {
    model?.doComplete();
  };

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

    if (!model) return <p>No survey data found in localStorage.</p>;

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
            27ABCDE1234F1Z5
          </div>

          <div style={{ width: '180px', textAlign: 'center' }}>
            <strong>Legal Name</strong><br />
            Recycler
          </div>

          <div style={{ width: '180px', textAlign: 'center' }}>
            <strong>Type of Company</strong><br />
            Small
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
            Part 1
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
            Part 2
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
            Part 3
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
            Part 4
          </button>
        </div>
    <div style={styles.page}>
      <div style={styles.heading}>
        Pertaining to Liquid Effluent and Gaseous Emissions from production facilities
      </div>

      <div style={styles.card}>
        <div style={styles.subheading}>Details of consent (Air and Water act)</div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}></th>
            <th style={styles.th} colSpan="3">Water Act</th>
            <th style={styles.th} colSpan="3">Air Act</th>
          </tr>
          <tr>
            <th style={styles.th}>State</th>
            <th style={styles.th}>Application No</th>
            <th style={styles.th}>Validity of Consent</th>
            <th style={styles.th}>Upload Consent Document</th>
            <th style={styles.th}>Application No</th>
            <th style={styles.th}>Validity of Consent</th>
            <th style={styles.th}>Upload Consent Document</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>
              <select style={styles.select}>
                <option>Select State</option>
                <option>Delhi</option>
                <option>Haryana</option>
              </select>
            </td>
            <td style={styles.td}><input type="text" style={styles.input} /></td>
            <td style={styles.td}><input type="date" style={styles.input} /></td>
            <td style={styles.td}><input type="file" style={styles.upload} /></td>
            <td style={styles.td}><input type="text" style={styles.input} /></td>
            <td style={styles.td}><input type="date" style={styles.input} /></td>
            <td style={styles.td}><input type="file" style={styles.upload} /></td>
          </tr>
        </tbody>
      </table>

      <div style={styles.addMore}>Add More</div>

      <div style={styles.buttonGroup}>
        <button style={styles.saveButton}>Save</button>
        <button style={styles.nextButton}>Next</button>
      </div>
    </div>

      </div>
    </DashboardComponent>
  );
}

