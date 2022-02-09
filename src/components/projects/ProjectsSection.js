import { Box } from '@mui/material';

import theme from '../../theme';

const ProjectsSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                bgcolor: theme.projects.background,
                width:1,
                height:'100vh'
            }}
        >
        </Box>
    );
}

export default ProjectsSection;
