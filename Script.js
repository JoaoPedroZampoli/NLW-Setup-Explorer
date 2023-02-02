const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "4000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function add(){
    const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
    const dayExists = nlwSetup.dayExists(today)
    if(dayExists){
        toastr.warning("Dia já incluso")
        return
    }
    nlwSetup.addDay(today)
    toastr.success("Dia adicionado com sucesso")
}

function save() {
    localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//     run: ["01-01", "01-02", "01-03", "01-06"],
//     water: ["01-01","01-02","01-03", "01-04"],
//     exercise: ["01-05", "01-07"],
//     sleep: ["01-08"],
//     code: [],
//     study: [],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()