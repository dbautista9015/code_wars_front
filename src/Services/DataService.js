// Create all functions to run endpoints from backend here

async function UserLogin(userData){
   
    let res= await fetch('https://mycodewars.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    let data = await res.json();
   return data;

}

async function GetUserByUsername(username){
    let res = await fetch('https://mycodewars.azurewebsites.net/User/GetUserByUsername/' + (username));
    let data = await res.json();
    return data;
}

export { UserLogin, GetUserByUsername };