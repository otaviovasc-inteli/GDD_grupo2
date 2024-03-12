export default (anims, selectedPlayer) =>{
  // Animate the sprites
  anims.create({
    key: 'player_run',
    frames: anims.generateFrameNumbers(`player${selectedPlayer}`, { start: 10, end: 17 }),
    frameRate: 12,
    repeat: -1
  });

  anims.create({
    key: 'player_idle',
    frames: anims.generateFrameNumbers(`player${selectedPlayer}`, { start: 18, end: 25 }),
    frameRate: 6,
    repeat: -1
  });

  anims.create({
    key: 'player_jump',
    frames: anims.generateFrameNumbers(`player${selectedPlayer}`, { start: 8, end: 9 }),
    frameRate: 2,
    repeat: -1
  });

  anims.create({
    key: 'player_fall',
    frames: anims.generateFrameNumbers(`player${selectedPlayer}`, { start: 6, end: 7 }),
    frameRate: 2,
    repeat: -1
  });
}
