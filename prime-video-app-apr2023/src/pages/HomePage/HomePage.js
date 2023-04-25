import LatestVideo from "./LatestVideo/LatestVideo";

const HomePage = () => {
  return (
    <div className="row">
      <h1>Welcome to Home Page</h1>
      <h2>Let's learn about React's Core Concepts</h2>

      <h2>Latest Videos | Fn Comp and Props</h2>
      <div className="col-md-3">
        <LatestVideo
          title="Fra vs Arg FIFA 2022 Final"
          thumbnailUrl="https://placehold.co/260x220"
          views="2.4M"
          publishedDate="10 Days ago"
        >
          Watch highlights of Arg vs Fra FIFA 2022 Final, Qatar
        </LatestVideo>
      </div>

      <div className="col-md-3">
        <LatestVideo
          title="CSK vs KKR 2023 IPL"
          thumbnailUrl="https://placehold.co/260x220"
          views="1.6M"
          publishedDate="1 Day ago"
        >
          Watch highlights of CSK vs KKR 2023 IPL
        </LatestVideo>
      </div>

    </div>
  );
};

export default HomePage;
