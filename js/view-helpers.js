// TODO: Should probably live in `js/view-helpers.js` one day...
;(function(globals){ // That damn IIFE again!
// Your code BELOW here...

  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody');
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // This looks strangely familiar... is that COPY-PASTA!?
  var gameboard = game.board();

  // You could also use nested `for` loops, but this is better...
  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file); // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece);
      // Use the log, Luke!

      if (piece) $square.get(piece); // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead


      if (piece === "R"){
        $square.addClass('bRook');
      }

      if (piece === "N") {
        $square.addClass('bKnight');
      }

      if (piece === "B"){
        $square.addClass('bBishop');
      }

      if (piece === "Q") {
        $square.addClass('bQueen');
      }

      if (piece === "K") {
        $square.addClass('bKing');
      }
      if (piece === "P") {
        $square.addClass('bPawn');
      }

      if (piece === "p") {
        $square.addClass('wPawn');
      }

      if (piece === "r") {
        $square.addClass('wRook');
      }

      if (piece === "n") {
        $square.addClass('wKnight');
      }

      if (piece === "b") {
        $square.addClass('wBishop');
      }

      if (piece === "q") {
        $square.addClass('wQueen');
      }

      if (piece === "k") {
        $square.addClass('wKing');
      }

    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
