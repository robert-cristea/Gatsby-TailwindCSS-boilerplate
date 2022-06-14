import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from '../constants/images'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function Header() {
  var [modal, setModal] = useState(false);
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header>
      <Location>
        {({ location }) => {

          const lastPos = location.pathname.lastIndexOf('/');
          const len = location.pathname.length;
          const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

          return (
            <div className={"flex flex-wrap items-center justify-between bg-white z-50 " + (isMobile ? "px-3" : "px-10 lg:px-20")}>
              <div className="my-auto">
                <Link to="/" className="">
                  <img
                    src={images.IMAGE_LOGO}
                    className={"pt-1 " + (isMobile ? "w-logomobile h-logomobile" : "w-logo h-logo smd:w-logosmd smd:h-logosmd")}
                    alt="page elements shape"
                  />
                </Link>
              </div>
              <button
                className="flex my-auto float-right items-center  text-lightBlack rounded smd:hidden"
                onClick={() => isMobile ? setModal(true) : toggleExpansion(!isExpanded)}
              >
                <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="37.4428" height="32.9906" transform="translate(0.228882 0.181305)" fill="white" />
                  <path d="M29.6717 11.957C29.6717 12.2178 29.4584 12.429 29.1952 12.429H8.70538C8.44212 12.429 8.22888 12.2178 8.22888 11.957V8.65327C8.22888 8.39251 8.44212 8.1813 8.70538 8.1813H29.1952C29.4584 8.1813 29.6717 8.39251 29.6717 8.65327V11.957Z" fill="#83523B" />
                  <path d="M29.6717 18.3286C29.6717 18.5894 29.4584 18.8006 29.1952 18.8006H8.70538C8.44212 18.8006 8.22888 18.5894 8.22888 18.3286V15.0246C8.22888 14.7639 8.44212 14.5526 8.70538 14.5526H29.1952C29.4584 14.5526 29.6717 14.7639 29.6717 15.0246V18.3286Z" fill="#83523B" />
                  <path d="M29.6717 24.7C29.6717 24.9607 29.4584 25.1719 29.1952 25.1719H8.70538C8.44212 25.1719 8.22888 24.9607 8.22888 24.7V21.3962C8.22888 21.1355 8.44212 20.9243 8.70538 20.9243H29.1952C29.4584 20.9243 29.6717 21.1355 29.6717 21.3962V24.7Z" fill="#83523B" />
                </svg>
              </button>
              <nav
                className={`${
                  isExpanded ? `block` : `hidden`
                  } smd:flex smd:items-center w-full smd:w-auto`}
              >
                {[
                  {
                    route: `/`,
                    title: `Home`,
                  },
                  {
                    route: `/about`,
                    title: `About Me`,
                  },
                ].map((link) => (
                  <div className="relative">
                    <Link
                      className={"block text-center text-xl smd:inline-block smd:mx-6 mb-2 smd:mb-0 no-underline  hover:bg-gray-300 smd:hover:bg-white"
                        + (link.route == pathName ? " text-primary font-bold hover:text-primary " : " text-lightBlack hover:text-gray-900")}

                      key={link.title}
                      to={link.route}
                    >
                      {link.title}
                    </Link>
                    {link.route == pathName &&
                      <div className="bg-primary absolute hidden smd:block w-full h-1 rounded-t-xl object-fill" style={{ bottom: "-30px" }}></div>
                    }
                  </div>
                ))}
              </nav>
              <PureModal
                className="w-8/12 min-h-full bg-white"
                isOpen={modal}
                closeButton={
                  <span style={{ position: 'absolute', top: '5px', right: '5px' }}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="30" height="30.0931" rx="4" fill="#83523B" />
                      <path d="M16.1707 15.0275L21.7815 9.38041C21.9253 9.22511 22.0036 9.01971 21.9999 8.80748C21.9962 8.59525 21.9107 8.39276 21.7616 8.24267C21.6125 8.09258 21.4113 8.0066 21.2004 8.00286C20.9895 7.99911 20.7855 8.07789 20.6312 8.2226L15.0203 13.8696L9.40945 8.21987C9.25515 8.07516 9.05107 7.99638 8.8402 8.00013C8.62933 8.00387 8.42814 8.08985 8.27901 8.23994C8.12988 8.39003 8.04445 8.59252 8.04073 8.80475C8.03701 9.01698 8.11529 9.22238 8.25906 9.37767L13.8699 15.0275L8.25906 20.6745C8.17909 20.7495 8.11495 20.8399 8.07046 20.9404C8.02598 21.0409 8.00205 21.1494 8.00013 21.2594C7.9982 21.3694 8.0183 21.4787 8.05924 21.5807C8.10018 21.6827 8.16111 21.7753 8.2384 21.8531C8.31569 21.9309 8.40776 21.9922 8.50911 22.0334C8.61046 22.0746 8.71902 22.0949 8.82831 22.0929C8.9376 22.091 9.04538 22.0669 9.14523 22.0221C9.24507 21.9774 9.33493 21.9128 9.40945 21.8323L15.0203 16.1853L20.6312 21.8323C20.7855 21.977 20.9895 22.0558 21.2004 22.0521C21.4113 22.0483 21.6125 21.9623 21.7616 21.8122C21.9107 21.6622 21.9962 21.4597 21.9999 21.2474C22.0036 21.0352 21.9253 20.8298 21.7815 20.6745L16.1707 15.0275Z" fill="#D0D0D0" />
                    </svg>
                  </span>
                }
                closeButtonPosition='header'
                onClose={() => {
                  setModal(false)
                  return true;
                }}
              >
                <div className="flex flex-col min-h-screen items-center justify-center" style={{ margin: '-15px' }}>
                  {[
                    {
                      route: `/`,
                      title: `Home`,
                    },
                    {
                      route: `/about`,
                      title: `About Me`,
                    },
                    {
                      route: `/projects`,
                      title: `Projects`,
                    },
                    {
                      route: `/resume`,
                      title: `Resume`,
                    },
                    {
                      route: `/contact`,
                      title: `Let's talk`,
                    }
                  ].map((link) => (
                    <div className="relative items-center">
                      <Link
                        className={"block text-center text-xl mb-2 no-underline"
                          + (link.route == pathName ? " text-primary font-bold hover:text-primary " : " text-lightBlack hover:text-gray-900")}

                        key={link.title}
                        to={link.route}
                      >
                        <div className="h-16 w-48 flex flex-col justify-center items-center border-b border-lighterBrown">
                          {link.title}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </PureModal>
            </div>
          );
        }}
      </Location>
    </header >
  );
}


export default Header;

