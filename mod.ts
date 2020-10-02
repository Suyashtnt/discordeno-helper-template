import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { startup, importDirectory, connect } from './deps.ts';

const env = config();

connect(env.MONGOURL);
importDirectory(Deno.realPathSync('./commands'));
startup(env.TOKEN, 'test.', '730853325418922095', true);
