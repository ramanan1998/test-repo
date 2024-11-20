const fs = require('fs');

// Load existing and new users
const atheraairUsers = JSON.parse(fs.readFileSync('atheraair.json')).users;
const evprodUsers = JSON.parse(fs.readFileSync('ev_prod.json')).users;

// Create a Set of existing user emails
const existingEmails = new Set(atheraairUsers.map(user => user.email));

// Filter new users to exclude duplicates
const filteredNewUsers = evprodUsers.filter(user => !existingEmails.has(user.email));

// Combine existing and filtered new users
const combinedUsers = {
  users: [...filteredNewUsers],
};

console.log(combinedUsers)