import React from 'react';
import CommunityGrid from '../Layouts/Community/CommunityGrid';
import Title from '../components/Title/Title';

function Community() {
  return (
    <div className="community__wrapper">
      <h1 className="title__community">Community Post</h1>
      <CommunityGrid />
      <CommunityGrid />
    </div>
  );
}

export default Community;
