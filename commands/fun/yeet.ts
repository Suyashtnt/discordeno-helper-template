import { createCommand, sendMessage } from "../../deps.ts";

export default createCommand({
  command: "yeet",
  desc: "YEET!",
  args: ["[person to YEET]"],
  aliases: ["y", "goaway"],
  runs: (msg, args) => {
    if (args != null && args[0] != undefined)
      sendMessage(msg.channelID, `yeeted ${args[0]}`);
    else sendMessage(msg.channelID, "please enter a person to yeet");
  },
});
