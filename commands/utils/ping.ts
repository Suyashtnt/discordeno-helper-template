import { createCommand, sendMessage, MessageEmbed } from "../../deps.ts";

export default createCommand({
  command: "ping",
  desc: "Pong!",
  runs: (msg) => {
    sendMessage(msg.channelID, {
      embed: new MessageEmbed()
        .setTitle("pong!")
        .setDescription(`Latency is ${Date.now() - msg.timestamp}`),
    });
  },
});
