



function validateForm() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let e = document.forms["myform"]["femail"].value;
    if (e== "") {
      alert("email must be filled out");
      return false;
    }
    let m = document.forms["myform"]["fmessage"].value;
    if (m == "") {
      alert("message must be filled out");
      return false;
    }
    
  }