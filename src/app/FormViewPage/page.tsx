
'use client';

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

  if (!model) return <p></p>;

  return (
   <DashboardComponent>
  <div style={{ maxWidth: '100%' }}>
    <h5 style={{ fontWeight: 'bold' }}>Common Details (Account Details)</h5>
    <Survey model={model} />
    <div style={{ textAlign: 'right', marginTop: '16px' }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  </div>
</DashboardComponent>

  );
}

