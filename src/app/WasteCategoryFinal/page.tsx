
'use client';
import DashboardComponent from '@/components/DashboardComponent';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function WasteCategoryCards() {
  const router = useRouter();
  return (
    <DashboardComponent>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', m: 3 }}>
          Waste Category
        </Typography>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '20px',
          }}
        >
          {/* Card 2 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '300px',
               backgroundImage: 'url(img1.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: '30px',
              padding: '16px',
              position: 'relative',
            }}

          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '30px',
              }}
            />
            <Typography fontWeight="bold" sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
              
            E- Waste Management
            </Typography>
             <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#ebe860ff', // very light green
                color: '#4f2b07ff', // green text
                '&:hover': {
                  backgroundColor: '#d0ebdc', // slightly darker on hover
                },
              }}

            >
              Processing
            </Button>

            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0', // light gray on hover
                },
              }}
              onClick={() => router.push('/TrackPage')}
            >
              Track Status
            </Button>

          </div>
          {/* Card 1 */}
          {/* <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '300px',
              backgroundImage: 'url(img1.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: '30px',
              padding: '16px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '30px',
              }}
            />
            <Typography fontWeight="bold" sx={{ mb: 1, position: 'relative', top: '-100px', zIndex: 1 }}>
              E- Waste Management
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#e6f4ea', // very light green
                color: '#2e7d32', // green text
                '&:hover': {
                  backgroundColor: '#d0ebdc', // slightly darker on hover
                },
              }}
            >
              Registered
            </Button>

            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: 'lightgray',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#c0c0c0', // slightly darker on hover
                },
              }}
              onClick={() => router.push('/Track')}
            >
              Renew
            </Button>

          </div> */}

          {/* Card 2 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '300px',
               backgroundImage: 'url(img2.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: '30px',
              padding: '16px',
              position: 'relative',
            }}

          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '30px',
              }}
            />
            <Typography fontWeight="bold" sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
              Plastic Waste Management
            </Typography>
             <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#ebe860ff', // very light green
                color: '#4f2b07ff', // green text
                '&:hover': {
                  backgroundColor: '#d0ebdc', // slightly darker on hover
                },
              }}

            >
              Processing
            </Button>

            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0', // light gray on hover
                },
              }}
              onClick={() => router.push('/TrackPage')}
            >
              Track Status
            </Button>

          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '300px',
              backgroundImage: 'url(img3.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: '30px',
              padding: '16px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '30px',
              }}
            />
            <Typography fontWeight="bold" sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
              Used Oil Management
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#fdecea', // light red background
                color: '#d32f2f', // red text
                '&:hover': {
                  backgroundColor: '#f9d7d5', // slightly darker on hover
                },
              }}
            >
              Not Registered
            </Button>

            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#75a02bff', // olive green
                color: 'white', // white text
                '&:hover': {
                  backgroundColor: '#226b00ff', // slightly darker olive on hover
                },
              }}
              onClick={() => router.push('/FormViewPage2')}
            >
              Register Now
            </Button>

          </div>

          {/* Card 4 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '300px',
              backgroundImage: 'url(img4.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: '30px',
              padding: '16px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '30px',
              }}
            />
            <Typography fontWeight="bold" sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
              Tyre Waste Management
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#fdecea', // light red background
                color: '#d32f2f', // red text
                '&:hover': {
                  backgroundColor: '#f9d7d5', // slightly darker on hover
                },
              }}
            >
              Not Registered
            </Button>

            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#75a02bff', // olive green
                color: 'white', // white text
                '&:hover': {
                  backgroundColor: '#226b00ff', // slightly darker olive on hover
                },
              }}
              onClick={() => router.push('/FormViewPage2')}
            >
              Register Now
            </Button>

          </div>
          {/* Card 5 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '300px',
              backgroundImage: 'url(img5.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: '30px',
              padding: '16px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '30px',
              }}
            />
            <Typography fontWeight="bold" sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>
              Tyre Waste Management
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#fdecea', // light red background
                color: '#d32f2f', // red text
                '&:hover': {
                  backgroundColor: '#f9d7d5', // slightly darker on hover
                },
              }}
            >
              Not Registered
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
                backgroundColor: '#75a02bff', // olive green
                color: 'white', // white text
                '&:hover': {
                  backgroundColor: '#226b00ff', // slightly darker olive on hover
                },
              }}
              onClick={() => router.push('/FormViewPage2')}
            >
              Register Now
            </Button>
          </div>

        </div>
      </Box>
    </DashboardComponent>
  );
}

