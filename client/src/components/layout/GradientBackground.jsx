function GradientBackground({ children }) {
	return (
		<div className="bg-gradient-to-r from-gray-200 via-white to-gray-200 w-screen z-0">
			{children}
		</div>
	);
}

export default GradientBackground;
