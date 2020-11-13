import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as P from "../styles/ProfileStyles";
import { currentUser } from "../features/gameMetaDataSlice";
import Header from "./Header";
import EditProfile from "./EditProfile";
import { userProfileData } from "../services/api_helper";


const Profile = () => {
    const [profileData, setProfileData] = useState([]);
    const [gameStats, setGameStats] = useState({});
    const activeUser = useSelector(currentUser)
    console.log(activeUser)
    console.log(profileData)
    

    const allUserProfileData = async (user) => {
        const profileDataAll = await userProfileData(user);
        setProfileData(profileDataAll);
        let newGameStats;
        {profileData.userProfile ? newGameStats = calculateGameStats() : newGameStats = ""} ;
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
        let ppg;
        if(gamesFinished === 0 ) {
            completionPCT = 0;
            winPCT = 0;
            ppg = 0;
        } else {
            completionPCT = (parseFloat(gamesFinished) / parseFloat(gamesStarted)) * 100;
            winPCT = (parseFloat(gamesWon) / parseFloat(gamesFinished)) * 100;
            ppg = (parseFloat(points) / parseFloat(gamesFinished)) * 100;
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
            ppg
        }

        return gameStats;
    }

    useEffect(()=> {
        allUserProfileData(activeUser);
    }, [activeUser])


    return (
        profileData.userProfile ? 
        <div>
            <Route exact path="/profile" render={() => (
                <div>
                <Header/>
                    <P.Div>
                        <P.SubBox>
                            <P.BioBox>
                                <img src={profileData.userProfile && profileData.userProfile.profileImg} alt={profileData.username}/>
                                <h1> {profileData.name} </h1>
                                <p> {profileData.userProfile.bio} </p>
                            </P.BioBox>
                            <Link to={"profile/edit"}> Edit Profile </Link>
                            <P.FriendBox>
                                <h2>No Friends Yet. Kepp Playing!</h2>
                            </P.FriendBox>
                        </P.SubBox>
                        <P.SubBox>
                            <h2> {profileData.name}'s Stat Sheet </h2>
                            <P.StatsBox>
                                <P.StatLine>
                                    Games Started: {gameStats.gamesStarted}
                                </P.StatLine>
                                <P.StatLine>
                                    Games Finished: {gameStats.gamesFinished}
                                </P.StatLine>
                                <P.StatLine>
                                    Completion PCT: {gameStats.completionPCT}
                                </P.StatLine>
                                <P.StatLine>
                                    Games Won: {gameStats.gamesWon}
                                </P.StatLine>
                                <P.StatLine>
                                    Win PCT: {gameStats.winPCT}
                                </P.StatLine>
                                <P.StatLine>
                                    Points: {gameStats.points}
                                </P.StatLine>
                                <P.StatLine>
                                    Points Per Game: {gameStats.ppg}
                                </P.StatLine>
                                <P.StatLine>
                                    Plows: {gameStats.plows}
                                </P.StatLine>
                                <P.StatLine>
                                    Combines: {gameStats.combines}
                                </P.StatLine>
                            </P.StatsBox>
                        </P.SubBox>
                        
                    </P.Div>
                </div>
                
            )} />
            <Route path="/profile/edit" component={EditProfile}/>
        </div> 
        :
        <div></div>
    )
}

export default Profile;