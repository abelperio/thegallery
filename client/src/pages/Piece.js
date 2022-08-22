import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_ONE_PIECE } from '../utils/queries';

const Piece = () => {
  
  const { pieceId } = useParams();

  const { loading, data } = useQuery(QUERY_ONE_PIECE, {
    variables: { pieceId: pieceId },
  });

  const piece = data?.piece || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {piece.name} <br />
        <span style={{ fontSize: '1rem' }}>
        {piece.image} posted: {piece.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {piece.bio}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={piece.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm pieceId={piece._id} />
      </div>
    </div>
  );
};

export default Piece;
