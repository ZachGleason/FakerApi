const { faker } = require('@faker-js/faker');
const express = require('express')
const app = express()
const port = 3000
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const  createUser = () =>  {
    const users = [
        { firstName: faker.name.firstName(),  lastName: faker.name.lastName() , phoneNumber: faker.phone.phoneNumber(), email: faker.internet.email(), password: faker.random.words(1), _id: faker.datatype.number() }
    ];
    return users;
}

function createCompany()  {
    const companies = [
        { name: faker.name.jobTitle() ,  street: faker.address.streetAddress(), city: faker.address.city(), state:  faker.address.state(), zipCode: faker.address.zipCode() , country: faker.address.country(), _id: faker.datatype.number()}
    ];
    return companies;
}

const newUser = createUser();
const newCompany = createCompany();
const Combined = JSON.stringify(createUser())+ JSON.stringify(createCompany());


// returning a new user 
app.get('/api/users/new', (req, res) => {
    res.json( newUser )
})


// returning a new company
app.get('/api/companies/new', (req, res) => {
    res.json( newCompany )
})

// returning both a new user & company
app.get('/api/user/company', (req, res) => {
    res.json( Combined ) 
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})