import { useSearchParams } from 'react-router-dom';

function GoogleCallback() {
	const [searchParams] = useSearchParams();

	const code = searchParams.get('code');
	console.log(code);

	return <div>googleCallback</div>;
}

export default GoogleCallback;
