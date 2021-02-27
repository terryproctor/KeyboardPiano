document.addEventListener('keydown', e => {
    const keyPressed = e.key.toUpperCase();
    const validKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
    //audio function for valid keys
    if (validKeys.includes(keyPressed)) {
        console.log(`'${keyPressed}'`);
        
        let audioObject = document.createElement("audio");
        audioObject.src = `audio/${keyPressed}.mp3`;
        audioObject.play();
    }
    //error alert
    // else if (!validKeys.includes(keyPressed)) {
    //     alert('Please press a valid key!')
    }
    );

let piano = document.getElementsByClassName('container')[0];
piano.addEventListener('click', e => {
    let target = e.target.id
    let audioClicked = document.createElement("audio");
    audioClicked.src = `audio/${target}.mp3`;
    audioClicked.play();
}
);