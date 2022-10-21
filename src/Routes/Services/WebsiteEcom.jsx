import { useState } from 'react';

export default function WebsiteEcom() {
	const [toggle, setToggle] = useState(false);

	let minimized;
	let info;

	if (!toggle) {
		minimized = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f4f4f5] px-2 md:px-1 my-4 h-max shadow-xl rounded-md'>
				<div className='flex justify-between w-full'>
					<div className='flex justify-between w-full'>
						<h2 className='font-bold  pt-3 text-lg underline'>
							Website with E-Commerce
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
				<p className='py-2 italic text-green font-semibold'>POS Integration</p>
			</article>
		);
	} else {
		info = (
			<article className='flex flex-col items-start border-2 border-grey2 bg-[#f9fafb] px-2 md:px-1 my-4 h-max shadow-xl rounded-md '>
				<div className='flex justify-between w-full'>
					<h2 className='font-bold pt-3 text-lg underline'>
						Website with E-Commerce
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
				<p className='text-start italic text-green pt-2 font-semibold'>
					E-Commerce UI/UX Customization
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						In an e-commerce store, the entire experience of the visitor must be
						optimized to reduce any friction between them and purchasing a
						product.
					</li>
					<li>
						We design a UI/UX experience that decreases cart abandonment and
						maximizes conversions by carefully customizing each element of the
						purchasing process, from the design of the product pages to the
						functionality of the shopping cart.
					</li>
				</ul>
				<p className='text-start italic text-green pt-2 font-semibold'>
					WooCommerce Setup and Configuration
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						We recommend the WooCommerce premium plugin to all our clients as
						the best WordPress solution for e-commerce. We’ve covered our
						reasons for preferring WooCommerce extensively, including
						comparisons to Shopify, Shopify Plus, Magento, and BigCommerce.
					</li>
					<li>
						The setup process for WooCommerce includes installing and
						configuring the software, white labeling customer accounts, and
						configuring notification emails.
					</li>
				</ul>
				<p className='text-start italic text-green pt-2 font-semibold'>
					Products and Category Architecture
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						Establishing the product and category architecture is the
						foundational discovery piece for any e-commerce store, as it
						establishes how products relate to each other, and how customers
						will search for them.
					</li>
					<li>
						For instance, if you offer a line of products in a range of colors,
						are those products listed separately or as ordering options on the
						product page? Are smaller products available as add-ons, or is there
						another variable you would like to include? Getting this right is
						key to having a site where you can easily maintain your product
						catalog—and more importantly, scale your catalog without locking
						yourself into a product architecture that constrains your site
						performance
					</li>
				</ul>
				<p className='text-start italic text-green pt-2 font-semibold'>
					Search Enhancement
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						When customers come to your site, you want them to be able to search
						for products, right? We use 3rd party integrations to improve
						product search function so that your customers can find what they’re
						looking for, no matter how big your catalog is.
					</li>
				</ul>
				<p className='text-start italic text-green pt-2 font-semibold'>
					Payment Processing Setup
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						We will setup the website to accept our client’s payment processor
						of choice, including credit card, gift cards, and new options such
						as Apple Pay, Google Pay, and PayPal. We will also configure
						PCI-compliant ways for users to save their payment info for future
						purchases.
					</li>
					<li>
						We will test the payment setup in a live environment to ensure that
						funds reach the client’s account, and that payment is working
						smoothly
					</li>
				</ul>
				<p className='text-start italic text-green pt-2 font-semibold'>
					Shopping Configuration
				</p>
				<ul className=' list-disc pl-10'>
					<li>
						E-commerce shipping and order processing can be fully customized to
						client needs, whether you’re handling it yourself or using a drop
						shipper. We can set free shipping thresholds and show shipping
						estimates, validate addresses, ship to the customer or offer
						in-store pickup, handle label printing and returns, and automate
						package tracking.
					</li>
				</ul>
				<p className='text-start italic text-green pt-2 font-semibold'>
					POS Integration
				</p>
				<ul className=' list-disc pl-10 pb-4'>
					<li>
						Do you have physical stores as well as an online one? Our POS
						integration will link with your inventory management system to
						ensure the items in stock are accurately reflected on the website.
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
