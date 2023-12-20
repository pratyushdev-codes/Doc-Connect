import React, { Component } from 'react';
import Newsfetcher from './Newsfetcher'; // Make sure to provide the correct path to the Newsfetcher component

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ab736851528d409793eb3db0f1230abe";
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      // Limit the number of articles to 4
      this.setState({ articles: parsedData.articles.slice(0, 8) });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>Latest Health News</h2>

          <div className="row">
            {this.state.articles.map((element, index) => (
              <div className='col-md-3' key={index}>
                <Newsfetcher
                  title={element.title ? element.title.slice(0, 45) : 'No Title'}
                  description={element.description ? element.description.slice(0, 90) : 'No Description'}
                  imageUrl={element.urlToImage || 'https://example.com/default-image.jpg'}
                  newsUrl={element.url || '#'}
                />
              </div>
            ))}

           
          </div>
        </div>
      </div>
    );
  }
}

export default News;
