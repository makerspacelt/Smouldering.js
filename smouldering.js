/*
 * Smouldering.js
 *
 * Copyright 2013, Karolis Grinkus - http://kartais.lt
 *
 * Github: https://github.com/makerspacelt/Smouldering.js
 */

(function ( undefined ) {

	'use strict';

	var Smouldering = Smouldering || function ( options ) {

		var settings = {},

			ctx,

			height,

			width,

			shapes = {
				mask: {
					draw: function () {
						ctx.beginPath();
						ctx.moveTo( width * 0.5, height * 0.5 );
						ctx.lineTo( width * 0.25, height * 0.5 * 1.618 );
						ctx.lineTo( width * 0.45, height * 0.475 * 1.618 );
						ctx.lineTo( width * 0.45, height );
						ctx.bezierCurveTo(
							width * 0.25, height,
							width * 0.1, height * 0.9,
							width * 0.05, height * 0.5 * 1.618
						);
						ctx.bezierCurveTo(
							0, height* 0.65,
							width * 0.3, height * 0.35 * 1.618,
							width * 0.2, height * 0.45
						);
						ctx.bezierCurveTo(
							width * 0.325, height * 0.525,
							width * 0.3, height * 0.6,
							width * 0.3, height * 0.6
						);
						ctx.bezierCurveTo(
							width * 0.55, height * 0.5 * 0.618,
							0, height * 0.5 * 0.618,
							width * 0.45, 0
						);
						ctx.bezierCurveTo(
							width * 0.25, height * 0.2,
							width * 0.4, height * 0.425,
							width * 0.55, height * 0.35
						);
						ctx.bezierCurveTo(
							width * 0.7, height * 0.25,
							width * 0.35, height * 0.25,
							width * 0.618, 0
						);
						ctx.bezierCurveTo(
							width * 0.45, height * 0.25,
							width * 0.875, height * 0.25,
							width * 0.7, height * 0.45
						);
						ctx.bezierCurveTo(
							width * 0.65, height * 0.5,
							width * 0.6, height * 0.7,
							width * 0.75, height * 0.618
						);
						ctx.bezierCurveTo(
							width * 0.85, height * 0.55,
							width * 0.7, height * 0.55,
							width * 0.9, height * 0.45
						);
						ctx.bezierCurveTo(
							width * 0.8, height * 0.55,
							width, height * 0.65,
							width * 0.9, height * 0.5 * 1.618
						);
						ctx.bezierCurveTo(
							width * 0.75, height,
							width * 0.618, height,
							width * 0.55, height
						);
						ctx.lineTo( width * 0.55, height * 0.475 * 1.618 );
						ctx.lineTo( width * 0.75, height * 0.5 * 1.618 );
						ctx.closePath();
					}
				}
			},

			init = function ( options ) {

				var container = options.container,
					canvas;

				height = container.offsetHeight;
				width = height / 1.618;

				settings = options;

				canvas = document.createElement('canvas');
				container.appendChild( canvas );
				canvas.height = height;
				canvas.width = width;

				settings.canvas = canvas;
				ctx = canvas.getContext('2d');

				ctx.save();
				shapes.mask.draw();
				ctx.clip();

				ctx.fillStyle = '#8ED6FF';
				ctx.fillRect( 0, 0, width, height );

				ctx.restore();

			};

		init( options );

	};

	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = Smouldering;
	}

	if ( typeof ender === 'undefined' ) {
		this.Smouldering = Smouldering;
	}

	if ( typeof define === 'function' && define.amd ) {
		define('Smouldering', [], function () {
			return Smouldering;
		});
	}


}).call( this );