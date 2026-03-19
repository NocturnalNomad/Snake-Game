function saveScore(game, score){
    let scores = JSON.parse(localStorage.getItem(game)) || [];
    scores.push(score);
    scores.sort((a,b)=>b-a);
    scores = scores.slice(0,5);
    localStorage.setItem(game, JSON.stringify(scores));
}

function getScores(game){
    return JSON.parse(localStorage.getItem(game)) || [];
}
