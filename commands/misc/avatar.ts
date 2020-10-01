import {
	createCommand,
	MessageEmbed,
	cache,
	avatarURL,
	sendMessage,
} from '../../deps.ts';

export default createCommand({
	command: 'avatar',
	aliases: ['av', 'pfp', 'profile'],
	desc: 'Show your avatar',
	runs: (msg) => {
		const user = cache.guilds
			.find((g) =>
				g.members.has(msg.mentions.length ? msg.mentions[0] : msg.author.id)
			)
			?.members.get(msg.mentions.length ? msg.mentions[0] : msg.author.id);
		if (user) {
			const output = new MessageEmbed()
				.setTitle(
					`**${user?.nick ? user.nick : user?.user.username}'s Avatar**`
				)
				.setDescription(
					`
          **ID:** ${user?.user.id}
          `
				)
				.setImage(avatarURL(user))
				.setColor('#7289da');
			sendMessage(msg.channelID, { embed: output });
		} else {
			sendMessage(msg.channelID, 'Please enter a valid user!');
		}
	},
});
