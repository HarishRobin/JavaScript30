var input=document.querySelectorAll('input');
console.log(input);

function handleChange() {
    var suffix = this.dataset.measure || '';
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(inp => {
    inp.addEventListener("change",handleChange);
    inp.addEventListener("mousemove",handleChange);
});