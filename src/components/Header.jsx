import React, { useEffect } from "react";
import $ from "jquery";
import img_logo from "../assets/header/logo.png";
const Header = () => {
  useEffect(() => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("nav").addClass("black");
      } else {
        $("nav").removeClass("black");
      }
    });
    $(".menu h4").click(function () {
      $("nav ul").toggleClass("active");
    });
  }, []);
  return (
    <>
      <div className="responsive-bar">
        <div className="logo">
          <img src={img_logo} alt="logo" />
        </div>
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <div className="logo">
          <img src={img_logo} alt="logo" />
        </div>
        <ul>
          <li className="header_home_li">
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/sports">SPORTS</a>
          </li>
          <li>
            <a href="/live-betting">LIVE BETTING</a>
          </li>
          <li>
            <a href="/premium">PreMium</a>
          </li>
          <button className="header_signin_btn">Sign IN</button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
