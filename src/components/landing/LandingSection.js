import { Box, Typography } from '@mui/material';
import Header from '../../components/header/Header';

import theme from '../../theme';

const LandingSection = () => {
    return (
        <Box
            variant='section'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                bgcolor: theme.landing.background,
                width:1,
                height:'100vh'
            }}
        >
            <Header />
            <Box
                sx={{
                    width:1,
                    height:1,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                    <Typography
                        variant='h3'
                        color='#fff'
                        fontWeight='600'
                        sx = {{
                            p:1
                        }}
                    >
                        Hello, my name is Madison.
                    </Typography>
                    <Typography variant='body1' color='#fff' fontWeight='300' sx={{p:2}}><em>I am a full stack developer</em></Typography>
                    <Typography variant='body1' color='#fff' fontWeight='300' sx={{fontSize:'18px'}}>Scroll down to see my projects</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default LandingSection;
