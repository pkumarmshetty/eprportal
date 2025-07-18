
'use client';
import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import DashboardComponent from '@/components/DashboardComponent';
import Image from 'next/image';

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
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    main: {
      display: 'flex',
      gap: '20px',
    },
    section: {
      flex: 1,
      padding: '20px',
      borderRadius: '8px',
    },
    leftSection: {
      backgroundColor: '#f9f9f9',
    },
    rightSection: {
      backgroundColor: '#eaeaea',
    },
    tracker: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
    },
    circleActive: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'purple',
      marginBottom: '5px',
    },
    circleInactive: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#ccc',
      opacity: 0.5,
      marginBottom: '5px',
    },
    stepTextActive: {
      fontWeight: 'bold',
      color: '#000',
    },
    stepTextInactive: {
      color: '#999',
    },

    radioGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0',
    },
    input: {
      width: '100%',
      padding: '8px 0',
      margin: '10px 0',
      border: 'none',
      borderBottom: '2px solid black',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: '16px',
    },

    cardNumber: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    row: {
      display: 'flex',
      gap: '10px',
    },
    checkbox: {
      marginTop: '10px',
    },
    companyInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
      marginBottom: '20px',
    },
    billingSummary: {
      marginTop: '10px',
    },
    confirmBtn: {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      float: 'right',
      cursor: 'pointer',
    },
  };

  if (!model) return <p>No survey data found in localStorage.</p>;

  return (
    <DashboardComponent>
      <div style={{ maxWidth: '100%' }}>
        <div style={styles.container}>
          <header style={styles.header}>EPR Registration</header>

          <div style={styles.main}>
            {/* Left Section */}
            <div style={{ ...styles.section, ...styles.leftSection }}>
              <div style={styles.tracker}>
                <div style={{ ...styles.step, ...styles.inactiveStep }}>
                  <div style={styles.circleInactive}></div>
                  <span style={styles.stepTextInactive}>Payment</span>
                </div>
                <div style={{ ...styles.step, ...styles.activeStep }}>
                  <div style={styles.circleActive}></div>
                  <span style={styles.stepTextActive}>Billing</span>
                </div>
                <div style={{ ...styles.step, ...styles.inactiveStep }}>
                  <div style={styles.circleInactive}></div>
                  <span style={styles.stepTextInactive}>Confirmation</span>
                </div>
              </div>


              <div>
                <h3>Payment Method</h3>
                <div style={styles.radioGroup}>
                  <label><input type="radio" name="method" defaultChecked /> 💳 Credit Card</label>
                  <label><input type="radio" name="method" /> 🅿️ PayPal</label>
                </div>
              </div>

              <div>
                <h3>Payment Details</h3>
                <input type="text" placeholder="Enter Name on Card" style={styles.input} />
                <div style={styles.cardNumber}>
                  <input type="text" placeholder="Card Number" style={styles.input} />
                  <Image src="/visa-logo.png" alt="Visa" width={40} height={20} />
                </div>
                <div style={styles.row}>
                  <input type="text" placeholder="Expiration Date" style={styles.input} />
                  <input type="text" placeholder="CVV Code" style={styles.input} />
                </div>
                <label style={styles.checkbox}>
                  <input type="checkbox" /> By clicking "Confirm Payment" I agree to the company's terms of service.
                </label>
              </div>
            </div>

            {/* Right Section */}
            <div style={{ ...styles.section, ...styles.rightSection }}>
              <div style={styles.companyInfo}>
                <div><strong>Application Type</strong><br />Small</div>
                <div><strong>GST Number</strong><br />27ABCDE1234F1Z5</div>
                <div><strong>Type of Business</strong><br />Small</div>
                <div><strong>Type of Company</strong><br />Small</div>
                <div><strong>Trade Name</strong><br />Small</div>
                <div><strong>Legal Name</strong><br />Recycler</div>
              </div>

              <hr />

              <div style={styles.billingSummary}>
                <div><strong>Total Payment:</strong> ₹2400</div>
                <div><strong>GST:</strong> ₹250</div>
                <div><strong>Discount:</strong> ₹500</div>
                <div><strong>Total:</strong> ₹2150</div>
              </div>

              <button style={styles.confirmBtn}>Confirm Payment</button>
            </div>
          </div>
        </div>

      </div>
    </DashboardComponent>
  );
}

