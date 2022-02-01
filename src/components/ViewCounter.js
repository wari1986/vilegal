
import React, { useState, useEffect } from 'react';
import countapi from 'countapi-js';

const ViewCounter = (props) => {
  const [viewCount, setViewCount] = useState(0);
  useEffect(() => {
    countapi.get('vi-legal.com', props.value).then((result) => setViewCount(result.value));
  }, []);
  return <>{viewCount}</>;
};

export default ViewCounter;
