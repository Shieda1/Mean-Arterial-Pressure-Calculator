// https://www.omnicalculator.com/health/mean-arterial-pressure

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pulsepressureRadio = document.getElementById('pulsepressureRadio');
const systolicbloodpressureRadio = document.getElementById('systolicbloodpressureRadio');
const diastolicbloodpressureRadio = document.getElementById('diastolicbloodpressureRadio');

let pulsepressure;
let systolicbloodpressure = v1;
let diastolicbloodpressure = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

pulsepressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Systolic blood pressure';
  variable2.textContent = 'Diastolic blood pressure';
  systolicbloodpressure = v1;
  diastolicbloodpressure = v2;
  result.textContent = '';
});

systolicbloodpressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Pulse pressure';
  variable2.textContent = 'Diastolic blood pressure';
  pulsepressure = v1;
  diastolicbloodpressure = v2;
  result.textContent = '';
});

diastolicbloodpressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Pulse pressure';
  variable2.textContent = 'Systolic blood pressure';
  pulsepressure = v1;
  systolicbloodpressure = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pulsepressureRadio.checked)
    result.textContent = `Pulse pressure = ${computepulsepressure().toFixed(2)}`;

  else if(systolicbloodpressureRadio.checked)
    result.textContent = `Systolic blood pressure = ${computesystolicbloodpressure().toFixed(2)}`;

  else if(diastolicbloodpressureRadio.checked)
    result.textContent = `Diastolic blood pressure = ${computediastolicbloodpressure().toFixed(2)}`;
})

// calculation

// pulsepressure = systolicbloodpressure - diastolicbloodpressure

function computepulsepressure() {
  return Number(systolicbloodpressure.value) - Number(diastolicbloodpressure.value);
}

function computesystolicbloodpressure() {
  return Number(pulsepressure.value) + Number(diastolicbloodpressure.value);
}

function computediastolicbloodpressure() {
  return Number(systolicbloodpressure.value) - Number(pulsepressure.value);
}