import React from 'react';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
	return (
		<footer class='text-center text-lg-start bg-light text-muted'>
			<hr/>
			<div className='flex flex-row items-center w-full justify-between md:justify-around p-2 md:p-4'>

				<section className='w-full'>
					<article className='text-start '>
						{' '}
						<h1 className='pb-px mb-2 w-max'>
							Contact Us
						</h1>
						<p className='pb-2'>Email: info@greenmarketventures.com</p>
						<p>Phone: (310) 571-5797</p>
					</article>
					<div class="mt-2 text-start d-flex justify-content-evenly">
						<a href="http://facebook.com" >
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a style={{ marginLeft: '.5rem' }} href=""  >
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a style={{ marginLeft: '.5rem' }} href="">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
				</section>
				<section>
					<article className='flex flex-col gap-8 text-black pt-0'>
						<div className=''>
							<h1 className='font-semibold'>©2022 GREEN MARKET VENTURES</h1>
						</div>
						<div className=''>
							<p className='text-xs md:text-lg text-black'>
								Terms & Conditions, Privacy
							</p>
						</div>
					</article>
				</section>
			</div>
		</footer>
	);
}
