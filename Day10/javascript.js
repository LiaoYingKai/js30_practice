var checkboxs = document.querySelectorAll("input[type = 'checkbox']");
checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

var list_checkout;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxs.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === last_checked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween!');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  last_checked = this;
}