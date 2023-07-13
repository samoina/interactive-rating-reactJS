import RatingRequest from './components/RatingRequest';
import RatingResponse from './components/RatingResponse';
import { useState } from 'react';

function App() {
	const [showRequest, setShowRequest] = useState(false);

	const handleRequestSubmit = () => {
		setShowRequest(true);
	};

	return (
		<main className="main">
			<h1 className="main__heading--sr">Interactive Rating Component</h1>

			<RatingRequest
				onSubmit={handleRequestSubmit}
				className={`main__request ${
					showRequest ? 'main__request--hide' : 'main__request--show'
				}`}
			/>

			<RatingResponse
				className={`main__thankyou ${
					showRequest ? 'main__thankyou--show' : 'main__thankyou--hide'
				}`}
			/>
		</main>
	);
}
export default App;
