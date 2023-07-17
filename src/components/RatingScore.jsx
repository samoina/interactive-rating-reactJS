const RatingScore = ({ rating, select }) => {
	const handleClick = (ev) => {
		console.log(ev.target.textContent);
		select(+ev.target.textContent);
	};
	return (
		<ul className="rating__score">
			{rating.map((ratingItem, index) => (
				<li key={index} onClick={handleClick}>
					{ratingItem}
				</li>
			))}

			{/* <li onClick={() => handleClick(1)}>1</li>
			<li onClick={() => handleClick(2)}>2</li>
			<li onClick={() => handleClick(3)}>3</li>
			<li onClick={() => handleClick(4)}>4</li>
			<li onClick={() => handleClick(5)}>5</li> */}
		</ul>
	);
};
export default RatingScore;
