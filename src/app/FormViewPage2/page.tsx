
'use client';

import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import DashboardComponent from '@/components/DashboardComponent';

export default function SurveyPreview() {
    const [model, setModel] = useState<Model | null>(null);
useEffect(() => {
  const stored = localStorage.getItem('survey-schemass');
  console.log('🔍 Loaded survey schema:', stored);

  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);
    const schema = Array.isArray(parsed) ? parsed[0] : parsed;

    const surveyModel = new Model(schema);
    surveyModel.showNavigationButtons = false;
    surveyModel.showCompletedPage = false;

    // ✅ Autofill data map
    const autofillData: Record<string, string> = {
      question1: 'Pavan Pvt Ltd',
      question2: 'Pavan Brand',
      question3: 'Manufacturing',
      question4: 'Yes',
      question5: '100cr',
      question6: '10 years',
      question7: 'U12345KA2021PTC123456',
      question8: 'John Doe - Director',
      question9: 'Compliant',
      question10: '60 microns',
      question16: 'shaivik@email.com',
      question17: '******',
      question19: '24AAACC1206D1ZM',
    };

    const filledFields = new Set<string>();

    // Autofill on field focus
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      const input = options.htmlElement.querySelector('input, textarea');
      const name = options.question.name;

      if (input && autofillData[name]) {
        input.addEventListener('focus', () => {
          if (!filledFields.has(name)) {
            surveyModel.setValue(name, autofillData[name]);
            filledFields.add(name);

            // Optional: Bulk fill on specific question
            if (name === 'question3') {
              Object.entries(autofillData).forEach(([key, value]) => {
                if (!filledFields.has(key)) {
                  surveyModel.setValue(key, value);
                  filledFields.add(key);
                }
              });
            }
          }
        });
      }
    });

    // Submission handler
    surveyModel.onComplete.add((sender) => {
      console.log('✅ Submitted Data:', sender.data);
      sender.clear();              // reset form
      sender.isCompleted = false;  // stay on form page
    });

    setModel(surveyModel);
  } catch (err) {
    console.error('❌ Failed to parse stored survey JSON:', err);
  }
}, []);

   
    const handleSubmit = () => {
        model?.doComplete();
    };

    if (!model) return <p>No survey data found in localStorage.</p>;

//     return (
//         <DashboardComponent>
//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     backgroundColor: 'white',
//                     gap: '40px', // adds space between items
//                     padding: '20px', // adds padding around the items
//                 }}
//             >
//                 <div style={{ width: '180px', textAlign: 'center' }}>
//                     <strong>GST Number</strong><br />
//                     24AAACC1206D1ZM
//                 </div>

//                 <div style={{ width: '180px', textAlign: 'center' }}>
//                     <strong>Legal Name</strong><br />
//                     Pavan Pvt Ltd
//                 </div>

//                 <div style={{ width: '180px', textAlign: 'center' }}>
//                     <strong>Type of Company</strong><br />
//                     Medium 
//                 </div>

//                 <div style={{ width: '180px', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}>
//                     View Full Details
//                 </div>
//             </div>

//             <div
//                 style={{
//                     backgroundColor: 'black',
//                     display: 'flex',
//                     justifyContent: 'flex-start',
//                     alignItems: 'center',
//                     gap: '20px',
//                     padding: '20px',
//                 }}
//             >
//                 <button
//                     style={{
//                         padding: '10px 20px',
//                         backgroundColor: '#9CBC4C',
//                         color: '#000000',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontWeight: 'bold',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Part A
//                 </button>

//                 <button
//                     style={{
//                         padding: '10px 20px',
//                         backgroundColor: 'gray',
//                         color: '#000000',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontWeight: 'bold',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Part B
//                 </button>

//                 <button
//                     style={{
//                         padding: '10px 20px',
//                         backgroundColor: 'gray',
//                         color: '#000000',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontWeight: 'bold',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Part C
//                 </button>

//                 <button
//                     style={{
//                         padding: '10px 20px',
//                         backgroundColor: 'gray',
//                         color: '#000000',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontWeight: 'bold',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Part D
//                 </button>

//             </div>
//             <div>  <div style={{
//                     display: 'flex',
//                     justifyContent: 'flex-end',
//                     gap: '10px',
//                     marginTop: '20px'
//                 }}>
//                     <button
//                         style={{
//                             padding: '10px 20px',
//                             fontSize: '16px',
//                             backgroundColor: '#ccc',
//                             color: '#000',
//                             border: 'none',
//                             borderRadius: '6px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         Save
//                     </button>

//                     <button
//                         onClick={() => window.location.href = '/WasteDetailsPageB'}
//                         style={{
//                             padding: '10px 20px',
//                             fontSize: '16px',
//                             backgroundColor: 'black',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '6px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         Next
//                     </button>
//                 </div>
//                 <Survey model={model} />
                
//             </div>

           

//         </DashboardComponent>
//     );
// }

return (
  <DashboardComponent>
    {/* Header Info */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px 40px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        marginBottom: '20px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {[
        { label: 'GST Number', value: '24AAACC1206D1ZM' },
        { label: 'Legal Name', value: 'Pavan Pvt Ltd' },
        { label: 'Type of Company', value: 'Medium' },
      ].map((item, idx) => (
        <div key={idx} style={{ textAlign: 'center', minWidth: 180 }}>
          <strong>{item.label}</strong>
          <br />
          {item.value}
        </div>
      ))}

      <div
        style={{
          textAlign: 'center',
          minWidth: 180,
          color: '#007bff',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        View Full Details
      </div>
    </div>

    {/* Part Buttons */}
    <div
      style={{
        backgroundColor: '#000',
        padding: '20px 40px',
        borderRadius: '8px',
        display: 'flex',
        gap: '16px',
        marginBottom: '20px',
      }}
    >
      {['Part A', 'Part B', 'Part C', 'Part D'].map((part, index) => (
        <button
          key={part}
          style={{
            padding: '10px 20px',
            backgroundColor: index === 0 ? '#9CBC4C' : '#ccc',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {part}
        </button>
      ))}
    </div>

    {/* Survey + Bottom Actions */}
    <div
      style={{
        padding: '0 40px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#e0e0e0',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Save
        </button>

        <button
          onClick={() => window.location.href = '/WasteDetailsPageB'}
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

      {/* Survey Form Rendered */}
      <Survey model={model} />
    </div>
  </DashboardComponent>
);
