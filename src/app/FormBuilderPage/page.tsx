// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';
// // import 'survey-core/defaultV2.min.css';
// // import 'survey-creator-core/survey-creator-core.min.css';

// export default function SurveyBuilder() {
//   const [creatorReady, setCreatorReady] = useState(false);
//   const creatorRef = useRef<SurveyCreator | null>(null);

//   useEffect(() => {
//     const creator = new SurveyCreator();
//     creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
//       const json = creator.JSON;
//       console.log('📝 Survey JSON:', json);
//       callback(saveNo, true);
//     };

//     creatorRef.current = creator;
//     setCreatorReady(true); // ✅ Only show component once ready
//   }, []);

//   return (
//     <div style={{height: '100vh', padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//       <h2 style={{ fontFamily: 'Inter', marginBottom: 16, }}>SurveyJS Form Builder</h2>
//       {creatorReady && creatorRef.current && (
//         <SurveyCreatorComponent creator={creatorRef.current} />
//       )}
//     </div>
//   );
// }

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';


// export default function SurveyBuilder() {
//   const [creatorReady, setCreatorReady] = useState(false);
//   const creatorRef = useRef<SurveyCreator | null>(null);
//   const [savedJson, setSavedJson] = useState<any>(null); // ⬅️ Store saved schema here

//   useEffect(() => {
//     const creator = new SurveyCreator();

//     // Custom save handler
//     creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
//       const json = creator.JSON;
//       console.log('📝 Survey JSON:', json);
//       setSavedJson(json); // ⬅️ Save it to state
//       callback(saveNo, true);
//     };

//     creatorRef.current = creator;
//     setCreatorReady(true);
//   }, []);

//   return (
//     <div style={{ width: '100%' }}>
//       <h2 style={{ fontFamily: 'Inter', marginBottom: 16 }}>SurveyJS Form Builder</h2>
//       {creatorReady && creatorRef.current && (
//         <SurveyCreatorComponent creator={creatorRef.current} />
//       )}

//       {savedJson && (
//         <div style={{ marginTop: 40 }}>
//           <h3>📄 Saved Form JSON:</h3>

//           <SurveyPreview json={savedJson} />
//           <pre
//             style={{
//               backgroundColor: '#f4f4f4',
//               padding: '16px',
//               borderRadius: '8px',
//               maxHeight: '300px',
//               overflowY: 'auto',
//             }}
//           >
//             {JSON.stringify(savedJson, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   SurveyCreator,
//   SurveyCreatorComponent
// } from 'survey-creator-react';
// import { Survey } from 'survey-react-ui';
// import { Model } from 'survey-core';


// export default function SurveyBuilder() {
//   const [creatorReady, setCreatorReady] = useState(false);
//   const creatorRef = useRef<SurveyCreator | null>(null);
//   const [savedJson, setSavedJson] = useState<any>(null); // Store saved schema
//   const [previewModel, setPreviewModel] = useState<Model | null>(null);

//   useEffect(() => {
//     const creator = new SurveyCreator();

//     // Save handler triggered by "Save" in builder
//     creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
//       const json = creator.JSON;
//       console.log('📝 Survey JSON:', json);
//       setSavedJson(json);
//       setPreviewModel(new Model(json)); // Update preview model
//       callback(saveNo, true);
//     };

//     creatorRef.current = creator;
//     setCreatorReady(true);
//   }, []);

//   // Optional: handle survey completion
//   useEffect(() => {
//     if (previewModel) {
//       previewModel.onComplete.add((sender) => {
//         console.log('✅ Survey submitted:', sender.data);
//       });
//     }
//   }, [previewModel]);

//   return (
//     <div style={{ width: '100%', padding: 20,height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//       <h2 style={{ fontFamily: 'Inter', marginBottom: 16 }}>🛠️ SurveyJS Form Builder</h2>

//       {creatorReady && creatorRef.current && (
//         <SurveyCreatorComponent creator={creatorRef.current} />
//       )}

//       {/* {previewModel && (
//         <div style={{ marginTop: 40 }}>
//           <h3>🧾 Form Preview</h3>
//           <Survey model={previewModel} />

//           <h4 style={{ marginTop: 20 }}>📦 Saved JSON</h4>
//           <pre
//             style={{
//               backgroundColor: '#f4f4f4',
//               padding: '16px',
//               borderRadius: '8px',
//               maxHeight: '300px',
//               overflowY: 'auto',
//               fontSize: '14px',
//             }}
//           >
//             {JSON.stringify(savedJson, null, 2)}
//           </pre>
//         </div>
//       )} */}
//     </div>
//   );
// }
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
  const [savedJson, setSavedJson] = useState<any>(null);
  const [previewModel, setPreviewModel] = useState<Model | null>(null);

  useEffect(() => {
    const creator = new SurveyCreator();

    // Save handler triggered by "Save" in builder
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
      const json = creator.JSON;
      console.log('📝 Survey JSON:', json);

      // ✅ Save to localStorage
      localStorage.setItem('survey-schema', JSON.stringify(json));

      setSavedJson(json);
      setPreviewModel(new Model(json));
      callback(saveNo, true);
    };

    creatorRef.current = creator;
    setCreatorReady(true);
  }, []);

  useEffect(() => {
    if (previewModel) {
      previewModel.onComplete.add((sender) => {
        console.log('✅ Survey submitted:', sender.data);
      });
    }
  }, [previewModel]);

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
      <h2 style={{ fontFamily: 'Inter', marginBottom: 16 }}>🛠️ SurveyJS Form Builder</h2>

      {creatorReady && creatorRef.current && (
        <SurveyCreatorComponent creator={creatorRef.current} />
      )}
    </div>
  );
}

