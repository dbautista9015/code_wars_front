// Create all functions to run endpoints from backend here

async function UserLogin(userData){
   
    let res= await fetch('https://mycodewars.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;

}

async function GetUserByUsername(username){
    let res = await fetch('https://mycodewars.azurewebsites.net/User/GetUserByUsername');
    let data = await res.json();
    return data;
}

export { UserLogin, GetUserByUsername };