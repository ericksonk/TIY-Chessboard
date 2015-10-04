(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  }

var $chessboard = jQuery('.chessboard tbody');
var gameboard = game.board();

  // Controller for "next move"...
  jQuery('.fa-step-forward').on('click', function(event){
    console.log('next move');
    game.next(); // Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
    jQuery(gameboard).each(function(rank, row){
      jQuery(row).each(function(file, piece){

        if (piece === 'p') {
          $('tr.row-2 td:eq(3)').removeClass('wPawn');
          $('tr.row-4 td:eq(3)').addClass('wPawn');
        }

        if (piece === 'N') {
          $('tr.row-8 td:eq(6)').removeClass('bKnight');
          $('tr.row-6 td:eq(5)').addClass('bKnight');
        }
        //
        // if (piece === 'p') {
        //   $('tr.row-2 td:eq(2)').removeClass('wPawn');
        //   $('tr.row-4 td:eq(2)').addClass('wPawn');
        // }
        //
        // if (piece === 'P') {
        //   $('tr.row-7 td:eq(4)').removeClass('bPawn');
        //   $('tr.row-6 td:eq(4)').addClass('bPawn');
        // }
        //
        // if (piece === 'p') {
        //   $('tr.row-2 td:eq(6)').removeClass('wPawn');
        //   $('tr.row-3 td:eq(6)').addClass('wPawn');
        // }
        //
        // if (piece === 'P') {
        //   $('tr.row-7 td:eq(3)').removeClass('bPawn');
        //   $('tr.row-5 td:eq(3)').addClass('bPawn');
        // }
        //
        // if (piece === 'b') {
        //   $('tr.row-1 td:eq(5)').removeClass('wBishop');
        //   $('tr.row-2 td:eq(6)').addClass('wBishop');
        // }
        //
        // if (piece === 'B') {
        //   $('tr.row-8 td:eq(5)').removeClass('bBishop');
        //   $('tr.row-7 td:eq(4)').addClass('bBishop');
        // }
        //
        // if (piece === 'n') {
        //   $('tr.row-1 td:eq(6)').removeClass('wKnight');
        //   $('tr.row-3 td:eq(5)').addClass('wKnight');
        // }
    });
  });
});

  // Controller for "previous move"...
  jQuery('.fa-step-backward').on('click', function(event){
    console.log('previous move');
    game.prev(); // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery('.fa-fast-forward').on('click', function(event){
    console.log('fast forward');
    game.end(); // TODO: Tell the Model -- `game` -- to advance to the last move...
    jQuery(gameboard).each(function(rank, row){
      jQuery(row).each(function(file, piece){
        var $square = $chessboard
          .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
          .find('td').eq(file); // Get the `td` inside the `tr` for the `file`

        if (piece === 'p') {
          $('tr.row-2 td:eq(3)').removeClass('wPawn');
          $('tr.row-4 td:eq(3)').addClass('wPawn');
        }

        if (piece === 'N') {
          $('tr.row-8 td:eq(6)').removeClass('bKnight');
          $('tr.row-6 td:eq(5)').addClass('bKnight');
        }

        if (piece === 'p') {
          $('tr.row-2 td:eq(2)').removeClass('wPawn');
          $('tr.row-4 td:eq(2)').addClass('wPawn');
        }

        if (piece === 'P') {
          $('tr.row-7 td:eq(4)').removeClass('bPawn');
          $('tr.row-6 td:eq(4)').addClass('bPawn');
        }

        if (piece === 'p') {
          $('tr.row-2 td:eq(6)').removeClass('wPawn');
          $('tr.row-3 td:eq(6)').addClass('wPawn');
        }

        if (piece === 'P') {
          $('tr.row-7 td:eq(3)').removeClass('bPawn');
          $('tr.row-5 td:eq(3)').addClass('bPawn');
        }

        if (piece === 'b') {
          $('tr.row-1 td:eq(5)').removeClass('wBishop');
          $('tr.row-2 td:eq(6)').addClass('wBishop');
        }

        if (piece === 'B') {
          $('tr.row-8 td:eq(5)').removeClass('bBishop');
          $('tr.row-7 td:eq(4)').addClass('bBishop');
        }

        if (piece === 'n') {
          $('tr.row-1 td:eq(6)').removeClass('wKnight');
          $('tr.row-3 td:eq(5)').addClass('wKnight');
        }
    });
  });
  });

  // Controller for anything else...
  jQuery('.fa-backward').on('click', function(event){
    console.log('back to the beginning');
    game.reset(); // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this);
