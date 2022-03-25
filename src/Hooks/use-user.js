import { useState, useEffect } from 'react';

export default function UseUser() {
    const [codewarsName, setCodewarsName] = useState("");
    const [cohortName, setCohortName] = useState("");
    const [userId, setUserId] = useState("");
    const [reservedKatas, setReservedKatas] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [token, setToken] = useState("");
    const [storedCodewarsName, SetStoredCodwarsName]=useState("");
    const [numberOfReservations, setNumberOfReservations] = useState([]);
    // setToken(localStorage.getItem('Token'));


        
        //    let storageToken= setToken(localStorage.getItem('Token'))
        //    setToken(storageToken);


    return { codewarsName, setCodewarsName, cohortName, storedCodewarsName, SetStoredCodwarsName, setCohortName, userId, setUserId, isAdmin, setIsAdmin, isDeleted, setIsDeleted, token, setToken, reservedKatas, setReservedKatas, numberOfReservations, setNumberOfReservations };
}