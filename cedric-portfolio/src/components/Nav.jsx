const Nav = () => {
  return (
    <div className="nav_container">
      <a className="about_link" href="/">
        About Me
      </a>
      <a className="projects_link" href="/projects">
        Projects
      </a>
      <a
        className="resume_link"
        href="https://docs.google.com/document/d/1KdtABe3BniVmlcRAcLuGud9hIO25npkMuyI_SGO2stQ/edit?usp=sharing"
        target="blank"
      >
        Resume
      </a>
    </div>
  )
}
export default Nav
