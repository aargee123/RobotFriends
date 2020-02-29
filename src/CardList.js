import React from 'react'
import Card from './Card';

const cardlist=({robots})=>{
    const cardcomponent=robots.map((user,i)=>{
        return  <Card key={i} id={user.id} name={user.name} username={user.username} email={user.email}/>
    })
    return(<div>
        {cardcomponent}
        </div>
    );
}

export default cardlist;