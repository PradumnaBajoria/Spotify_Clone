import React, {useEffect, useState} from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {useDataLayerValue} from "./DataLayer"

function Footer({spotify}) {

    const [{token, item, playing}, dispatch] = useDataLayerValue()
    console.log("hi",item)

    useEffect(() => {
        spotify.getMyCurrentPlaybackState()
            .then((r) => {
                console.log(r)

                dispatch({
                    type: "SET_PLAYING",
                    playing: r.is_playing
                })

                dispatch({
                    type: "SET_ITEM",
                    item: r.item
                })
            })
    }, [spotify])

    const handlePlayPause = () => {
        if(playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false
            })
        }else{
            spotify.play()
            dispatch({
                type: "SET_PLAYING", 
                playing: true
            })
        }
    }

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };
    
      const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

    return (
        <div className="footer">
            <div className="footer_left">
                {item ? <img 
                        className="footer_albumLogo"
                        src={item?.album.image[0].url} 
                        alt={item?.name}
                    /> : 
                    <img 
                        className="footer_albumLogo"
                        src="https://cand.dk/wp-content/uploads/2019/10/spotify-for-os-x-el-capitan-spotify-icon.jpg"
                        alt=""
                    />
                }
                
                
                {item ? (

                    <div className="footer_songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.album.map((artist) => artist.name).join(", ")}</p>
                    </div>

                ) : (
                    <div className="footer_songInfo">
                        <h4>No Song is Playing</h4>
                        <p>.....</p>
                    </div>
                )}

            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon onClick={skipPrevious} className="footer_icon" />
                {playing ? 
                    <PauseCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer_icon" /> :
                    <PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer_icon" />
                }
                <SkipNextIcon onClick={skipNext} className="footer_icon" />
                <RepeatIcon className="footer_green" />
                
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
