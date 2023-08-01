import "./banner.scss";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <div className="top__title">
          <span className="line"></span>
          <small>Best digital agency</small>
        </div>
        <h1>
          Make your business
          <br />
          <span style={{ color: "#FE8E42" }}>more powerful</span>
          <br />
          with us
        </h1>
        <div className="banner__Cta">
          <button>Get Started</button>
          <i>
            <BsFillPlayFill />
          </i>
        </div>
      </div>
      <div className="right">
        <div className="img_bg"></div>
        <Image src="/images/banner_bg.png" width="500" height="100" alt="" />
        <Image
          src="/images/chart.png"
          className="chart"
          alt=""
          width="500"
          height="100"
        />
      </div>
    </div>
  );
};

export default Banner;
