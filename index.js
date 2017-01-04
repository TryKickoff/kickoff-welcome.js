/**
 * kickoff-welcome.js
 * @module Kickoff
 * @description A JS console welcome message for the Kickoff framework
 * @author Zander Martineau
 * https://github.com/TryKickoff/kickoff-welcome.js
 */
const colors = {
	'orange': 'background-color:#FE7C08;color:#6d3300;padding:5px;line-height:20px;',
	'dark': 'background-color:#181830;color:#fff;padding:5px;line-height:20px;',
	'reset': 'background-color:transparent;',
};

const isIE = !!window.ActiveXObject;

if (isIE) {
	console.log(`\n \u276F KICKOFF - http://trykickoff.com \u276F \n\n`)
} else {
	console.log(`\n%c \u276F %c KICKOFF - http://trykickoff.com %c \u276F %c\n\n`,
		colors.orange,
		colors.dark,
		colors.orange,
		colors.reset,
	);
}
