import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';

import '../../styles/ProjectCard.css'
import defaultImage from '../../images/default.jpg';

const ProjectCard = ({ project }) => {
    return (
        <Grid item xs={4} sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                width:1,
                height:1,
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p:3
            }}>
                <Card elevation={6}>
                    <CardContent>
                        <Box sx={{display:'flex', justifyContent:'center', pb: 2}}>
                            <Typography variant='h5'>{project.name}</Typography>
                        </Box>
                        <Typography variant='body1'>Tech stack: {project.stack}</Typography>
                    </CardContent>
                    <CardMedia
                        style={{height:250}}
                        component='img'
                        image={project.image ?? defaultImage}
                        title={project.name}
                        alt= ''
                    />
                    <CardContent>
                        <Typography
                            variant='body2'
                            sx={{pb:1}}
                        >{project.description}</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Link className='website-link' href={project.url} target='_blank' rel="noopener">
                                <Button>Website</Button>
                            </Link>
                            <Link className='website-link' href={project.github} target='_blank' rel="noopener">
                                <Button>GitHub</Button>
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
}

export default ProjectCard;