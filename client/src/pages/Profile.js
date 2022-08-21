import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';


const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME);

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }

    const profileData = data?.me || {}
   
    return (
        <>
            <p>{profileData.username}'s Profile</p>
            
            Username: {profileData.username}
            <br/>
            Art Style: {profileData.artstyle}
            <br/>
            Contact: {profileData.email}
            <br/>
        </>
        
    );
};

export default Profile