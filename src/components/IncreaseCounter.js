import React, { useState, useEffect } from 'react';
import countapi from 'countapi-js';

const IncreaseCounter = (props) => {
  const [viewCount, setViewCount] = useState(0);
  useEffect(() => {
    countapi.hit('vi-legal.com', props.value).then((result) => setViewCount(result.value));
  }, []);
  return <>{viewCount}</>;
};

export default IncreaseCounter;
