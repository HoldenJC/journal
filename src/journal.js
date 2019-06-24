export function vowelCount(body) {


  var vowelOnly = body.replace(/[^a-zA-Z0-9 ]/g, "");
  vowelOnly = vowelOnly.replace(/[^aeiou]/gi, "");

  return vowelOnly.length;

}

export function consCount(body) {


  var consOnly = body.replace(/[^a-zA-Z0-9 ]/g, "");
  consOnly = consOnly.replace(/[aeiou]/gi, "");

  return consOnly.length;

}

export function getTeaser(body) {

  var teaser = body.split(".");
  var elseTeaser = [];
  teaser = teaser[0].split(" ");
  if (teaser.length <= 8) {
    return teaser.join(" ");
  } else {
    for (var i = 0; i < 8; i++) {
      elseTeaser.push(teaser[i]);
    }
    return elseTeaser.join(" ");
  }

}
