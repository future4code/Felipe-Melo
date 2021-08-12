import React, { useEffect, useState } from "react"
import {HomeContainer, Profile, ProfileImage} from "./styled"
/* import styled from "./styled" */
import axios from "axios"

  const HomePage =()=>{
    const [profile, setProfile] = useState({})
    

    /*     useEffect(()=>{
            getProfile()
        },[])

    const getProfile = ()=>{
        
        
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-vieira-lovelace/matches") 
        axios.get(url)
        .then((res)=>{
            setProfile(res.data.profile)
            
        })
        .catch((error)=>{
            console.log(error.response)
        })

    }

    const choosePerson =()=>{

    }
 */

        return(
        <HomeContainer>
            <Profile>
              <ProfileImage src={profile.photo}/>
                <h2>{profile.name},{profile.age}</h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={choosePerson}>X</button>
                    <button onClick={choosePerson}>emoji</button>
                </div>
                
        
        
        
        
            </Profile>
        </HomeContainer>
        )
}

export default HomePage