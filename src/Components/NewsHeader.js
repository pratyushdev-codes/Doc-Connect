import React from 'react';
import news from './news.json';
import Lottie from 'react-lottie';

function NewsHeader() {
  return (
    <div className="news-container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div className="left" style={{ display: 'flex' }}>
        <Lottie options={{ animationData: News }} />
      </div>
      <div className="right">Get Insights to the latest Health News</div>
    </div>
  );
}

export default NewsHeader;
