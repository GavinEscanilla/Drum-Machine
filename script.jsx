

function App() {
    const beat = {
        Q:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
        W:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
        E:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
        A:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
        S:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
        D:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
        Z:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
        X:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
        C:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
    }
    const play = key => {
        const button = document.getElementById(key);
        const audio = button.querySelector("audio");
        audio.currentTime = 0;
        audio.play();
    };
   const handleKeydown = e => {
       const key = e.key.toUpperCase();
       if(beat.hasOwnProperty(key)){
           play(key);
       }
   };
   const handleClick = key => {
       play(key);
   }
    return (
    <div id="drum-machine" onKeyDown={handleKeydown} tableIndex="0">
        <div id="display">
          {Object.keys(beat).map(key => (
            <button className="drum-pad" id={key} onClick={() => handleClick(key)} key={key}>
                 {key}
            <audio className="clip" id={key} src={beat[key]} preload="auto"></audio>
            </button>
          ))}
        </div>
        <
        </div>

    );
}


ReactDOM.render(<App/>,document.getElementById("root"));