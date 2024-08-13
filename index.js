const homeScore = document.getElementById("homeScore");
const awayScore = document.getElementById("awayScore")
let scoreCountHome = 0
let scoreCountAway = 0

// write function to add 1 point 
function add1PointHome(){
    scoreCountHome += 1
    homeScore.textContent = scoreCountHome
}
function add1PointAway(){
    scoreCountAway += 1
    awayScore.textContent = scoreCountAway
}
function add2PointHome(){
    scoreCountHome += 2
    homeScore.textContent = scoreCountHome
}
function add2PointAway(){
    scoreCountAway += 2
    awayScore.textContent = scoreCountAway
}
function add3PointHome(){
    scoreCountHome += 3
    homeScore.textContent = scoreCountHome
}
function add3PointAway(){
    scoreCountAway += 3
    awayScore.textContent = scoreCountAway
}
function reset(){
    scoreCountHome = 0
    homeScore.textContent = scoreCountHome
    scoreCountAway = 0
    awayScore.textContent = scoreCountAway
}