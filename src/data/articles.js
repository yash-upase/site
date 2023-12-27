import React from "react";

function article_1() {
	return {
		date: "25 Dec 2023",
		title: "Welcome to my website!",
		description:
			"Hello, to article section where I intend to write about atmospheric science stuff and other cool things I come across.",
		keywords: [
			"Introduction",
			"Meteorology",
			"Start",
			"Research Articles",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Hello, I am Yashraj Upase, Ph.D. scholar of <a href="https://cc.iith.ac.in/" target="_blank" rel="noopener noreferrer">
					Climate Change Department 
					</a> at <a href="https://www.iith.ac.in/" target="_blank" rel="noopener noreferrer">
					 IIT-Hyderabad
					</a> . I am working in satellite hydrometeorology. I am planning to write small articles about
					my work and other interesting I come across along this research journey. I am planning to post summary of research articles I read,
					the key concepts in the field. I hope to publish articles every week(fingers crossed!). Do write me with suggestions, corrections. 
					You can find the email address in the homepage or in contact section. Thanks! 
					<br />
        {/* Line break added */}
        <br />

					I also want to thank the template creator of this website Mr. <a href="https://github.com/truetha" target="_blank" rel="noopener noreferrer">
					Madhusanka
				  </a>, in which have I made changes and deplyed this site.(As they as "credit where credit's due") 
				  <br />
        {/* Line break added */}
        <br />
					If you would like to contact me, please visit the{' '}
  					<a href="/contact">Contact Page</a>.

				</div>
					<img src={"welcome.jpg"} alt="welcome"
					style={{ width: '300px' }} 
					/>
				</div>
			</React.Fragment>
		),
	};
}



const myArticles = [article_1]; //article_1, article_2

export default myArticles;
