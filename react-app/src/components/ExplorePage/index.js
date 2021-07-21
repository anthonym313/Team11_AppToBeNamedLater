import React from 'react';
import './ExplorePage.css'

export default function ExplorePage(){
    // const images = useSelector((state)=> Object.values(state.feedPosts))

    const imagesArr =['./grammygramlogo.png','./grammygramlogo.png','./grammygramlogo.png','./grammygramlogo.png','./grammygramlogo.png','./grammygramlogo.png','./grammygramlogo.png','./grammygramlogo.png']
    return(
        <div id='explore'>
            {imagesArr?.map((image)=>{
                return(
                    <div className='explore-image'>
                        <img src={image}></img>
                        <div className='explore-image-overlay'></div>
                    </div>
                )
            })}

        </div>
    )
}
