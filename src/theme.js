import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    header: {
        background: '#333'
    },
    landing: {
        background: '#00466E'
    },
    projects: {
        background: '#E59F71'
    },
    contact: {
        background: '#69DC9E',
        socials: {
            facebook: 'https://www.facebook.com/madison.kreitner/',
            linkedin: 'https://www.linkedin.com/in/madisonkreitner/',
            mail: 'mailto:madisonkreitner@gmail.com',
            phone: 'tel:786-564-6132'
        }
    },

});

export default theme;