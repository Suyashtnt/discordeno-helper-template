import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'cat',
	desc: 'gib cat',
	runs: async (msg) => {
		const body = await (
			await fetch('https://no-api-key.com/api/v1/animals/cat')
		).json();

		const output = new MessageEmbed()
			.setTitle('Cat 🐱')
			.setImage(body.image)
			.setColor('#6df7ff');

		sendMessage(msg.channelID, {
			embed: output,
		});
	},
});
