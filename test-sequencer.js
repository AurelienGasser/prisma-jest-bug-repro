const Sequencer = require('@jest/test-sequencer').default;

// Run test files in alphabetical order
class AlphabeticalSequencer extends Sequencer {
  sort(tests) {
    return [...tests].sort((a, b) => (a.path < b.path ? 1 : -1));
  }
}

module.exports = AlphabeticalSequencer;
