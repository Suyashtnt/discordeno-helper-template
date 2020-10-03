import { Logger } from 'https://deno.land/x/optic@0.17/logger/logger.ts';
import { Level } from 'https://deno.land/x/optic@0.17/logger/levels.ts';
import { createMonitor } from '../deps.ts';
const logger = new Logger().withMinLogLevel(Level.INFO);
export default createMonitor({
	desc: 'runs a performance check',
	runs: () => logger.debug(performance.now()),
});
