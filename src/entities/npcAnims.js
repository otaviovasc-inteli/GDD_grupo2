export default anims =>{
  // Animate the sprites
  anims.create({
    key: 'rexona_idle',
    frames: anims.generateFrameNumbers('rexona_sprite', { start: 0, end: 4 }),
    frameRate: 5,
    repeat: -1
  });

  anims.create({
    key: 'rexona_overlap',
    frames: anims.generateFrameNumbers('rexona_sprite', { start: 5, end: 9 }),
    frameRate: 5,
    repeat: -1
  });

  anims.create({
    key: 'hub_idle',
    frames: anims.generateFrameNumbers('hub_sprite', {start: 0, end: 4}),
    frameRate: 4,
    repeat: -1
  })

  anims.create({
    key: 'hub_overlap',
    frames: anims.generateFrameNumbers('hub_sprite', {start: 5, end: 9}),
    frameRate: 4,
    repeat: -1
  })
}
