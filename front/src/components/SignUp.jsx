import React, { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('123456');
    const [passwordBis, setPasswordBis] = useState('987654');
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');

    const object =
    {
        email: email,
        password: password,
        passwordBis: passwordBis,
        firstname: firstName,
        lastname: lastName,
    }
    const information = JSON.stringify(object);

    const handleSubmit = (e) => {
        e.preventDefault()
        object.email = email
        object.password = password
        object.passwordBis = passwordBis
        object.firstname = firstName
        object.lastname = lastName
        console.log("A form was submit : " + JSON.stringify(object))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{information}</h1>
            <input
                type="email"
                name="email"
                placeholder="mail@example.com"
                onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            <input
                type="password"
                name="passwordbis"
                placeholder="Re-enter password"
                onChange={(e) => setPasswordBis(e.target.value)} />
            <input
                type="firstname"
                name="firstname"
                placeholder="Firstname"
                onChange={(e) => setFirstName(e.target.value)} />
            <input
                type="lastname"
                name="lastname"
                placeholder="Lastname"
                onChange={(e) => setLastName(e.target.value)} />
            <input
                type="submit"
                value="Soumettre" />
        </form>
    )
}