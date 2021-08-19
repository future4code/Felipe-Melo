import React from "react"
import ProfileListItem from "../../ProfileListItem/ProfileListItem"
import { Profile } from "../HomePage/styled";
import { list, div } from './styled';

 const MatchsPage = () => {
    return(
        <div>
            <list>
                <ProfileListItem />
                <ProfileListItem />
                <ProfileListItem />
                <ProfileListItem />
            </list>
        </div>
    )
}

export default MatchsPage