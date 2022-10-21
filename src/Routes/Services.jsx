import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import BrandGuidelines from './Services/BrandGuidelines'
import ContentStrategy from './Services/ContentStrategy'
import TeamDevelopment from './Services/TeamDevelopment'
import WebsiteEcom from './Services/WebsiteEcom'
import SocialMediaManage from './Services/SocialMediaManage'
import AffiliateMarketing from './Services/AffiliateMarketing'
import PDF from '../files/Full Services.pdf'
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react'

function Text() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 400,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Services Offered</animated.h1>
}

export default function Services() {
	return (
		<div className='bg-weed-pattern'>
			<Navigation />
			<div className=' mt-32 md:mt-40 mb-12 md:mb-36 grid h-max place-items-center  '>
				<div className='relative flex flex-col md:w-5/6 p-2 md:p-0 '>
					<span className='flex flex-col md:flex-row  items-center mb-4 w-full justify-between md:justify-center md:gap-8 pr-2'>
						<h1 className='text-4xl md:text-7xl font-bold text-black flex items-center p-1 border-b-2 md:border-b-8 border-black pb-4  '>
							{Text()}
						</h1>
						{ResumeLink}
					</span>
					<section className='mt-0 '>
						{/*--------------STRATEGIC MARKETING ROADMAP-----------------------------------*/}
						{/* <StrategicMarketingRoadmap /> */}

						{/*--------------BRAND GUIDELINES----------------------------------------------*/}
						<BrandGuidelines />

						{/*--------------CONTENT STRATEGY----------------------------------------------*/}
						<ContentStrategy />

						{/*--------------TEAM DEVELOPMENT----------------------------------------------*/}
						<TeamDevelopment />

						{/*--------------WEBSITE WITH E-COMMERCE---------------------------------------*/}
						<WebsiteEcom />

						{/*--------------SOCIAL MEDIA MANAGEMENT---------------------------------------*/}
						<SocialMediaManage />

						{/*--------------AFFILIATE MARKETING-------------------------------------------*/}
						<AffiliateMarketing />
					</section>
				</div>
			</div>
			{/*--------------FOOTER--------------------------------------------------------------*/}
			<Footer />
		</div>
	)
}

// opens full service PDF (../files) in a new tab
const ResumeLink = (
	<a href={PDF} target='_blank'>
		{' '}
		<button className='bg-blue mt-4 md:mt-0 text-white rounded-md p-2 hover:scale-95 ease-in-out hover:bg-blueDark'>
			Download PDF
		</button>
	</a>
)
