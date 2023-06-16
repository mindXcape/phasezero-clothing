import React from 'react';
import CommunityGrid from '../Layouts/Community/CommunityGrid';
import Title from '../components/Title/Title';

function Community() {
  return (
    <div className="community__wrapper">
      <Title title="Community Post" />
      <CommunityGrid />
      <CommunityGrid />
    </div>
  );
}

export default Community;
