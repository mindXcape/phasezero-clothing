import CommunityGrid from 'layouts/Community/CommunityGrid';

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
