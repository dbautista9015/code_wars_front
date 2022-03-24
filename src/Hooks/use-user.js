import { useState, useEffect } from 'react';

export default function UseUser() {
    const [codewarsName, setCodewarsName] = useState("");
    const [cohortName, setCohortName] = useState("");
    const [userId, setUserId] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [token, setToken] = useState("");
    // setToken(localStorage.getItem('Token'));

    useEffect(() => {
        
        if (token == null) {
            setToken(localStorage.getItem('Token'));
        }
    }, []);

    return { codewarsName, setCodewarsName, cohortName, setCohortName, userId, setUserId, isAdmin, setIsAdmin, isDeleted, setIsDeleted, token, setToken };
}
