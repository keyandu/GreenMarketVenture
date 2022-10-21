import React from 'react';
import { useState } from 'react';
const TeamDevelopment = () => {
	const [toggle, setToggle] = useState(false);

	let minimized;
	let info;

	if (!toggle) {
		minimized = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f4f4f5] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold pt-3 text-lg underline'>Team Development</h2>

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
				<p className=' text-base pt-2 pb-4'>
					Utilizing GMV resources and team to provide the following...
				</p>
			</article>
		);
	} else {
		info = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold pt-3 text-lg underline'>Team Development</h2>

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
				<p className='text-grey text-sm py-2'>
					Utilizing GMV resources and team to provide the following:
				</p>
				<p className='text-start italic text-green font-semibold '>
					Product Specialist (2 part time, 2 full time)
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						The Product Specialist will be responsible for selling your products
						and services to new accounts to achieve sales targets, developing
						new sales in these accounts by monitoring customer's existing
						projects for successful completion to stated goals, and proposing
						related and new services as they monitor accounts needs for future
						needs.
					</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-2'>
					Key Performance Indicators
				</p>
				<ul className=' list-disc pl-10'>
					<li>Open X accounts per quarter</li>
					<li>Generate X in additional revenue a month</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-4'>
					Industry Relationship Specialist (1 part time)
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						A deep connection to all underground/legacy cannabis brands. We
						target those relationships and bring them to the legal market with
						white labeling or co-packing agreements.
					</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-4'>
					VP of Sales (1 full time)
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						The primary responsibility for this role is to build you a
						high-performance sales team structured to engage with a range of
						customers from multi-state operators to individual owner-operators
						and utilizing a metric-driven project pursuit process anchored in
						customer engagement systems (CRM). We will hold weekly (high level)
						sales meetings with the client’s C-level suite to discuss
						performance, growth metrics, and forecasts.
					</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-4'>
					Communication Specialist (1 part time)
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						The Communication Specialist will be the liaison between your
						company and its current and potential customers. Primary
						responsibilities include solving customer issues, complaints and
						inquiries; keeping customer satisfaction at the core of every
						decision and behavior.
					</li>

					<li>
						A Communication Specialist oversees answering customer calls,
						listening to their concerns, and solving problems. They handle both
						inbound and outbound phone conversations with clients to make sure
						everyone quickly gets the help they need.
					</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-4'>
					Content Creator (1 part time)
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						The content creator works in conjunction with the Social Media
						manager in creating content for Green Market Ventures, Cannabis
						Development, and their partnered brands for social media posts.
					</li>

					<li>
						They will develop an understanding of the market and provide a
						competitive analysis report each month and create and maintain a
						monthly content calendar.
					</li>
				</ul>
				<p className='text-start italic text-green font-semibold pt-4'>
					Social Media Manager (1 part time)
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						The Social Media Manager’s job focuses on increasing brand awareness
						through the effective use of social media outlets. A Social Media
						Manager will be tasked with several key duties, such as:
					</li>
					<li>
						Working with the appropriate personnel to develop social media
						marketing campaigns
					</li>
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
			</article>
		);
	}
	return (
		<>
			{minimized}
			{info}
		</>
	);
};

export default TeamDevelopment;
