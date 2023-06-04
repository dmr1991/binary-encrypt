let encryptbtn = document.getElementById("encrypt");
let clearbtn = document.getElementById("clear");

/* const clickTest = () => {
  alert("Click Test");
}; */

const convert_binary = () => {
  let inputbox = document.getElementById("input");
  let inputtxt = document.getElementById("input").value;
  let outputbox = document.getElementById("output");
  let length = inputtxt.length;
  const BITS_IN_BYTE = 8;

  let byteString = "";
  for (let i = 0; i < length; i++) {
    let decimal = inputtxt.charCodeAt(i);

    let byte = [];
    for (let j = BITS_IN_BYTE - 1; j >= 0; j--) {
      byte[j] = decimal % 2;
      decimal = Math.floor(decimal / 2);
    }
    // Print the binary representation
    byteString += byte.join("");
    byteString += "  ";
  }
  outputbox.value = byteString;
  inputbox.value = "";
};

//deletes output textbox
const clear_text = () => {
  let outputbox = document.getElementById("output");
  outputbox.value = "";
};

encryptbtn.addEventListener("click", convert_binary);
clearbtn.addEventListener("click", clear_text);

//prints emoji depending on if it's a 0 or a 1
/* const print_bulb = (bit) => {
  if (bit == 0) {
    // Dark emoji
    print("U000026AB");
  } else if (bit == 1) {
    // Light emoji
    print("U0001F7E1");
  }
}; */
