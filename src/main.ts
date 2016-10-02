import { Command } from 'dojo-cli/interfaces';
import register from './register';
import run from './run';

const command: Command = {
	description: 'Clean files and directories',
	register,
	run
};

export default command;
