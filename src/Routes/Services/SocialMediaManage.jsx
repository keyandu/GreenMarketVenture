import { useState } from 'react';

export default function SocialMediaManage() {
	const [toggle, setToggle] = useState(false);

	let minimized;
	let info;

	if (!toggle) {
		minimized = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f4f4f5] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold pt-3 text-lg py-2 underline'>
						Social Media Management
					</h2>
					<span className=' p-1'>
						<button
							className='bg-blue pb-1 text-white h-8 w-8 rounded-full '
							onClick={() => {
								setToggle(!toggle);
							}}>
							...
						</button>
					</span>
				</div>
				<p className='pb-4'>
					Leveraging the LinkedIn profiles of Amber Wilson, Green Marker
					Ventures, and Cannabis Development create synergy with the Brand’s
					profile to build name recognition, increase sales, and foster customer
					loyalty and retention.
				</p>
			</article>
		);
	} else {
		info = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold pt-3 text-lg py-2 underline'>
						Social Media Management
					</h2>
					<span className=' p-1'>
						<button
							className='bg-blue pb-1 text-white h-8 w-8 rounded-full '
							onClick={() => {
								setToggle(!toggle);
							}}>
							...
						</button>
					</span>
				</div>
				<p className='text-start'>
					Leveraging the LinkedIn profiles of Amber Wilson, Green Marker
					Ventures, and Cannabis Development create synergy with the Brand’s
					profile to build name recognition, increase sales, and foster customer
					loyalty and retention.
				</p>
				<ul className=' list-disc pl-10'>
					<li className='pt-2'>
						Create content for Green Market Ventures, Cannabis Development, and
						their partnered brands for social media posts
					</li>
					<li>Provide a competitive analysis report each month</li>
					<li>
						Write and review content for websites, social media pages and public
						communications
					</li>
					<li>
						Optimize Search Engine Optimization driven content and increase the
						site traffic
					</li>
					<li>Increase traffic to the brand’s channels</li>
					<li>
						Analyzing the company’s digital marketing plan and social media
						strategy and identifying strategic weaknesses and making
						recommendations for improvements
					</li>
					<li>
						Setting key performance indicators (KPIs) for social media
						campaigns, such as targets for a certain number of shares or likes
						and measuring a campaign’s performance against the KPIs
					</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-2'>
					Social Media Channel: LinkedIn
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						In just 3 years, Amber Wilson acquired 31,279 followers on her
						LinkedIn account.
					</li>
					<li>
						Trending on #cannabis and being the top 1% engagements of all of
						LinkedIn
					</li>
					<li className='pb-4'>
						A team of Admins manage the page and perform daily audits, focusing
						on our target audience. From there, we execute an outreach to
						schedule meetings with those we have vetted and qualified.{' '}
					</li>
				</ul>
			</article>
		);
	}
	return (
		<>
			{minimized}
			{info}
		</>
	);
}
