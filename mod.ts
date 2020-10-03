import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { startup, importDirectory, connect } from './deps.ts';

const env = config();

connect(env.MONGOURL);
importDirectory(Deno.realPathSync('./commands'));
importDirectory(Deno.realPathSync('./monitors'));
startup(env.TOKEN, 'test.', '730853325418922095', true);
