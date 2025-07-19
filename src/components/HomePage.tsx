'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import {Box} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


// Lazy load Navbar components
const Navbar = dynamic(() => import('./Navbar'), {ssr: false});
const NavbarMain = dynamic(() => import('./NavbarMain'), {ssr: false});

const HomePage = () => {
    const dummyImages = [
        'img1.webp',
        'img2.webp',
        'img3.webp',
        'img4.webp',
        'img5.webp',
        'img7.webp',

    ];
    const images = [
        'https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png',
        'https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png',
        'https://i.ibb.co/ycpxn52X/home-waste-management-sl2-1.png',

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    return (
        <div style={{zoom: '0.8'}}>
            <Navbar/>
            <NavbarMain/>

            {/* <Box sx={{ width: '100%', height: '500px', overflow: 'hidden' }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: '600px',
              }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'fill',
                }}
              />
            </Box>
          ))}
        </Slider>

      </Box> */}
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
                                // fontFamily: 'Inter',
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
                                // fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '50px',
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
                            // fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '36px',
                            lineHeight: '120%',
                            color: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        <div>
                            <span style={{fontSize: '12px', padding: '0 8px'}}>Morning</span>
                            <span style={{fontSize: '12px', padding: '0 8px'}}>Evening</span>
                            <span style={{fontSize: '12px', padding: '0 8px'}}>Night</span>
                        </div>
                        Smart Waste Management
                        <br/>
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
                        overflowX: 'hidden',
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
                                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    maxWidth: '80vw',
                    margin: '30px auto', // Proper vertical & horizontal centering
                    padding: '24px',
                    textAlign: 'center',
                }}
            >
                <h2
                    style={{
                        marginBottom: '26px',
                        fontWeight: 'bold',
                        margin: '20px 0', // uniform vertical spacing
                    }}
                >
                    EPR Portal for Plastic Packaging
                </h2>

                <p style={{textAlign: 'justify'}}>
                    Extended Producers Responsibility (EPR) regime is under implementation in Plastic Waste
                    Management Rules, 2016, according to which it is the responsibility of Producers, Importers and
                    Brand-owners to ensure processing of their plastic packaging waste through recycling, re-use or
                    end of life disposal (such as
                    co-processing/Waste-to-energy/Plastic-to-oil/roadmaking/industrial-composting).
                    In order to streamline implementation process of EPR, the Ministry of Environment, Forest and
                    Climate Change, Government of India, in its fourth Amendment to the Plastic Waste Management
                    Rules, dated February 16, 2022, notified ‘Guidelines on Extended Producer Responsibility for Plastic
                    Packaging’ in the Schedule II of the Rules.
                    <br/><br/>
                    As per these guidelines, Producers, Importers and Brand Owners (PIBOs) shall have to register
                    through the online centralized portal developed by the Central Pollution Control Board (CPCB).
                    Accordingly, this portal has been developed to register PIBOs who are operating in more than two
                    States with CPCB and those operating in one or two States/UTs shall be registered with the
                    concerned State Pollution Control Boards (SPCBs).
                    <br/><br/>
                    PWPs shall also have to register with the concerned SPCB/PCC in accordance with the provisions of
                    the Section 13(3) of the Plastic Waste Management Rules, 2016 on this centralized portal developed
                    by CPCB.
                    <br/><br/>
                    The EPR Portal for Plastic Packaging provides provision for registration of PIBOs/ PWPS in
                    accordance with the notified EPR Guidelines. The portal will help in improving accountability,
                    traceability and transparency of fulfilment of EPR Obligations.
                    <br/><br/>
                    The portal is planned to have seven modules, which allows registration of PWPs and PIBOs, issue
                    certificates by PWPs & exchange of credits, allows real-time monitoring of transactions between
                    PIBOs and PWPs, allows levy of environmental compensation and provides system-generated reports
                    and facilitates filing of annual returns for the stakeholders. Presently three modules of EPR portal
                    “Registration of PIBOs”, “Registration of PWPs” and “Generation & Transfer of EPR Certificates” are
                    operational. The remaining modules shall be integrated shortly.
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
