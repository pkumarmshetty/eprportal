
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
          {/* Card 1 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '350px',
              backgroundImage: 'url(https://i.ibb.co/3Jj9HjM/Rectangle-13.png)',
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
            <Typography fontWeight="bold" sx={{ mb: 1, position: 'relative', top: '-90px', zIndex: 1 }}>
              E- Waste Management
            </Typography>
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                textTransform: 'none',
                zIndex: 1,
              }}
              
            >
              Not Registered
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                textTransform: 'none',
                zIndex: 1,
              }}
              onClick={()=>router.push('/FormViewPage2')}
            >
              Register Now
            </Button>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '350px',
              backgroundImage: 'url(https://i.ibb.co/KpyTpKcs/Rectangle-13-1.png)',
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
              color="error"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
              }}
              onClick={()=>router.push('/FormViewPage2')}
            >
              Not Registered
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
              }}
              onClick={()=>router.push('/FormViewPage2')}
            >
              Register Now
            </Button>
          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '350px',
              backgroundImage: 'url(https://i.ibb.co/Z66tF7Bm/Rectangle-13-2.png)',
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
              color="error"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
              }}
            >
              Not Registered
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
              }}
              onClick={()=>router.push('/FormViewPage2')}
            >
              Register Now
            </Button>
          </div>

          {/* Card 4 */}
          <div
            style={{
              flex: '0 0 calc(50% - 8px)',
              height: '350px',
              backgroundImage: 'url(https://i.ibb.co/Z64Y2jb6/Rectangle-13-3.png)',
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
              color="error"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                textTransform: 'none',
                zIndex: 1,
              }}
            >
              Not Registered
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                textTransform: 'none',
                zIndex: 1,
              }}
              onClick={()=>router.push('/FormViewPage2')}
            >
              Register Now
            </Button>
          </div>
        </div>
      </Box>
    </DashboardComponent>
  );
}

