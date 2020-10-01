import { createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'meme',
	desc: 'MEME',
	runs: async (msg) => {
		const body = await (await fetch('https://some-random-api.ml/meme')).json();

		const output = new MessageEmbed()
			.setTitle(`**Meme** 😂`)
			.setDescription(`**Category:** ${body.category}\n*${body.caption}*`)
			.setImage(body.image)
			.setColor('#ffd56d');

		sendMessage(msg.channelID, { embed: output });
	},
});
