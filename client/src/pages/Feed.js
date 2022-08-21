import React from 'react';
import { useQuery } from '@apollo/client';

import PieceList from '../components/PieceList';
import PieceForm from '../components/PieceForm';

import { QUERY_PIECE } from '../utils/queries';

const Feed = () => {
  const { loading, data } = useQuery(QUERY_PIECE);
  const pieces = data?.pieces || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PieceForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PieceList
              pieces={pieces}
              title="For Browsing"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Feed;
