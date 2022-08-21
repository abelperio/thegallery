import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';
import { QUERY_USER } from '../utils/queries';
import { QUERY_PIECE } from '../utils/queries';
// import PieceList from '../components/PieceList';
import PieceForm from '../components/PieceForm';

const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME, QUERY_USER, QUERY_PIECE);

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }

    const profileData = data?.me || {}
    const pieceData = data?.pieces || {}

    return (
        <>
            <p>{profileData.username}'s Profile</p>
            
            Username: {profileData.username}
            <br/>
            Art Style: {profileData.artstyle}
            <br></br>
            Image: {pieceData.image}
                <div className="pieceform">
                    <PieceForm/>
                </div>
        </>
        
    );
};

export default Profile