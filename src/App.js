import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

function App() {
  let balance = '$40,000';
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{width: '628px'}} maxWidth="sm" fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', padding: '50px' }}>
          <h1 className='text-2xl'>
            Hi, <span className='font-bold'>There</span>
          </h1>

          <Box
            sx={{
            display: '',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
            padding: '25px',
            paddingTop: '30px',
            marginTop: '25px'
          }}>
            <Box>
              <Typography>
                YOUR BALANCE
              </Typography>
              <div className='text-2xl mt-1'>{balance}</div>
            </Box>

            <Box mt={6} sx={{display: 'flex'}}>
              <Box sx={{width: 1/2}}>
                <Typography sx={{textAlign: "center"}}>
                  INCOME

                </Typography>
              </Box>
              <Box sx={{width: 1/2}}>
                <Typography sx={{textAlign: "center"}}>
                  EXPENSE

                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
