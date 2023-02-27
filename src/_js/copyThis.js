function copyThis() {
    var copyText = document.getElementById("assignments")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
}

function copyTemplate() {
    let copyTemplate = document.getElementById("copyTemplate")
    copyText.select()
    copyText.setSelectionRange(0, 99999)    
    navigator.clipboard.writeText(copyTemplate.value)
}

function copyIt(elem) {
    let copyTemplate = document.getElementById(elem)
    copyTemplate.select()
    copyTemplate.setSelectionRange(0, 99999)    
    navigator.clipboard.writeText(copyTemplate.value)
}