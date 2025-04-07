import React from 'react'
import "../Styles/Prefooter.css";
import { FaInstagram,FaFacebook,FaTwitter,FaPinterest } from 'react-icons/fa';


const Footer = ({footer}) => {
    return (
        <>

<div className="PreFooter">
            <div>
               
                 <p > <b>24/7 Support</b> <br/>Get the support you want at anytime</p>
               </div>
            <div><p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p></div>
            <div><p> <b>Vast network</b> <br/>Interact with people from all over the world</p></div>
        </div>


<div className="PreFooter2">
<div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

<div>
    <div>
        <input type="email" name="email" placeholder="Enter Email Address" />
        <button>›</button>
    </div>
    <span>Thanks. You're on our email list for special offers.</span>
</div>

<div>
       <p>Follow Skill Fusion</p>
       <span>Interact with us on social media to get updated</span>
</div>

<div>
   <FaFacebook/><FaInstagram/><FaPinterest/><FaTwitter/>
</div>
</div>

</>
)
}

export default Footer;
