// Tạo xúc xắc 6 mặt
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Lấy các phần tử DOM cần thiết
var player1Button = document.getElementById("player1-button");
var player2Button = document.getElementById("player2-button");
var resultElement = document.getElementById("result");
var dice1Element = document.getElementById("dice1");
var dice2Element = document.getElementById("dice2");

// Xử lý sự kiện khi người chơi nhấn nút
player1Button.addEventListener("click", function() {
  var player1Score = rollDice();
  var player2Score = rollDice();

  // Hiển thị kết quả
  var resultText = "Player 1: " + player1Score + "<br>";
  resultText += "Player 2: " + player2Score + "<br>";

  // Hiển thị hình ảnh minh họa xúc sắc
  dice1Element.src = "dice-" + player1Score + ".png";
  dice2Element.src = "dice-" + player2Score + ".png";

  if (player1Score > player2Score) {
    resultText += "Player 1 wins!";
  } else if (player2Score > player1Score) {
    resultText += "Player 2 wins!";
  } else {
    resultText += "It's a tie!";
  }

  resultElement.innerHTML = resultText;
});

player2Button.addEventListener("click", function() {
  var player1Score = rollDice();
  var player2Score = rollDice();

  // Hiển thị kết quả
  var resultText = "Player 1: " + player1Score + "<br>";
  resultText += "Player 2: " + player2Score + "<br>";

  // Hiển thị hình ảnh minh họa xúc sắc
  dice1Element.src = "dice-" + player1Score + ".png";
  dice2Element.src = "dice-" + player2Score + ".png";

  if (player1Score > player2Score) {
    resultText += "Player 1 wins!";
  } else if (player2Score > player1Score) {
    resultText += "Player 2 wins!";
  } else {
    resultText += "It's a tie!";
  }

  resultElement.innerHTML = resultText;
});