import { cache, createCommand, MessageEmbed, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'hug',
	desc: 'hug someone!',
	runs: async (msg) => {
		const user = cache.guilds
			.find((g) =>
				g.members.has(msg.mentions.length ? msg.mentions[0] : msg.author.id)
			)
			?.members.get(msg.mentions.length ? msg.mentions[0] : msg.author.id);

		if (user?.user === msg.author)
			return sendMessage(
				msg.channelID,
				`You want to hug yourself?!?! Please Mention a user to hug!`
			);
		const body = await (
			await fetch('https://nekos.life/api/v2/img/hug')
		).json();

		const output = new MessageEmbed()
			.setTitle(`**Hug 🤗**`)
			.setDescription(`**${msg.author.username}** hugged **${user?.nick}!**`)
			.setImage(body.url)
			.setColor('#e889e0');

		sendMessage(msg.channelID, {
			embed: output,
		});
	},
});
