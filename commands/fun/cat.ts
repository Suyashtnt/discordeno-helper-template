import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'cat',
	desc: 'gib cat',
	runs: async (msg) => {
		const body = await (await fetch('https://aws.random.cat/meow')).json();

		const output = new MessageEmbed()
			.setTitle('Cat 🐱')
			.setImage(body.file)
			.setColor('#6df7ff');

		sendMessage(msg.channelID, {
			embed: output,
		});
	},
});
