let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

// screen.value = "sdfsdff"
// screenValue = ""
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "C") {
      screen.value = "";
    } else if (buttonText == "X") {
      buttonText = "*";
      screen.value += buttonText;
    } else if (buttonText == "=") {
      screen.value = eval(screen.value);
    }
    // else if(buttonText == '%'){
    //     buttonText = '%'
    //     screen.value += buttonText;
    //     screen.value = eval(screen.value)
    // }
    else {
      screen.value += buttonText;
    }
  });
}
