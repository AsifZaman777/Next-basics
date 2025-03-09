import React from 'react';

interface Props{
    params: {userID:number}
}

const UserDetailPage = ({params:{userID}}:Props) => {
    return (
        <div>
            UserDetailPage {userID}
        </div>
    );
};

export default UserDetailPage;