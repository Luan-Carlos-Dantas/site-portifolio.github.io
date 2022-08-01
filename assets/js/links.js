let btn = document.querySelectorAll("#myButton")
btn.forEach((el) => {
    let site = el.value
    el.addEventListener("click", ev =>{
        location.href = site
    })
})