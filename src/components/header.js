import * as React from "react"
// import { Link } from "gatsby"

const menu = [
  {
    title: "How it works",
    child: [
      {
        title: "User Guide",
        link: "/",
      },
      {
        title: "FAQ",
        link: "/",
      },
    ],
  },
  {
    title: "Subscription",
    child: [
      {
        title: "Subscription Package",
        link: "/",
      },
    ],
  },
  {
    title: "Directory",
    child: [
      {
        title: "Clinician Directory",
        link: "/",
      },
      {
        title: "Hospital Directory",
        link: "/",
      },
    ],
  },
  {
    title: "Corporate",
    child: [
      {
        title: "Partnerships & Collaborations",
        link: "/",
      },
      {
        title: "Contact Us",
        link: "/",
      },
    ],
  },
]

const HeaderMenu = props => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href={props.link}
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.title}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.child.map((item, index) => {
          return (
            <HeaderMenuChild key={index} title={item.title} link={item.link} />
          )
        })}
      </ul>
    </li>
  )
}

const HeaderMenuChild = props => {
  return (
    <li>
      <a className="dropdown-item" href={props.link}>
        {props.title}
      </a>
    </li>
  )
}

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/04/cropped-Logo-Text-with-Icon.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menu.map((item, index) => {
              return (
                <HeaderMenu
                  key={index}
                  title={item.title}
                  // link={item.link}
                  child={item.child}
                />
              )
            })}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
      </div>
    </nav>
  </header>
)

export default Header
