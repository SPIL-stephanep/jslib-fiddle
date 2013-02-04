/*global SpilGames: true*/
/*jslint newcap: true, plusplus: true, browser: true */

/**
 * @title Fiddle.js
 * @module Fiddle
 * @overview Test Tool for JSLib
 * @author Stephane P. Pericat
 * @version 1.0.0
 * @copyright 2013, SpilGames
 */

SpilGames('spilgames.import', {
	fullName: 'Fiddle',
	deps: ['Utils'],
	module: function(Utils) {
		'use strict';

		return {
			init: function() {
				return this;
			}
		}
	}
});