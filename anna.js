// Task #1 The fast attack is available when the knight is sleeping
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

// Task #2 A useful spy captures information, which they can't do if everyone's asleep.
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

// Task #3 You'll get caught by the archer if you signal while they're awake.
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

// Task #4 The final stage in the plan: freeing Annalyn's best friend.
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return (petDogIsPresent && !archerIsAwake)|| (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
