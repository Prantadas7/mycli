import figlet from "figlet";
import inquirer from "inquirer";
import gradient from "gradient-string";

// const figlet = require('figlet');
// const inquirer = require('inquirer');
// const gradient = require('gradient-string');

let username;

const greet = async () => {
    try {
        figlet("My CLI", function (err, data) {
            console.log(data);
        });

        const { name } = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Enter Your Name'
        });

        username = name;

        const msg = `Hello ${username}!`;

        figlet(msg, (err, data) => {
            if (!err) {
                console.log(gradient.pastel.multiline(data));
            }
        })
    }
    catch (e) { console.log(e) }
};


greet();