import Navigation from "../components/navigation/Navigation";
import QuickLinksSetOne from "../components/quicklinks/QuickLinksSetOne";
import {dateObject} from "../lists/UPTODATE";
import mug from "../images/mug.jpg"


function AboutUs() {
  return (
    <>
      <Navigation />
      <h1 className="page-header">About Us</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1-width">
            <h2>
              Welcome to the {dateObject.year} St Louis Renaissance Festival!{" "}
            </h2>

            <p style={{ textAlign: "left" }}>
              <img
                src={mug}
                alt="Mug"
                style={{
                  float: "left",
                  width: "30vw",
                  marginRight: "1.5%",
                  marginBottom: "1.5%",
                }}
              />
              Mid-America Festivals is the nation’s largest producer of outdoor
              themed events. In 2019, we entertained nearly one million people
              in a wide variety of locations across the country. <br />
              <br />
              Mid-America Festivals currently devotes its time towards
              developing some of the best festivals in the country. Mid-America
              Festivals, along with affiliated entities, owns and operates the
              Minnesota Renaissance Festival, the Trail of Terror (located in
              Minnesota), the Bay Area Renaissance Festival at MOSI (located on
              the grounds of the Museum of Science and Industry in Tampa Bay,
              Florida), the Kansas City Renaissance Festival, the Michigan
              Renaissance Festival, the St. Louis Renaissance Festival and many
              other events. The company demonstrates its event production and
              promotion leadership by embracing all aspects of event production
              from specialty merchandise and corporate sponsorship to ticket
              sales and multi-media marketing.
              <br />
              <br />
              Based in Wentzville, Mid-America’s staff is comprised of talented
              managers’ experiences in all aspects of entertainment. Mid-America
              Festivals began producing Renaissance Festivals in 1976 as a
              natural extension of its president’s career in major venue
              promotion and production. The company’s background ranges from
              rock and roll events like the Beach Boys, Rolling Stones, and
              Prince to event management for concerts like Rock the Garden in
              Minneapolis.
              <br />
              <br />
              For more information about Mid-America Festivals{" "}
              <a href="http://www.mafestivals.com/">visit our Website</a>!
            </p>
          </div>
          <div className="col2">
            <QuickLinksSetOne id={1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
