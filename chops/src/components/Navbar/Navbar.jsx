import React from 'react'

const Navbar = () => {

    const navLinks = [
        { name: "Home", path: '/'},
        { name: "Service", path: '/services'},
        { name: "About", path: '/about'},
        { name: "Shop", path: '/shop'},
        { name: "Contact", path: '/contact'},
    ]

  return (
    <div>
      <div className="navbar">
        <div className="logo"></div>
        <div className="navlinks">
            {navLinks.map((nav,index)=> {
                return <div key={index} className="link">
                    <a href={nav.path}>{nav.name}</a>
                </div>
            })}
        </div>

      </div>
    </div>
  )
}

export default Navbar
