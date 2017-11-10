var $lines = $('.prompt p');
$lines.hide();
var lineContents = new Array();

var terminal = function() {

  var skip = 0;
  typeLine = function(idx) {
    idx == null && (idx = 0);
    var element = $lines.eq(idx);
    var content = lineContents[idx];
    if(typeof content == "undefined") {
      $('.skip').hide();
      return;
    }
    var charIdx = 0;

    var typeChar = function() {
      var rand = Math.round(Math.random() * 100) + 20;

      setTimeout(function() {
        var char = content[charIdx++];
        element.append(char);
        if(typeof char !== "undefined")
          typeChar();
        else {
          element.append('<div class="output">');
          typeLine(++idx);
        }
      }, skip ? 0 : rand);
    }
    content = content;
    typeChar();
  }

  $lines.each(function(i) {
    lineContents[i] = $(this).text();
    $(this).text('').show();
  });

  typeLine();
}

terminal();
