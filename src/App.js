import React, {useRef, useState} from 'react';

import './App.css';
import Nav from './components/Nav';
import Title from './components/Title'
import Background1 from './components/Background1'
import About from './components/About'
import Profile from './components/Profile'
import Skills from './components/Skills'
import BallsBackground from './components/BallsBackground'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundContact from './components/BackgroundContact';
import MiniGames from './components/MiniGames';

function App() {

	const aboutSection = useRef();
	const projectsSection = useRef();
	const contactSection = useRef();

	const [showMinigames, setShowMinigames] = useState(false)

	const scrollToSection = (element) => {        
		window.scrollTo({
		top: element.current.offsetTop - window.innerHeight / 5 , //this fixing value works for SOME reason ???
		behavior: 'smooth'
	})}


  	return (
    	<div className="App">

			<Background1 />

			<MiniGames display={showMinigames} setDisplay={setShowMinigames}/>	

			<div className='page page-1'>
				<Title
					scrollContact={() => scrollToSection(contactSection)}
					showGames={() => {setShowMinigames(!showMinigames)}}
				/>
			</div>	

			<Nav 
				scrollAbout={() => scrollToSection(aboutSection)}
				scrollProjects={() => scrollToSection(projectsSection)}
				scrollContact={() => scrollToSection(contactSection)}
			/>


			<div style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				margin: '30vh auto'
			}}>

				<Profile />
				<About reference={aboutSection} />

			</div>

			<Skills />

			<BallsBackground />
			
			<Projects reference={projectsSection} />

			<Contact reference={contactSection} />
			
			<BackgroundContact />

			<Footer />

    	</div>
  	);
}

export default App;