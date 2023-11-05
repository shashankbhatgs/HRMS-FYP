import { useEffect, useState } from "react";

function DashBoard() {
    const [email, setEmail] = useState('');
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/faculty-login';
      };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:3000/get-email', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch email');
                }
            })
            .then(data => {
                setEmail(data.email.email);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, []);

    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <p>Email: {email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default DashBoard;
