import { inhibitor as inhib } from 'https://x.nest.land/discordeno-helper@2.0.0/Types/inhibitor.ts';
import { cache } from '../deps.ts';
const inhibitor: inhib = {
	desc: 'nsfw inhibitor',
	runs: (_cmd, msg) => {
		if (cache.channels.get(msg.channelID)?.nsfw) {
			return true;
		} else {
			return false;
		}
	},
};

export default inhibitor;
