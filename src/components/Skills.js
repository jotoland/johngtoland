import React, {Component} from 'react';
import ColoredLine from '../components/ColoredLine';


class Skills extends Component {
    render(){
        return(
            <div id="SkillsSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Technical Skills</h1>
                            <ColoredLine color="grey" />
                            <div class="columns is-centered">
                                <div class="column is-three-quarters">
                                <nav class="level">
                                    <div class="level-item">Javascript</div>
                                    <div class="level-item">C#</div>
                                    <div class="level-item">SQL</div>
                                    <div class="level-item">Java</div>
                                    <div class="level-item">Python</div>                                
                                    <div class="level-item">C</div>
                                    <div class="level-item">C++</div>
                                    <div class="level-item">CSS</div>
                                    <div class="level-item">HTML</div>
                                    <div class="level-item">JSX</div>
                                    <div class="level-item">PHP</div>
                                </nav>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-one-third">
                                    <h2 class="subtitle">Operating Systems</h2>
                                    <ul>
                                        <li>macOS</li>
                                        <li>Win 10</li>
                                        <li>Linux</li>
                                    </ul>
                                </div>
                                <div class="column">
                                    <h2 class="subtitle">General</h2>
                                    <ul>
                                        <li>.NetCore</li>
                                        <li>Node.js</li>
                                        <li>React</li>
                                        <li>SaaS</li>
                                        <li>Bootstrap</li>
                                        <li>WebGL & Three.js</li>
                                        <li>Git</li>
                                        <li>VS & VS Code</li>
                                        <li>Bash Unix Shell</li>
                                        <li>MS DOS</li>
                                    </ul>
                                </div>
                                <div class="column">
                                    <h2 class="subtitle">API Technologies</h2>
                                    <ul>
                                        <li>REST</li>
                                        <li>JSON</li>
                                        <li>OAuth</li>
                                        <li>JWT</li>
                                        <li>Webhooks</li>
                                        <li>Swagger</li>
                                        <li>Postman</li>
                                        <li>Docker</li>
                                    </ul>
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

export default Skills;