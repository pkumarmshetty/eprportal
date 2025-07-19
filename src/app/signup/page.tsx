// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { Survey } from 'survey-react-ui';
// // import { Model } from 'survey-core';
// // import DashboardComponent from '@/components/DashboardComponent';
// // import NavbarMain from '@/components/NavbarMain';
// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Typography,
// //   Button,
// // } from '@mui/material';

// // export default function SurveyPreview() {
// //   const [model, setModel] = useState<Model | null>(null);
// //   const [dialogOpen, setDialogOpen] = useState(false);
// //   const [registeredEmail, setRegisteredEmail] = useState('');
// //   const [redirectTriggered, setRedirectTriggered] = useState(false);

// //   useEffect(() => {
// //     const stored = localStorage.getItem('survey-schema');
// //     console.log('🔍 Loaded survey schema:', stored);

// //     if (stored) {
// //       try {
// //         const parsed = JSON.parse(stored);
// //         const schema = Array.isArray(parsed) ? parsed[0] : parsed;
// //         const surveyModel = new Model(schema);

// //         surveyModel.showNavigationButtons = false;
// //         surveyModel.showCompletedPage = false;

// //         const autofillData = {
// //           question1: 'Pavan Pvt Ltd',
// //           question2: 'Pavan Brand',
// //           question3: 'Manufacturing',
// //           question4: 'Private Limited',
// //           question5: 'Industrial Area, Bangalore',
// //           question6: 'ABCDE1234F',
// //           question7: 'U12345KA2021PTC123456',
// //           question8: 'John Doe - Director',
// //           question9: '9876543210',
// //           question10: 'ABCDE1234F',
// //             question16: 'shaivik@email.com',
// //           question17: "******",
// //           question19: '24AAACC1206D1ZM'
// //         };

// //         const filledFields = new Set();

// //         surveyModel.onAfterRenderQuestion.add((survey, options) => {
// //           const input = options.htmlElement.querySelector('input, textarea');
// //           if (input && options.question.name in autofillData) {
// //             input.addEventListener('focus', () => {
// //               const name = options.question.name;
// //               if (!filledFields.has(name)) {
// //                 surveyModel.setValue(name, autofillData[name]);
// //                 filledFields.add(name);

// //                 if (name === 'question3') {
// //                   Object.entries(autofillData).forEach(([key, value]) => {
// //                     if (!filledFields.has(key)) {
// //                       surveyModel.setValue(key, value);
// //                       filledFields.add(key);
// //                     }
// //                   });
// //                 }
// //               }
// //             });
// //           }
// //         });

// //         surveyModel.onComplete.add((sender) => {
// //           console.log('✅ Submitted Data:', sender.data);
// //           sender.clear();
// //           sender.isCompleted = false;
// //         });

// //         setModel(surveyModel);
// //       } catch (err) {
// //         console.error('❌ Failed to parse stored survey JSON:', err);
// //       }
// //     }
// //   }, []);

// //   const handleSubmit = () => {
// //     if (model) {
// //       model.doComplete();

// //       const email = model.data.email || model.data.question10 || 'pavan@gmail.com';
// //       setRegisteredEmail(email);
// //       setDialogOpen(true);
// //     }
// //   };

// //   const handleOkay = () => {
// //     setRedirectTriggered(true);

// //     setTimeout(() => {
// //       window.location.href = '/';
// //     }, 2000);
// //   };

// //   if (!model) return <p>Loading survey...</p>;

// //   return (
// //     <div style={{ maxWidth: '100%', zoom: 0.7 }}>
// //       <NavbarMain />

// //       <Survey model={model} />

// //       <div style={{ textAlign: 'right', marginTop: '16px' }}>
// //         <button
// //           onClick={handleSubmit}
// //           style={{
// //             padding: '10px 20px',
// //              margin: '50px 20px',
// //             fontSize: '16px',
// //             backgroundColor: 'black',
// //             color: '#fff',
// //             border: 'none',
// //             borderRadius: '6px',
// //             cursor: 'pointer',
// //           }}
// //         >
// //           Sign Up
// //         </button>
// //       </div>

// //       <Dialog
// //         open={dialogOpen}
// //         onClose={() => {}}
// //         maxWidth="sm"
// //         fullWidth
// //         PaperProps={{ sx: { width: 500 } }}
// //       >
// //         <DialogTitle>Registration Successful</DialogTitle>
// //         <DialogContent>
// //           <Typography>
// //             Your registered email ID is: <strong>{registeredEmail}</strong>
// //           </Typography>
// //           {redirectTriggered && (
// //             <Typography mt={2} color="text.secondary">
// //               Redirecting to login page in 2 seconds...
// //             </Typography>
// //           )}
// //         </DialogContent>
// //         <DialogActions>
// //           {!redirectTriggered && (
// //             <Button variant="contained" sx={{color:'white',backgroundColor:'black'}} onClick={handleOkay}>
// //               Okay
// //             </Button>
// //           )}
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Survey } from 'survey-react-ui';
// import { Model } from 'survey-core';
// import DashboardComponent from '@/components/DashboardComponent';
// import NavbarMain from '@/components/NavbarMain';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
// } from '@mui/material';

// export default function SurveyPreview() {
//   const [model, setModel] = useState<Model | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [registeredEmail, setRegisteredEmail] = useState('');

//   useEffect(() => {
//     const stored = localStorage.getItem('survey-schema');
//     if (stored) {
//       try {
//         const parsed = JSON.parse(stored);
//         const schema = Array.isArray(parsed) ? parsed[0] : parsed;
//         const surveyModel = new Model(schema);

//         surveyModel.showNavigationButtons = false;
//         surveyModel.showCompletedPage = false;

//         const autofillData = {
//           question1: 'Pavan Pvt Ltd',
//           question2: 'Pavan Brand',
//           question3: 'Manufacturing',
//           question4: 'Private Limited',
//           question5: 'Industrial Area, Bangalore',
//           question6: 'ABCDE1234F',
//           question7: 'U12345KA2021PTC123456',
//           question8: 'John Doe - Director',
//           question9: '9876543210',
//           question10: 'ABCDE1234F',
//           question16: 'shaivik@email.com',
//           question17: "******",
//           question19: '24AAACC1206D1ZM'
//         };

//         const filledFields = new Set();

//         surveyModel.onAfterRenderQuestion.add((survey, options) => {
//           const input = options.htmlElement.querySelector('input, textarea');
//           if (input && options.question.name in autofillData) {
//             input.addEventListener('focus', () => {
//               const name = options.question.name;
//               if (!filledFields.has(name)) {
//                 surveyModel.setValue(name, autofillData[name]);
//                 filledFields.add(name);

//                 if (name === 'question3') {
//                   Object.entries(autofillData).forEach(([key, value]) => {
//                     if (!filledFields.has(key)) {
//                       surveyModel.setValue(key, value);
//                       filledFields.add(key);
//                     }
//                   });
//                 }
//               }
//             });
//           }
//         });

//         surveyModel.onComplete.add((sender) => {
//           sender.clear();
//           sender.isCompleted = false;
//         });

//         setModel(surveyModel);
//       } catch (err) {
//         console.error('❌ Failed to parse stored survey JSON:', err);
//       }
//     }
//   }, []);

//   const handleSubmit = () => {
//     if (model) {
//       model.doComplete();

//       const email = model.data.email || model.data.question10 || 'pavan@gmail.com';
//       setRegisteredEmail(email);
//       setDialogOpen(true);

//       setTimeout(() => {
//         window.location.href = '/';
//       }, 2000);
//     }
//   };

//   if (!model) return <p>Loading survey...</p>;

//   return (
//     <div style={{ maxWidth: '100%', zoom: 0.7 }}>
//       <NavbarMain />

//       <Survey model={model} />

//       <div style={{ textAlign: 'right', marginTop: '16px' }}>
//         <button
//           onClick={handleSubmit}
//           style={{
//             padding: '10px 20px',
//             margin: '50px 20px',
//             fontSize: '16px',
//             backgroundColor: 'black',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//           }}
//         >
//           Sign Up
//         </button>
//       </div>

//       <Dialog
//         open={dialogOpen}
//         onClose={() => {}}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{ sx: { width: 500 } }}
//       >
//         <DialogTitle>Registration Successful</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Your registered email ID is: <strong>{registeredEmail}</strong>
//           </Typography>
//           <Typography mt={2} color="text.secondary">
//             Redirecting to login page in 2 seconds...
//           </Typography>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Survey } from 'survey-react-ui';
// import { Model } from 'survey-core';
// import DashboardComponent from '@/components/DashboardComponent';
// import NavbarMain from '@/components/NavbarMain';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   Box,
// } from '@mui/material';
// import { DropzoneArea } from 'mui-file-dropzone';

// export default function SurveyPreview() {
//   const [model, setModel] = useState<Model | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [registeredEmail, setRegisteredEmail] = useState('');

//   useEffect(() => {
//     const stored = localStorage.getItem('survey-schema');
//     if (stored) {
//       try {
//         const parsed = JSON.parse(stored);
//         const schema = Array.isArray(parsed) ? parsed[0] : parsed;
//         const surveyModel = new Model(schema);

//         surveyModel.showNavigationButtons = false;
//         surveyModel.showCompletedPage = false;

//         const autofillData = {
//           question1: 'Pavan Pvt Ltd',
//           question2: 'Pavan Brand',
//           question3: 'Manufacturing',
//           question4: 'Private Limited',
//           question5: 'Industrial Area, Bangalore',
//           question6: 'ABCDE1234F',
//           question7: 'U12345KA2021PTC123456',
//           question8: 'John Doe - Director',
//           question9: '9876543210',
//           question10: 'ABCDE1234F',
//           question16: 'shaivik@email.com',
//           question17: "******",
//           question19: '24AAACC1206D1ZM'
//         };

//         const filledFields = new Set();

//         surveyModel.onAfterRenderQuestion.add((survey, options) => {
//           const input = options.htmlElement.querySelector('input, textarea');
//           if (input && options.question.name in autofillData) {
//             input.addEventListener('focus', () => {
//               const name = options.question.name;
//               if (!filledFields.has(name)) {
//                 surveyModel.setValue(name, autofillData[name]);
//                 filledFields.add(name);

//                 if (name === 'question3') {
//                   Object.entries(autofillData).forEach(([key, value]) => {
//                     if (!filledFields.has(key)) {
//                       surveyModel.setValue(key, value);
//                       filledFields.add(key);
//                     }
//                   });
//                 }
//               }
//             });
//           }
//         });

//         surveyModel.onComplete.add((sender) => {
//           sender.clear();
//           sender.isCompleted = false;
//         });

//         setModel(surveyModel);
//       } catch (err) {
//         console.error('❌ Failed to parse stored survey JSON:', err);
//       }
//     }
//   }, []);

//   const handleSubmit = () => {
//     if (model) {
//       model.doComplete();
//       const email = model.data.email || model.data.question10 || 'pavan@gmail.com';
//       setRegisteredEmail(email);
//       setDialogOpen(true);

//       setTimeout(() => {
//         window.location.href = '/';
//       }, 2000);
//     }
//   };

//   if (!model) return <p>Loading survey...</p>;

//   return (
//     <div style={{ maxWidth: '100%', zoom: 0.7 }}>
//       <NavbarMain />

//       <Survey model={model} />

//       {/* Dropzone Sections */}
//       <Box mt={4} px={2}>
//         <Typography variant="h6" gutterBottom>Upload PAN Card</Typography>
//         <DropzoneArea
//           acceptedFiles={['image/*', '.pdf']}
//           dropzoneText="Drag & drop your PAN card here or click"
//           filesLimit={1}
//           onChange={(files) => console.log('PAN files:', files)}
//         />
//       </Box>

//       <Box mt={4} px={2}>
//         <Typography variant="h6" gutterBottom>Upload Aadhaar Card</Typography>
//         <DropzoneArea
//           acceptedFiles={['image/*', '.pdf']}
//           dropzoneText="Drag & drop your Aadhaar card here or click"
//           filesLimit={1}
//           onChange={(files) => console.log('Aadhaar files:', files)}
//         />
//       </Box>

//       <Box mt={4} px={2}>
//         <Typography variant="h6" gutterBottom>Upload Company Certificate</Typography>
//         <DropzoneArea
//           acceptedFiles={['image/*', '.pdf']}
//           dropzoneText="Drag & drop your certificate here or click"
//           filesLimit={1}
//           onChange={(files) => console.log('Certificate files:', files)}
//         />
//       </Box>

//       {/* Submit Button */}
//       <div style={{ textAlign: 'right', marginTop: '16px' }}>
//         <button
//           onClick={handleSubmit}
//           style={{
//             padding: '10px 20px',
//             margin: '50px 20px',
//             fontSize: '16px',
//             backgroundColor: 'black',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//           }}
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* Dialog */}
//       <Dialog
//         open={dialogOpen}
//         onClose={() => {}}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{ sx: { width: 500 } }}
//       >
//         <DialogTitle>Registration Successful</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Your registered email ID is: <strong>{registeredEmail}</strong>
//           </Typography>
//           <Typography mt={2} color="text.secondary">
//             Redirecting to login page in 2 seconds...
//           </Typography>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Survey } from 'survey-react-ui';
// import { Model } from 'survey-core';
// import NavbarMain from '@/components/NavbarMain';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Typography,
//   Button,
//   Box,
// } from '@mui/material';
// import { DropzoneArea } from 'mui-file-dropzone'; // ✅ Use MUI v5-compatible version
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// export default function SurveyPreview() {
//   const [model, setModel] = useState<Model | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [registeredEmail, setRegisteredEmail] = useState('');
//   const [redirectTriggered, setRedirectTriggered] = useState(false);
//   const [fileInfo, setFileInfo] = useState([
//     { files: [], path: '', uploaded: false },
//     { files: [], path: '', uploaded: false },
//     { files: [], path: '', uploaded: false },
//   ]);

//   useEffect(() => {
//     const stored = localStorage.getItem('survey-schema');
//     if (stored) {
//       try {
//         const parsed = JSON.parse(stored);
//         const schema = Array.isArray(parsed) ? parsed[0] : parsed;
//         const surveyModel = new Model(schema);

//         surveyModel.showNavigationButtons = false;
//         surveyModel.showCompletedPage = false;

//         setModel(surveyModel);
//       } catch (err) {
//         console.error('❌ Failed to parse stored survey JSON:', err);
//       }
//     }
//   }, []);

//   const handleSubmit = () => {
//     if (model) {
//       model.doComplete();
//       const email = model.data.email || model.data.question10 || 'pavan@gmail.com';
//       setRegisteredEmail(email);
//       setDialogOpen(true);
//     }
//   };

//   const handleOkay = () => {
//     setRedirectTriggered(true);
//     setTimeout(() => {
//       window.location.href = '/';
//     }, 2000);
//   };

//   const handleUpload = (index: number, files: File[]) => {
//     const selectedFile = files[0];
//     if (!selectedFile) return;

//     setTimeout(() => {
//       const newInfo = [...fileInfo];
//       newInfo[index] = {
//         files,
//         path: selectedFile.name,
//         uploaded: true,
//       };
//       setFileInfo(newInfo);

//       // Auto-fill survey fields
//       if (model) {
//         switch (index) {
//           case 0:
//             model.setValue('question6', 'ABCDE1234F');
//             model.setValue('question10', 'ABCDE1234F');
//             break;
//           case 1:
//             model.setValue('question9', '9876543210');
//             model.setValue('question16', 'aadhaar@email.com');
//             break;
//           case 2:
//             model.setValue('question8', 'John Doe - Director');
//             model.setValue('question19', '24AAACC1206D1ZM');
//             break;
//         }
//       }
//     }, 2000);
//   };

//   if (!model) return <p>Loading survey...</p>;

//   return (
//     <div style={{ maxWidth: '100%', zoom: 0.7 }}>
//       <NavbarMain />

//       <Survey model={model} />

//       {/* File Uploads Row */}
//       <Box
//         sx={{
//           maxWidth: '100%',
//           margin: '40px auto',
//           display: 'flex',
//           gap: 3,
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//         }}
//       >
//         {/* PAN Upload */}
//         <Box sx={{ width: 50 }}>
//           <Typography fontWeight="bold" fontSize={14} mb={1}>
//             PAN Document
//           </Typography>
//           <DropzoneArea
//             acceptedFiles={['image/*', 'application/pdf']}
//             dropzoneText="Upload PAN"
//             onChange={(files) => handleUpload(0, files)}
//             filesLimit={1}
//             showAlerts
//           />
//           {fileInfo[0].uploaded && (
//             <Box display="flex" alignItems="center" mt={1} gap={1}>
//               <CheckCircleIcon color="success" />
//               <Typography fontSize="14px" color="green">
//                 {fileInfo[0].path}
//               </Typography>
//             </Box>
//           )}
//         </Box>

//         {/* Aadhaar Upload */}
//         <Box sx={{ width: 550 }}>
//           <Typography fontWeight="bold" fontSize={14} mb={1}>
//             Aadhaar Document
//           </Typography>
//           <DropzoneArea
//             acceptedFiles={['image/*', 'application/pdf']}
//             dropzoneText="Upload Aadhaar"
//             onChange={(files) => handleUpload(1, files)}
//             filesLimit={1}
//             showAlerts
//           />
//           {fileInfo[1].uploaded && (
//             <Box display="flex" alignItems="center" mt={1} gap={1}>
//               <CheckCircleIcon color="success" />
//               <Typography fontSize="14px" color="green">
//                 {fileInfo[1].path}
//               </Typography>
//             </Box>
//           )}
//         </Box>

//         {/* Passport Upload */}
//         <Box sx={{ width: 550 }}>
//           <Typography fontWeight="bold" fontSize={14} mb={1}>
//             Passport Document
//           </Typography>
//           <DropzoneArea
//             acceptedFiles={['image/*', 'application/pdf']}
//             dropzoneText="Upload Passport"
//             onChange={(files) => handleUpload(2, files)}
//             filesLimit={1}
//             showAlerts
//           />
//           {fileInfo[2].uploaded && (
//             <Box display="flex" alignItems="center" mt={1} gap={1}>
//               <CheckCircleIcon color="success" />
//               <Typography fontSize="14px" color="green">
//                 {fileInfo[2].path}
//               </Typography>
//             </Box>
//           )}
//         </Box>
//       </Box>

//       {/* Submit Button */}
//       <div style={{ textAlign: 'right', marginTop: '16px' }}>
//         <button
//           onClick={handleSubmit}
//           style={{
//             padding: '10px 20px',
//             margin: '50px 20px',
//             fontSize: '16px',
//             backgroundColor: 'black',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//           }}
//         >
//           Sign Up
//         </button>
//       </div>

//       {/* Dialog */}
//       <Dialog
//         open={dialogOpen}
//         onClose={() => {}}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{ sx: { width: 500 } }}
//       >
//         <DialogTitle>Registration Successful</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Your registered email ID is: <strong>{registeredEmail}</strong>
//           </Typography>
//           {redirectTriggered && (
//             <Typography mt={2} color="text.secondary">
//               Redirecting to login page in 2 seconds...
//             </Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           {!redirectTriggered && (
//             <Button
//               variant="contained"
//               sx={{ color: 'white', backgroundColor: 'black' }}
//               onClick={handleOkay}
//             >
//               Okay
//             </Button>
//           )}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import NavbarMain from '@/components/NavbarMain';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
} from '@mui/material';
import { DropzoneArea } from 'mui-file-dropzone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function SurveyPreview() {
  const [model, setModel] = useState<Model | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [fileInfo, setFileInfo] = useState([
    { files: [], path: '', uploaded: false },
    { files: [], path: '', uploaded: false },
    { files: [], path: '', uploaded: false },
  ]);

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
            question16: 'shaivik@email.com',
          question17: "******",
          question19: '24AAACC1206D1ZM'
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
    if (model) {
      model.doComplete();
      const email = model.data.email || model.data.question10 || 'pavan@gmail.com';
      setRegisteredEmail(email);
      setDialogOpen(true);

      // 🔁 Auto-redirect to home after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  };

  const handleUpload = (index: number, files: File[]) => {
    const selectedFile = files[0];
    if (!selectedFile) return;

    setTimeout(() => {
      const newInfo = [...fileInfo];
      newInfo[index] = {
        files,
        path: selectedFile.name,
        uploaded: true,
      };
      setFileInfo(newInfo);

      if (model) {
        switch (index) {
          case 0:
            model.setValue('question6', 'ABCDE1234F');
            model.setValue('question10', 'ABCDE1234F');
            break;
          case 1:
            model.setValue('question9', '9876543210');
            model.setValue('question16', 'aadhaar@email.com');
            break;
          case 2:
            model.setValue('question8', 'John Doe - Director');
            model.setValue('question19', '24AAACC1206D1ZM');
            break;
        }
      }
    }, 2000);
  };

  if (!model) return <p>Loading survey...</p>;

  return (
    <div style={{ maxWidth: '100%', zoom: 0.7 }}>
      <NavbarMain />
      <Survey model={model} />

      {/* File Uploads */}
      <Box sx={{ maxWidth: '100%', margin: '40px auto', display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
        {['Supporting Documents for Industry Category *', 'Exemption for Micro & Small Brand-Owners *', 'Online Platforms and Marketplaces *'].map((label, i) => (
          <Box key={i} sx={{ width: 550  }}>
            <Typography fontWeight="bold" fontSize={14} mb={1}>{label}</Typography>
            <DropzoneArea
              acceptedFiles={['image/*', 'application/pdf']}
              dropzoneText={`Drag and Drop the file`}
              onChange={(files) => handleUpload(i, files)}
              filesLimit={1}
              showAlerts
            />
            {fileInfo[i].uploaded && (
              <Box display="flex" alignItems="center" mt={1} gap={1}>
                <CheckCircleIcon color="success" />
                <Typography fontSize="14px" color="green">Verified</Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Submit Button */}
      <div style={{ textAlign: 'right', marginTop: '16px' }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            margin: '50px 20px',
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

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={() => {}} maxWidth="sm" fullWidth PaperProps={{ sx: { width: 500 } }}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <Typography>
            Your registered email ID is: <strong>{registeredEmail}</strong>
          </Typography>
          <Typography mt={2} color="text.secondary">
            Redirecting to login page in 2 seconds...
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
