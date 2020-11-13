import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as P from "../styles/ProfileStyles";
import { currentUser } from "../features/gameMetaDataSlice";
import Header from "./Header";
import {  userProfileData } from "../services/api_helper";

const Profile = () => {
    const [profileData, setProfileData] = useState([]);
    const [gameStats, setGameStats] = useState({});
    const activeUser = useSelector(currentUser)
    console.log(activeUser)
    console.log(profileData)
    

    const allUserProfileData = async (user) => {
        console.log(`we got here ${user}`)
        const profileDataAll = await userProfileData(user);
        setProfileData(profileDataAll);
        const newGameStats = calculateGameStats();
        setGameStats(newGameStats);
    }

    const calculateGameStats = () => {
        const gamesStarted = profileData.userProfile.gamesStarted;
        const gamesFinished = profileData.userProfile.gamesFinished;
        const gamesWon = profileData.userProfile.gamesWon;
        const points = profileData.userProfile.points;
        const plows = profileData.userProfile.plows;
        const combines = profileData.userProfile.combines;
        let completionPCT;
        let winPCT;
        let PPG;
        if(gamesFinished === 0 ) {
            completionPCT = 0;
            winPCT = 0;
            PPG = 0;
        } else {
            completionPCT = (parseFloat(gamesFinished) / parseFloat(gamesStarted)) * 100;
            winPCT = (parseFloat(gamesWon) / parseFloat(gamesFinished)) * 100;
            PPG = (parseFloat(points) / parseFloat(gamesFinished)) * 100;
        }

        let gameStats = {
            gamesStarted,
            gamesFinished,
            gamesWon,
            points,
            plows,
            combines,
            completionPCT,
            winPCT,
            PPG
        }

        return gameStats;
    }

    useEffect(()=> {
        console.log("In Here")
        allUserProfileData(activeUser);
        console.log("run")
    }, [activeUser])


    return (
        profileData.userProfile ? 
        <div>
            <Header/>
            <P.Div>
                <P.SubBox>
                    <P.BioBox>
                        <img src={profileData.userProfile && profileData.userProfile.profileImg} alt={profileData.username}/>
                        <h1> {profileData.name} </h1>
                        <p> {profileData.userProfile.bio} </p>
                    </P.BioBox>
                    <P.FriendBox>
                        <h2>No Friends Yet. Kepp Playing!</h2>
                    </P.FriendBox>
                </P.SubBox>
                <P.SubBox>
                    <h2> {profileData.name}'s Stat Sheet </h2>
                    <P.StatsBox>
                        <P.StatLine>
                            Games Started: {profileData.userProfile.gamesStarted}
                        </P.StatLine>
                        <P.StatLine>
                            Games Finished: {profileData.userProfile.gamesFinished}
                        </P.StatLine>
                        <P.StatLine>
                            Completion PCT: {profileData.user}
                        </P.StatLine>
                        <P.StatLine>
                            Games Won:
                        </P.StatLine>
                        <P.StatLine>
                            Win PCT:
                        </P.StatLine>
                        <P.StatLine>
                            Points: 
                        </P.StatLine>
                        <P.StatLine>
                            Points Per Game:
                        </P.StatLine>
                        <P.StatLine>
                            Plows:
                        </P.StatLine>
                        <P.StatLine>
                            Combines:
                        </P.StatLine>
                            
                            
                            

                    </P.StatsBox>
                </P.SubBox>
            </P.Div>
        </div> 
        :
        <div></div>
    )
}

export default Profile;