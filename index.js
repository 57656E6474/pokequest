#!/usr/bin/env node

const axios = require('axios');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Helper function to fetch Pokémon data
const getPokemonData = async (name) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        return response.data;
    } catch (error) {
        console.error(chalk.red(`Failed to fetch data for ${name}.`));
        process.exit(1);
    }
};

// Pokémon class to manage stats and moves
class Pokemon {
    constructor(name, pokeData) {
        this.name = name;
        this.hp = pokeData.stats[0].base_stat;
        this.attack = pokeData.stats[1].base_stat;
        this.defense = pokeData.stats[2].base_stat;
        this.moves = pokeData.moves.slice(0, 4).map(move => move.move.name);
    }

    attackMove(opponent) {
        const move = this.moves[Math.floor(Math.random() * this.moves.length)];
        console.log(chalk.blue(`${this.name} used ${move}!`));
        const damage = Math.max(this.attack - opponent.defense, 1);
        opponent.hp -= damage;
        console.log(chalk.yellow(`${opponent.name} took ${damage} damage!`));
        if (opponent.hp <= 0) {
            console.log(chalk.green(`${opponent.name} fainted!`));
            return true;
        }
        return false;
    }
}

// Prompt user to choose a starter Pokémon
const choosePokemon = async () => {
    const starters = ["Bulbasaur", "Charmander", "Squirtle"];
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'pokemon',
            message: 'Choose your Pokémon!',
            choices: starters,
        }
    ]);
    return answers.pokemon.toLowerCase();
};

// Randomly encounter a wild Pokémon
const encounterPokemon = async () => {
    const wildPokemon = ["Pidgey", "Rattata", "Zubat"];
    return wildPokemon[Math.floor(Math.random() * wildPokemon.length)].toLowerCase();
};

// Battle function
const battle = async (playerPokemon, wildPokemon) => {
    console.log(chalk.red(`A wild ${wildPokemon.name} appears!`));
    while (playerPokemon.hp > 0 && wildPokemon.hp > 0) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: ['Fight', 'Run'],
            }
        ]);
        if (answers.action === 'Fight') {
            const defeated = playerPokemon.attackMove(wildPokemon);
            if (defeated) {
                console.log(chalk.green(`You defeated ${wildPokemon.name}!`));
                break;
            }
            wildPokemon.attackMove(playerPokemon);
            if (playerPokemon.hp <= 0) {
                console.log(chalk.red(`Your ${playerPokemon.name} fainted! Game Over.`));
                process.exit(1);
            }
        } else {
            console.log(chalk.cyan('You ran away!'));
            break;
        }
    }
};

// Main game loop
const main = async () => {
    const chosenPokemonName = await choosePokemon();
    const playerPokemonData = await getPokemonData(chosenPokemonName);
    const playerPokemon = new Pokemon(chosenPokemonName, playerPokemonData);

    while (true) {
        const wildPokemonName = await encounterPokemon();
        const wildPokemonData = await getPokemonData(wildPokemonName);
        const wildPokemon = new Pokemon(wildPokemonName, wildPokemonData);

        await battle(playerPokemon, wildPokemon);

        const answers = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'continue',
                message: 'Do you want to continue playing?',
            }
        ]);
        if (!answers.continue) {
            console.log(chalk.cyan('Thanks for playing!'));
            break;
        }
    }
};

main();

