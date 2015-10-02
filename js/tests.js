(function(globals){ // IIFE
 // Not this again...

   // it('should totally fail', function(){
   //   chai.expect(false).equals(true);
   // })

   it('should have a `game` in the `window`', function(){
     chai.expect(window.game).to.be.equal(game);
     chai.expect(game).to.be.an('object');
     chai.expect(game.board).to.a('function'); // ???
   });

   it('should give me a big array as the board', function(){
     var board = game.board();

     chai.expect(board).to.be.an('array');
     // chai.expect(game.board().length).to.be.equal(8);
     chai.expect(board).to.have.length(8);

     chai.expect(board[0]).to.be.a('array');
     chai.expect(board[0]).to.have.length(8);

     chai.expect(board[0][0]).to.be.a('string');
     chai.expect(board[0][0]).to.equal('R');

   }); // END it should be a big Array

it.skip('should tell me what piece is at the position', function(){
  // expect(gam.pieceAt)
});

   it('should be able to move a piece', function(){
     // board[0][0] = board[0][1];
     // Initialize the Enviornment...
     game.reset(); //Re-initialize the board;
     var board = game.board();

    // Test the Preconditions...
     expect(board[6][3]).to.equal('p');
     expect(board[4][3]).to.be(null);

    // Action to change the world...
     expect(game.applyMove(
       // TODO: one day take { file: 'd', rank: 2 },
       { rank: 6, file: 3 }, // from
       // TODO: one day take { file: 'd', rank: 4 }
       { rank: 4, file: 3 } // to
     )).to.equal(undefined);

     var board = game.board(); // re-copy the board? (dont need to do again)

     // Test the Postconditions
     chai.expect(board[6][3]).to.be.equal(null);
     chai.expect(board[4][3]).to.be.equal('p');

    //  expect(game.tracer()).to.equal([
    //     '|R|N|B|Q|K|B|N|R|',
    //     '|P|P|P|P|P|P|P|P|',
    //     '| | | | | | | | |',
    //     '| | | | | | | | |',
    //     '| | | | | | | | |',
    //     '| | | | | | | | |',
    //     '|p|p|p|p|p|p|p|p|',
    //     '|r|n|b|q|k|b|n|r|',
    //  ].join('\n') + '\n');
   });  // it should move a piece

it('should be able to move a different piece', function(){
  //create the world anew (aka initialize enviornment)
   game.reset();
   var board = game.board();

// function toTracer(rows){
//   return rows.join('\n') + '\n';
// }

   // Test the Precondition
   chai.expect(game.tracer()).to.equal([
     '|R|N|B|Q|K|B|N|R|',
     '|P|P|P|P|P|P|P|P|',
     '| | | | | | | | |',
     '| | | | | | | | |',
     '| | | | | | | | |',
     '| | | | | | | | |',
     '|p|p|p|p|p|p|p|p|',
     '|r|n|b|q|k|b|n|r|',
   ].join('\n') + '\n');
// notes to self for later...
  // var secondMove = moves[1] = {
  //   from: {rank 0, file: 6},
  //   to: { rank: 2, file: 5}
  // }
   // Action: `applyMove` for (black night to f6) to change the world...
   expect(game.applyMove(
     {rank: 0, file: 6},
     {rank: 2, file: 5}
   )).to.be.undefined;
   // Test the Postconditions
});



   it.skip('should be able to advance to the next move', function(){
    //  chai.expect(board[0][0]).to.be.a('string');
    //  chai.expect(board[0][0]).to.equal('p');
   });

 // There's that crazy line again...
 })(window || module && module.exports || this);
