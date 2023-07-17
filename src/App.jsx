import RatingRequest from './components/RatingRequest';
import RatingResponse from './components/RatingResponse';
import { useState } from 'react';

function App() {
	const [showRequest, setShowRequest] = useState(false);
	const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);
	const [selectedRating, setSelectedRating] = useState(0);

	const handleRequestSubmit = () => {
		setShowRequest(true);
	};

	return (
		<main className="main">
			<h1 className="main__heading--sr">Interactive Rating Component</h1>

			<RatingRequest
				select={(selectedRating) => setSelectedRating(selectedRating)}
				rating={ratings}
				onSubmit={handleRequestSubmit}
				className={`main__request ${
					showRequest ? 'main__request--hide' : 'main__request--show'
				}`}
			/>

			<RatingResponse
				userRating={selectedRating}
				className={`main__thankyou ${
					showRequest ? 'main__thankyou--show' : 'main__thankyou--hide'
				}`}
			/>
		</main>
	);
}
export default App;
