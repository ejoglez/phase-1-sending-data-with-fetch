// POST 
function submitData(){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            name: '',
            email: '',
        })     
    })
}