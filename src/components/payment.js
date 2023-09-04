import React from "react";
import './payment.css'

import PaymentImg from "../assets/paymentsec.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";



const socialIcons = [facebook ,twitter,instagram,linkedin,youtube,telegram,whatsapp];

export const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="pay-section">
          <p>PAYMENT</p>
          <img src={PaymentImg} alt="payments " />
        </div>
        <div className="payment-social">
          <p>CONNECT</p>
          <nav>
            {socialIcons.map((img, idx) => {
              return <img className="socialIcon" key={idx} src={img} alt="social" />;
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};



