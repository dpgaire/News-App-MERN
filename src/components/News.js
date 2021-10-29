import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am constructor from News");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-29&sortBy=publishedAt&apiKey=27abe1fe0bcf49d6be23d23911394506";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  handlePrevClick = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-09-29&sortBy=publishedAt&apiKey=27abe1fe0bcf49d6be23d23911394506&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    console.log("Nxt");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-09-29&sortBy=publishedAt&apiKey=27abe1fe0bcf49d6be23d23911394506&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h3>NewsMonkey - Top Headlines</h3>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
