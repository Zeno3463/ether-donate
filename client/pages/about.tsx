import React from 'react'
import NavBar from '../components/NavBar'

const About = () => {
  return (
	<div className='min-h-screen'>
			<div className='h-screen flex flex-col'>
				<NavBar />
				<div className='m-10 flex flex-col h-full justify-center'>
					<h1 className='font-extrabold text-4xl text-shadow-xl'>ABOUT</h1>
					<br />
					<p>Ether Donate is an Ethereum donation website. You can use this website for anything, like <span className='gradient-text'>startups, fundraisers, donations.</span></p>
					<br />
					<p>This website is decentralized; it is deployed on the <span className='gradient-text'>Ropsten Test Network</span></p>
					<br />
					<p>This website is open source too! Check it out on <a href="https://github.com/Zeno3463/ether-donate" className='gradient-text border-b-2 border-[#CD113B]'>Github</a> (plz star it ^_^)!</p>
					<br />
					<p>Author: Zeno</p>
					<p>Version: 0.1.0</p>
					<p>Date of creation: 15/3/2021</p>
				</div>
			</div>

		</div>
	)
}

export default About