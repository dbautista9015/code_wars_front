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






export { UserLogin, GetUserByUsername, AddCohort, GetAllCohorts, GetCohortById, GetArchivedCohorts, ArchiveByCohortName, DeleteByCohortName, UpdateCohortLvlDifficulty, EditCohortName, AddCompletedKata, GetAllCompletedKatas, GetCompletedKatasByCohortId, GetCompletedKatasByCodewarsName };