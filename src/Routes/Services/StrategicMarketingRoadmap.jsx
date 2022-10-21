import { useState } from 'react';
import {
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	Transition,
	useSpringRef,
} from '@react-spring/web';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { alignProperty } from '@mui/material/styles/cssUtils';

const StrategicMarketingRoadmap = () => {
	const [toggle, setToggle] = useState(false);
	const [styles, api] = useSpring(() => ({ opacity: 1 }));

	api.start({ opacity: toggle ? 1 : 0 });

	api.stop();

	let minimized;
	let info;

	minimized = (
		<article className='mt-8 border-2 border-grey2 flex flex-col items-start bg-[#f4f4f5] px-2 md:px-1 h-48  shadow-xl rounded-md'>
			<div className='flex justify-between w-full'>
				<h2 className='font-bold  pt-3 text-lg underline '>
					Strategic Marketing Roadmap
				</h2>
				<span className=' p-1'>
					<button
						className='flex items-center justify-center bg-blue text-white h-8 w-8 rounded-full '
						onClick={() => {
							setToggle(!toggle);
						}}>
						{isVisible ? <MdExpandMore /> : <MdExpandLess />}
					</button>
				</span>
			</div>

			<div className='md:flex md:flex-col pt-4'>
				<p className='text-start italic text-green font-semibold'>
					Industry Insights
				</p>
				<p className='text-start italic text-green font-semibold'>Roadmap</p>
				<p className='text-start italic font-semibold text-green'>
					Go to Market Strategy
				</p>
			</div>
		</article>
	);

	info = (
		<article className='flex flex-col items-start border-2 mt-8 border-grey2 bg-[#f9fafb] px-2 md:px-1 h-max shadow-xl rounded-md'>
			<div className='flex justify-between w-full'>
				<h2 className='font-bold  pt-3 text-lg underline'>
					Strategic Marketing Roadmap
				</h2>
				<span className='p-1'>
					<button
						className='bg-blue text-white h-8 w-12 flex items-center justify-center rounded-xl '
						onClick={() => {
							setToggle(!toggle);
						}}>
						{isVisible ? <MdExpandLess /> : <MdExpandMore />}
					</button>
				</span>
			</div>

			<div className='md:flex'>
				<div className='p-1'>
					<p className='text-start italic text-green font-semibold'>
						Industry Insights
					</p>
					<ul className=' list-disc pl-10 md:pl-4'>
						<li>Industry Trends and Challenges</li>
						<li>The Brand’s Opportunities</li>
						<li>Competitor Reviews and Insights</li>
					</ul>
				</div>
				<div className='p-1'>
					<p className='text-start italic text-green font-semibold'>Roadmap</p>
					<ul className=' list-disc pl-10'>
						<li>The Value Proposition</li>
						<li>Brand North Star and Purpose</li>
						<li>Brand Messaging, Proposed Brand Stories and Tagline Options</li>
						<li>Brand Attributes, Brand Tone of Voice and Personality</li>
						<li>Key Visual Recommendations - Brand Imagery & Photography</li>
					</ul>
				</div>
				<div className='p-1'>
					<p className='text-start italic font-semibold text-green'>
						Go to Market Strategy
					</p>
					<ul className=' list-disc pl-10'>
						<li>Marketing Framework</li>
						<li>Target Audience Insights and Personas</li>
						<li>Website/App Marketing Strategies</li>
						<li>Brand North Star and Purpose</li>
						<li>ASO/SEO Insights and Keyword Recommendations</li>
						<li>Google Advertising and Offline (TV/Radio) Advertising</li>
						<li>Social Media Approach and Influencer Marketing Strategies</li>
						<li>Experiential Marketing</li>
						<li>Growth Insights and PR Strategy</li>
						<li className='pb-4'>High Level Marketing Rollout Calendar</li>
					</ul>
				</div>
			</div>
		</article>
	);

	return (
		<>
			<div>{minimized}</div>

			<Transition
				items={toggle}
				from={{ opacity: 0 }}
				enter={{ opacity: 1 }}
				leave={{ opacity: 0 }}
				reverse={toggle}
				delay={200}
				config={config.molasses}
				onRest={setToggle(!toggle)}>
				{({ opacity }, item) =>
					item ? (
						<animated.div
							style={{
								position: 'absolute',
								opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
							}}>
							{' '}
							{minimized}
						</animated.div>
					) : (
						<animated.div
							style={{
								position: 'absolute',
								opacity: opacity.to({ range: [1.0, 0.0], output: [0, 1] }),
							}}>
							{info}
						</animated.div>
					)
				}
			</Transition>
		</>
	);
};

export default StrategicMarketingRoadmap;
