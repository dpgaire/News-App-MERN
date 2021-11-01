import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", fontSize: "14px", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={!imageUrl ? "/p.jpg" : imageUrl}
            className="card-img-top"
            style={{ width: "400px", height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {!title ? "Not available" : title}...
            </h5>
            <p className="card-text">
              {!description ? "Not available" : description}...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{!author ? "Unknown" : author} </strong> on{" "}
                <strong>{new Date(publishedAt).toGMTString()}</strong>
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
