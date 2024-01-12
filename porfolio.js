  // project reveal
  function showWB() {
    var cardWD = document.getElementById('WD');
    var cardP = document.getElementById('P');
    var cardER = document.getElementById('ER');
    var X = document.getElementById('X');
    cardWD.style.display = 'block';
    cardP.style.display = 'none';
    cardER.style.display = 'none';
    X.style.display = 'block';
}
function showP() {
    var cardWD = document.getElementById('WD');
    var cardP = document.getElementById('P');
    var cardER = document.getElementById('ER');
    var X = document.getElementById('X');
    cardWD.style.display = 'none';
    cardP.style.display = 'block';
    cardER.style.display = 'none';
    X.style.display = 'block';
}
function showER() {
    var cardWD = document.getElementById('WD');
    var cardP = document.getElementById('P');
    var cardER = document.getElementById('ER');
    var X = document.getElementById('X');
    cardWD.style.display = 'none';
    cardP.style.display = 'none';
    cardER.style.display = 'block';
    X.style.display = 'block';
}
function hideAll() {
    var cardWD = document.getElementById('WD');
    var X = document.getElementById('X');
    var cardP = document.getElementById('P');
    var cardER = document.getElementById('ER');
    cardWD.style.display = 'none';
    cardP.style.display = 'none';
    cardER.style.display = 'none';
    X.style.display = 'none';
}

// typewriter animation
let title = document.getElementById('heading');
let name = ["CS Junior", "Free-lancer", "Web Developer", "Robotic Scientist", "Circuit Designer"];
let index = 0;
let x = 0;

const typeWriter = (n) => {
    let new_title = n[x].slice(0, index);
    title.innerText = new_title;
    if (index > n[x].length) {
        index = 1
        x++;
    }
    else {
        index++;
    }
    if (x > 4) {
        x = 0;
    }
    setTimeout(() => typeWriter(n), 250);
}
typeWriter(name);
