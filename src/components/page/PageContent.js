import React from 'react'
import About from './_About';
import Experience from './_Experience';
import Skills from './_Skills';
import Education from './_Education';
import Interest from './_Interest';

const PageContent = () => {
    return (
        <div className="container-fluid p-0">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Interest /> 
    </div>
    )
}

export default PageContent
