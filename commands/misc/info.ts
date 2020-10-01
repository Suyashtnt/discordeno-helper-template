import { moment } from 'https://deno.land/x/moment/moment.ts';
import {
	Message,
	Guild,
	cache,
	MessageEmbed,
	createCommand,
	avatarURL,
	sendMessage,
	guildIconURL,
} from '../../deps.ts';

export const userInfo = createCommand({
	command: 'userinfo',
	desc: 'Your user info',
	runs: (msg) => {
		const user = cache.guilds
			.find((g) => g.members.has(msg.author.id))
			?.members.get(msg.author.id);
		if (user) {
			const userEmbed = new MessageEmbed()
				.setTitle(`**${msg.author.username}'s Info**`)
				.setThumbnail(`${avatarURL(user)}`)
				.setDescription(
					`
        **ID: \`${msg.author.id}\`**
        **Discrim:** #${msg.author.discriminator}
        **Guild Nickname:** ${msg.member?.nick || `None`}
        **Joined Server:** ${moment(msg.member?.joined_at).format('LLLL')}
        **Avatar URL:** [Click](${avatarURL(user)})
        **Started Boosting:** ${
					msg.member && msg.member.premium_since
						? moment(msg.member.premium_since).format('LLLL')
						: `Not Bought yet :(`
				}
        `
				)
				.setColor('#848484');

			sendMessage(msg.channelID, { embed: userEmbed });
		} else {
			sendMessage(msg.channelID, 'this is weird... Apparently you dont exist');
		}
	},
});

export const serverinfo = createCommand({
	command: 'serverinfo',
	desc: 'this servers info',
	runs: (msg) => {
		const guild = cache.guilds.get(msg.guildID);
		if (guild) {
			const serverEmbed = new MessageEmbed()
				.setTitle(`**${guild?.name} Stats**`)
				.setThumbnail(`${guildIconURL(guild)}`)
				.setDescription(
					`
        **ID: \`${guild?.id}\`**
        **Owner: \`${guild?.ownerID}\`**
        **Members:** ${guild?.memberCount}
        **Channels:** ${guild?.channels.size}
        **Roles:** ${guild?.roles.size}
        **Region: \`${guild?.region}\`**
        **Large Server?: \`${guild?.large}\`**
        `
				)
				.setColor('#848484');
			sendMessage(msg.channelID, { embed: serverEmbed });
		} else {
			sendMessage(
				msg.channelID,
				'according to discord your guild does not exist'
			);
		}
	},
});

export const stats = createCommand({
	command: 'stats',
	desc: 'this bots stats',
	runs: (msg) => {
		const embed = new MessageEmbed()
			.setAuthor(`Bot Stats`, `https://i.imgur.com/q2jd68R.png`)
			.setDescription(
				`
    **Users:** ${cache.guilds.reduce(
			(subtotal, guild) => subtotal + guild.memberCount,
			0
		)}
    **Servers:** ${cache.guilds.size}
    **Channels:** ${cache.channels.size}
    **Messages Sent:** ${cache.messages.size}
    `
			)
			.setColor('#848484');

		sendMessage(msg.channelID, { embed: embed });
	},
});
