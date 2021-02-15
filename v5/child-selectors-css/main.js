let persons;


async function readData() {

  persons = await $.getJSON('persons.json');

  renderToHtml();

}


function renderToHtml() {

  $('body').append('<h1>All persons</h1>');

  let $persons = $('<div class="persons">');

  for (let { firstName, lastName, email } of persons) {

    let [emailStart, emailEnd] = email.split('@');

    $persons.append(/*html*/`

      <div class="person">

        <span>${firstName}</span>

        <span>${lastName}</span>

        <span>

          <span class="emailStart">${emailStart}</span><span class="emailEnd">@${emailEnd}</span>

        </span>

      </div>

    `);

  }

  $('body').append($persons);

}


readData();