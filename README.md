# PokeQuest CLI

**PokeQuest CLI** is a command-line Pokémon game where you can battle wild Pokémon, check your Pokémon's stats, and make strategic decisions during battles. Built using Node.js and the PokeAPI, PokeQuest CLI brings the excitement of Pokémon battles to your terminal.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install PokeQuest CLI globally on your system, use the following command:

```bash
npm install -g pokequest
```

This will allow you to run the game from anywhere on your command line.

## Usage
To start the game, simply type:

```bash
pokequest
```

## Game Flow
1. **Choose Your Pokémon**: At the start, you'll be prompted to choose a starter Pokémon from a selection of classic starters.
2. **Battle Wild Pokémon**: Encounter wild Pokémon randomly and engage in battles.
3. **Make Strategic Decisions**: During a battle, choose to fight, check your Pokémon's stats, or run away.
4. **Continue or Exit**: After each battle, decide whether to continue your adventure or exit the game.

## Features
- **Battle System**: Engage in turn-based battles with wild Pokémon.
- **Stats Display**: Check your Pokémon's current stats and available moves during battle.
- **Gold Rewards**: Earn gold based on the difficulty of the opponent after each victorious battle.
- **Random Encounters**: Face a variety of wild Pokémon during your journey.
- **Simple CLI Interface**: Easy-to-use command-line interface for a seamless experience.

## Commands
- **Fight**: Attack the wild Pokémon using one of your Pokémon's moves.
- **Info**: Display your Pokémon's current stats, including HP, attack, defense, moves, and total gold.
- **Run**: Attempt to flee from the battle.

## Example

```bash
$ pokequest

Choose your Pokémon!
1. Bulbasaur
2. Charmander
3. Squirtle

> You chose Charmander!

A wild Zubat appears!
Choose an action:
1. Fight
2. Info
3. Run

> Info
Charmander INFO
HP: 39
Attack: 52
Defense: 43
Moves: Scratch, Growl, Ember, Smokescreen
Gold: 0

Choose an action:
1. Fight
2. Info
3. Run

> Fight
Charmander used Ember!
Zubat took 15 damage!
You defeated Zubat!
You earned 12 gold! You now have 12 gold.
```

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request. Before contributing, please read the Contributing Guidelines.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
