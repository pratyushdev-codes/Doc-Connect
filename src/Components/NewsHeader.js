import React from 'react';
import news from './news.json'
import lotties from 'lottie-react'

function NewsHeader() {
  return (
    <div className="news-container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div className="left" style={{ display: 'flex' }}>
       <img src='./images/news3.gif' style={{height:"300ox", width:"300px"}}/>
      </div>
      <div className="right">Get Insights to the latest Health News</div>
    
    </div>
  );
}

export default NewsHeader;
