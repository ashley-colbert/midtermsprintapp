import MyImageComponent from "../components/ImageComponent";
import MyImageComponent2 from "../components/ImageComponent2";
import MyImageComponent3 from "../components/ImageComponent3";
import Footer from "../components/Footer";

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
            <caption>Photo by <a href="https://unsplash.com/@rmacwheeler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">R. Mac Wheeler</a> on <a href="https://unsplash.com/photos/red-padded-bar-chairs-CJZi367anGU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </caption>
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
            <caption>Photo by <a href="https://unsplash.com/@evonneteoh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">E Y Teoh</a> on <a href="https://unsplash.com/photos/red-and-white-wooden-counter-0aS06T7ip3g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </caption>
          </div>
        </div>
        <div className="homeSummaryBox">
          <div>
            <MyImageComponent3/>
            <caption>Photo by <a href="https://unsplash.com/@john_matychuk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">John Matychuk</a> on <a href="https://unsplash.com/photos/the-diner-lighted-signage-fX2WyHHeAUY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </caption>
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
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;