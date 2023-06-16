import React from 'react';
import CommunityGrid from '../Layouts/Community/CommunityGrid';

type Props = {}

function Community({ }: Props) {
  return (
    <div className="community__wrapper">
      <h1>Community Posts</h1>
      <CommunityGrid />
      <CommunityGrid />
    </div>
  )
}

export default Community;
