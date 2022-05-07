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

    // add container
    contentContainer.classList.add('content-container')
    body.appendChild(contentContainer)

    // add text field
    textField.classList.add('text-field')
    textField.setAttribute('placeholder', 'Please input your message')
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

}
createContainer()