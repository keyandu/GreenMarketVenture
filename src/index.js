import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Services from './Routes/Services';
import Contact from './Routes/Contact';
import About from './Components/About'
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './Components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<ScrollToTop>
			<Routes>
				<Route
					path='/'
					element={
						<React.StrictMode>
							<App />
						</React.StrictMode>
					}
				/>
				<Route index element={<About />} />
				<Route path='services' element={<Services />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</ScrollToTop>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
