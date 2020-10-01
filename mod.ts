import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { importDirectory } from 'https://x.nest.land/discordeno-helper@1.2.1/Utils/ImportFromDir.ts';
import { startup, db } from './deps.ts';

//until I update the framework with this
export const upSince = Date.now();

const env = config();

db.connect(env.MONGOURL);
importDirectory(Deno.realPathSync('./commands'));
startup(env.TOKEN, 'test.', '730853325418922095', true);
