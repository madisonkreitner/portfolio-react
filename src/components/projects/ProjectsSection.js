import { Box, Grid } from '@mui/material';

import ProjectCard from './ProjectCard';

import theme from '../../theme';

import quotes from '../../images/quote.png';
import apiImage from '../../images/api.png';
import websiteImage from '../../images/website.jpg';
import instagram from '../../images/instagram.png';
import travel from '../../images/travel.jpg';
import realestate from '../../images/realestate.jpg';
import memories from '../../images/memories.jpg';

const projects = [
    {
        name:'Random Quote Machine',
        image: quotes,
        stack: 'React, Material UI, CSS',
        url: 'https://quotes-mk.netlify.app/',
        description: 'A react application that generates a random quote at the press of a button. Post the quote to your Twitter or Tumblr account to share with your friends.',
        github: 'https://github.com/mbradley-github/random-quote-machine/tree/master'
    },
    {
        name:'Travel Advisor',
        image: travel,
        stack: 'React, Material UI, Rapid API, Google Maps API, Google Places API, CSS',
        url: 'https://travel-mk.netlify.app/',
        description: 'A travel application that lets the user search for restaurants, hotels, and attractions in an area. The user gets useful information about these places and can visit their website or TripAdvisor page.',
        github: 'https://github.com/mbradley-github/travel-advisor'
    },
    {
        name:' Amazon API',
        image: apiImage,
        stack: 'React, Node.js, Express.js, CSS',
        description: 'A react application that generates a random quote at the press of a button. Post the quote to your Twitter or Tumblr account to share with your friends.',
        github: 'https://github.com/mbradley-github/random-quote-machine/tree/master'
    },
    {
        name:'Finstagram',
        image: instagram,
        stack: 'React, Material UI, Redux, Express.js, Python (Django), MongoDB',
        description: 'A full stack Instagram copy where a user can create an account, view posts, and create posts',
        github: 'https://github.com/mbradley-github/random-quote-machine/tree/master'
    },
    {
        name:'Real Estate Search',
        image: realestate,
        stack: 'React, Redux, Next.js, CSS',
        description: 'A react application that generates a random quote at the press of a button. Post the quote to your Twitter or Tumblr account to share with your friends.',
        github: 'https://github.com/mbradley-github/random-quote-machine/tree/master'
    },
    {
        name:'Memories',
        image: memories,
        stack: 'React, Material UI, Redux, Express.js, MongoDB',
        description: 'A react application that generates a random quote at the press of a button. Post the quote to your Twitter or Tumblr account to share with your friends.',
        github: 'https://github.com/mbradley-github/random-quote-machine/tree/master'
    }
]

const ProjectsSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: theme.projects.background,
                width:1,
                py:13
            }}
        >
            <Grid container>
                {projects?.map((project, i) => ( <ProjectCard key={project.name} project={project}/> ))}
            </Grid>
        </Box>
    );
}

export default ProjectsSection;
