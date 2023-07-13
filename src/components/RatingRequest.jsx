import Image from './shared/Image';
import icon from '../assets/images/icon-star.svg';
import Text from './shared/Text';
import RatingScore from './RatingScore';
import Button from './shared/Button';

const RatingRequest = ({ onSubmit, className }) => {
	const handleSubmit = () => {
		onSubmit();
	};

	return (
		<div className={className}>
			<Image className="main__icon" src={icon} alt="Icon Star" />

			<Text>
				<h2>How did we do?</h2>
				<p>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
			</Text>

			<RatingScore />

			<Button
				type="submit"
				text="SUBMIT"
				className="main__submit"
				onClick={handleSubmit}
			/>
		</div>
	);
};
export default RatingRequest;
