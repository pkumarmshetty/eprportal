

'use client';
import React from 'react';
// import Navbar from './Navbar';
// import NavbarMain from './NavbarMain';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });

const NavbarMain = dynamic(() => import('./NavbarMain'), { ssr: false });
function HomePage() {
  const dummyImages = [
    'https://i.ibb.co/pBSQjpdp/p1.jpg',
    'https://i.ibb.co/zVyrc6jq/p2.jpg',
    'https://i.ibb.co/VYMXchkq/p3.jpg',
    'https://i.ibb.co/84DLGQy2/p4.jpg',
    'https://i.ibb.co/pBSQjpdp/p1.jpg',
    'https://i.ibb.co/zVyrc6jq/p2.jpg',
    'https://i.ibb.co/VYMXchkq/p3.jpg',
    'https://i.ibb.co/84DLGQy2/p4.jpg',
    
  ];

  return (
    <>
      <Navbar />
      <NavbarMain /> 

      <div
        style={{
          height: 'calc(100vh - 100px)',
          width: '100%',
          backgroundImage: 'url(https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: 'flex',
            height: '70%',
            width: '100%',
            padding: '0 40px',
          }}
        >
          {/* Left */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '120%',
                color: '#9CBC4C',
              }}
            >
              REDUCING. REUSING. RECYCLING
            </div>
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '71px',
                lineHeight: '120%',
                color: '#fff',
                maxWidth: '80%',
              }}
            >
              Efficient Free Waste Disposal for a Cleaner Tomorrow.
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '120%',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', padding: '0 8px' }}>Morning</span>
              <span style={{ fontSize: '12px', padding: '0 8px' }}>Evening</span>
              <span style={{ fontSize: '12px', padding: '0 8px' }}>Night</span>
            </div>
            Smart Waste Management
            <br />
            for a Cleaner Future
          </div>
        </div>

        {/* Bottom Scrollable Card Section */}
        <div
          style={{
            height: '30%',
            padding: '16px 40px',
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
          className="hide-scrollbar"
        >
          {dummyImages.map((src, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 20%', // ensures 5 cards per row
                scrollSnapAlign: 'start',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                height: '150px',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={src}
                alt={`Card ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;

