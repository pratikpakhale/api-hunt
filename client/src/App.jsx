import { Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import GoogleCallback from './pages/GoogleCallback';

import GradientBackground from './components/layout/GradientBackground';

function App() {
	return (
		<GradientBackground>
			<Routes>
				<Route path="login" element={<LoginSignup />} />
				<Route path="google/callback" element={<GoogleCallback />} />
			</Routes>
		</GradientBackground>
	);
}

export default App;
