interface CollectionProps {
  season: string;
  title_name: string;
}

function CollectionTitle({ season, title_name }: CollectionProps) {
  return (
    <div className="collection_title_container">
      <h4 className="collection_title">{`${season} / ${title_name} `}</h4>
    </div>
  );
}

export default CollectionTitle;
