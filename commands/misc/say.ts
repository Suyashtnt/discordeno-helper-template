import { createCommand, sendMessage } from '../../deps.ts';

export default createCommand({
	command: 'say',
	desc: 'make the bot say something',
	runs: (msg, args) => {
		const result = args?.join(' ');
		if (!result)
			return sendMessage(
				msg.channelID,
				`You'll need to specify something for the bot to say!`
			);

		sendMessage(msg.channelID, result);
	},
});
