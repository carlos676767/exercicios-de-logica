// Write function RemoveExclamationMarks which
// removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const str = s.replace(/!/g, "").replace(/,/g, "");
  return str;
}

console.log(removeExclamationMarks("ola, meu nome !!!! carlos "));
