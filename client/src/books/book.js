import React, {Component} from 'react';

class Book extends Component {

	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="booksBackground">
				<div className="book first" name="book">
					<div className="bookThumbnail">
						<iframe type="text/html" width="336" height="550" frameBorder="0" allowFullScreen className="bookPreview" src={book.sampleLink} title={book.title}></iframe>
					</div>

					<div className="bookDescriptors">
						<h4>Description</h4>
						<p>{book.description}</p>

						<h4>From the Author</h4>
						<p>{book.fromTheAuthor}</p>

						<h4>In Praise Of</h4>
						<p>{book.inPraiseOf}</p>

						<a href={book.buyBookLink} target="_blank" rel="noreferrer">Buy the Book</a>
						<a href={book.buyAudiobookLink} target="_blank" rel="noreferrer">Buy the AudioBook</a>

						<h4>Translated Languages</h4>
						{ book.translatedLanguages.split(',').map((language) =>
							<div className="bookLanguage">{language}</div>
						)}
					</div>
				</div>
			 </div>
		);
	}

}