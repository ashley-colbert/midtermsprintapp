import MyImageComponent from "../components/ImageComponent";
import MyImageComponent2 from "../components/ImageComponent2";
import MyImageComponent3 from "../components/ImageComponent3";

import "./Home.css"

const Home = () => {
  return (
    <>
      <div>
        <div className="homeTextBox">
          <div className="stars">&#9733;</div>
          <div className="stars">&#9733;</div>
          <div className="stars">&#9733;</div>
          <p className="homeHeader">Gary Blue's Diner, where you can stop feeling blue!</p>
          <div className="stars">&#9733;</div>
          <div className="stars">&#9733;</div>
          <div className="stars">&#9733;</div>
        </div>
        <div className="homeLocationBox">
          <div>
            <MyImageComponent/>
          </div>
          <div>
            <p id="locationHours">We're located on 405 Cerulean Road<br/><br/>
            Hours of Operation:<br/>
            Mon-Fri: 6am - 9pm<br/>
            Sat: 8am - 10pm<br/>
            Sun: 8am - 6pm
            </p>
          </div>
          <div>
            <MyImageComponent2/>
          </div>
        </div>
        <div className="homeSummaryBox">
          <div>
            <MyImageComponent3/>
          </div>
          <div>
            <p id="summaryText">Gary Blue's diner was opened in 1972 with the goal of providing<br/>
            quality food and a cozy atmosphere to our patrons. Lorem Ipsum<br/>
            dolor sit amet, consectetur adipiscing elit. Nunc pretium<br/>
            ultrices dui. Phasellus lorem nisl convallis sit amet justo vitae<br/>
            dignissim vulputate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;