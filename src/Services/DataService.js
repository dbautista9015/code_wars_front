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

//users
async function AddUser(newUser){
    let res= await fetch('https://mycodewars.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function DeleteUser(userName){
    let res= await fetch(`https://mycodewars.azurewebsites.net/User/DeleteUser/${userName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function EditCohortForUser(userName, cohortName){
    let res= await fetch(`https://mycodewars.azurewebsites.net/User/EditCohortForUser/${userName}/${cohortName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function ChangeAdminStatus(userName){
    let res= await fetch(`https://mycodewars.azurewebsites.net/User/AdminStatus/${userName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function GetUsersByCohort(cohortName){
    let res = await fetch(`https://mycodewars.azurewebsites.net/User/GetUsersByCohort/${cohortName}`);
    let data = await res.json();
    return data;
}

// async function GetUserByUsername(cohortName){
//     let res = await fetch(`https://mycodewars.azurewebsites.net/User/GetUserByUsername/${cohortName}`);
//     let data = await res.json();
//     return data;
// }

async function GetAllUsers(){
    let res = await fetch('https://mycodewars.azurewebsites.net/User/GetAllUsers');
    let data = await res.json();
    return data;
}

//cohorts
async function AddCohort(newCohort){
    let res= await fetch('https://mycodewars.azurewebsites.net/Cohort/AddCohort', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCohort)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function GetAllCohorts(){
    let res = await fetch('https://mycodewars.azurewebsites.net/Cohort/GetAllCohorts');
    let data = await res.json();
    return data;
}

async function GetCohortById(id){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Cohort/GetCohortById/${id}`);
    let data = await res.json();
    return data;
}

async function GetCohortByCohortName(cohortName){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Cohort/GetCohortByCohortName/${cohortName}`);
    let data = await res.json();
    return data;
}

async function GetArchivedCohorts(){
    let res = await fetch('https://mycodewars.azurewebsites.net/Cohort/GetArchivedCohorts');
    let data = await res.json();
    return data;
}

async function ArchiveByCohortName(cohortName){
    let res= await fetch(`https://mycodewars.azurewebsites.net/Cohort/ArchiveByCohortName/${cohortName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cohortName)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function DeleteByCohortName(cohortName){
    let res= await fetch(`https://mycodewars.azurewebsites.net/Cohort/DeleteByCohortName/${cohortName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function UpdateCohortLvlDifficulty(cohortName, lvlDifficulty){
    let res= await fetch(`https://mycodewars.azurewebsites.net/Cohort/UpdateCohortLvlDifficulty/${cohortName}/${lvlDifficulty}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function EditCohortName(oldCohortName, updatedCohortName){
    let res= await fetch(`https://mycodewars.azurewebsites.net/Cohort/EditCohortName/${oldCohortName}/${updatedCohortName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

//reservations
async function CreateReservation(newReservation){
    let res= await fetch('https://mycodewars.azurewebsites.net/Reserve/CreateReservation', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReservation)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function ChangeReservationCompletedStatus(id){
    let res= await fetch(`https://mycodewars.azurewebsites.net/Reserve/ChangeReservationCompletedStatus/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function ChangeReservationStatus(id){
    let res= await fetch(`https://mycodewars.azurewebsites.net/Reserve/RemoveReservation/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function GetAllReservations(){
    let res = await fetch('https://mycodewars.azurewebsites.net/Reserve/GetAllReservations');
    let data = await res.json();
    return data;
}

async function GetReservationById(id){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Reserve/GetReservationById/${id}`);
    let data = await res.json();
    return data;
}

async function GetReservationsByUsername(userName){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Reserve/GetReservationByUsername/${userName}`);
    let data = await res.json();
    return data;
}

async function GetAllCompletedKataReservations(){
    let res = await fetch('https://mycodewars.azurewebsites.net/Reserve/GetAllCompletedKataReservations');
    let data = await res.json();
    return data;
}

async function GetAllCompletedKatasByCohortId(id){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Reserve/GetAllCompletedKatasByCohortId/${id}`);
    let data = await res.json();
    return data;
}

async function GetReservedKatasByCohortId(id){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Reserve/GetReservedKatasByCohortId/${id}`);
    let data = await res.json();
    return data;
}

async function GetReservedKatasByKataLanguage(kataLanguage){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Reserve/GetReservedKatasByKataLanguage/${kataLanguage}`);
    let data = await res.json();
    return data;
}


//completed
async function AddCompletedKata(newCompletedKata){
    let res= await fetch('https://mycodewars.azurewebsites.net/Completed/AddCompletedKata', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCompletedKata)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function GetAllCompletedKatas(){
    let res = await fetch('https://mycodewars.azurewebsites.net/Completed/GetAllCompletedKatas');
    let data = await res.json();
    return data;
}

async function GetCompletedKatasByCohortId(id){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Completed/GetCompletedKatasByCohortId/${id}`);
    let data = await res.json();
    return data;
}

async function GetCompletedKatasByCodewarsName(codewarsName){
    let res = await fetch(`https://mycodewars.azurewebsites.net/Completed/"GetCompletedKatasByCodewarsName/${codewarsName}`);
    let data = await res.json();
    return data;
}

async function DoesUserExist(user){
    let res = await fetch(`https://www.codewars.com/api/v1/users/${user}`);
    let data = await res.json();
    return data;
}

// Dev.codewars apis
async function GetCodeChallenge(id) {
    let res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${id}`);
    let data = await res.json();

    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    
    return data;
}





export { UserLogin, GetUserByUsername, AddCohort, GetAllCohorts, GetCohortById, GetArchivedCohorts, ArchiveByCohortName, DeleteByCohortName, UpdateCohortLvlDifficulty, EditCohortName, AddCompletedKata, GetAllCompletedKatas, GetCompletedKatasByCohortId, GetCompletedKatasByCodewarsName, GetReservedKatasByKataLanguage, GetReservedKatasByCohortId, GetAllCompletedKatasByCohortId, GetAllCompletedKataReservations, GetReservationsByUsername, GetReservationById, GetAllReservations, ChangeReservationCompletedStatus,ChangeReservationStatus, CreateReservation, GetUsersByCohort, ChangeAdminStatus, EditCohortForUser, DeleteUser, AddUser, GetCodeChallenge, GetAllUsers, DoesUserExist, GetCohortByCohortName };
