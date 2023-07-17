# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Did this challenge using Vanilla JS and it took me 140 minutes.
This time I am doing it with ReactJS and timing myself as I hone my skills.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Github repo]()
- Live Site URL: [Netlify Link]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Since I am learning in public and sharing my progress as I go, I created a Twitter thread and shared these learnings. Check them out on my Twitter profile [here]().

1. The README.md should be in the project's root directory.

2. For me to be able to know how to structure the project, I first had to decide - on paper- the components and pages. so I sketched to visualize my approach and identified my components - Image, Text and Button.

3. I started with the Image component. Tried to reference it in 'src' as just a path but this wouldn't render the images. So I needed to import the images first using their relative paths. This way, I created variables that are references to the actual image files and which I could use for the src attribute in the component - and the reminder to put them in {}. I then passed the 'src' and 'alt' as props to the Image Component.

```jsx
import Image from './shared/Image';
import icon from '../assets/images/icon-star.svg';

const RatingRequest = () => {
	return (
		<div>
			<Image src={icon} alt="Icon Star" />
		</div>
	);
};
export default RatingRequest;
```

4. Once I did this, I was able to figure out the static bit of the project. The next challenge was how to add the dynamism to it, ie, Initially, the RatingResponse component is hidden initially, and then when the button is clicked it hides RatingRequest and shows RatingResponse. From my learning, I knew this had to do with event handlers and the useState hook. I used the code below but it did not work as I expected.

```jsx
function App() {
	const [showRequest, setShowRequest] = useState(true);

	const changeStatus = () => {
		setShowRequest(!showRequest);
	};

	return (
		<main className="main">
			<h1 className="main__heading--sr">Interactive Rating Component</h1>

			{showRequest ? (
				<RatingRequest changeStatus={changeStatus} />
			) : (
				<RatingResponse />
			)}

			{/* <RatingRequest onClick={changeStatus} />
			<RatingResponse /> */}
		</main>
	);
}

export default App;
```

5. I built up on the useState and Boolean, and then dynamically set the className for both components. At the onset, the showRequest is set to false (to show the Request and hide the Response). When the button is clicked, the setter function changes it to true (and this hides the Request and shows the Response). Managed to do this with conditional inclusion of the classes and their display on my CSS

```jsx
function App() {
	const [showRequest, setShowRequest] = useState(false);

	const handleRequestSubmit = () => {
		setShowRequest(true);
	};

	return (
		<main className="main">
			<h1 className="main__heading--sr">Interactive Rating Component</h1>

			<RatingRequest
				onSubmit={handleRequestSubmit}
				className={`main__request ${
					showRequest ? 'main__request--hide' : 'main__request--show'
				}`}
			/>

			<RatingResponse
				className={`main__thankyou ${
					showRequest ? 'main__thankyou--show' : 'main__thankyou--hide'
				}`}
			/>
		</main>
	);
}
```

6. To get the rating selected, I have to set an event handler to each of the List items and set it to the same function, which when called, shows the value selected. I did make a mistake, however, because I set up local state in the RatingScore component and then it was impossible to pass the data from the child components up to the parents.

Solution - set global state in App.jsx and pass callback functions to update stae in the parent component.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) -

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
