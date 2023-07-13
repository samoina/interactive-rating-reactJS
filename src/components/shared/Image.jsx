import PropTypes from 'prop-types';

const Image = ({ className, src, alt }) => {
	return (
		<>
			<img className={className} src={src} alt={alt} />
		</>
	);
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Image;
