(function(globals){ // IIFE: Immediately Invoked Function Expression
})(window || module && module.exports || this);

(function(globals){ // IIFE: Immediately Invoked Function Expression
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */

  var moves = [
    { from: { rank: 6, file: 3},
      to: { rank: 4, file: 3}
    },

    { from: { rank: 0, file: 6},
      to: { rank: 2, file: 5}
    },

    { from: { rank: 6, file: 2},
      to: { rank: 4, file: 2}
    },

    { from: { rank: 1, file: 4},
      to: { rank: 2, file: 4}
    },

    { from: { rank: 6, file: 6},
      to: { rank: 5, file: 6}
    },

    { from: { rank: 1, file: 3},
      to: { rank: 3, file: 3}
    },

    { from: { rank: 7, file: 5},
      to: { rank: 6, file: 6}
    },

    { from: { rank: 0, file: 5},
      to: { rank: 1, file: 4}
    },

    { from: { rank: 7, file: 6},
      to: { rank: 5, file: 5}
    }

    ]; // END moves

    var current = 0; // current position

  // You don't need to understand `globals` yet...
  var game = (globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();
      console.log(game.tracer(game.reset));
      return this; // `this` referes to the object `reset` belongs to... AKA `game`
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      var xfrom = moves[current].from; // calling position x from moves.from
      var xto = moves[current].to; // calling position x from moves.to

      if (current <= moves.length) { // if current is less than the length of moves...
        current += 1; // ... increase current position by one

        game.applyMove(xfrom, xto);

      } else {
          return false;
      }
      return this;

    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){

      if (current >= 0) { // if the current position is greater than or equal to 0...
        var xfrom = moves[current].from;
        var xto = moves[current].to;
        current -= 1; // ... decrease current position by 1

        game.applyMove(xto, xfrom);
      }
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // var endBoard = initial(moves[current]);
      for (current = 0; current < moves.length; current++){
        var xfrom = moves[current].from;
        var xto = moves[current].to;
        game.applyMove(xfrom, xto);
      }
      console.log(game.tracer(game.end));
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(from, to) {
      // TODO: Apply the move `from` and `to` to the `board`
      board[to.rank][to.file] = board[from.rank][from.file]; // ex. first move is board[4][3] = board[6][3];
      board[from.rank][from.file] = null; // ex. first move board[6][3] = null;
      console.log(game.tracer(game.applyMove));

      // board[from.rank][from.file] = board[to.rank][to.file];
      // board[to.rank][to.file] = null;
      // console.log(game.tracer(game.applyMove));



      // moves[0].to = moves[0].from; // place we are moving `to` is assigned piece we are moving `from`
      // moves[0].from = null;
      // console.log(moves.join('\n'));

    } // END applyMove
  }); // END game
  // console.log(game.tracer());

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);


// ([6][3], [4][3]),
// ([0][6], [2][5]),
// ([6][2], [4][2]),
// ([1][4], [2][4]),
// ([6][6], [5][6]),
// ([1][3], [3][3]),
// ([7][5], [6][6]),
// ([0][5], [1][4]),
// ([7][6], [5][5])


    // console.log(moves);
// [[6,3], [0,6], [6,2], [1,4], [6,6], [1,3], [7,5], [0,5], [7,6]],
// [[4,3], [2,5], [4,2], [2,4], [5,6], [3,3], [6,6], [1,4], [5,5]]
// var from = moves[0];
// var to = moves[1];
// console.log(from[[0]], to[[0]]);

  // var current = [[4,3], [2,5], [4,2], [2,4], [5,6], [3,3], [6,6], [1,4], [5,5]];
