let arrLvOdD1 = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let arrLvOdD2 = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

let arrLvTrD1 = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

let arrLvTrD2 = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

let s = 0;

let myTicket = [];

function clickSearch() {
  s = 0;

  let element = document.getElementById('chouseForm');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let el = document.getElementById('resultTicket');
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }

  let createTrain = document.createElement('div');
  createTrain.setAttribute('id', 'train');

  for (let i = 0; i < 28; i += 2) {
    let createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'wrapperDiv');

    let createDivBottom = document.createElement('div');
    createDivBottom.setAttribute('class', 'wrapperDivBottom');

    let createInner = document.createElement('div');
    createInner.setAttribute('id', 'inner');

    let createInputTop = document.createElement('input');
    createInputTop.setAttribute('type', 'checkbox');
    createInputTop.setAttribute('name', `place`);
    createInputTop.setAttribute('class', 'check');
    createInputTop.setAttribute('id', `place_${i + 1}`);
    createInputTop.setAttribute('onclick', 'clickSum(event)');

    let createLabelTop = document.createElement('label');
    createLabelTop.setAttribute('for', `place_${i + 1}`);
    createLabelTop.innerHTML = `${i + 1}`;

    if (
      selectOptionDirection.value === 'direction1' &&
      selectOptionDate.value === 'date1'
    ) {
      createInputTop.disabled = arrLvOdD1[i];
    }

    if (
      selectOptionDirection.value === 'direction1' &&
      selectOptionDate.value === 'date2'
    ) {
      createInputTop.disabled = arrLvOdD2[i];
    }

    if (
      selectOptionDirection.value === 'direction2' &&
      selectOptionDate.value === 'date1'
    ) {
      createInputTop.disabled = arrLvTrD1[i];
    }

    if (
      selectOptionDirection.value === 'direction2' &&
      selectOptionDate.value === 'date2'
    ) {
      createInputTop.disabled = arrLvTrD2[i];
    }

    let createInputBottom = document.createElement('input');
    createInputBottom.setAttribute('type', 'checkbox');
    createInputBottom.setAttribute('name', `place`);
    createInputBottom.setAttribute('class', 'check');
    createInputBottom.setAttribute('onclick', 'clickSum(event)');

    createInputBottom.setAttribute('id', `place_${i + 2}`);

    let createLabelBottom = document.createElement('label');
    createLabelBottom.setAttribute('for', `place_${i + 2}`);
    createLabelBottom.innerHTML = `${i + 2}`;

    if (
      selectOptionDirection.value === 'direction1' &&
      selectOptionDate.value === 'date1'
    ) {
      createInputBottom.disabled = arrLvOdD1[i + 1];
    }

    if (
      selectOptionDirection.value === 'direction1' &&
      selectOptionDate.value === 'date2'
    ) {
      createInputBottom.disabled = arrLvOdD2[i + 1];
    }

    if (
      selectOptionDirection.value === 'direction2' &&
      selectOptionDate.value === 'date1'
    ) {
      createInputBottom.disabled = arrLvTrD1[i + 1];
    }

    if (
      selectOptionDirection.value === 'direction2' &&
      selectOptionDate.value === 'date2'
    ) {
      createInputBottom.disabled = arrLvTrD2[i + 1];
    }

    createDiv.appendChild(createInputTop);
    createDiv.appendChild(createLabelTop);

    createInner.appendChild(createDiv);
    createDivBottom.appendChild(createInputBottom);
    createDivBottom.appendChild(createLabelBottom);

    createInner.appendChild(createDivBottom);
    createTrain.appendChild(createInner);

    chouseForm.appendChild(createTrain);
  }

  let createTotal = document.createElement('div');
  createTotal.setAttribute('id', 'total');

  let createSum = document.createElement('div');
  createSum.setAttribute('id', 'sum');

  let createBook = document.createElement('button');
  createBook.setAttribute('id', 'book');
  createBook.innerHTML = 'BOOK';
  createBook.setAttribute('onclick', 'clickBook()');

  createTotal.appendChild(createSum);
  createTotal.appendChild(createBook);
  chouseForm.appendChild(createTotal);
}

function clickBook() {
  let tmp = document.getElementsByName('place');

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i].checked === true) {
      let obj = {};
      obj.direction = selectOptionDirection.value;
      obj.date = selectOptionDate.value;
      obj.place = i + 1;

      myTicket.push(obj);

      if (
        selectOptionDirection.value === 'direction1' &&
        selectOptionDate.value === 'date1'
      ) {
        arrLvOdD1.splice(i, 1, true);
      }

      if (
        selectOptionDirection.value === 'direction1' &&
        selectOptionDate.value === 'date2'
      ) {
        arrLvOdD2.splice(i, 1, true);
      }

      if (
        selectOptionDirection.value === 'direction2' &&
        selectOptionDate.value === 'date1'
      ) {
        arrLvTrD1.splice(i, 1, true);
      }

      if (
        selectOptionDirection.value === 'direction2' &&
        selectOptionDate.value === 'date2'
      ) {
        arrLvTrD2.splice(i, 1, true);
      }
    }
  }

  let element = document.getElementById('chouseForm');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function bookingResult() {
  let element = document.getElementById('resultTicket');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let createP = document.createElement('p');
  createP.innerHTML = 'Tickets:';

  resultTicket.appendChild(createP);

  if (myTicket.length === 0) {
    createP.innerHTML = 'No booking';
  } else {
    for (let i = 0; i < myTicket.length; i++) {
      let str = ``;

      if (myTicket[i].direction === 'direction1') {
        str += `Lviv - Odessa`;
      }

      if (myTicket[i].direction === 'direction2') {
        str += `Lviv - Ternopil`;
      }

      if (myTicket[i].date === 'date1') {
        str += `   10.10.2020`;
      }

      if (myTicket[i].date === 'date2') {
        str += `   20.11.2020`;
      }

      str += `   place: ${myTicket[i].place}`;

      let createResultTicket = document.createElement('div');
      createResultTicket.setAttribute('class', 'resultTicketBuy');
      createResultTicket.innerHTML = str;
      resultTicket.appendChild(createResultTicket);
    }
  }
}

function clickSum() {
  let element = document.getElementById('sum');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let tmp = document.getElementById(event.path[0].id);

  if (tmp.checked === true) {
    s += 10;
  }

  if (tmp.checked === false) {
    s -= 10;
  }

  let createSumResult = document.createElement('span');
  createSumResult.setAttribute('id', 'number');
  createSumResult.innerHTML = `Total: ${s}$`;

  sum.appendChild(createSumResult);
}
