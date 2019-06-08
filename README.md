# Dodge-Ball

### Instructions
- Once you understand the challenge, whiteboard the logic.
- Create a list of steps your app need to do. (Code Plan)
- Translate to psuedo code.
- Translate to javascript on paper
- Make a repo, clone, open and copy/paste the starter code below into two new files: index.html and main.js
- Start by working through the existing code to understand it and write comments explaining what each line does.
- Put your Code Plan in the README.md file or your repo
- Work through the follow challenges:
- Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, - hasPaid, isHealthy, yearsExperience
- Push these new dodge ball Player objects into a new array and then display them in the DOM as available - players to pick.
- Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team - and now has mascot and teamColor
- Use the this keyword to assign each player to a team with an onclick. Either Blue Team or Red Team.
- Display the two teams in a new list in the DOM with appropriate titles.
- Create 3 tests for your application.

## Approch 
```
1. List available people
2. List available people to player list and create two button for two different team
3. From Player list, list player to associated team after click the button
```

## Note:
1. Remove element after an action
   - ```function removeMethod(element) {
    var items = document.getElementsByClassName(element);
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () { this.parentNode.removeChild(this); }
    }
}```
   - or e.target.parentNode.remove();
2. array.find() vs array.filter();
   - arrOfPeople.**find**(player => player.id === id);
   - arrOfPeople.**filter**(player => player.id === id);