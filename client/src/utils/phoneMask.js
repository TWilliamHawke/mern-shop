function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

function mask(event) {
  let { value } = event.target
  var matrix = "+7 (___) ___ ____",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;

  value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ""
      : a;
  });

  if (event.type === "blur") {
    if (value.length === 2) value = "";
  } else setCursorPosition(value.length, event.target);
}
//     var input = document.querySelector("#tel");
//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
// });

export default mask