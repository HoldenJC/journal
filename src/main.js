import './bootstrap.css';
import './styles.css';
import { vowelCount, consCount, getTeaser } from './journal';

$(document).ready(function() {

  $('#journalForm').submit(function(event) {
    event.preventDefault();
    var title = $("#userTitle").val();
    var body = $("#userEntry").val();
    var vowels = vowelCount(body);
    var consonants = consCount(body);
    var teaserText = getTeaser(body);

    $('#result').html("<h1>" + title + "</h1><br><p>" + body + "</p><br><p>" + vowels + "</p><br><p>" + consonants + "</p><br><p>" + teaserText + "...</p>");
    // $('#result').append("<h1>" + title + "</h1><br><p>" + body + "</p>");
  });
});
