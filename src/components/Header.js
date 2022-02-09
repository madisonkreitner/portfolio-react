import { AppBar, Box, Typography } from '@mui/material';
import { Link } from 'react-scroll'

import theme from '../theme';
            
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
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Box 
                    className='link-wrapper'
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        height:1,
                        paddingLeft: 3,
                        paddingRight: 3
                    }}
                >
                    <Link 
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={400}
                        sx={{
                            color:'#FFF'
                        }}
                    >
                        <Typography
                            className='link'
                            variant='h2'
                            sx={{
                                fontSize:18,
                                color:'#FFF',
                                cursor:'pointer'
                            }}
                        >
                            home
                        </Typography>
                    </Link>
                </Box>
            </Box>
            <Box id="navbar" sx={{ display:'flex', alignItems:'center', width: 400, justifyContent: 'space-evenly'}}>
                <Box 
                    className='link-wrapper'
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        height:1,
                        paddingLeft: 3,
                        paddingRight: 3
                    }}
                >
                    <Link 
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={400}
                        sx={{
                            color:'#FFF'
                        }}
                    >
                        <Typography
                            className='link'
                            variant='h2'
                            sx={{
                                fontSize:18,
                                color:'#FFF',
                                cursor:'pointer'
                            }}
                        >
                            about
                        </Typography>
                    </Link>
                </Box>
                <Box 
                    className='link-wrapper'
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        height:1,
                        paddingLeft: 3,
                        paddingRight: 3
                    }}
                >
                    <Link 
                        to='projects'
                        spy={true}
                        smooth={true}
                        duration={400}
                        sx={{
                            color:'#FFF'
                        }}
                    >
                        <Typography
                            className='link'
                            variant='h2'
                            sx={{
                                fontSize:18,
                                color:'#FFF',
                                cursor:'pointer'
                            }}
                        >
                            projects
                        </Typography>
                    </Link>
                </Box>
                <Box 
                    className='link-wrapper'
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        height:1,
                        paddingLeft: 3,
                        paddingRight: 3
                    }}
                >
                    <Link 
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={400}
                        sx={{
                            color:'#FFF'
                        }}
                    >
                        <Typography
                            className='link'
                            variant='h2'
                            sx={{
                                fontSize:18,
                                color:'#FFF',
                                cursor:'pointer'
                            }}
                        >
                            contact
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </AppBar>
    );
}
            
export default Header;  