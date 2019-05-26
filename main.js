'use strict;'

const assert = require('assert');

const arrOfPeople = [{
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
},
{
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
},
{
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
},
{
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
},
{
    id: 5,
    name: "Nurzat Nijat (C)",
    age: 99,
    skillSet: "Javascript",
    placeBorn: "Austin, Texas"
},
{
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
},
{
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
},
{
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
},]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
    constructor(id, name, age, skillSet, placeBorn) {

        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.team = null;
    }
}

class BlueTeam extends player {
    constructor(name, skillSet, id, mascot, color) {
        super(name, skillSet, id);
        this.mascot = mascot;
        this.color = color;

    }
}

class RedTeam extends player {
    constructor(name, skillSet, id, mascot, color) {
        super(name, skillSet, id);
        this.mascot = mascot;
        this.color = color;

    }
}

const blueTeamSignUpList = (id) => {

    const blueTeamList = document.getElementById('blue');
    const blueLi = document.createElement('li');
    const newBlueTeammate = arrOfPeople.find(player => player.id === id);

    const newBlueTeam = new BlueTeam(newBlueTeammate.id, newBlueTeammate.name, newBlueTeammate.skillSet, 'balls', 'blue');
    blueTeam.push(newBlueTeam);

    blueLi.appendChild(document.createTextNode(newBlueTeam.name));
    blueTeamList.append(blueLi);

    removeMethod("blue-player");

}

const redTeamSignUpList = (id) => {

    const redTeamList = document.getElementById('red');
    const redLi = document.createElement('li');
    const newRedTeammate = arrOfPeople.find(player => player.id === id);

    const newRedTeam = new RedTeam(newRedTeammate.id, newRedTeammate.name, newRedTeammate.skillSet, 'balls', 'blue');
    redTeam.push(newRedTeam);

    redLi.appendChild(document.createTextNode(newRedTeam.name));
    redTeamList.append(redLi);

    removeMethod("blue-player");
}

const makePlayer = (id) => {

    const playerList = document.getElementById('players');
    const availableList = arrOfPeople.find(player => player.id === id);

    // Create new players using 'Player' class
    const newPlayer = new player(availableList.id, availableList.name, availableList.skillSet);
    listOfPlayers.push(newPlayer);

    //console.log('createdPlayer', createdPlayer)
    const li = document.createElement('li');
    li.setAttribute("class", "blue-player red-player");

    // Blue Team button
    const blueTeamButton = document.createElement('button');
    blueTeamButton.setAttribute("style", "background-color: #6495ED");
    blueTeamButton.setAttribute("id", "blue-btn");
    blueTeamButton.innerHTML = 'Make Blue Teammate';

    // Red Team button
    const redTeamButton = document.createElement('button');
    redTeamButton.setAttribute("style", "background-color: #DC143C");
    redTeamButton.setAttribute("id", "red-btn");
    redTeamButton.innerHTML = 'Make Red Teammate';

    // Call EventListener
    blueTeamButton.addEventListener('click', (element) => blueTeamSignUpList(availableList.id));
    redTeamButton.addEventListener('click', (element) => redTeamSignUpList(availableList.id));

    // Append elements
    li.appendChild(blueTeamButton);
    li.appendChild(document.createTextNode(" <--  Player: " + availableList.name + " --> "));
    li.appendChild(redTeamButton);
    playerList.append(li);

    // Call helper mothed to remove the player from people list
    removeMethod("choices-list");


}

const listPeopleChoices = () => {

    // Disable the 'List People'
    document.getElementById('people-btn').disabled = true;

    // Create List of People
    const listElement = document.getElementById('people');
    arrOfPeople.map(person => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.setAttribute("class", "choices-list");
        button.innerHTML = "Make Player";
        button.addEventListener('click', function () { makePlayer(person.id) });
        li.appendChild(button);
        li.appendChild(document.createTextNode(" Player: " + person.name + " - " + " Speciality: " + person.skillSet));
        listElement.append(li);
    })
}

//Hellper method to remove selected person by class name
function removeMethod(element) {
    var items = document.getElementsByClassName(element);
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () { this.parentNode.removeChild(this); }
    }
}

if (typeof describe === 'function') {

    describe('DodgeBall Unite Test', function () {

        it('1. should have a id, a name, a Skill and player upon instantiation', function () {
            let person = new player('5', 'Nurzat Nijat (C)', '99', 'Javascript', 'Austin, Texas');
            assert.equal(person.id, '5');
            assert.equal(person.name, 'Nurzat Nijat (C)');
        });

        it('2. can make player', function () {
            const personObj = [{
                id: 5,
                name: "Nurzat Nijat (C)",
                age: 99,
                skillSet: "Javascript",
                placeBorn: "Austin, Texas"
            }]
            const getObj = personObj.find(player => player.id === 5);
            assert.equal(getObj.name, 'Nurzat Nijat (C)');
        });

        it('3. can list player', function () {
            const personObj = [
                {
                    id: 1,
                    name: "Charles Young",
                    age: 55,
                    skillSet: "welding",
                    placeBorn: "Omaha, Nebraska"
                }, {
                    id: 5,
                    name: "Nurzat Nijat (C)",
                    age: 99,
                    skillSet: "Javascript",
                    placeBorn: "Austin, Texas"
                }]
            const mapResult = personObj.map(person => {
                return person.id
            })
            assert.deepEqual(mapResult, [1, 5]);
        });

    });
}