// rafce
const LatestVideo = (props) => { 
  // receiving the data from parent comp in props
  // props are objects
  // props are read-only
  // props can also have children
  console.log(props);

  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.views} Views</li>
        <li className="list-group-item">{props.publishedDate}</li>
      </ul>
    </div>
  );
};

export default LatestVideo;
