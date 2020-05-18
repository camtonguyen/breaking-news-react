import React, { useState, useEffect } from 'react';

import { getNewStories } from '../services/api';

import Story from '../components/story';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    // effect
    getNewStories().then(data => setStoryIds(data));

    return () => {
      // cleanup
    }
  }, []);

  return storyIds.map(storyId => <Story key={storyId.id} storyId={storyId} />);
}

export default StoriesContainer;