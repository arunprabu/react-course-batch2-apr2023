// Class Component and states demo
import { Component } from "react";

// must inherit React.Component class
class TrendingVideoList extends Component {
  // state is a keyword in react.
  // state is an object
  // keep component-wide updateable data in state
  state = {
    videos: [
      {
        id: 1,
        trendingRank: 1,
        title: "Man Vs Wild",
        thumbnailUrl: "https://placehold.co/260x220",
        desc: "A Wild Adventure show in Discovery Channel",
        views: "700K",
        publishedOn: "1 week ago",
      },
      {
        id: 2,
        trendingRank: 2,
        title: "Planet Earth II",
        thumbnailUrl: "https://placehold.co/260x220",
        desc: "A show by David Attenborough on BBC Earth Channel",
        views: "900K",
        publishedOn: "2 weeks ago",
      },
    ],
    videoResolution: '4K'
  };

  // event handler method
  handleChangeResolution = () => {
    console.log(this.state.videoResolution); //4K
    // Do not mutate state directly. Use setState()
    // this.state.videoResolution = '8K'; 
    // if you update state directly data will only be updated. Not UI.

    // render method will be called immediately after setState is called
    this.setState({
      videoResolution: '8K'
    });
  }

  // must have render method
  render() {
    console.log("Inside Render Method");
    // must return JSX
    return (
      <div className="row">
        <p>
          Enjoy these shows in {this.state.videoResolution} Resolution{" "}
          <button className="btn btn-primary btn-sm" 
            onClick={this.handleChangeResolution}>Change Resolution</button>
        </p>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[0].thumbnailUrl}
              className="card-img-top"
              alt={this.state.videos[0].title}
            />
            <div className="card-body">
              <h5 className="card-title">
                #{this.state.videos[0].trendingRank}{" "}
                {this.state.videos[0].title}
              </h5>
              <p className="card-text">{this.state.videos[0].desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.state.videos[0].views} Views
              </li>
              <li className="list-group-item">
                {this.state.videos[0].publishedOn}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[1].thumbnailUrl}
              className="card-img-top"
              alt={this.state.videos[1].title}
            />
            <div className="card-body">
              <h5 className="card-title">
                #{this.state.videos[1].trendingRank}{" "}
                {this.state.videos[1].title}
              </h5>
              <p className="card-text">{this.state.videos[1].desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.state.videos[1].views} Views
              </li>
              <li className="list-group-item">
                {this.state.videos[1].publishedOn}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingVideoList;
