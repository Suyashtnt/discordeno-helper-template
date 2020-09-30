import { getPrefix } from "https://x.nest.land/discordeno-helper@1.1.1/db/db.ts";
import { MessageEmbed, createPrefixCommand } from "../../deps.ts";

export default createPrefixCommand("prefix", ["pf"], {
  embed: new MessageEmbed()
    .setTitle("updated!")
    .setDescription(`Your new prefix is now ${getPrefix("instert here")}`),
});
