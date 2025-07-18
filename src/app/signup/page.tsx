
'use client';

import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import DashboardComponent from '@/components/DashboardComponent';
import NavbarMain from '@/components/NavbarMain';

export default function SurveyPreview() {
  const [model, setModel] = useState<Model | null>(null);

useEffect(() => {
  const stored = localStorage.getItem('survey-schema');
  console.log('🔍 Loaded survey schema:', stored);

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const schema = Array.isArray(parsed) ? parsed[0] : parsed;
      const surveyModel = new Model(schema);

      surveyModel.showNavigationButtons = false;
      surveyModel.showCompletedPage = false;

      const autofillData = {
        question1: 'ABC Pvt Ltd',
        question2: 'ABC Brand',
        question3: 'Manufacturing',
        question4: 'Private Limited',
        question5: '123 Industrial Area, Bangalore',
        question6: 'ABCDE1234F',
        question7: 'U12345KA2021PTC123456',
        question8: 'John Doe - Director',
        question9: '9876543210',
        question10: 'ABCDE1234F',
      };

      const filledFields = new Set();

      surveyModel.onAfterRenderQuestion.add((survey, options) => {
        const input = options.htmlElement.querySelector('input, textarea');
        if (input && options.question.name in autofillData) {
          input.addEventListener('focus', () => {
            const name = options.question.name;

            if (!filledFields.has(name)) {
              surveyModel.setValue(name, autofillData[name]);
              filledFields.add(name);

              // If third field is focused, autofill all remaining
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

      surveyModel.onComplete.add((sender) => {
        console.log('✅ Submitted Data:', sender.data);
        sender.clear();
        sender.isCompleted = false;
      });

      setModel(surveyModel);
    } catch (err) {
      console.error('❌ Failed to parse stored survey JSON:', err);
    }
  }
}, []);


  const handleSubmit = () => {
    window.location.href = '/';
    model?.doComplete();
  };

  if (!model) return <p></p>;

  return (
  
  <div style={{ maxWidth: '100%',zoom:0.7 }}>
    <NavbarMain />
    
    <Survey model={model} />
    <div style={{ textAlign: 'right', marginTop: '16px' }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'black',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Sign Up
      </button>
    </div>
  </div>


  );
}

