import React, { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState('test@test.com');

    return (
        <div>
            <h1>{email}</h1>
            <input
                type="email"
                name="email"
                placeholder="mail@example.com"
                onChange={(e) => setEmail(e.target.value)} />
        </div>
    )
}