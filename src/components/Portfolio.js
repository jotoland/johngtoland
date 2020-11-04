import React, { Component } from 'react';
import ColoredLine from './ColoredLine'
import Rush from '../images/rush.png';
import Locus from '../images/locus.png';
import UoT from '../images/uot.png';
import MineSweep from '../images/minesweep.png';
import MarioBros from '../images/mariobros.png';
import NetworkSecurity from '../images/networksecurity.jpg';


class Portfolio extends Component {
    render(){
        return(
            <div id="PortfolioSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Portfolio</h1>
                            <ColoredLine color="grey" />
                            <div class="columns is-centered">
                                <div class="column">
                                    {/* tiles start here --> ancester/parent/child heirarchy*/}
                                    <div class="tile is-ancestor">

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Rush Game<br/></h2>
                                                <p class="subtitle">WebGL / Three.js Video Game</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://jotoland.github.io/rushGame/">
                                                            <br/>
                                                            <img alt="" src={Rush}></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Locus</h2>
                                                <p class="subtitle">Location services app</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://github.com/jotoland/Locus_CodeSpace">
                                                            <img alt="" src={Locus}></img>
                                                        </a>
                                                    </figure><br/><br/>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Universe of Things</h2>
                                                <p class="subtitle">Arcade style 2D video game with 3D graphics, consists of 5 levels, user created account</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://github.com/jotoland/UoT_CodeSpace">
                                                            <img alt ="" src={UoT}></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>
                                    </div>

                                    {/* 2nd colm tiles start here --> ancester/parent/child heirarchy*/}
                                    <div class="tile is-ancestor">
                                            
                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                    <h2 class="subtitle">MineSweep (Refactored)</h2>
                                                    <p class="subtitle">Developed in Android Studios using OOP, local file creation and storing</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://github.com/jotoland/MineSweep_CodeSpace">
                                                            <img alt="" src={MineSweep}></img>
                                                        </a>
                                                    </figure><br/><br/>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Mario 2D</h2>
                                                <p class="subtitle">Two deminsonal game made in Unity</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://github.com/jotoland/GameDesign_CodeSpace">
                                                            <br /><br /><br /><br />
                                                            <img alt="" src={MarioBros}></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>

                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                <h2 class="subtitle">Network Security</h2>
                                                <p class="subtitle">This repo contains my projects related to Security/Cryptology</p>
                                                    <figure class="image is-1by1">
                                                        <a href="https://github.com/jotoland/Securtiy_CodeSpace">
                                                            <br /><br />
                                                            <img alt ="" src={NetworkSecurity}></img>
                                                        </a>
                                                    </figure>
                                                 </article>
                                            </div>
                                    </div>
                                    {/* tiles end here */}
                                    
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

export default Portfolio;