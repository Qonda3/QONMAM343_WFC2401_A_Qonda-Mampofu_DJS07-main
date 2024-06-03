function Header() {
  return (
    <header className="header">
      {/* Display the troll face image */}
      <img 
        src="./images/troll-face.png" 
        className="header--image"
      />
      {/* Display the title */}
      <h2 className="header--title">Meme Generator</h2>
      {/* Display the project information */}
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;