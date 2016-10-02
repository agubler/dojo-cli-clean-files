import { Argv } from 'yargs';
import { Helper } from 'dojo-cli/interfaces';
import * as rimraf from 'rimraf';
import * as chalk from 'chalk';

export interface CleanArgs extends Argv {
	files: string;
}

// TODO put guards in against current working directory and files outside of the current
// working directory
export default async function(helper: Helper, args: CleanArgs) {
	const filepaths = args.files.split(',');
	const promises = filepaths.map((filepath) => {
		console.info(`cleaned '${filepath}' path\n`);
		return new Promise((resolve, reject) => {
			rimraf(filepath, (err) => {
				if (err) {
					reject(err);
				}
				resolve();
			});
		});
	});

	return Promise.all(promises).then(() => {
		console.log(chalk.green('successfully cleaned files/directories'));
	});
}
