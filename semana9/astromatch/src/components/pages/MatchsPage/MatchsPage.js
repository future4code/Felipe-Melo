import React from "react"
import  ProfileListItem  from "./components/ProfileListItem/ProfileListItem"
import { MatchesContainer, MatchesList } from './styled';

 const MatchsPage = () => {
    return(
        <MatchesContainer>
            <MatchesList>
               {/*  <ProfileListItem />
                <ProfileListItem />
                <ProfileListItem />
                <ProfileListItem /> */}
            </MatchesList>
        </MatchesContainer>
    )
}

export default MatchsPage