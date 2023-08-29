import React from 'react';
import googleLogo from '../assets/google-logo.png';
import hero from '../assets/hero.png';
import { motion } from 'framer-motion';

export default function loginSignup() {
	const handleOnClick = () => {
		const clientId = import.meta.env.VITE_REACT_APP_API_GOOGLE_CLIENT_ID;
		const redirectUri = import.meta.env.VITE_REACT_APP_API_GOOGLE_REDIRECT_URL;
		const scopes = [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email',
		];

		const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=${encodeURIComponent(
			scopes.join(' '),
		)}&response_type=code&redirect_uri=${encodeURIComponent(
			redirectUri,
		)}&client_id=${encodeURIComponent(
			clientId,
		)}&access_type=offline&prompt=consent`;

		window.location.href = authUrl;
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			className="flex justify-center flex-col lg:flex-row"
		>
			<div className="flex justify-center">
				<img src={hero} alt="" />
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex items-center justify-center text-4xl font-lato">
					Welcome to API Hunt!
				</div>
				<div className="flex items-center justify-center w-full">
					<motion.button
						onClick={handleOnClick}
						whileHover={{ scale: 1.2 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
						className="flex items-center justify-center border-2 w-80 border-blue-500 lg:mt-12 mt-6 px-4 py-2"
					>
						<motion.img
							whileHover={{ rotate: 360 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}
							transition={{ duration: 0.3 }}
							className="h-8 mr-2"
							src={googleLogo}
							alt=""
						/>
						<span className="text-xl font-lato">Sign In with Google</span>
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
}
