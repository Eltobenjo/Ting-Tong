import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer">
       <div className="container">
         
           
<ul id='dropdown1' className='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li className="divider"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
  </ul>
         <div className="row">
           <div className="col l6 s12">
             <h5 className="white-text">Footer Content</h5>
             <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
           </div>
           <div className="col l4 offset-l2 s12">
             <h5 className="white-text">Links</h5>
             <ul>
               <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
               <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
               <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
               <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div className="footer-copyright">
         <div className="container">
         © 2020 Copyright Text
         <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
         </div>
       </div>
</footer>
  );
}

export default Footer;
