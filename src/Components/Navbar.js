import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [search, setSearch] = useState('')

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className={`navbar navbar-expand-sm navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="data:image/png;base64,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" alt="image not found" className="meme_img"/></Link>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          
          
          <div className="d-flex" role="search">
            <input  className="input" type="search" placeholder="   Search for meme . . . " value={ search } onChange={(event)=>setSearch(event.target.value)} aria-label="Search" />
            <button onClick={()=>props.clicked(search)} className="btn btn-outline-info mx-10" onClickCapture={() => {console.log("clicked")}}>Search</button>
          </div>

          <div className="add_post"><button type="button" className="btn btn-danger">Post+</button></div>
          
         
          <img className="img" alt="none" src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png"/>
          <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
    
          </div>
          {/* <p>${search}</p> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  Home: 'HOME'
}