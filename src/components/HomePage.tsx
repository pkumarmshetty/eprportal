// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';
// import Slider from 'react-slick';
// import { Box } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';


// // Lazy load Navbar components
// const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
// const NavbarMain = dynamic(() => import('./NavbarMain'), { ssr: false });

// const HomePage = () => {
//     const dummyImages = [
//         'img1.webp',
//         'img2.webp',
//         'img3.webp',
//         'img4.webp',
//         'img5.webp',
//         'img7.webp',

//     ];
//     const images = [
//         'https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png',
//         'https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png',
//         'https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png',

//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: false,
//     };

//     return (
//         <div style={{ zoom: '0.8' }}>
//             <NavbarMain />
//             <Navbar />


//             {/* <Box sx={{ width: '100%', height: '500px', overflow: 'hidden' }}>
//         <Slider {...settings}>
//           {images.map((src, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: '100%',
//                 height: '600px',
//               }}
//             >
//               <img
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'fill',
//                 }}
//               />
//             </Box>
//           ))}
//         </Slider>

//       </Box> */}
//             <div
//                 style={{
//                     height: 'calc(100vh - 1px)',
//                     width: '100%',
//                     backgroundImage: 'url(https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png)',
//                     backgroundSize: '100% 100%',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     overflow: 'hidden',
//                 }}
//             >
//                 {/* Top Section */}
//                 <div
//                     style={{
//                         display: 'flex',
//                         height: '70%',
//                         width: '100%',
//                         padding: '0 40px',
//                     }}
//                 >
//                     {/* Left */}
//                     <div
//                         style={{
//                             flex: 1,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'center',
//                             gap: '20px',
//                         }}
//                     >
//                         <div
//                             style={{
//                                 // fontFamily: 'Inter',
//                                 fontWeight: 700,
//                                 fontSize: '22px',
//                                 lineHeight: '120%',
//                                 color: '#9CBC4C',
//                             }}
//                         >
//                             REDUCING. REUSING. RECYCLING
//                         </div>
//                         <div
//                             style={{
//                                 // fontFamily: 'Inter',
//                                 fontWeight: 600,
//                                 fontSize: '50px',
//                                 lineHeight: '120%',
//                                 color: '#fff',
//                                 maxWidth: '80%',
//                             }}
//                         >
//                             Efficient Free Waste Disposal for a Cleaner Tomorrow.
//                         </div>
//                     </div>

//                     {/* Right */}
//                     <div
//                         style={{
//                             flex: 1,
//                             display: 'flex',
//                             alignItems: 'center',
//                             flexDirection: 'column',
//                             justifyContent: 'center',
//                             // fontFamily: 'Inter',
//                             fontWeight: 600,
//                             fontSize: '36px',
//                             lineHeight: '120%',
//                             color: '#fff',
//                             textAlign: 'center',
//                         }}
//                     >
//                         <div>
//                             <span style={{ fontSize: '12px', padding: '0 8px' }}>Morning</span>
//                             <span style={{ fontSize: '12px', padding: '0 8px' }}>Evening</span>
//                             <span style={{ fontSize: '12px', padding: '0 8px' }}>Night</span>
//                         </div>
//                         Smart Waste Management
//                         <br />
//                         for a Cleaner Future
//                     </div>
//                 </div>

//                 {/* Bottom Scrollable Card Section */}
//                 <div
//                     style={{
//                         height: '30%',
//                         padding: '16px 40px',
//                         display: 'flex',
//                         gap: '16px',
//                         overflowX: 'hidden',
//                         overflowY: 'hidden',
//                         scrollSnapType: 'x mandatory',
//                         WebkitOverflowScrolling: 'touch',
//                     }}
//                     className="hide-scrollbar"
//                 >
//                     {dummyImages.map((src, index) => (
//                         <div
//                             key={index}
//                             style={{
//                                 flex: '0 0 20%', // ensures 5 cards per row
//                                 scrollSnapAlign: 'start',
//                                 borderRadius: '12px',
//                                 boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
//                                 overflow: 'hidden',
//                                 height: '150px',
//                                 backgroundColor: '#fff',
//                             }}
//                         >
//                             <img
//                                 src={src}
//                                 alt={`Card ${index + 1}`}
//                                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div style={{ width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <p style={{ textAlign: 'justify' }}>
//                     <strong>Towards a Sustainable Viksit Bharat:</strong> India’s Common EPR Portal eases Compliance, Innovation, and Sustainability
//                     <br /><br />
//                     <strong>New Delhi, August 16, 2027 —</strong> In a major leap toward Responsible Consumption and Production (SDG 12), India’s Unified Extended Producer Responsibility (EPR) Portal has delivered measurable success in under one year since its national rollout.
//                     <br /><br />
//                     The modernized platform, which consolidates EPR compliance processes across plastic, e-waste, batteries, used oil, and tyres, is being hailed as a landmark digital transformation in environmental governance.
//                 </p>

//                 <p style={{ fontWeight: 'bold' }}>Key Outcomes Since the Modernization Initiative:</p>
//                 <ul style={{ paddingLeft: '20px', textAlign: 'justify' }}>
//                     <li>✅ <strong>35% reduction</strong> in compliance turnaround time for Producers, Importers, and Brand Owners (PIBOs).</li>
//                     <li>✅ <strong>42% decrease</strong> in fraudulent EPR claims, due to enhanced traceability and automated validation workflows.</li>
//                     <li>✅ <strong>25% increase</strong> in registered waste processors, thanks to simplified, harmonized onboarding and approval processes.</li>
//                     <li>✅ <strong>18% increase</strong> in reported recycling volumes, indicating stronger participation and improved monitoring.</li>
//                 </ul>

//                 <p style={{ textAlign: 'justify' }}>
//                     <strong>Catalyst for Innovation & Accountability:</strong><br />
//                     Beyond compliance, the unified platform is enabling data-driven insights that help businesses track waste generation trends, forecast recycling needs, and optimize reverse logistics.
//                     Businesses are not just meeting compliance—they’re investing in smarter, more responsible waste management practices.
//                 </p>

//                 <p style={{ textAlign: 'justify' }}>
//                     <strong>A Model for Circular Economy Enablement:</strong><br />
//                     Officials say the success of the unified EPR portal is already attracting attention from global sustainability watchdogs and policymakers. By aligning technology, policy, and environmental objectives, the platform is being seen as a critical enabler for India’s circular economy goals.
//                     <br /><br />
//                     MoEFCC plans to further enhance the system with AI-powered analytics, real-time dashboards, and automated fraud detection, paving the way for more transparent and impactful environmental governance.
//                     <br /><br />
//                     As India leads the charge in EPR modernization, the unified portal stands as a powerful example of how digital innovation and sustainability can work hand-in-hand for a cleaner, more accountable future.
//                 </p>
//             </div>


//             <footer
//                 className="footer-distributed"
//                 style={{
//                     backgroundColor: '#2e7d32',
//                     color: 'white',
//                     padding: '30px 20px',
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     justifyContent: 'space-between',
//                 }}
//             >
//                 {/* Left Section */}
//                 <div
//                     className="footer-left"
//                     style={{ flex: 1, minWidth: '250px', marginBottom: '20px' }}
//                 >
//                     <h3>
//                         EPR Portal<span> India</span>
//                     </h3>

//                     <p
//                         className="footer-links"
//                         style={{ margin: '10px 0' }}
//                     >
//                         <a
//                             href="#"
//                             className="link-1"
//                             style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}
//                         >
//                             Home
//                         </a>
//                         <a
//                             href="#"
//                             style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}
//                         >
//                             Registration
//                         </a>
//                         <a
//                             href="#"
//                             style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}
//                         >
//                             Guidelines
//                         </a>
//                         <a
//                             href="#"
//                             style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}
//                         >
//                             Contact
//                         </a>
//                     </p>

//                     <p className="footer-company-name">
//                         Ministry of Environment © Government of India
//                     </p>
//                 </div>

//                 {/* Center Section */}
//                 <div
//                     className="footer-center"
//                     style={{ flex: 1, minWidth: '250px', marginBottom: '20px' }}
//                 >
//                     <div style={{ marginBottom: '10px' }}>
//                         <i className="fa fa-map-marker" style={{ marginRight: '10px' }}></i>
//                         <p>
//                             <span>Central Pollution Control Board</span> Parivesh Bhawan, East Arjun
//                             Nagar, Delhi - 110032
//                         </p>
//                     </div>

//                     <div style={{ marginBottom: '10px' }}>
//                         <i className="fa fa-phone" style={{ marginRight: '10px' }}></i>
//                         <p>+91-11-43102030</p>
//                     </div>

//                     <div>
//                         <i className="fa fa-envelope" style={{ marginRight: '10px' }}></i>
//                         <p>
//                             <a
//                                 href="mailto:support@cpcb.gov.in"
//                                 style={{ color: 'white', textDecoration: 'none' }}
//                             >
//                                 support@cpcb.gov.in
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div
//                     className="footer-right"
//                     style={{ flex: 1, minWidth: '250px' }}
//                 >
//                     <p className="footer-company-about">
//                         <span>About the Portal</span>
//                         This portal is developed by CPCB to streamline the Extended Producer
//                         Responsibility (EPR) implementation under Plastic Waste Management Rules.
//                     </p>

//                     <div className="footer-icons" style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
//                         <a href="#" style={{ color: 'white' }}>
//                             <FacebookIcon sx={{ backgroundColor: 'black', borderRadius: '50%', padding: '4px' }} />
//                         </a>
//                         <a href="#" style={{ color: 'white' }}>
//                             <TwitterIcon />
//                         </a>
//                         <a href="#" style={{ color: 'white' }}>
//                             <LinkedInIcon />
//                         </a>
//                         <a href="#" style={{ color: 'white' }}>
//                             <YouTubeIcon />
//                         </a>
//                     </div>

//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Lazy load Navbar components
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const NavbarMain = dynamic(() => import('./NavbarMain'), { ssr: false });

const HomePage = () => {
  const dummyImages = ['img1.webp', 'img2.webp', 'img3.webp', 'img4.webp', 'img5.webp', 'img7.webp'];

  return (
    <div style={{ zoom: '0.8' }}>
      <NavbarMain />
      <Navbar />

      {/* Hero Section with Background */}
      <div
        style={{
          height: 'calc(100vh - 1px)',
          width: '100%',
          backgroundImage: 'url(https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Top Hero Text */}
        <div style={{ display: 'flex', height: '70%', width: '100%', padding: '0 40px' }}>
          {/* Left */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
            <div style={{ fontWeight: 700, fontSize: '22px', lineHeight: '120%', color: '#9CBC4C' }}>
              REDUCING. REUSING. RECYCLING
            </div>
            <div style={{ fontWeight: 600, fontSize: '50px', lineHeight: '120%', color: '#fff', maxWidth: '80%' }}>
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

        {/* Scrollable Card Section */}
        <div
          style={{
            height: '30%',
            padding: '16px 40px',
            display: 'flex',
            gap: '16px',
            overflowX: 'hidden',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
          className="hide-scrollbar"
        >
          {dummyImages.map((src, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 20%',
                scrollSnapAlign: 'start',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                height: '150px',
                backgroundColor: '#fff',
              }}
            >
              <img src={src} alt={`Card ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Centered Informative Section */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'justify',
        }}
      >
        <p>
          <strong>Towards a Sustainable Viksit Bharat:</strong> India’s Common EPR Portal eases Compliance, Innovation, and Sustainability
          <br />
          <br />
          <strong>New Delhi, August 16, 2027 —</strong> In a major leap toward Responsible Consumption and Production (SDG 12), India’s Unified Extended Producer Responsibility (EPR) Portal has delivered measurable success in under one year since its national rollout.
          <br />
          <br />
          The modernized platform, which consolidates EPR compliance processes across plastic, e-waste, batteries, used oil, and tyres, is being hailed as a landmark digital transformation in environmental governance.
        </p>

        <p style={{ fontWeight: 'bold' }}>Key Outcomes Since the Modernization Initiative:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            ✅ <strong>35% reduction</strong> in compliance turnaround time for Producers, Importers, and Brand Owners (PIBOs).
          </li>
          <li>
            ✅ <strong>42% decrease</strong> in fraudulent EPR claims, due to enhanced traceability and automated validation workflows.
          </li>
          <li>
            ✅ <strong>25% increase</strong> in registered waste processors, thanks to simplified, harmonized onboarding and approval processes.
          </li>
          <li>
            ✅ <strong>18% increase</strong> in reported recycling volumes, indicating stronger participation and improved monitoring.
          </li>
        </ul>

        <p>
          <strong>Catalyst for Innovation & Accountability:</strong>
          <br />
          Beyond compliance, the unified platform is enabling data-driven insights that help businesses track waste generation trends, forecast recycling needs, and optimize reverse logistics.
          Businesses are not just meeting compliance—they’re investing in smarter, more responsible waste management practices.
        </p>

        <p>
          <strong>A Model for Circular Economy Enablement:</strong>
          <br />
          Officials say the success of the unified EPR portal is already attracting attention from global sustainability watchdogs and policymakers. By aligning technology, policy, and environmental objectives, the platform is being seen as a critical enabler for India’s circular economy goals.
          <br />
          <br />
          MoEFCC plans to further enhance the system with AI-powered analytics, real-time dashboards, and automated fraud detection, paving the way for more transparent and impactful environmental governance.
          <br />
          <br />
          As India leads the charge in EPR modernization, the unified portal stands as a powerful example of how digital innovation and sustainability can work hand-in-hand for a cleaner, more accountable future.
        </p>
      </div>

      <footer
                className="footer-distributed"
                style={{
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    padding: '30px 20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {/* Left Section */}
                <div
                    className="footer-left"
                    style={{flex: 1, minWidth: '250px', marginBottom: '20px'}}
                >
                    <h3>
                        EPR Portal<span> India</span>
                    </h3>

                    <p
                        className="footer-links"
                        style={{margin: '10px 0'}}
                    >
                        <a
                            href="#"
                            className="link-1"
                            style={{color: 'white', textDecoration: 'none', marginRight: '15px'}}
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            style={{color: 'white', textDecoration: 'none', marginRight: '15px'}}
                        >
                            Registration
                        </a>
                        <a
                            href="#"
                            style={{color: 'white', textDecoration: 'none', marginRight: '15px'}}
                        >
                            Guidelines
                        </a>
                        <a
                            href="#"
                            style={{color: 'white', textDecoration: 'none', marginRight: '15px'}}
                        >
                            Contact
                        </a>
                    </p>

                    <p className="footer-company-name">
                        Ministry of Environment © Government of India
                    </p>
                </div>

                {/* Center Section */}
                <div
                    className="footer-center"
                    style={{flex: 1, minWidth: '250px', marginBottom: '20px'}}
                >
                    <div style={{marginBottom: '10px'}}>
                        <i className="fa fa-map-marker" style={{marginRight: '10px'}}></i>
                        <p>
                            <span>Central Pollution Control Board</span> Parivesh Bhawan, East Arjun
                            Nagar, Delhi - 110032
                        </p>
                    </div>

                    <div style={{marginBottom: '10px'}}>
                        <i className="fa fa-phone" style={{marginRight: '10px'}}></i>
                        <p>+91-11-43102030</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope" style={{marginRight: '10px'}}></i>
                        <p>
                            <a
                                href="mailto:support@cpcb.gov.in"
                                style={{color: 'white', textDecoration: 'none'}}
                            >
                                support@cpcb.gov.in
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className="footer-right"
                    style={{flex: 1, minWidth: '250px'}}
                >
                    <p className="footer-company-about">
                        <span>About the Portal</span>
                        This portal is developed by CPCB to streamline the Extended Producer
                        Responsibility (EPR) implementation under Plastic Waste Management Rules.
                    </p>

                    <div className="footer-icons" style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                        <a href="#" style={{color: 'white'}}>
                            <FacebookIcon sx={{backgroundColor: 'black', borderRadius: '50%', padding: '4px'}}/>
                        </a>
                        <a href="#" style={{color: 'white'}}>
                            <TwitterIcon/>
                        </a>
                        <a href="#" style={{color: 'white'}}>
                            <LinkedInIcon/>
                        </a>
                        <a href="#" style={{color: 'white'}}>
                            <YouTubeIcon/>
                        </a>
                    </div>

                </div>
            </footer>
     
    </div>
  );
};

export default HomePage;

