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
          $.find('tr').eq(6).find('td').eq(3).removeClass('wPawn');
          $.find('tr').eq(4).find('td').eq(3).addClass('wPawn');
        }
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
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery('.fa-backward').on('click', function(event){
    console.log('back to the beginning');
    game.reset(); // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });
});

// Am I supposed to recognize this?
})(window || module && module.exports || this);
