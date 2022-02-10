import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';

import '../../styles/HeaderLink.css';

const HeaderLink = ({ title, link }) => {
    return (
        <Box 
            sx={{
                height:1
            }}
        >
            <Link 
                to={link}
                spy={true}
                smooth={true}
                duration={400}
            >
                <Box 
                    className='link-wrapper'
                    sx={{
                        height:1
                    }}
                >
                    <Typography
                        className='link'
                        variant='h2'
                        sx={{
                            fontSize:18,
                            color:'#FFF',
                            height: 1,
                            width:1,
                            cursor: 'pointer',
                            display:'flex',
                            alignItems: 'center',
                            paddingLeft: 3,
                            paddingRight: 3,
                        }}
                    >
                        <Box>{title}</Box>
                    </Typography>
                </Box>
            </Link>
        </Box>
    );
}

export default HeaderLink;