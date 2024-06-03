
import React from "react"

// The Meme component
export default function Meme() {
    // State for the meme data
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    // State for storing all available memes
    const [allMemes, setAllMemes] = React.useState([])
    
    // Fetch memes from API on component mount
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    // Function to get a random meme image from the API
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    // Function to handle input changes for top and bottom text
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    // Render the Meme component
    return (
        <main>
            <div className="form">
                {/* Input for top text */}
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                {/* Input for bottom text */}
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                {/* Button to get a new meme image */}
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                {/* Display the meme image */}
                <img src={meme.randomImage} className="meme--image" />
                {/* Display the top text */}
                <h2 className="meme--text top">{meme.topText}</h2>
                {/* Display the bottom text */}
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}