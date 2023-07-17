import Image from './shared/Image';
import illustration from '../assets/images/illustration-thank-you.svg';
import Button from './shared/Button';
import Text from './shared/Text';

const RatingResponse = ({ className, userRating }) => {
	return (
		<div className={className}>
			<Image
				className="main__thankyou--image"
				src={illustration}
				alt="Illustration to show thank you"
			/>

			<Button
				className="main__thankyou--response"
				text={`You selected ${userRating} out of 5`}
				type="button"
			/>

			<Text>
				<h2> Thank you!</h2>
				<p className="main__para">
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</Text>
		</div>
	);
};
export default RatingResponse;
