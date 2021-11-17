document.querySelectorAll('.post').forEach(el=>{
    console.log(Number.isFinite(parseInt(el.id)))
    if (el.id && Number.isFinite(parseInt(el.id))) {
        data = ""
        if (el.querySelector('h2')) title = el.querySelector('h2').textContent.trim()
        if (el.querySelector('p')) description = el.querySelector('p').textContent.trim()


       if (el.querySelector('.feedback')) {
           a =  document.createElement("a");
           a.innerHTML= `
<a class="p-2 text-xs" href="https://allwomenstalk.com/contribute/?title=${title}&description=${description}">Edit</a>`
           el.querySelector('.feedback').before(a)
       }

    }
})   
