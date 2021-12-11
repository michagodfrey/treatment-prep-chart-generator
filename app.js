// user input fields
const product = document.getElementById('product');
const activeCon = document.getElementById('active-con');
const concentration = document.getElementById('concentration');
const rate = document.getElementById('rate');
const volume = document.getElementById('volume');
const name = document.getElementById('name');
// switch between grams and mililitres display
const grams = document.querySelectorAll('.grams');
const mils = document.querySelectorAll('.mils');
const btnGrams = document.getElementById('btn-grams');
const btnMils = document.getElementById('btn-mils');
// full volume rate
const productDisplay = document.getElementById('product-display');
const concentrateFull = document.getElementById('concentrate');
// part fill rates
const conc3Q = document.querySelector('.conc-3Q');
const vol3Q = document.querySelector('.vol-3Q');
const halfConc = document.querySelector('.conc-half');
const halfVol = document.querySelector('.vol-half');
const conc1Q = document.querySelector('.conc-1Q');
const vol1Q = document.querySelector('.vol-1Q');

// display date. Thanks to dcode for tutorial on displaying it https://www.youtube.com/watch?v=50cDIUKlQ8g&ab_channel=dcode
const dateDisplay = document.getElementById('date');
const date = new Date();
const dateFormatted = formateDate(date);
dateDisplay.innerHTML = `${dateFormatted}`;

function formateDate(dateObject) {
  const parts = {
    day: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear()
  };
  return `${parts.day}/${parts.month}/${parts.year}`;
}

// swithch unit of measure between g and mL
function showMils() {
  for (let i = 0; i < mils.length; i++) {
    mils[i].style.display = "flex";
    grams[i].style.display = 'none';
  }
}

function showGrams() {
  for (let i = 0; i < grams.length; i++) {
    grams[i].style.display = 'flex';
    mils[i].style.display = "none";
  }
}

// populate the table and full tank concentration
function calculate() {
  if (!btnGrams.checked && !btnMils.checked) {
    alert('Please select unit of measure - grams or mililitres');
  } else if (rate.value === '' || volume.value === '' || product.value === '') {
    alert('Please ensure product, rate and volume fields are complete');
  } else {
      // calculate full tank rate
      let resultFullTank = `${Math.ceil((rate.value * volume.value) / 10)}`;
      
      // display product name and rate for full tank concentration
      productDisplay.innerHTML = `${product.value} in full tank`;
      concentrateFull.innerHTML = resultFullTank;

      // display product values in table
      document.getElementById('print-prod').innerHTML = product.value;
      document.getElementById('print-ac').innerHTML = activeCon.value;
      document.getElementById('print-conc').innerHTML = concentration.value;
      document.getElementById('print-name').innerHTML = name.value;

      // display fill values
      document.getElementById('print-rate').innerHTML = resultFullTank;
      document.getElementById('print-volume').innerHTML = volume.value;
      conc3Q.innerHTML = `${Math.ceil(resultFullTank * .75)}`;
      vol3Q.innerHTML = `${volume.value * .75}`;
      halfConc.innerHTML = `${Math.ceil(resultFullTank * .5)}`;
      halfVol.innerHTML = `${volume.value * .5}`;
      conc1Q.innerHTML = `${Math.ceil(resultFullTank * .25)}`;
      vol1Q.innerHTML = `${volume.value * .25}`;
  }
}

// save treatment chart as a pdf with html2pdf https://ekoopmans.github.io/html2pdf.js/#getting-started
function generatePDF() {
  const pdf = document.getElementById('PDF');
  html2pdf(pdf);
}
