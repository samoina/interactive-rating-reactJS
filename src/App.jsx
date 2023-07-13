import RatingRequest from './components/RatingRequest';
import RatingResponse from './components/RatingResponse';

function App() {
	return (
		<main className="main">
			<h1 className="main__heading--sr">Interactive Rating Component</h1>

			<RatingRequest />
			<RatingResponse />
		</main>
	);
}

export default App;
