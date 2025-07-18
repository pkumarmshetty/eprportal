'use client';
import React, { useState } from 'react';
import DashboardComponent from '@/components/DashboardComponent';
import Image from 'next/image';
// import { useRouter } from 'next/router';

export default function SurveyPreview() {
  const [showSuccess, setShowSuccess] = useState(false);
  // const router = useRouter();

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
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      width: '400px',
      textAlign: 'center',
    },
    modalHeading: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    modalText: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    modalButton: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
  };

  return (
    <DashboardComponent>
      <div style={{ maxWidth: '100%' }}>
        <div style={styles.container}>
          <header style={styles.header}>EPR Registration</header>

          <div style={styles.main}>
            {/* Left Section */}
            <div style={{ ...styles.section, ...styles.leftSection }}>
              <div style={styles.tracker}>
                <div style={styles.step}>
                  <div style={styles.circleInactive}></div>
                  <span style={styles.stepTextInactive}>Payment</span>
                </div>
                <div style={styles.step}>
                  <div style={styles.circleActive}></div>
                  <span style={styles.stepTextActive}>Billing</span>
                </div>
                <div style={styles.step}>
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

              <button style={styles.confirmBtn} onClick={() => setShowSuccess(true)}>
                Confirm Payment
              </button>
            </div>
          </div>
        </div>

        {showSuccess && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h2 style={styles.modalHeading}>Payment Successful!</h2>
              <p style={styles.modalText}>Registration is Completed. Verification is Pending.</p>
              <button style={styles.modalButton}>
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardComponent>
  );
}
