import { inhibitor as inhib } from 'https://x.nest.land/discordeno-helper@2.0.0/Types/inhibitor.ts';
import { cache, sendMessage } from '../deps.ts';
const inhibitor: inhib = {
	desc: 'nsfw inhibitor',
	runs: (cmd, msg) => {
		if (cache.channels.get(msg.channelID)?.nsfw) {
			return true;
		} else {
			sendMessage(
				msg.channelID,
				`\`${cmd.command}\` is an NSFW command. Run it in an NSFW channel`
			);
			return false;
		}
	},
};

export default inhibitor;
