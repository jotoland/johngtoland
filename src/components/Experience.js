import React, { Component } from 'react';
import ColoredLine from '../components/ColoredLine';



class Experience extends Component {
    render(){
        return(
            <div id="ExperienceSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Experience</h1>
                            <ColoredLine />
                            <div class="columns is-centered">
                                <div class="column is-half">
                                    <div class="box" id="exp1">
                                        <div class="content">
                                            <artical class="media">
                                             <p>
                                                <strong>Full Stack Software Engineer</strong> <medium>Guardian Health Insurance</medium><br />
                                                <small>September 2019 - Present</small><br />
                                                <ul>
                                                    <li>Full Stack Software Engineer on the "Get Stuff Done" team</li>
                                                    <li>Break fix team that handles severities and escalations</li>
                                                    <li>Maintain a working knowledge of six different applications</li>
                                                    <li>Data management</li>
                                                    <li>Additionally provide the bandwidth to complete build side tickets that deliver new functionality to the applications</li>
                                                    <li>Delivered new security features for account access to applications</li>
                                                    <li>Delivered new features for exception handling within the applications</li>
                                                    <li>Daily collaboration within the organization across many teams, build side, dev ops, and the data base management team</li>
                                                </ul>
                                            </p>
                                            </artical>
                                        </div>
                                    </div>
                                    <div class="box" id="exp2">
                                        <div class="content">
                                            <artical class="media">
                                             <p>
                                                <strong>Software Engineer</strong> <medium>Ria Digital</medium><br />
                                                <small>July 2018 - September 2019</small><br />
                                                <ul>
                                                    <li>Introduced middleware for managing data sent to / from external Application Program Interface (API)</li>
                                                    <li>Helped team build Product Admin Tool for USAA internal business owners to manage Reg-Z products</li>
                                                    <li>Main feature work: credit card and bank processing, electronic know your customer (eKYC), address validation, reset password flow, global alert system, etc</li>
                                                    <li>Code repository maintainer: organized branching strategy for production runway</li>
                                                    <li>Collaborated in design concept discussions focusing on delivering efficient and resonable solutions</li>
                                                    <li>Managed endpoints and data payloads for .NET core API solutions</li>
                                                </ul>
                                            </p>
                                            </artical>
                                        </div>
                                    </div>
                                    <div class="box" id="exp3">
                                        <div class="content">
                                            <artical class="media">
                                             <p>
                                                <strong>Software Developer & Integrator III</strong> <medium>USAA</medium><br />
                                                <small>September 2017 - June 2018</small><br />
                                                <ul>
                                                    <li>Maintaining native communications between desktop / web applications</li>
                                                    <li>Setup CI Pipelines to run automatic testing, builds and deployment on GitLab</li>
                                                    <li>Converted software projects to develop and run on Win10 platform using .NET 4.6.2</li>
                                                </ul>
                                            </p>
                                            </artical>
                                        </div>
                                    </div>
                                    <div class="box" id="exp4">
                                        <div class="content">
                                            <artical class="media">
                                             <p>
                                                <strong>Shift Supervisor - Math Outreach Center</strong> <medium>Amarillo College</medium><br />
                                                <small>March 2014 – August 2015</small><br />
                                                 <ul>
                                                    <li>Shift leader in the Math Outreach Center at Amarillo College; Algebra – Differential Equations</li>
                                                </ul>
                                            </p>
                                            </artical>
                                        </div>
                                    </div>
                                    <div class="box" id="exp5">
                                        <div class="content">
                                            <artical class="media">
                                             <p>
                                                <strong>Peer Tutor - Math Outreach Center</strong> <medium>Tamucc UAS Summer Institute</medium><br />
                                                <small>August 2014 - June 2015</small><br />
                                                <ul>
                                                    <li>Offered all level math tutoring from basic math to Deferential Equations</li>
                                                    <li>Worked along side 10 other peer tutors</li>
                                                    <li>optimization problems</li>
                                                    <li>related rates</li>
                                                    <li>Integration: Calc 2 - 3</li>
                                                    <li>Agile teaching techniques for basic math and algebra</li>
                                                </ul>
                                            </p>
                                            </artical>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Experience;