import { createCommand, sendMessage, MessageEmbed } from '../../deps.ts';

export default createCommand({
	command: '8ball',
	desc: 'what is your fortune?',
	aliases: ['ask', 'chance', 'dice'],
	runs: (msg, args) => {
		const rando = Number(Math.random().toFixed(1));

		sendMessage(msg.channelID, {
			embed: new MessageEmbed()
				.setTitle('8Ball')
				.setDescription(args ? args.join(' ') : 'something')
				.addField(
					rando <= 0.3
						? 'Nope. Not a chance'
						: rando <= 0.5
						? 'Maybe'
						: rando <= 0.6
						? 'Good chance'
						: rando <= 0.7
						? 'YES. 100%'
						: 'Not sure for now',
					`Your value was ${rando}`
				),
		});
	},
});
