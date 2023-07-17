import RatingRequest from './components/RatingRequest';
import RatingResponse from './components/RatingResponse';
import { useState } from 'react';
import Modal from 'react-modal';

//Style the modal
const modalStyles = {
	overlay: {
		backgroundColor: 'hsl(213, 19%, 18%)',
	},
	content: {
		color: 'hsl(25, 97%, 53%)',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

//Bind modal ro appElement for accessibility
Modal.setAppElement('#root');

function App() {
	const [showRequest, setShowRequest] = useState(false);
	const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);
	const [selectedRating, setSelectedRating] = useState(0);
	const [showWarning, setShowWarning] = useState(false);

	const handleRequestSubmit = () => {
		if (selectedRating) {
			setShowRequest(true);
		} else {
			// alert('Please select a rating to be able to submit');
			setShowWarning(true);
		}
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

			{/* BEFORE VALIDATION */}
			{/* <RatingResponse
				userRating={selectedRating}
				className={`main__thankyou ${
					showRequest ? 'main__thankyou--show' : 'main__thankyou--hide'
				}`}
			/> */}

			{/* THIS IS UNSTYLED DIV */}
			{/* {showWarning ? (
				<div>Please select a rating to be able to submit</div>
			) : (
				<RatingResponse
					userRating={selectedRating}
					className={`main__thankyou ${
						showRequest ? 'main__thankyou--show' : 'main__thankyou--hide'
					}`}
				/>
			)} */}

			{/* USING MODAL */}
			{showWarning ? (
				<Modal
					isOpen={showWarning}
					onRequestClose={() => setShowWarning(false)}
					contentLabel="Warning"
					style={modalStyles}
				>
					<div>Please click on a number to submit your rating</div>
					<button className="main__modal" onClick={() => setShowWarning(false)}>
						OKAY
					</button>
				</Modal>
			) : (
				<RatingResponse
					userRating={selectedRating}
					className={`main__thankyou ${
						showRequest ? 'main__thankyou--show' : 'main__thankyou--hide'
					}`}
				/>
			)}
		</main>
	);
}
export default App;
