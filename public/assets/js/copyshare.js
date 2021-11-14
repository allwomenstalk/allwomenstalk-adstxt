function parseText() {
    arr = document.querySelectorAll('.post div')
    console.log(arr)
    arr.forEach(el => {
        if (el.innerHTML.slice(0, 2) == "😍") {
            addon = `<div class="m-2 opacity-50">
        <button onclick="copyToClickBoard('${el.innerHTML.slice(2).replace('\'', '’')}',this)" class="copy border rounded-lg p-2 text-xs">Copy</button>`
            if (navigator.share) {
                addon += ` <button onclick="shareSheet('${el.innerHTML.slice(2)}')" class="share border rounded-lg p-2 text-xs">Share</button>`
            }
            addon += `</div>`
            el.innerHTML += addon
        }
    })
}

function shareSheet(text) {
    navigator.share({
        text: text
    })
}

function copyToClickBoard(text,el) {
    navigator.clipboard.writeText(text)
    el.innerHTML += " ✔"
    console.log(el.innerHTML)
}

setTimeout(function() {
    parseText()
}, 3000);
