
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

    if (!model) return <p>No survey data found in localStorage.</p>;

    return (
        <DashboardComponent>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    gap: '40px', // adds space between items
                    padding: '20px', // adds padding around the items
                }}
            >
                <div style={{ width: '180px', textAlign: 'center' }}>
                    <strong>GST Number</strong><br />
                    27ABCDE1234F1Z5
                </div>

                <div style={{ width: '180px', textAlign: 'center' }}>
                    <strong>Legal Name</strong><br />
                    Recycler
                </div>

                <div style={{ width: '180px', textAlign: 'center' }}>
                    <strong>Type of Company</strong><br />
                    Small
                </div>

                <div style={{ width: '180px', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}>
                    View Full Details
                </div>
            </div>

            <div
                style={{
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px',
                }}
            >
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#9CBC4C',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Part 1
                </button>

                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'gray',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Part 2
                </button>

                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'gray',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Part 3
                </button>

                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'gray',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Part 4
                </button>

            </div>
            <div>
<Survey model={model} />
<button
                    onClick={() => {
                        handleSubmit();
                        window.location.href = '/WasteDetailsPageB';
                    }}
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
 
            <div style={{ textAlign: 'right', marginTop: '16px' }}>
               
                

            </div>

        </DashboardComponent>
    );
}

