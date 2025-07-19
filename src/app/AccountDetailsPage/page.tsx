'use client';

import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import DashboardComponent from '@/components/DashboardComponent';

export default function SurveyPreview() {
  const [model, setModel] = useState<Model | null>(null);

useEffect(() => {
  const stored = {
    pages: [
      {
        name: 'page1',
        elements: [
          { type: 'html', name: 'question22', html: '<h3>Registration for EPR Registration</h3>' },
          { type: 'text', name: 'question19', title: 'GST Number *' },
          { type: 'html', name: 'question14', html: '<h4>Company Details</h4>' },
          { type: 'text', name: 'question1', title: 'Legal Name*' },
          { type: 'text', name: 'question2', startWithNewLine: false, title: 'Trade Name *' },
          { type: 'text', name: 'question3', startWithNewLine: false, title: 'Type of Business*' },
          { type: 'text', name: 'question4', title: 'Type of Company *' },
          { type: 'text', name: 'question5', startWithNewLine: false, title: 'Registered Address *' },
          { type: 'text', name: 'question6', title: 'Company PAN Card Number*' },
          { type: 'text', name: 'question7', startWithNewLine: false, title: 'Company CIN Number *' },
          { type: 'html', name: 'question20', html: '<h4>Authorised Person Details</h4>' },
          { type: 'text', name: 'question8', title: 'Name and Designation *' },
          { type: 'text', name: 'question9', startWithNewLine: false, title: 'Mobile Number *' },
          { type: 'text', name: 'question10', startWithNewLine: false, title: 'PAN Details *' },
          { type: 'text', name: 'question16', title: 'Email Address *' },
        ],
      },
    ],
    headerView: 'advanced',
  };

  const autofillData = {
    question1: 'Pavan Pvt Ltd',
    question2: 'Pavan Brand',
    question3: 'Manufacturing',
    question4: 'Private Limited',
    question5: 'Industrial Area, Bangalore',
    question6: 'ABCDE1234F',
    question7: 'U12345KA2021PTC123456',
    question8: 'John Doe - Director',
    question9: '9876543210',
    question10: 'ABCDE1234F',
    question16: 'shaivik@gmail.com',
    question17: '******',
    question19: '24AAACC1206D1ZM',
  };

  const surveyModel = new Model(stored);
  surveyModel.showNavigationButtons = false;
  surveyModel.showCompletedPage = false;

  // ✅ Apply autofill data
  surveyModel.data = autofillData;

  surveyModel.onComplete.add((sender) => {
    console.log('✅ Submitted Data:', sender.data);
    sender.clear();
    // @ts-ignore
    sender.isCompleted = false;
  });

  setModel(surveyModel);
}, []);


  const handleSubmit = () => {
    model?.doComplete();
  };

  if (!model) return <p>Loading survey...</p>;

  return (
    <DashboardComponent>
      <div style={{ maxWidth: '100%' }}>
        <h5 style={{ fontWeight: 'bold' }}>Common Details (Account Details)</h5>
        <Survey model={model} />
        <div style={{ textAlign: 'right', marginTop: '16px' }}>
        </div>
      </div>
    </DashboardComponent>
  );
}
