import "./menu.scss";

export default function Menu({menueOpen, setMenueOpen}) {
  return (
    <div>
      <div className={"menu " + (menueOpen && "active")}>
        <ul>
          <li onClick={()=> setMenueOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={()=> setMenueOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={()=> setMenueOpen(false)}>
            <a href="#works">Works</a>
          </li>
          <li onClick={()=> setMenueOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
