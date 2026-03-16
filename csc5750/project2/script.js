function swapTiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className =
    document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

var totalMoves = 0;
var seconds = 0;
var timer;

function startTimer() {
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    seconds++;
    document.getElementById("totalTime").innerText = seconds;
  }, 1000);
}

function shuffle() {
  //Use nested loops to access each cell of the 4x4 grid
  for (
    var row = 1;
    row <= 4;
    row++ //foreach row of the 4x4 grid
  ) {
    //foreach column in this row
    for (var column = 1; column <= 4; column++) {
      //pick a random row from 1 to 4

      var row2 = Math.floor(Math.random() * 4 + 1);

      //pick a random column from 1 to 4
      var column2 = Math.floor(Math.random() * 4 + 1);

      swapTiles("cell" + row + column, "cell" + row2 + column2); //swap the look & feel of both cells
    }
  }

  totalMoves = 0;
  seconds = 0;
  document.getElementById("totalMoves").innerText = totalMoves;
  document.getElementById("totalTime").innerText = seconds;

  clearInterval(timer);
  startTimer();
}

function simple() {
  //I just took shuffle() and made it just make the original board
  var currentTile = 1;
  for (var row = 1; row <= 4; row++) {
    for (var column = 1; column <= 4; column++) {
      document.getElementById("cell" + row + column).className =
        "tile" + currentTile;
      currentTile++;
    }
  }

  document.getElementById("cell43").className = "tile16";
  document.getElementById("cell44").className = "tile15";

  totalMoves = 0;
  seconds = 0;
  document.getElementById("totalMoves").innerText = totalMoves;
  document.getElementById("totalTime").innerText = seconds;

  clearInterval(timer);
  startTimer();
}

function clickTile(row, column) {
  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className;

  if (seconds == 0) {
    startTimer();
  }

  if (tile != "tile16") {
    //check if the white tile is on the right
    if (column < 4) {
      if (
        document.getElementById("cell" + row + (column + 1)).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + row + (column + 1));
        totalMoves++;
        console.log(totalMoves);
        setTimeout(() => {
          Win();
        }, 200);
        document.getElementById("totalMoves").innerText = totalMoves;
        return;
      }
    }
    //check if the white tile is on the left
    if (column > 1) {
      if (
        document.getElementById("cell" + row + (column - 1)).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + row + (column - 1));
        totalMoves++;
        console.log(totalMoves);
        setTimeout(() => {
          Win();
        }, 200);
        document.getElementById("totalMoves").innerText = totalMoves;
        return;
      }
    }
    //check if the white tile is above
    if (row > 1) {
      if (
        document.getElementById("cell" + (row - 1) + column).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + (row - 1) + column);
        totalMoves++;
        console.log(totalMoves);
        setTimeout(() => {
          Win();
        }, 200);
        document.getElementById("totalMoves").innerText = totalMoves;
        return;
      }
    }

    //check if the white tile is below
    if (row < 4) {
      if (
        document.getElementById("cell" + (row + 1) + column).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + (row + 1) + column);
        totalMoves++;
        console.log(totalMoves);
        setTimeout(() => {
          Win();
        }, 200);
        document.getElementById("totalMoves").innerText = totalMoves;
        return;
      }
    }
  }
}

function Win() {
  if (
    document.getElementById("cell11").className == "tile1" &&
    document.getElementById("cell12").className == "tile2" &&
    document.getElementById("cell13").className == "tile3" &&
    document.getElementById("cell14").className == "tile4" &&
    document.getElementById("cell21").className == "tile5" &&
    document.getElementById("cell22").className == "tile6" &&
    document.getElementById("cell23").className == "tile7" &&
    document.getElementById("cell24").className == "tile8" &&
    document.getElementById("cell31").className == "tile9" &&
    document.getElementById("cell32").className == "tile10" &&
    document.getElementById("cell33").className == "tile11" &&
    document.getElementById("cell34").className == "tile12" &&
    document.getElementById("cell41").className == "tile13" &&
    document.getElementById("cell42").className == "tile14" &&
    document.getElementById("cell43").className == "tile15" &&
    document.getElementById("cell44").className == "tile16"
  ) {
    if (
      confirm(
        "Congratulations! You solved the puzzle in " +
          totalMoves +
          " moves, and took " +
          seconds +
          " seconds! To play again, click OK.",
      )
    ) {
      shuffle();
      totalMoves = 0;
      seconds = 0;
      document.getElementById("totalMoves").innerText = totalMoves;
      document.getElementById("totalTime").innerText = seconds;
    }
  }
}
