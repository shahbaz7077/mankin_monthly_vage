function makeinput() {
  let n;
  n = document.querySelector("#get").value;
  let box;
  box = document.querySelector(".data");
  box.innerHTML = "";
  box.className= "newdiv";
  for (let i = 0; i < n; i++) {
    box.innerHTML += ` <input type="text" class="persons" placeholder=" person ${
      i + 1
    }"> <br>`;
  }
}
let arr=[];
let sum;
function collectData() {
    arr=[]
  let input = document.querySelectorAll(".persons");
  input.forEach((inp) => {
    arr.push(Number(inp.value));
  });
    sum = arr.reduce((a, b) => a + b, 0);

  document.querySelector("#result").innerText = sum;

}
function calculate() {
   
  let actualTotal;
  let altrtPercentage;
  let rate = Number(document.querySelector("#rate").value);
  actualTotal = Number(document.querySelector("#copTotal").value);
  altrtPercentage = Number(document.querySelector("#alter").value);

  let n;
  n = Number(document.querySelector("#get").value);
  let pani;
  pani = actualTotal-sum;
  let temp;
  temp = pani * 100 / actualTotal;
  let cal = document.querySelector(".ans");
  cal.innerHTML = "";

  for (let i = 0; i < n; i++) {
    let end_value = (temp * arr[i]) / 100;
    let piece = arr[i]-end_value;
    let pr=100 - altrtPercentage ;
    let per = (pr/100) * piece ;
    let doze = per/12;
    let money = doze * rate;
 cal.className="b";
   cal.innerHTML += `<div class="calculation-entry">
     <strong>calculation of person ${i+1}:</strong><br>
     doze=${doze.toFixed(2)},<br>
     end_value=${end_value.toFixed(2)},<br>
     temp=${temp.toFixed(2)},<br>
     money=${money.toFixed(2)},<br>
     pani=${pani.toFixed(2)}
     </div><br>`;
  }
}
