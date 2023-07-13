const Button = ({ className, type, text }) => {
	return (
		<button type={type} className={className}>
			{text}
		</button>
	);
};
export default Button;
