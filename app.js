function createContainer(){
    // create main container
    const body = document.querySelector('body')
    let contentContainer = document.createElement('div')
    // create text area
    let textField = document.createElement('textarea')
    // create language radio
    let languageRadioE = document.createElement('input')
    let labelRadioE = document.createElement('span')
    let languageRadioR = document.createElement('input')
    let labelRadioR = document.createElement('span')
    // create keyboard container
    let keyboardContainer = document.createElement('div')

    const arrowTop = '&#8593;',
    arrowLeft = '&#8592;',
    arrowRight = '&#8594;',
    arrowDown = '&#8595;';
    // add container
    contentContainer.classList.add('content-container')
    body.appendChild(contentContainer)

    // add text field
    textField.classList.add('text-field')
    textField.setAttribute('placeholder', 'APP Developed on windows Please input your message')
    contentContainer.append(textField)

    // add language radio eng
    languageRadioE.classList.add('language-radio')
    languageRadioE.setAttribute('type', 'radio')
    languageRadioE.setAttribute('id', 'eng-radio')
    //!!!!! add tets for checked locarstorage
    languageRadioE.setAttribute('checked', 'checked')
    languageRadioE.setAttribute('name', 'groupLangRadioButton')
    labelRadioE.classList.add('label-radio')
    labelRadioE.innerHTML = 'english';
    contentContainer.appendChild(languageRadioE)
    contentContainer.append(labelRadioE)
    // ru
    languageRadioR.classList.add('language-radio')
    languageRadioR.setAttribute('type', 'radio')
    languageRadioR.setAttribute('id', 'rus-radio')
    languageRadioR.setAttribute('name', 'groupLangRadioButton')
    labelRadioR.classList.add('label-radio')
    labelRadioR.innerHTML = 'russia';
    contentContainer.appendChild(languageRadioR)
    contentContainer.append(labelRadioR)

    // add keyboard container
    keyboardContainer.classList.add('keyboard-container')
    contentContainer.appendChild(keyboardContainer)

    let keyboardKeys = [[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61], [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93], [ 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92],[ 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]];
        
       for(i = 0; i < keyboardKeys.length; i++) {
        let row = '';

            for(j = 0; j < keyboardKeys[i].length; j++) {
              
                if(keyboardKeys[i][j] == 61) {
                    row+=`<div class="key-box">${String.fromCharCode(keyboardKeys[i][j])}</div>`
                    row+= `<div class="key-box backspace" id="backspace">Backspace</div>`
                    break
                }
                if(keyboardKeys[i][j] == 113) {
                    row+= `<div class="key-box tab" id="tab">Tab</div>`
                }
                if(keyboardKeys[i][j] == 93) {
                    row+=`<div class="key-box">${String.fromCharCode(keyboardKeys[i][j])}</div>`
                    row+= `<div class="key-box enter" id="enter">Enter</div>`
                    break
                }
                if(keyboardKeys[i][j] == 97) {
                    row+= `<div class="key-box caps-lock" id="caps-lock">Caps Lock</div>`
                }
                if(keyboardKeys[i][j] == 122) {
                    row+= `<div class="key-box shift" id="shift">Shift</div>`
                }

                if(keyboardKeys[i][j] == 47) {
                    row+=`<div class="key-box">${String.fromCharCode(keyboardKeys[i][j])}</div>`
                    row+= `<div class="key-box arrow arrow-unic-width" id="arrowUp">${arrowTop}</div>`
                    row+= `<div class="key-box shift-r" id="shift">Shift</div>`
                    break
                }
                    row+=`<div class="key-box">${String.fromCharCode(keyboardKeys[i][j])}</div>`
            }
            keyboardContainer.innerHTML +=`<div class="row">${row}</div>`
            let keysArr = document.querySelectorAll('.key-box');
            keysArr.forEach(item => {
                if (item.textContent === '\\') {
                    item.classList.add('unic-Slash-Width')
                }
            })
           
    }
    


    keyboardContainer.innerHTML +=
    `<div class="row">
    <div class="key-box func-key unicWidth ctrl">Ctrl</div>
    <div class="key-box func-key unicWidth win" id="win">Win</div>
    <div class="key-box func-key unicWidth alt">Alt</div>
    <div class="key-box func-key  whitespace" id="whitespace">whitespace</div>
    <div class="key-box func-key unicWidth alt">Alt</div>
    <div class="key-box func-key ctrl">Ctrl</div>
    <div class="key-box func-key arrow arrow-unic-width" id="arrowLeft">${arrowLeft}</div>
    <div class="key-box func-key arrow arrow-unic-width" id="arrowDown">${arrowDown}</div>
    <div class="key-box func-key arrow arrow-unic-width" id="arrowRight">${arrowRight}</div>
    </row>`


    //   animation if  click-mouse
    let keyList = document.querySelectorAll('.key-box');
    keyList.forEach(item => {
        item.addEventListener('click', (e)=>{
            if (e.key == 'CapsLock'){
                console.log('class')
                document.querySelector('#caps-lock').classList.toggle('action-push-the-button')
            }
            item.classList.add('action-key')
            setTimeout(function(){item.classList.remove('action-key')},200)
            
        })
    })
        //   animation if keyboard push
    document.addEventListener('keyup',function(e){
       let theKey = e.key;
       keyList = Array.from(keyList);
        // console.log(keyList)
        function toggleClass(key){
            key.classList.add('action-push-the-button')
            setTimeout(()=>{key.classList.remove('action-push-the-button')},200)
        }

        function keyTest(test){

        for(i=0; i<keyList.length;i++){
            if(keyList[i].innerHTML == test){

                toggleClass(keyList[i])
                // console.log(keyList[i])
            }
        }
        }
        keyTest(theKey)
        
        
    })
}
createContainer()

function detectInputText(){
    const body = document.querySelector('body')
    const inputField = document.querySelector('textarea');
    let currentSymbolsList = []
    let flagCaps = 1
    body.onkeydown = function(event){
        // console.log(event)
     if(event.code != 'ShiftLeft' && event.code != 'ShiftRight' && event.code != 'AltLeft' && event.code != 'AltRight' && event.code != 'ArrowUp' && event.code != 'ArrowLeft' && event.code != 'ArrowRight' && event.code != 'ArrowDown' && event.key != 'Backspace' && event.code != 'Space' && event.key != 'Enter' && event.key != 'CapsLock' && event.key != 'Control' && event.key != 'Tab'){
        if(flagCaps % 2 == 0){
            currentSymbolsList.push((event.key).toUpperCase())
        inputField.innerText+= `${currentSymbolsList.join('')}`;
        }else{
            currentSymbolsList.push(event.key)
        inputField.innerText+= `${currentSymbolsList.join('')}`;
        }
     }else if (event.key == 'Backspace'){
        currentSymbolsList.pop(currentSymbolsList[currentSymbolsList.length])
        inputField.innerText+= `${currentSymbolsList.join('')}`;
     }else if (event.key == 'Enter'){
         console.log(event.key)
        currentSymbolsList.push('+')
        inputField.innerText+= `${currentSymbolsList.join('')}`;
     }else if (event.key == 'CapsLock'){
        document.querySelector('#caps-lock').classList.toggle('action-push-the-button')
        ++flagCaps;
     }else if (event.key == 'Control'){
        document.querySelectorAll('.ctrl').forEach(item =>{
            item.classList.add('action-push-the-button')
            setTimeout(function(){item.classList.remove('action-push-the-button')},200)
        })
     }else if (event.key == 'Tab'){
        document.querySelector('#tab').addEventListener('keypress', function(e){
            e.preventDefault()
        })
        console.log('goood')
     }else if(event.code == 'Space'){
        currentSymbolsList.push(' ')
        inputField.innerText+= `${currentSymbolsList.join('')}`;
        document.querySelector('#whitespace').classList.add("action-push-the-button")
        setTimeout(function(){document.querySelector('#whitespace').classList.remove('action-push-the-button')},200)
     }else if (event.key == 'Meta'){
        history.pushState({questionID: '555'}, null, null);
         event.preventDefault()
         console.log('a')
        document.querySelector('#win').classList.toggle('action-push-the-button')
     }else if (event.code == 'ArrowUp'){
        document.querySelector('#arrowUp').classList.add('action-push-the-button')
        setTimeout(function(){document.querySelector('#arrowUp').classList.remove('action-push-the-button')},200)
     }else if (event.code == 'ArrowDown'){
        document.querySelector('#arrowDown').classList.add('action-push-the-button')
        setTimeout(function(){document.querySelector('#arrowDown').classList.remove('action-push-the-button')},200)
     }else if (event.code == 'ArrowLeft'){
        document.querySelector('#arrowLeft').classList.add('action-push-the-button')
        setTimeout(function(){document.querySelector('#arrowLeft').classList.remove('action-push-the-button')},200)
     }else if (event.code == 'ArrowRight'){
        document.querySelector('#arrowRight').classList.add('action-push-the-button')
        setTimeout(function(){document.querySelector('#arrowRight').classList.remove('action-push-the-button')},200)
     }
    }

    function detectClickKeyInput(){
        let keys = document.querySelectorAll('.key-box')

        keys.forEach(item =>{
            item.addEventListener('mousedown', (event)=> {
                // console.log(event.target.innerText)
             if(event.target.innerText != 'whitespace' && event.target.innerText != 'Ctrl' && event.target.innerText != 'Alt' && event.target.innerText != 'Win' && event.target.innerText != 'Shift' && event.target.innerText != 'Caps Lock' && event.target.innerText != 'Tab' && event.target.innerText != 'Backspace' && event.target.innerText != 'Enter'  && event.target.innerText != '↑'  && event.target.innerText != '←'  && event.target.innerText != '↓'  && event.target.innerText != '→'  ){
                currentSymbolsList.push(event.target.innerText)
                inputField.innerText+= `${currentSymbolsList.join('')}`;
             }else if(event.target.innerText == 'whitespace' ) {
                currentSymbolsList.push(' ')
                inputField.innerText+= `${currentSymbolsList.join('')}`;
             }else if(event.target.innerText == 'Backspace' ) {
                currentSymbolsList.pop(currentSymbolsList[currentSymbolsList.length])
                inputField.innerText+= `${currentSymbolsList.join('')}`;
             }
            })
        })
    }
    detectClickKeyInput()
}
detectInputText()

