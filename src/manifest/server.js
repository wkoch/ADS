// This file is generated by Sapper — do not edit it!
import index from '../../routes/index.html';
import root from '../../routes/_layout.html';
import error from '../../routes/_error.html';

const d = decodeURIComponent;

export const manifest = {
	server_routes: [
		
	],

	pages: [
		{
			// index.html
			pattern: /^\/?$/,
			parts: [
				{ name: "index", file: "index.html", component: index }
			]
		}
	],

	root,

	error
};

// this is included for legacy reasons
export const routes = {};