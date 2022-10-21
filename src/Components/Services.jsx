import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
	return (
		<div className='grid  bg-neutral pt-6 md:pt-12 place-items-center mt-12'>
			<div className='relative flex flex-col md:w-3/5 p-2 md:p-0'>
				<Link to='/Services'>
					<h1 className='text-4xl font-bold text-black text-start p-1 border-b-4 border-black pb-2'>
						Services
					</h1>
					<button className='flex mb-2 mt-6 ml-1 p-8 h-10 bg-blue items-center rounded-xl text-white hover:scale-95 ease-in-out hover:bg-blueDark'>
						More Info
					</button>
				</Link>
				<section className=' gap-8 mt-0 '>
					{/*--------------STRATEGIC MARKETING ROADMAP-----------------------------------*/}
					<article className='mt-4 border-2 border-grey2 flex flex-col items-start bg-[#f9fafb] px-2 md:px-1 h-48 basis-1/4 shadow-xl rounded-md'>
						<div className='flex justify-between w-full'>
							<h2 className='font-bold  pt-3 text-lg underline '>
								Strategic Marketing Roadmap
							</h2>
						</div>
						<div className='md:flex md:flex-col pt-4'>
							<p className='text-start italic text-green font-semibold'>
								Industry Insights
							</p>
							<p className='text-start italic text-green font-semibold'>
								Roadmap
							</p>
							<p className='text-start italic font-semibold text-green'>
								Go to Market Strategy
							</p>
						</div>
					</article>
					{/*--------------BRAND GUIDELINES----------------------------------------------*/}
					<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max basis-1/3 shadow-xl rounded-md'>
						<h2 className='font-bold  pt-3 text-lg underline'>
							Brand Guidelines
						</h2>
						<p className='py-4 flex text-start'>
							To help ensure brand consistency across all of a business' visual
							elements, The GMV Team can create brand identity logos and a brand
							guidelines document that includes...
						</p>
					</article>
					{/*--------------CONTENT STRATEGY----------------------------------------------*/}
					<article className='flex flex-col border-2 border-grey2 items-start bg-[#f9fafb] px-2 md:px-1 my-4 h-max basis-1/2 shadow-xl rounded-md'>
						<div className='flex justify-between w-full'>
							<h2 className='font-bold  pt-3 text-lg underline'>
								Content Strategies
							</h2>
						</div>
						<div>
							<p className='py-2 text-start'>
								Many clients have found this invaluable and have said they
								wished they'd began with this content blueprint as it sets the
								direction for everyone on board and helps save on confusion and
								needless costs.
							</p>
							<p className='pt-2 pb-4 text-start'>
								The creation of a very succinct content strategy to ensure all
								the brand’s online content is up-to-date, innovative, engaging,
								strong and on message...
							</p>
						</div>
					</article>
					{/*--------------TEAM DEVELOPMENT----------------------------------------------*/}
					<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl basis-1/4 text-start rounded-md '>
						<h2 className='font-bold pt-3 text-lg underline'>
							Team Development
						</h2>
						<p className=' text-base pt-2 pb-4'>
							Utilizing GMV resources and team to provide the following...
						</p>
					</article>
					{/*--------------WEBSITE WITH E-COMMERCE---------------------------------------*/}
					<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max basis-1/2  shadow-xl rounded-md'>
						<div className='flex justify-between w-full'>
							<h2 className='font-bold  pt-3 text-lg underline'>
								Website with E-Commerce
							</h2>
						</div>
						<p className='py-2 italic text-green font-semibold'>
							E-Commerce UI/UX Customization
						</p>
						<p className='py-2 italic text-green font-semibold'>
							WooCommerce Setup and Configuration
						</p>
						<p className='py-2 italic text-green font-semibold'>
							Products and Category Architecture
						</p>
						<p className='py-2 italic text-green font-semibold'>
							Search Enhancement
						</p>
						<p className='py-2 italic text-green font-semibold'>
							Payment Processing Setup
						</p>
						<p className='py-2 italic text-green font-semibold'>
							Shopping Configuration
						</p>
						<p className='py-2 italic text-green font-semibold'>
							POS Integration
						</p>
					</article>
					{/*--------------SOCIAL MEDIA MANAGEMENT---------------------------------------*/}
					<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max basis-1/3 text-start shadow-xl rounded-md '>
						<h2 className='font-bold pt-3 text-lg py-2 underline'>
							Social Media Management
						</h2>

						<p className='pb-4'>
							Leveraging the LinkedIn profiles of Amber Wilson, Green Marker
							Ventures, and Cannabis Development create synergy with the Brand’s
							profile to build name recognition, increase sales, and foster
							customer loyalty and retention.
						</p>
					</article>
					{/*--------------AFFILIATE MARKETING-------------------------------------------*/}
					<article className='flex flex-col border-2 border-grey2 items-start bg-[#f9fafb] px-2 md:px-1 my-4 h-max basis-1/2 text-start shadow-xl rounded-md'>
						<h2 className='font-bold  pt-3 text-lg underline'>
							Affiliate Marketing
						</h2>
						<p className='py-2'>
							The path to taking it to the next level: Increased brand
							visibility and market share caused by the influence of Amber
							Wilson and the Green Market Ventures team.
						</p>
						<p className='pt-2 pb-4'>
							Become an industry leader by joining the GMV network, providing
							your brand instant access to a platform of industry partners that
							expedite your needs in all cannabis related operational tasks...
						</p>
					</article>
				</section>
			</div>
		</div>
	)
}
