import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { DiJqueryUiLogo } from "react-icons/di";
import { BsTranslate, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "animate.css";

const Header = (props: any) => {
  return (
    <nav className="uk-navbar-container">
      <div className="uk-container">
        <div uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-flex">
              <a
                href="##"
                className="uk-navbar-toggle uk-navbar-toggle-icon"
                type="button"
                onClick={() => props.setSideBar(!props.sideBar)}
              >
                <HiOutlineMenuAlt1 />
              </a>
              <a
                className="uk-icon animate__animated animate__bounce"
                href="##"
              >
                <DiJqueryUiLogo />
              </a>
            </div>
            <div className="uk-flex search-box">
                <div className="uk-margin-1">
                  <form className="uk-search uk-search-default">
                  <span className="uk-search-icon-flip  uk-search-icon"><BsSearch/></span>
                    <input
                      className="uk-search-input"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            <div className="uk-flex uk-flex-row">
              <a href="##" className="uk-icons-lang uk-icon-default">
                <BsTranslate />
              </a>
              <a href="/" className=" uk-icon-profile uk-icon-default">
                <CgProfile />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
