'use client';

import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
// import 'survey-core/defaultV2.min.css';

export default function SurveyPreview() {
  const [model, setModel] = useState<Model | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('survey-schema');

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const surveyModel = new Model(parsed);

        surveyModel.onComplete.add((sender) => {
          console.log('✅ Survey submitted:', sender.data);
        });

        setModel(surveyModel);
      } catch (err) {
        console.error('❌ Failed to parse stored survey JSON:', err);
      }
    }
  }, []);

  if (!model) return <p>No survey data found in localStorage.</p>;

  return <Survey model={model} />;
}
