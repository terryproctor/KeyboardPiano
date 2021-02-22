document.addEventListener('keydown', e => {
    const keyPressed = e.key.toUpperCase();
    const validKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J']
    if (validKeys.includes(keyPressed)) {
        console.log(`'${keyPressed}'`);
        // audioObject = document.getElementById(keyPressed);
        // audioObject.play();

        let audioObject = document.createElement("audio");
        audioObject.src = `audio/${keyPressed}.mp3`;
        audioObject.play();
    }
    else if (!validKeys.includes(keyPressed)) {
        alert('Please press a valid key!')
    }
    })