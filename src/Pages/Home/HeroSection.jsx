export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          {/* <p className="section--title"> Hey, Im Rafael</p> */}
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Full Stack
              </span> {" "}
              <br />
              Developer
          </h1>
          <p className="hero--section-description">
            <br />
          A passionate career shifter transitioning into a full-stack developer role, leveraging strong problem-solving skills honed through previous experience.  
            <br />
          </p>
        </div>
        <a href="https://www.linkedin.com/in/mrvasquezrafael/" target="_blank" className="btn btn-primary" >Get In Touch</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero2_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}