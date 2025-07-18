'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  SurveyCreator,
  SurveyCreatorComponent
} from 'survey-creator-react';
import { Model } from 'survey-core';

export default function SurveyBuilder() {
  const [creatorReady, setCreatorReady] = useState(false);
  const creatorRef = useRef<SurveyCreator | null>(null);

  useEffect(() => {
    const creator = new SurveyCreator();

    creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
      const json = creator.JSON;
      console.log('📝 Survey JSON:', json);

      // ✅ Save to localStorage (overwrite existing)
      localStorage.setItem('survey-schema', JSON.stringify(json));

      callback(saveNo, true);
    };

    creatorRef.current = creator;
    setCreatorReady(true);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        padding: 20,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      

      {creatorReady && creatorRef.current && (
        <SurveyCreatorComponent creator={creatorRef.current} />
      )}
    </div>
  );
}
