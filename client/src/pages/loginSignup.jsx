import googleLogo from '../assets/google-logo.png';
import hero from '../assets/hero.png';
import { motion } from 'framer-motion';

export default function LoginSignup() {
	const handleOnClick = () => {
		const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
		const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URL;
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
		console.log(authUrl);
		window.location.href = authUrl;
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			className="flex justify-center flex-col lg:flex-row h-full"
		>
			<div className="flex justify-center h-fit">
				<img src={hero} alt="hero" className="h-3/4" />
			</div>
			<div className="flex flex-col justify-center h-full">
				<div className="flex items-center justify-center text-4xl font-lato">
					Welcome to API Hunt!
				</div>
				<div className="flex items-center justify-center w-full">
					<motion.button
						onClick={handleOnClick}
						whileHover={{ scale: 1.2 }}
						onHoverStart={() => {}}
						onHoverEnd={() => {}}
						className="flex items-center justify-center border-2 w-80 border-blue-500 lg:mt-12 mt-6 px-4 py-2"
					>
						<motion.img
							whileHover={{ rotate: 360 }}
							onHoverStart={() => {}}
							onHoverEnd={() => {}}
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
