export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description"> 
          I'm Rafael, a junior web developer dedicated to crafting seamless digital solutions. Proficient in HTML, CSS, and JavaScript, I thrive on turning ideas into user-friendly websites. 
          </p>
          <p className="hero--section-description">
          With a passion for clean code and problem-solving, I'm eager to contribute my skills to building innovative online experiences.
          </p>
        </div>
      </div>
    </section>
  )
}