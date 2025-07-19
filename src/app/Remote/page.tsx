'use client';

import React from 'react';

function Page() {
  return (
    <div style={{ width: '100%', height: '100vh',padding:'30px' }}>
      <iframe
        src="https://8x8.vc/vpaas-magic-cookie-cf5217ce8a4048d89baa3f88ab649551/eprverification"
        width="100%"
        height="100%"
        style={{ border: 'none', }}
        allow="camera; microphone; fullscreen; display-capture"
        title="EPR Verification"
      />
    </div>
  );
}

export default Page;
