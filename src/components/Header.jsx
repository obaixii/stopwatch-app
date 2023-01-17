import React from 'react'
function Header() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">StopWatch App</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header