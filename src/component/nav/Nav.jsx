import "./Nav.css";

const Nav=(props)=>{
  console.log(props.active);
  return(
    <>
      <div id ="nav-sec" className={`nav-sec ${props.active ? 'active' : ''}`}>
      <p className=" fw-bold" onClick={props.changeSections} > {props.section} </p>
      </div>

    </>
   
  );
}

export default Nav;