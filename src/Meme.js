import React from "react";
import memeData from "./memeData";

export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
   
    const [allMemeImages, setAllMemeImages] = React.useState([])
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage(){
const memesArray = allMemeImages
const randomNumber = Math.floor(Math.random()*memesArray.length)
const url = memesArray[randomNumber].url
setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
}))

}
function handleChange(event){
    
    setMeme(prevMeme =>{
        const {name, value, type, checked} = event.target
        return {
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }
    })
console.log(meme)    
}
     
    return (
        <main>
            <div className="form">
                <input type="text" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                className="form--input"/>
                   
                <input type="text" 
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                onChange={handleChange}

                value={meme.bottomText}
                />
                <button
                onClick={getMemeImage}
                className="form--button">Get new meme image</button>
            </div>
            <br />
            <br/>
          <center>
          <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
              
              <div className="top"><h2 className="meme--text">{meme.topText}</h2></div>
                <div className="bottom"><h2 className="meme--text">{meme.bottomText}</h2></div>
              
            </div>
          </center>
        </main>
    )
}