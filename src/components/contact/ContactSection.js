import { Box, Link, Typography } from '@mui/material';
import { AlternateEmail, Facebook, LinkedIn, PhoneAndroid } from '@mui/icons-material';

import theme from '../../theme';
import '../../styles/Contact.css';

const ContactSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: theme.contact.background,
                width:1,
                height:'100vh',
            }}
        >
            <Box>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                    <Typography variant='h2' sx={{fontWeight:'bold', py:1}}>Let's work together...</Typography>
                    <Typography variant='body2' sx={{fontWeight:'bold'}}><em>How do you take your coffee?</em></Typography>
                </Box>
                <Box sx={{
                    p:3,
                    display:'flex',
                    justifyContent:'space-evenly'
                }}>
                    <Link href={theme.contact.socials.facebook} target='_blank' color='inherit' underline='hover' sx={{p:3}} >
                        <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                            <Facebook></Facebook>
                            <Typography variant='h5'>Facebook</Typography>
                        </Box>
                    </Link>
                    <Link href={theme.contact.socials.linkedin} target='_blank' color='inherit' underline='hover' sx={{p:3}} >
                        <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                            <LinkedIn></LinkedIn
                            >
                            <Typography variant='h5'>LinkedIn</Typography>
                        </Box>
                    </Link>
                    <Link href={theme.contact.socials.mail} target='_blank' color='inherit' underline='hover' sx={{p:3}} >
                        <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                            <AlternateEmail></AlternateEmail>
                            <Typography variant='h5'>Email Me</Typography>
                        </Box>
                    </Link>
                    <Link href={theme.contact.socials.phone} target='_blank' color='inherit' underline='hover' sx={{p:3}} >
                        <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                            <PhoneAndroid></PhoneAndroid>
                            <Typography variant='h5'>Call Me</Typography>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactSection;
