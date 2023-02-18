function copyThis() {
    var copyText = document.getElementById("assignments")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
}