import React from 'react'

const Experience = () => {
    return (
        <div>
        <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Full-stack Web Developer</h3>
                    <div className="subheading mb-3">Telemetry Lab</div>
                    <p>
                        ● Developing and maintaining all server-side network components,
                          developing front end website architecture.  <br /> 
                        ● Documenting Node.js processes, including database schemas, as well as preparing reports. Designing and developing APIs.<br />
                        ● Designing customer-facing UI and back-end services for various business processes.<br />
                        ● Creating servers and databases for functionality.<br />

                    </p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">Feb 2021 - Present</span></div>

            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h3 className="mb-0">Software Developer / Information Technology Technical Support</h3>
                <div className="subheading mb-3"> E&D Vision Publishing </div>
                <p>
                        Managing a wordpress site updating,creating, reading and deleting contents. 
                        Installing windows and Updating sofware when required. 
                        Fixing network issues, printers ect.
                </p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">Feb 2020 - Present</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Junior React Developer</h3>
                    <div className="subheading mb-3">Cocoa Codes</div>
                    <p>Developed some of single Page web applications from some projects which sharpen my skills using React,React-Router and Managing simple app State.<br />
                    Also Developed a complex React app which require more skillis about Action Function generator, Reducers, redux-react,Store and State Management and was able to intergrate it with Firebase Database.
                    </p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">March 2020- Jan 2021</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Junior Backend Developer ( Nodejs ) </h3>
                    <div className="subheading mb-3">Cocoa Codes</div>
                    <p>
                        Complished Some projects that require us to use Mongoose & mongoDb which suported us on creating Schemas for our Database, 
                        uses for the Expressjs a Nodejs Framework which helped us to build 
                        API's also how to use postman for testing the API's 
                    </p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">Oct 2019 - Feb 2020</span></div>
            </div>
        </div>
        </section>
        <hr className="m-0" />
        </div>
    )
}

export default Experience
