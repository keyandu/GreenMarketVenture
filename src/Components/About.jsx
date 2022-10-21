import React, { useState } from 'react'
import gmv from '../images/gmv-logo.jpeg'
import sundial from '../images/sundial.png'
import cannabis from '../images/cannabis-dev.png'
import benevolence from '../images/benevolence-bound.png'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import bud from '../images/bud-video.mp4'
import cbd from '../images/background.jpg'
import { useSpring, animated, config } from 'react-spring'
import Navigation from './Navigation'
import Footer from './Footer'

let scroller = Scroll.scroller

let Element = Scroll.Element

function Text() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 300,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>GREEN MARKET VENTURE</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			Business development and sales consulting for cannabis and CBD brands.

		</animated.h1>
	)
}
function Text3() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 800,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			GMV works with over 47 operators across 19 states to help farmers and
			brands quickly secure new market share on both national and international
			levels.
			
		</animated.h1>
	)
}
function Text4() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 800,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return (
		<animated.h1 style={props}>
			<Link to='/contact' >
				<button className='mt-1 bg-green rounded-3xl p-4 text-white hover:scale-95 ease-in-out hover:bg-blueDark'>
					Work with us
				</button>
			</Link>	

		</animated.h1>
	)
}


export default function About() {
	return (
		<Element name='About'>
			<Navigation />
			<div className='p-0 pt-20 h-full relative  '>
				<div style={{
					backgroundImage: `url(${cbd})` ,width: '100%',
					height: '680px',
}}>
					<section className='p-0 flex flex-col items-center'>
						<div align = "center" className='mt-36 flex items-center place-content-center'>
							<article align = "center" className='w-3/6 px-3 md:px-0 mr-1 md:mr-10 align-items-center'>
								<span className='flex place-content-center'>
									<h1 className=' mb-4 md:pt-0 pt-4  text-green tracking-wide text-start text-6xl font-[800] md:ml-4  place-center-center'>
										{Text()}
									</h1>
								</span>
								<span className='flex '>
									<p className='mb-4 md:pt-0 pt-4 text-black pb-4 md:w-2/3 d-flex text-center md:text-lg md:ml-4 h-100'>
										{Text2()}
									</p>

								</span>
								<span className='flex place-content-center'>
									<p className=' text-black pb-1 md:w-2/4 flex text-center md:text-lg  place-center-center'>
										{Text4()}
									</p>

								</span>
							</article>
							<article className='mr-2 lg:mr-0'>
								<img
									src={gmv}
									alt='gmv-logo'
									className='  md:h-72 lg:h-96 w-40 md:w-auto rounded-md '></img>
							</article>


						</div>
					
						<article
							className='bg-[#f9fafb] mb-24 flex flex-col items-center text-black rounded-md 
				drop-shadow-xl mt-16 pb-4 px-1 pt-4 md:w-3/5 lg:w-2/4 mx-4 lg:mx-0'>
							<p className='lg:w-3/5 text-lg'>{Text3()}</p>
						
						</article>
					</section>
				</div>
				{/* -------------------------------VIDEO-------------------------------*/}
				<div className='w-full bg-neutral flex py-16 justify-center'>
					<video
						className='md:w-3/5 rounded-xl drop-shadow-xl'
						loop
						controls
						autoplay
						src={bud}
						type='video/mp4'
					/>
				</div>
				<section className='grid h-max place-items-center mt-12 md:my-24 '>
					{/* -------------------------------body section of About component -------------------------------*/}
					<article className='md:w-5/6 p-4 md:p-0 text-start lg:w-3/5 bg-white text-black rounded-sm'>
						<header className='mb-10'>
							<h2 className='md:text-4xl text-2xl w-full mb-2 font-bold tracking-wide border-b-4 border-black pb-2'>
								We <span className='text-green text-3xl md:text-5xl'>Grow</span>{' '}
								Your Business
							</h2>
						</header>
						<div className='flex flex-col justify-center w-full md:pt-8 gap-8'>
							<span className='w-max rounded-lg'>
								<img
									className='w-48 bg-sundial rounded-md p-4 mb-2'
									alt='sundial logo'
									src={sundial}></img>
							</span>
							<span className='rounded-lg'>
								<img
									className='md:w-3/5'
									alt='cannabis-dev logo'
									src={cannabis}></img>
							</span>

							<span className='rounded-lg mt-5'>
								<img
									className='md:w-3/5'
									alt='benevolence logo'
									src={benevolence}></img>
							</span>
						</div>
					</article>
				</section>
			</div>
			<Footer />
		</Element>

	)
}
