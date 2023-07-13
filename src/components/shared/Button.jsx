const Button = ({ className, type, text, onClick }) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			{text}
		</button>
	);
};
export default Button;
