import { createCommand, sendMessage, MessageEmbed } from '../../deps.ts';

export default createCommand({
	command: '8ball',
	desc: 'what is your fortune?',
	aliases: ['ask', 'chance', 'dice'],
	runs: async (msg, args) => {
		const rando = Number(Math.random().toFixed(1));
		const body = await (
			await fetch('https://no-api-key.com/api/v1/magic8ball')
		).json();
		sendMessage(msg.channelID, {
			embed: new MessageEmbed()
				.setTitle('8Ball')
				.setDescription(args ? args.join(' ') : 'something')
				.addField(body.response, `Using no-api-key.com`),
		});
	},
});
