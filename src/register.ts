import { Helper } from 'dojo-cli/interfaces';
import { Yargs } from 'yargs';

export default function(helper: Helper): Yargs {
	helper.yargs.option('f', {
		alias: 'files',
		describe: 'files/directories to be cleaned',
		demand: true
	});

	return helper.yargs;
}
