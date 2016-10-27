/**
 * kickoff-welcome.js
 * @module Kickoff
 * @description A JS console welcome message for the Kickoff framework
 * @author Zander Martineau
 * https://github.com/TryKickoff/kickoff-welcome.js
 */
const colors = {
	'dark': 'color: #181830;',
	'orange': 'color: #FE7C08;',
	'link': 'color: #6699CC;',
};

module.exports = console.log(`

   %c██╗  ██╗██╗ ██████╗██╗  ██╗ %c██████╗ ███████╗███████╗
   %c██║ ██╔╝██║██╔════╝██║ ██╔╝%c██╔═══██╗██╔════╝██╔════╝
   %c█████╔╝ ██║██║     █████╔╝ %c██║   ██║█████╗  █████╗
   %c██╔═██╗ ██║██║     ██╔═██╗ %c██║   ██║██╔══╝  ██╔══╝
   %c██║  ██╗██║╚██████╗██║  ██╗%c╚██████╔╝██║     ██║
   %c╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ %c╚═════╝ ╚═╝     ╚═╝

   %cThis site was built with the Kickoff framework

   For more information & documentation go to %chttp://trykickoff.com

   `,
   colors.dark,
   colors.orange,
   colors.dark,
   colors.orange,
   colors.dark,
   colors.orange,
   colors.dark,
   colors.orange,
   colors.dark,
   colors.orange,
   colors.dark,
   colors.orange,
   colors.dark,
   colors.link
);
