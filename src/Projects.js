import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
	render() {
		return (
                <div className="projects-container">
                    <div className="project">
                        <img className="project-img" src={require("./assets/listy-ss.png")}/>
                        <div className="project-text-right">Similar to Google Keep - created with both front-end and back-end frameworks. You can save, edit, and delete personalized notes.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Express</li>
                                <li>Jest + Supertest</li>
                            </ul>
                            <div className="buttons-container">
                                <button><a href="https://github.com/hlhartley/listy" target="_blank">GitHub</a></button>
                                <button className="disabled-button">App Link</button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">You can browse the newest movies as well as collect your favorite movies.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>TMDb API</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                            </ul>
                            <div className="buttons-container">
                                <button><a href="https://github.com/hlhartley/movie-tracker-app" target="_blank">GitHub</a></button>
                                <button className="disabled-button">App Link</button>
                            </div>
                        </div>
                        <img className="project-img" src={require("./assets/movie-tracker.png")}/>
                    </div>
                    <div className="project">
                        <img className="project-img" src={require("./assets/terminal-commander.png")}/>
                        <div className="project-text-right">A fun and interactive game with special CSS animations that allows you to enhance muscle memory by repetitively typing actual terminal commands into the input box.
                            <ul>
                                <li>React</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                                <li>Heroku</li>
                            </ul>
                            <div className="buttons-container">
                                <button><a href="https://github.com/hlhartley/terminal-commander" target="_blank">GitHub</a></button>
                                <button><a href="https://terminal-commander.herokuapp.com/" target="_blank">App Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">A Vue-based app which showcases as well as promotes certain selections of Korean art from the Harvard Art Museum. The carousel allows you to easily swipe through the paintings one by one while viewing the associated title and info.
                            <ul>
                                <li>Vue</li>
                                <li>SCSS</li>
                                <li>Amazon Web Services - S3</li>
                            </ul>
                            <div className="buttons-container">
                                <button><a href="https://github.com/hlhartley/harvard-art-project" target="_blank">GitHub</a></button>
                                <button><a href="http://harvard-art-project.s3-website-us-west-2.amazonaws.com/" target="_blank">App Link</a></button>
                            </div>
                        </div>
                        <img className="project-img" src={require("./assets/harvard-art-project.png")}/>
                    </div>
                    <div className="project">
                        <img className="project-img" src={require("./assets/pallit_picker_desktop.png")}/>
                        <div className="project-text-right">Based on the website Coolors, you can generate color palettes for websites and other design projects.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Express</li>
                                <li>Knex</li>
                                <li>PostgreSQL</li>
                                <li>Jest + Enzyme</li>
                                <li>Heroku</li>
                            </ul>
                            <div className="buttons-container">
                                <button><a href="https://github.com/hlhartley/palette-picker" target="_blank">GitHub</a></button>
                                <button><a href="https://palit-picker.herokuapp.com/" target="_blank">App Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">Designed to give you color ideas for the perfect shade of lipstick, blush, eyeshadow, or nailpolish.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li><a href="http://makeup-api.herokuapp.com/" target="_blank"></a>Makeup API</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                            </ul>
                            <div className="buttons-container">
                                <button><a href="https://github.com/hlhartley/seasonal-shades" target="_blank">GitHub</a></button>
                                <button className="disabled-button">App Link</button>
                            </div>
                        </div>
                        <img className="project-img" src={require("./assets/seasonal-shades.png")}/>
                    </div>
                <div className="project">
                    <img className="project-img" src={require("./assets/swapi-box.png")}/>
                    <div className="project-text-right">Lets you search through the Starwars database to find your favorite characters, planets, and vehicles as well as save your favorite cards to local storage.
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Starwars API</li>
                            <li>SCSS</li>
                            <li>Jest + Enzyme</li>
                        </ul>
                        <div className="buttons-container">
                            <button><a href="https://github.com/hlhartley/swapi-box" target="_blank">GitHub</a></button>
                            <button className="disabled-button">App Link</button>
                        </div>
                    </div>
                </div>
                
                <div className="project">
                    <div className="project-text-left">You can easily see all of the ice cream flavors available throughout Denver as well as explore and filter for new and exciting flavors.
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Fetch API</li>
                            <li>SCSS</li>
                            <li>Jest + Enzyme</li>
                        </ul>
                        <div className="buttons-container">
                            <button><a href="https://github.com/hlhartley/icecream_whateverly" target="_blank">GitHub</a></button>
                            <button className="disabled-button">App Link</button>
                        </div>
                    </div>
                    <img className="project-img" src={require("./assets/iscream.png")}/>
                </div>
                <div className="project">
                    <img className="project-phone-img" src={require("./assets/picyourlandmarklogin.png")}/>
                    <img className="project-phone-img" src={require("./assets/picyourlandmark.png")}/>
                    <div className="project-phone-text-right">Based on the famous game 'Pokemon Go' - except you can 'collect' famous landmarks! When you visit a landmark, you can take and store your picture in the app. You gain points/gems based on how many landmarks you have 'collected'.
                        <ul>
                            <li>React Native</li>
                            <li>SCSS</li>
                            <li>Travis CI</li>
                            <li>Django</li>
                            <li>Rest_framework</li>
                            <li>PostgreSQL</li>
                            <li>Jest + Enzyme</li>
                        </ul>
                        <div className="buttons-container">
                            <button><a href="https://github.com/hlhartley/PicYourLandmark" target="_blank">GitHub</a></button>
                            <button className="disabled-button">App Link</button>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Projects;
