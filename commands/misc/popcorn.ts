import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'popcorn',
	desc: 'eat some popcorn using the popcorn API',
	runs: async (msg, args) => {
		if (args && args[0]) {
			if (args[0] === 'eat') {
				const env = config();
				console.log(env);

				if (env.POPCORNAPIKEY === undefined) {
					sendMessage(
						msg.channelID,
						'sorry but the bot owner did not add an API key for this API :('
					);
				} else {
					console.log(
						JSON.stringify({
							user: msg.author.username,
							key: env.POPCORNAPIKEY.toString(),
							eatMore: args[1] ? Boolean(args[1]) : false,
						})
					);

					const eat = await (
						await fetch('https://popcorn.tnt-man-inc.com', {
							body: JSON.stringify({
								user: msg.author.username,
								key: env.POPCORNAPIKEY.toString(),
								eatMore: args[1] ? Boolean(args[1]) : false,
							}),
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
						})
					).json();

					console.log(eat);

					sendMessage(
						msg.channelID,
						`ate some popcorn! **${eat.amount}** left`
					);
				}
			} else if (args[0] === 'amount') {
				const output = await (
					await fetch('https://popcorn.tnt-man-inc.com')
				).json();
				sendMessage(msg.channelID, {
					embed: new MessageEmbed()
						.setTitle('popcorn!')
						.setDescription(
							`There is **${output.amount}** left and the most recent eater is **${output.user}**`
						)
						.setFooter(
							`made by ${output.contributors.join(' - ')}`,
							'https://popcorn.tnt-man-inc.com'
						),
				});
			} else {
				sendMessage(msg.channelID, 'The only options are `eat` and `amount`');
			}
		} else {
			sendMessage(
				msg.channelID,
				'Choose what to do! The only options are `eat` and `amount`'
			);
		}
	},
});
