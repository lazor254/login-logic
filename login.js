//

document.addEventListener('DOMContentLoaded', ()=>{

    const form = document.getElementById('form');

    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
    })

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const authMsg = document.getElementById('auth-msg');


        try{
            const response = await fetch('http://localhost')
        }
     })
    
})