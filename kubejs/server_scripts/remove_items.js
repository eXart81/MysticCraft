ServerEvents.recipes(event => {
  const blockedItems = [
    'endrem:witch_eye',
    'endrem:undead_eye',
    'endrem:exotic_eye',
    'endrem:cryptic_eye',
    'endrem:witch_pupil',
    'endrem:undead_soul',
    'apotheosis:ender_lead'
  ]
  blockedItems.forEach(item => {
    event.remove({ output: item })
  })
})
