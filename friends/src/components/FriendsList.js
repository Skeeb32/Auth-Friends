import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend';
import AddFriend from './AddFriend';
import Header from './Header';

const Container = styled.section`
    margin: 0 5%;
    display: flex;
    flex-flow: column;
    h1 {
        text-align: center;
        font-weight: bold;
        font-size: 150%;
        margin-top: 3%;
    }
`;

const FriendsList = (props) => {

    
    const [friends, setFriends] = useState([]);
    const [update, setUpdate] = useState(0);
   
    useEffect(() => {
        const getFriends = () => {
            axiosWithAuth().get("http://localhost:5000/api/friends")
            .then( res => {
                setFriends(res.data);
            })
            .catch( error => {
                console.log(error);
            })
        }

        getFriends();

    }, [update]);

    return (
       <section><Header />
        <Container>
            <h1>Friends</h1>

            <ul>
                {friends.length > 0 &&
                friends.map( friend => {
                   return <Friend friend={friend} />
                })}
            </ul>
            <AddFriend update={update} setUpdate={setUpdate}/>
        </Container></section> 
    )
}

export default FriendsList;