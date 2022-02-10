import { AppBar, Box } from '@mui/material';

import HeaderLink from './HeaderLink'
import '../../styles/Header.css';

import theme from '../../theme';
            
const Header = () => {
    return (
        <AppBar
            position="fixed" 
            id="header"
            sx = {{
                height: 80,
                bgcolor: theme.header.background,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft:5,
                paddingRight:3
            }}
        >
            <HeaderLink title='home' link='about'></HeaderLink>
            <Box id="navbar" sx={{ display:'flex', alignItems:'center', width: 400, height: 1, justifyContent: 'space-evenly'}}>
                <HeaderLink title='about' link='about'></HeaderLink>
                <HeaderLink title='projects' link='projects'></HeaderLink>
                <HeaderLink title='contact' link='contact'></HeaderLink>
            </Box>
        </AppBar>
    );
}
            
export default Header;  