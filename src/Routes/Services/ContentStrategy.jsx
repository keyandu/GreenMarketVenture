import { useState } from 'react';

import React from 'react';

export default function ContentStrategy() {
	const [toggle, setToggle] = useState(false);

	let minimized;
	let info;

	if (!toggle) {
		minimized = (
			<article className='flex flex-col border-2 border-grey2 items-start bg-[#f4f4f5] px-2 md:px-1 my-4 h-max shadow-xl rounded-md'>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold  pt-3 text-lg underline'>
						Content Strategies
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
				<div>
					<p className='py-2'>
						Many clients have found this invaluable and have said they wished
						they'd began with this content blueprint as it sets the direction
						for everyone on board and helps save on confusion and needless
						costs.
					</p>
					<p className='pt-2 pb-4'>
						The creation of a very succinct content strategy to ensure all the
						brand’s online content is up-to-date, innovative, engaging, strong
						and on message...
					</p>
				</div>
			</article>
		);
	} else {
		info = (
			<article className='flex flex-col border-2 border-grey2 items-start bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold  pt-3 text-lg underline'>
						Content Strategies
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
				<p className='py-2'>
					Many clients have found this invaluable and have said they wished
					they'd began with this content blueprint as it sets the direction for
					everyone on board and helps save on confusion and needless costs.
				</p>
				<p className='py-2'>
					The creation of a very succinct content strategy to ensure all the
					brand’s online content is up-to-date, innovative, engaging, strong and
					on message.
				</p>

				<div className='md:flex'>
					<div className='p-1'>
						<p className='text-start italic text-green font-semibold'>
							Discovery
						</p>
						<ul className=' list-disc pl-10'>
							<li>Content strategy for 2 platforms (FB & IG)</li>
							<li>
								Website content ideas (no copy/layouts, just top line
								considerations for content)
							</li>
							<li>Content audit approach</li>
							<li>Tech stack audit approach</li>
						</ul>
					</div>
					<div className='p-1'>
						<p className='text-start italic text-green font-semibold'>
							Planning
						</p>
						<ul className=' list-disc pl-10'>
							<li>Hashtag strategy</li>
							<li>3 x monthly content themes/pillars</li>
							<li>Content examples</li>
						</ul>
					</div>
					<div className='p-1'>
						<p className='text-start italic text-green font-semibold'>
							Creative
						</p>
						<ul className=' list-disc pl-10'>
							<li>Distribution - Tools, Platforms, Processes, Tactics</li>
							<li>Calendars - Cadence, Calendar types</li>
							<li>Ongoing content writing agency recommendations</li>
							<li className='pb-4'>Measurement and Next Steps</li>
						</ul>
					</div>
				</div>
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
