import React from "react"
import {ListItemContainer, RoundImage} from './styled'


 const ProfileListItem = ()=>{
    return(
            <ListItemContainer>
                <RoundImage src={"https://picsum.photos/50/50?=1"}/>
                <h2>Nome Pessoa</h2>

            </ListItemContainer>


    )
}

export default ProfileListItem