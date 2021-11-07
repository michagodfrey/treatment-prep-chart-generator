const product = document.getElementById('product');
const productDisplay = document.getElementById('product-display');
const grams = document.querySelectorAll('.grams');
const mils = document.querySelectorAll('.mils');
const btnGrams = document.getElementById('btn-grams');
const btnMils = document.getElementById('btn-mils');
const rate = document.getElementById('rate');
const volume = document.getElementById('volume');
const concentrateFull = document.getElementById('concentrate');
const conc3Q = document.querySelector('.conc-3Q');
const vol3Q = document.querySelector('.vol-3Q');
const halfConc = document.querySelector('.conc-half');
const halfVol = document.querySelector('.vol-half');
const conc1Q = document.querySelector('.conc-1Q');
const vol1Q = document.querySelector('.vol-1Q');
const dateDisplay = document.getElementById('date');

// display date. Thanks to dcode for tutorial on displaying it https://www.youtube.com/watch?v=50cDIUKlQ8g&ab_channel=dcode
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

      // create elements and populate table with part fill rates
      let resultFullTank = '';
      let res3Conc = '';
      let res3Vol = '';
      let resHConc = '';
      let resHVol = '';
      let res1Conc = '';
      let res1Vol = '';

      resultFullTank += `${Math.ceil((rate.value * volume.value) / 10)}`;
      res3Conc += `${Math.ceil(resultFullTank * .75)}`;
      res3Vol += `${volume.value * .75}`;
      resHConc += `${Math.ceil(resultFullTank * .5)}`;
      resHVol += `${volume.value * .5}`;
      res1Conc += `${Math.ceil(resultFullTank * .25)}`;
      res1Vol += `${volume.value * .25}`;

      concentrateFull.innerHTML = resultFullTank;
      conc3Q.innerHTML = res3Conc;
      vol3Q.innerHTML = res3Vol;
      halfConc.innerHTML = resHConc;
      halfVol.innerHTML = resHVol;
      conc1Q.innerHTML = res1Conc;
      vol1Q.innerHTML = res1Vol;

      // display product name for full tank concentration
      productDisplay.innerHTML = `${product.value} in full tank`;

  }
}

function apology() {

    alert("Thanks for using this form! But unfortunately it is not finished yet. If you have feedback, please share it :)");
}

// To do: function to generate and print pdf

// const download = document.getElementById('download');
//
//
// function generatePDF() {
//   const form = document.getElementById('form');
//
//   // options
//   const opt = {
//   margin:       1,
//   filename:     'myfile.pdf',
//   image:        { type: 'jpeg', quality: 0.98 },
//   html2canvas:  { scale: 2 },
//   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
// };
//
//   html2pdf().set(opt).from(form).save();
//
// }
