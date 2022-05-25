const result = document.querySelector('.result')

const fetchPeople = async () => {
    try {
        const { data } = await axios.get('/api/people')
        const people = data.data.map((person) => {
            return `<h5> ${person.name} </h5>`
        })
        result.innerHTML = people.join('')
    } catch (error) {
        console.log(error);
        result.innerHTML = `<div class="form-alert">!!!! Can't Fetch Data</div> cuz ${error}`
    }
}

fetchPeople()

const btn = document.querySelector('#btn-submit')
const input = document.querySelector('#name')
const formAlert = document.querySelector('.form-alert')

btn.addEventListener('click', async (e) => {
    e.preventDefault()
    formAlert.textContent = ''
    var namevalue = input.value
    try {
        const { data } = await axios.post('/api/people', {name: namevalue})
        let h5 = document.createElement('h5')
        h5.textContent = data.person
        result.appendChild(h5)
    } catch (error) {
        formAlert.textContent = error.response.data.msg
    }
    input.value = ''
})
