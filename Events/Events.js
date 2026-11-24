//Syndmus on brauseri teade tegevuse kohta, mis toimub lehel
//Syndmused v6ivad olla hiirekl6psud, klaviatuuri vajutused, lehe laadimine, vormi esitamine jne

const clickButton = document.getElementById("click-button");
const clickResult = document.getElementById("click-result");
const targetResult = document.getElementById("target-result");

let click = 0;
function countClicks(Event) {
    click++;
    clickResult.textContent = "Kl6psud: " + click;
    targetResult.textContent = "type: " + Event.type + ", target: " + Event.target.tagName + ", currentTarget: " + Event.currentTarget.tagName;
}
clickButton.addEventListener("click", countClicks);