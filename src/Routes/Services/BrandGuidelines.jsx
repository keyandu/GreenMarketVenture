import { useState } from 'react';

const BrandGuidelines = () => {
	const [toggle, setToggle] = useState(false);

	let minimized;
	let info;

	if (!toggle) {
		minimized = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f4f4f5] px-2 md:px-1 my-4 h-48 shadow-xl rounded-md'>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold  pt-3 text-lg underline'>
						Brand Guidelines
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
					To help ensure brand consistency across all of a business' visual
					elements, The GMV Team can create brand identity logos and a brand
					guidelines document that includes...
				</p>
			</article>
		);
	} else {
		info = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold  pt-3 text-lg underline'>
						Brand Guidelines
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
					To help ensure brand consistency across all of a business' visual
					elements, The GMV Team can create brand identity logos and a brand
					guidelines document that includes:
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						Design of 6 options for a main logo (with 1 round of
						changes/feedback)
					</li>
					<li>Design of final logo, plus usage and variations</li>
					<li>Color palettes</li>
					<li>Primary and secondary fonts/typography use</li>
					<li>Favicons and social media icons</li>
					<li>Iconography design and usage</li>
					<li>Photography/imagery styles and recommendations</li>
					<li>Visual element guidelines (illustration and photography)</li>
					<li>Rules, execution, do’s and don’ts</li>
				</ul>
				<p className='py-2 text-sm text-grey'>
					This will be presented in a 40-50 page designed brand PDF guideline
					document. With a view to ensure internal and external partners create
					the brand’s designs and elements correctly. The final files will also
					be made available as high resolution print ready pngs, illustrator and
					jpegs.
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
};

export default BrandGuidelines;
