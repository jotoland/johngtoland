import React, { Component } from 'react';
import ColoredLine from '../components/ColoredLine';
import LinkedinLogo from '../images/LinkedinLogo.png';
import GithubLogo from '../images/GithubLogo.png';
import Marker from '../images/MapMarker.png';


class ContactMe extends Component {
    render(){
        return(
            <div id="ContactSection">
                <section class="section is-large">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters">
                                <h1 class="title">Contact Me</h1>
                                <ColoredLine />
                                    <ul id="contact-info">
                                        <li><span><img id="marker" src={Marker} alt=""></img></span>Currently: Colorado</li>
                                        <li>Email: jtoland3.14@gmail.com</li>
                                        <li>Cell: +1 (806) 679 - 0084</li>
                                    </ul>
                                <div class="columns is-centered">
                                    <div class="column is-one-third">
                                        <div class="columns is-mobile is-centered" id="social-links">
                                            <div class="column" id="githubLink">
                                                <figure class="image is-64x64">
                                                    <a href="https://github.com/jotoland" class="image">
                                                    <img src={GithubLogo} alt="" class="responsive"></img>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div class="column" id="linkedinLink">
                                                <figure class="image is-64x64">
                                                    <a href="https://www.linkedin.com/in/johngtoland/" class="image">
                                                    <img src={LinkedinLogo} alt=""></img>
                                                    </a>
                                                </figure>
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

export default ContactMe;