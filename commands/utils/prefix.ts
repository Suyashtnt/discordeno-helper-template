import {
	MessageEmbed,
	createPrefixCommand,
	MessageContent,
} from '../../deps.ts';

export default createPrefixCommand('prefix', ['pf'], (msg) => {
	const embed: MessageContent = {
		embed: new MessageEmbed()
			.setTitle('updated!')
			.setDescription(`Your new prefix is now ${msg.content.split(' ')[1]}`),
	};

	return embed;
});
