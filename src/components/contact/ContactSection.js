import { Box } from '@mui/material';

import theme from '../../theme';

const ContactSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                bgcolor: theme.contact.background,
                width:1,
                height:'100vh'
            }}
        >
        </Box>
    );
}

export default ContactSection;
