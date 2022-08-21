import React from 'react';


const PieceList = ({pieces, title }) => {
  if (!pieces.length) {
    return <h3>No Pieces Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {pieces &&
        pieces.map((piece) => (
          <div key={piece._id} className="pieceid">
            <h4 className="title">
              {piece.user.username} <br />
              <span style={{ fontSize: '1rem' }}>
                created {piece.name}
              </span>
            </h4>
            <div className="image">
              <p>{piece.image}</p>
            </div>
            <div className="body">
              <p>{piece.bio}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PieceList;