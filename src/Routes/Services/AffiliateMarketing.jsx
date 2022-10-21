import { useState } from 'react';

export default function AffiliateMarketing() {
	const [toggle, setToggle] = useState(false);

	let minimized;
	let info;

	if (!toggle) {
		minimized = (
			<article className='flex flex-col border-2 border-grey2 items-start bg-[#f4f4f5] px-2 md:px-1 my-4 h-max shadow-xl rounded-md'>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold  pt-3 text-lg underline'>
						Affiliate Marketing
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
					The path to taking it to the next level: Increased brand visibility
					and market share caused by the influence of Amber Wilson and the Green
					Market Ventures team.
				</p>
				<p className='pt-2 pb-4'>
					Become an industry leader by joining the GMV network, providing your
					brand instant access to a platform of industry partners that expedite
					your needs in all cannabis related operational tasks...
				</p>
			</article>
		);
	} else {
		info = (
			<article className='flex flex-col border-2 border-grey2 items-start bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl rounded-md'>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold  pt-3 text-lg underline'>
						Affiliate Marketing
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
					The path to taking it to the next level: Increased brand visibility
					and market share caused by the influence of Amber Wilson and the Green
					Market Ventures team.
				</p>
				<p className='py-2'>
					Become an industry leader by joining the GMV network, providing your
					brand instant access to a platform of industry partners that expedite
					your needs in all cannabis related operational tasks...
				</p>

				<p className='py-1'>
					Amber’s affiliate platform is a two-way highway, you receive the
					benefits of working with your affiliate partners and you also become a
					resource to other members using the brand as an extension resulting in
					a vast market share for all involved parties.
				</p>
				<p className='py-1'>
					The affiliate platform is a safe space where you can share new ideas
					before investing, request input from brand leaders about obstacles you
					are encountering, or kick back and celebrate with as your brand
					accomplishes your goals reaches new heights.
				</p>
				<p className='pt-1 pt-2 pb-4'>
					Green Market Ventures has the affiliate infrastructure to execute your
					organization’s goals. What differentiates us is that we have depth of
					reach, and trust with industry decision makers. We are the face of
					these bulk sales and white labeling efforts; thus are able to secure
					meetings and introductions with people most would not normally have
					access to, allowing brands to gain entry to the legal market via white
					labeling or co-packing licensing agreements.
				</p>
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
