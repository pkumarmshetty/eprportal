

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
          question16: 'shaivik@gmail.com',
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

    // Create shared file array
    const sharedFileArray = [selectedFile];

    // Set the same file for all 3 upload slots
    const updatedInfo = fileInfo.map(() => ({
      files: sharedFileArray,
      path: selectedFile.name,
      uploaded: true,
    }));

    setFileInfo(updatedInfo);

    // Set survey values
    if (model) {
      model.setValue('question6', 'ABCDE1234F');
      model.setValue('question10', 'ABCDE1234F');
      model.setValue('question9', '9876543210');
      model.setValue('question16', 'aadhaar@email.com');
      model.setValue('question8', 'John Doe - Director');
      model.setValue('question19', '24AAACC1206D1ZM');
    }
  };

  // const handleUpload = (index: number, files: File[]) => {
  //   const selectedFile = files[0];
  //   if (!selectedFile) return;

  //   const clonedFileArray = [selectedFile]; // Ensures consistent reference

  //   const updatedInfo = [...fileInfo];

  //   // Always update the one being interacted with
  //   updatedInfo[index] = {
  //     files: clonedFileArray,
  //     path: selectedFile.name,
  //     uploaded: true,
  //   };

  //   // If first file uploaded, replicate it to all 3 uploaders
  //   if (index === 0) {
  //     for (let i = 1; i < 3; i++) {
  //       updatedInfo[i] = {
  //         files: clonedFileArray,
  //         path: selectedFile.name,
  //         uploaded: true,
  //       };
  //     }
  //   }

  //   setFileInfo(updatedInfo);

  //   // Auto-fill survey fields
  //   if (model) {
  //     model.setValue('question6', 'ABCDE1234F');
  //     model.setValue('question10', 'ABCDE1234F');

  //     if (index === 0) {
  //       model.setValue('question9', '9876543210');
  //       model.setValue('question16', 'aadhaar@email.com');
  //       model.setValue('question8', 'John Doe - Director');
  //       model.setValue('question19', '24AAACC1206D1ZM');
  //     } else if (index === 1) {
  //       model.setValue('question9', '9876543210');
  //       model.setValue('question16', 'aadhaar@email.com');
  //     } else if (index === 2) {
  //       model.setValue('question8', 'John Doe - Director');
  //       model.setValue('question19', '24AAACC1206D1ZM');
  //     }
  //   }
  // };

  // const handleUpload = (index: number, files: File[]) => {
  //   const selectedFile = files[0];
  //   if (!selectedFile) return;

  //   setTimeout(() => {
  //     const newInfo = [...fileInfo];

  //     // Update first upload
  //     newInfo[index] = {
  //       files,
  //       path: selectedFile.name,
  //       uploaded: true,
  //     };

  //     // If it's the first file, replicate it to the other two
  //     if (index === 0) {
  //       for (let i = 1; i <= 2; i++) {
  //         newInfo[i] = {
  //           files: [selectedFile],
  //           path: selectedFile.name,
  //           uploaded: true,
  //         };
  //       }
  //     }

  //     setFileInfo(newInfo);

  //     if (model) {
  //       model.setValue('question6', 'ABCDE1234F');
  //       model.setValue('question10', 'ABCDE1234F');

  //       if (index === 0) {
  //         model.setValue('question9', '9876543210');
  //         model.setValue('question16', 'aadhaar@email.com');
  //         model.setValue('question8', 'John Doe - Director');
  //         model.setValue('question19', '24AAACC1206D1ZM');
  //       } else if (index === 1) {
  //         model.setValue('question9', '9876543210');
  //         model.setValue('question16', 'aadhaar@email.com');
  //       } else if (index === 2) {
  //         model.setValue('question8', 'John Doe - Director');
  //         model.setValue('question19', '24AAACC1206D1ZM');
  //       }
  //     }
  //   }, 2000);
  // };

  if (!model) return <p>Loading survey...</p>;

  return (
    <div style={{ maxWidth: '100%', zoom: 0.7 }}>
      <NavbarMain />
      <Survey model={model} />

      {/* File Uploads */}
      <Box sx={{ maxWidth: '100%', margin: '40px auto', display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
        {['Supporting Documents for Industry Category *', 'Exemption for Micro & Small Brand-Owners *', 'Online Platforms and Marketplaces *'].map((label, i) => (
          <Box key={i} sx={{ width: 550 }}>
            <Typography fontWeight="bold" fontSize={14} mb={1}>{label}</Typography>
            <DropzoneArea
              acceptedFiles={['image/*', 'application/pdf']}
              dropzoneText={`Drag and Drop the file`}
              onChange={(files) => handleUpload(i, files)}
              filesLimit={1}
              showAlerts
              initialFiles={fileInfo}
            //               showPreviews={false} // ⛔ hide previews below dropzone
            // showPreviewsInDropzone={false} // ⛔ hide thumbnails inside dropzone
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
      <Dialog open={dialogOpen} onClose={() => { }} maxWidth="sm" fullWidth PaperProps={{ sx: { width: 500 } }}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <Typography>
            Your registered email ID is: <strong>shaivik@gmail.com</strong>
          </Typography>
          <Typography mt={2} color="text.secondary">
            Redirecting to login page in 2 seconds...
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
