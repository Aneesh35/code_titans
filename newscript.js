function showEvents() {
  var eventsDiv = document.getElementById('events');
  eventsDiv.classList.toggle('hidden');
}

function filterEvents() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('eventList');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

function loadGallery() {
  var eventsDiv = document.getElementById('image-container');
  eventsDiv.classList.toggle('hidden');
}

function showHomePage() {
  var homeContent = document.getElementById("home-content");

  // Toggle display of home content
  if (homeContent.style.display === "block") {
    homeContent.style.display = "none";
  } else {
    homeContent.style.display = "block";
  }
}

function showContactDetails() {
  var contactDetails = document.getElementById("contact-details");

  // Toggle display of contact details
  if (contactDetails.style.display === "block") {
    contactDetails.style.display = "none";
  }
  else {
    contactDetails.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Get the register button
  var homeBtn = document.getElementById('homeBtn');

  // Add click event listener
  homeBtn.addEventListener('click', function () {
    // Scroll to the register section
    document.getElementById('home-content').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the register button
  var eventBtn = document.getElementById('eventBtn');

  // Add click event listener
  eventBtn.addEventListener('click', function () {
    // Scroll to the register section
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
  });
});
function showregister() {
  var eventsDiv = document.getElementById('register');
  eventsDiv.classList.toggle('hidden');
}


document.addEventListener('DOMContentLoaded', function () {
  // Get the register button
  var registerBtn = document.getElementById('registerBtn');

  // Add click event listener
  registerBtn.addEventListener('click', function () {
    // Scroll to the register section
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the register button
  var galleryBtn = document.getElementById('galleryBtn');

  // Add click event listener
  galleryBtn.addEventListener('click', function () {
    // Scroll to the register section
    document.getElementById('image-container').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the register button
  var contactBtn = document.getElementById('contactBtn');

  // Add click event listener
  contactBtn.addEventListener('click', function () {
    // Scroll to the register section
    document.getElementById('contact-details').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var registerLink = document.getElementById("register-link");
  var registerContent = document.getElementById("register-content");

  registerLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Toggle the visibility of the registration content
    if (registerContent.style.display === "none") {
      registerContent.style.display = "block";
    } else {
      registerContent.style.display = "none";
    }
  });
});




// electrocute
document.addEventListener('DOMContentLoaded', function () {
  var electrocuteBtn = document.getElementById('electrocutebtn');
  electrocuteBtn.addEventListener('click', function () {
    document.getElementById('electrocute').scrollIntoView({ behavior: 'smooth' });
  });
});
function showelectrocute() {
  var eventsDiv = document.getElementById('electrocute');
  eventsDiv.classList.toggle('hidden');
}

//ctcc
document.addEventListener('DOMContentLoaded', function () {
  var ctccBtn = document.getElementById('ctccbtn');
  ctccBtn.addEventListener('click', function () {
    document.getElementById('ctcc').scrollIntoView({ behavior: 'smooth' });
  });
});
function showctcc() {
  var eventsDiv = document.getElementById('ctcc');
  eventsDiv.classList.toggle('hidden');
}
//robo
document.addEventListener('DOMContentLoaded', function () {
  var roboBtn = document.getElementById('robobtn');
  roboBtn.addEventListener('click', function () {
    document.getElementById('robo').scrollIntoView({ behavior: 'smooth' });
  });
});
function showrobo() {
  var eventsDiv = document.getElementById('robo');
  eventsDiv.classList.toggle('hidden');
  }
//bgmi
document.addEventListener('DOMContentLoaded', function () {
  var bgmiBtn = document.getElementById('bgmibtn');
  bgmiBtn.addEventListener('click', function () {
    document.getElementById('bgmi').scrollIntoView({ behavior: 'smooth' });
  });
});
function showbgmi() {
  var eventsDiv = document.getElementById('bgmi');
  eventsDiv.classList.toggle('hidden');
}

//tech pursuit
document.addEventListener('DOMContentLoaded', function () {
  var techpursBtn = document.getElementById('techpursbtn');
  techpursBtn.addEventListener('click', function () {
    document.getElementById('techpurs').scrollIntoView({ behavior: 'smooth' });
  });
});
function showtechpurs() {
  var eventsDiv = document.getElementById('techpurs');
  eventsDiv.classList.toggle('hidden');
}

//presentation
document.addEventListener('DOMContentLoaded', function () {
  var presentBtn = document.getElementById('presentbtn');
  presentBtn.addEventListener('click', function () {
    document.getElementById('present').scrollIntoView({ behavior: 'smooth' });
  });
});
function showpresent() {
  var eventsDiv = document.getElementById('present');
  eventsDiv.classList.toggle('hidden');
}
//line follower
document.addEventListener('DOMContentLoaded', function () {
  var linefolBtn = document.getElementById('linefolbtn');
  linefolBtn.addEventListener('click', function () {
    document.getElementById('linefol').scrollIntoView({ behavior: 'smooth' });
  });
});
function showlinefol() {
  var eventsDiv = document.getElementById('linefol');
  eventsDiv.classList.toggle('hidden');
}

//robo race
document.addEventListener('DOMContentLoaded', function () {
  var roboraceBtn = document.getElementById('roboracebtn');
  roboraceBtn.addEventListener('click', function () {
    document.getElementById('roborace').scrollIntoView({ behavior: 'smooth' });
  });
});
function showroborace() {
  var eventsDiv = document.getElementById('roborace');
  eventsDiv.classList.toggle('hidden');
}