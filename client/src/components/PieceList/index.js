import React from 'react';
import { Link } from 'react-router-dom';

const PieceList = ({ pieces, title }) => {
  if (!pieces.length) {
    return <h3>No Art Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {pieces &&
        pieces.map((piece) => (
          <div key={piece._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {piece.name} <br />
              <span style={{ fontSize: '1rem' }}>
                posted: {piece.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{piece.bio}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/pieces/${piece._id}`}
            >
              Take a closer look!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PieceList;
