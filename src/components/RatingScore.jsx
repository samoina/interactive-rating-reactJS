const RatingScore = ({ rating, select }) => {
	const handleClick = (ev) => {
		let activeRating = +ev.target.textContent;
		console.log(activeRating);
		select(activeRating);

		/*
		const target = ev.target;
		let activeList;

		if (target.matches('li')) {
			if (activeList) {
				(activeList.style.backgroundColor = ''), (activeList.style.color = '');
			}

			target.style.backgroundColor = 'green';
			target.style.color = 'white';

			activeList = target;
		}
		*/
	};
	return (
		<ul className="rating__score">
			{rating.map((ratingItem, index) => (
				<li key={index} className="rating__List" onClick={handleClick}>
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
