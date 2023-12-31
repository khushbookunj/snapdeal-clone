import React from "react";
import './downloadApp.css'
import downloadImg from "../assets/downloadImg.png";
import appStoreImg from "../assets/AppStore.png";
import playStoreImg from "../assets/playstore.png";


export const DownloadApp = () => {
  return (
    <div className="download">
      <div className="download-container">
        <div className="download-img-container">
          <img src={downloadImg} alt="download" />
        </div>
        <div className="download-content">
          <p className="download-title"> Download Snapdeal App Now</p>
          <p className="download-desc1">Fast, Simple & Delightful.</p>
          <p className="download-desc2">
            All it takes is 30 seconds to Download.
          </p>
          <div className="download-store">
            <img
              src={appStoreImg}
              alt="app store"
              className="download-store1"
            />
            <img
              src={playStoreImg}
              alt="play store"
              className="download-store2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



