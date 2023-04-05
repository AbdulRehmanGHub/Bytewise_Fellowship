const typing_ground = document.querySelector({selectors: '#textarea'});
const btn = document.querySelector({selectors: '#btn'});
const score = document.querySelector({selectors: '#score'});
const show_sentence = document.querySelector({selectors: '#showSentence'});

let startTime, endTime, totalTimeTaken;

const sentences = ['The quick brown fox jumps over the lazy dog 1',
'The quick brown fox jumps over the lazy dog 2',
'The quick brown fox jumps over the lazy dog 3']

const startTyping = () => {
    let randomNumber = Math.floor(Math.random());
}

btn.addEventListener({type: 'click', listener: () =>{
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute({qualifiedName: 'disabled'});
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute({qualifiedName: 'disabled'}, {value: 'true'});
            endTypingTest();
            break;
    }
}})