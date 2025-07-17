'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DashboardNavbar = dynamic(() => import('@/components/DashboardNavbar'), { ssr: false });

const Page: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Ensures client-only rendering
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div>
      <DashboardNavbar />
    </div>
  );
};

export default Page;
