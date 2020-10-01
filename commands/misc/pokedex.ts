import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'pokedex',
	desc: 'get info on a pokemon',
	runs: async (msg, args) => {
		let name = args?.join(' ');
		if (!name)
			sendMessage(
				msg.channelID,
				`You'll need to specify a Pokemon to Search for!`
			);

		const pokedex = await (
			await fetch(`https://some-random-api.ml/pokedex?pokemon=${name}`)
		).json();

		const embed = new MessageEmbed()
			.setTitle(`**${pokedex.name}**`)
			.setDescription(
				`
          *${pokedex.description}*
          **ID:** ${pokedex.id}
          **Base Experience:** ${pokedex.base_experience}
          **Generation:** ${pokedex.generation}
          **Type:** ${pokedex.type}
          **Weight:** ${pokedex.weight}
          **Height:** ${pokedex.height}
          `
			)
			.addField(
				`**Stats**`,
				`**HP:** ${pokedex.stats.hp}\n**Attack:** ${pokedex.stats.attack}\n**Defense:** ${pokedex.stats.defense}\n**Speed:** ${pokedex.stats.speed}`
			)
			.addField(
				`**Misc.**`,
				`**Species:** ${pokedex.species.join(
					', '
				)}\n**Abilities:** ${pokedex.abilities.join(
					', '
				)}\n**Gender:** ${pokedex.gender.join(
					', '
				)}\n**Egg Groups:** ${pokedex.egg_groups.join(', ')}`
			)
			.setThumbnail(`https://www.serebii.net/pokemon/art/${pokedex.id}.png`)
			.setColor('#ff8ea1');
		sendMessage(msg.channelID, { embed: embed });
	},
});
