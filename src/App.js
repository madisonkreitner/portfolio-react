import React from "react";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';

import ProjectsSection from "./components/projects/ProjectsSection";
import LandingSection from "./components/landing/LandingSection";
import ContactSection from "./components/contact/ContactSection"
import theme from './theme';

const App = () => {
    return (
        <>
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <Element id='about'>
                        <LandingSection />
                    </Element>
                    <Element id='projects'>
                    <   ProjectsSection />
                    </Element>
                    <Element id='contact'>
                        <ContactSection />
                    </Element>
                </ThemeProvider>
            </CssBaseline>
        </>
    );
}

export default App;