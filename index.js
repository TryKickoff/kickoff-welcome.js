/**
 * kickoff-welcome.js
 * @module Kickoff
 * @description A JS console welcome message for the Kickoff framework
 * @author Zander Martineau
 */
const colors = {
	'dark': 'font-weight: bold; color: #181830;',
	'orange': 'font-weight: bold; color: #FE7C08;',
	'link': 'font-weight: bold; color: #6699CC;',
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
