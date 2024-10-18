import { Link,Outlet } from "react-router-dom"
function Nav(){
function handleClick(){
  window.location.reload(Home)
  
}
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleClick}>Home</Link>
              </li>
              
              <li className="nav-item">
                <Link to="contact"  className="nav-link"  >Contact</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search"/>
              <button className="btn btn-primary" type="button">Search</button>

            </form>
          </div>
        </div>
      </nav> 
      <Outlet/>
    
    </>
        
       
    
    )

}
export default Nav

 