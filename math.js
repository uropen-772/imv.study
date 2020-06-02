// alert("簡単な計算が出来ます、いろいろ試してみよう！");
'use strict';

function bmi_cal(){
  var ht = document.getElementById("height").value;
  var bw = document.getElementById("weight").value;
  var bmi = Math.round(bw / Math.pow(ht / 100, 2) * 100) / 100
  if (Number.isFinite(1 / ht)) {
    document.getElementById("msg1").innerHTML = ''; 
  } else {
    document.getElementById("msg1").innerHTML = '身長が入力されていません';
  }
  if (Number.isFinite(1 / bw)){
    document.getElementById("msg2").innerHTML = ''; 
  } else {
    document.getElementById("msg2").innerHTML = '体重が入力されていません';
  }
  if (ht * bw > 0){
    document.getElementById("msg3").innerHTML = 'BMI = ' + bmi; 
  } else {
    document.getElementById("msg3").innerHTML = '';
  }
}

document.getElementById('button').addEventListener('click',e=>{
  const mass = parseInt(document.getElementById('mass').value);
  const mountingJig = parseInt(document.getElementById('mountingJig').value);
  const table = parseInt(document.getElementById('table').value);
  const coil = parseInt(document.getElementById('coil').value);
  const accel = parseInt(document.getElementById('accel').value);
  const power = parseInt(document.getElementById('power').value);

  const result = (mass + mountingJig + table + coil) * accel / power / 1000 * 100;
  console.log(mass);
  console.log(mountingJig);
  console.log(table);
  console.log(coil);
  console.log(accel);
  console.log(power);
  console.log(result);
  document.getElementById('result').value = result.toFixed(1);
  e.preventDefault();

  if(result>=75){
    document.getElementById('judge').value="不合格です、加振機を選び直してください";
  }else{
    document.getElementById('judge').value="合格です";
  }
});

document.getElementById('button2').addEventListener('click',e=>{
  const mass = parseInt(document.getElementById('mass').value);
  const mountingJig = parseInt(document.getElementById('mountingJig').value);
  const table = parseInt(document.getElementById('table').value);
  const coil = parseInt(document.getElementById('coil').value);
  const accel = parseInt(document.getElementById('accel').value);
  const power = parseInt(document.getElementById('power').value);

  const result = (mass + mountingJig + table + coil) * accel / (power*2) / 1000 * 100;
  console.log(mass);
  console.log(mountingJig);
  console.log(table);
  console.log(coil);
  console.log(accel);
  console.log(power);
  console.log(result);
  document.getElementById('result').value = result.toFixed(1);
  e.preventDefault();

  if(result>=75){
    document.getElementById('judge').value="不合格です、加振機を選び直してください";
  }else{
    document.getElementById('judge').value="合格です";
  }
});

  document.getElementById('X1but').addEventListener('click',e=>{
    const Y1 = parseFloat(document.getElementById('Y1').value);
    const X2 = parseFloat(document.getElementById('X2').value);
    const Y2 = parseFloat(document.getElementById('Y2').value);
    const A = parseFloat(document.getElementById('A').value);
    const X1 = 10**(Math.log10(X2)-(10/(A*3.32)*Math.log10(Y2/Y1)));
    console.log(X1);
    console.log(Y1);
    console.log(X2);
    console.log(Y2);
    console.log(A);
    document.getElementById('X1').value = X1.toFixed(4);
    e.preventDefault();
});

  document.getElementById('Y1but').addEventListener('click',e=>{
    const X1 = parseFloat(document.getElementById('X1').value);
    const X2 = parseFloat(document.getElementById('X2').value);
    const Y2 = parseFloat(document.getElementById('Y2').value);
    const A = parseFloat(document.getElementById('A').value);
    const Y1 = 10**(Math.log10(Y2)-(A*0.332)*Math.log10(X2/X1));
    console.log(X1);
    console.log(Y1);
    console.log(X2);
    console.log(Y2);
    console.log(A);
    document.getElementById('Y1').value = Y1.toFixed(4);
    e.preventDefault();
});

document.getElementById('X2but').addEventListener('click',e=>{
  const X1 = parseFloat(document.getElementById('X1').value);
  const Y1 = parseFloat(document.getElementById('Y1').value);
  const Y2 = parseFloat(document.getElementById('Y2').value);
  const A = parseFloat(document.getElementById('A').value);
  const X2 = 10**(Math.log10(X1)+(10/(A*3.32)*Math.log10(Y2/Y1)));
  console.log(X1);
  console.log(Y1);
  console.log(X2);
  console.log(Y2);
  console.log(A);
  document.getElementById('X2').value = X2.toFixed(4);
  e.preventDefault();
});

document.getElementById('Y2but').addEventListener('click',e=>{
  const X1 = parseFloat(document.getElementById('X1').value);
  const Y1 = parseFloat(document.getElementById('Y1').value);
  const X2 = parseFloat(document.getElementById('X2').value);
  const A = parseFloat(document.getElementById('A').value);
  const Y2 = 10**(Math.log10(Y1)+(A*0.332)*Math.log10(X2/X1));
  console.log(X1);
  console.log(Y1);
  console.log(X2);
  console.log(Y2);
  console.log(A);
  document.getElementById('Y2').value = Y2.toFixed(4);
  e.preventDefault();
});

document.getElementById('Abut').addEventListener('click',e=>{
  const X1 = parseFloat(document.getElementById('X1').value);
  const Y1 = parseFloat(document.getElementById('Y1').value);
  const X2 = parseFloat(document.getElementById('X2').value);
  const Y2 = parseFloat(document.getElementById('Y2').value);
  const A = (10*(Math.log10(Y2/Y1)))/(3.32*(Math.log10(X2/X1)));
  console.log(X1);
  console.log(Y1);
  console.log(X2);
  console.log(Y2);
  console.log(A);
  document.getElementById('A').value = A.toFixed(4);
  e.preventDefault();
});
