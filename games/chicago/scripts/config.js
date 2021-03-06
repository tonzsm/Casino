window.gameConfig = {
	symbols: [
		'9',
		'10',
		'a',
		'boy',
		'chicago',
		'cop',
		'j',
		'k',
		'man',
		'q',
		'woman',
		'car',
		'boss'
	],

	isScatter: function(symbol) {
		var scatters = ['car'];

		for (var i = 0; i < scatters.length; ++i) {
			if (symbol == scatters[i]) {
				return true;
			}
		}

		return false;
	},

	isSubstitute: function(symbol) {
		var scatters = ['chicago'];

		for (var i = 0; i < scatters.length; ++i) {
			if (symbol == scatters[i]) {
				return true;
			}
		}

		return false;
	},

	getPreset: function(param) {
		return window.gameConfig.preset;
	},

	getDefPreset: function() {
		return window.gameConfig.getPreset();
	},

	preloaderSettings: {
		'game': 'chicago',
		'name': 'Chicago',
		'sounds': [
			['reel-run-sound', 'reelrun', true],
			['reel-stop-sound-0', 'reelstop-0', true],
			['reel-stop-sound-1', 'reelstop-1', true],
			['reel-stop-sound-2', 'reelstop-2', true],
			['reel-stop-sound-3', 'reelstop-3', true],
			['reel-stop-sound-4', 'reelstop-4', true],
			['cash-sound', 'cash', true],
			['changebet-sound', 'changebet', true],
			['overlay-open', 'overlayopen', true],
			['overlay-close', 'overlayclose', true],
			['gamble-win', 'gamblewin', true],
			['autoplay-forced-stop', 'autoplayforcedstop', true],
			['change-max-bet', 'changemaxbet', true],
			['credit-increase', 'creditincrease', true]
		],
		'imgs': [
			['card-blue', 'card-blue.png'],
			['card-red', 'card-red.png'],
			['card-0', 'card-0.png'],
			['card-1', 'card-1.png'],
			['card-2', 'card-2.png'],
			['card-3', 'card-3.png'],
			['game', 'game.jpg'],
			['game-repeat', 'game-repeat.jpg'],
			['paytable', 'paytable.jpg']
		],
		'scripts': [
			['sound', true],
			['preloader', true],
			['buttons', true],
			['gamble', true],
			['doubletap', true],
			['presets'],
			['indicators']
		],
		'styles': [
			['main'],
			['paytable'],
			['reels'],
			['gamble', true],
			['paytable', true],
			['reels', true],
			['topmenu', true]
		],
		'blocks': [
			['paytable']
		]
	},

	getWinMatrix: function() {
		return {
			'9': [0, 0, 0, 5, 20, 100],
			'10': [0, 0, 0, 5, 20, 100],
			'j': [0, 0, 0, 5, 20, 100],
			'q': [0, 0, 0, 5, 20, 100],
			'k': [0, 0, 0, 5, 20, 100],
			'a': [0, 0, 0, 5, 20, 100],
			'car': [0, 0, 2, 5, 20, 100],
			'chicago': [0, 0, 10, 250, 2500, 10000],
			'boss': [0, 0, 0, 50, 500, 2000], 
			'man': [0, 0, 0, 50, 500, 2000],
			'woman': [0, 0, 0, 30, 200, 1000],
			'cop': [0, 0, 0, 20, 100, 500],
			'boy': [0, 0, 0, 20, 100, 500]
		};
	},

	getMatrixIndeces: function() {
		return [
			[1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0],
			[2, 2, 2, 2, 2],
			[0, 1, 2, 1, 0],
			[2, 1, 0, 1, 2],
			[1, 2, 2, 2, 1],
			[1, 0, 0, 0, 1],
			[2, 2, 1, 0, 0],
			[0, 0, 1, 2, 2],
			[2, 1, 1, 1, 0],
			[0, 1, 1, 1, 2],
			[1, 2, 1, 0, 1],
			[1, 0, 1, 2, 1],
			[0, 1, 0, 1, 0],
			[2, 1, 2, 1, 2],
			[1, 1, 0, 1, 1],
			[1, 1, 2, 1, 1],
			[0, 2, 0, 2, 0],
			[2, 0, 2, 0, 2],
			[2, 0, 1, 0, 2]
		];
	},

	minLines: 1,
	maxLines: 20,
	minLineBet: 8,
	maxLineBet: 100
};

window.gameConfig.preloaderSettings.symbols = window.gameConfig.symbols;

window.gameConfig.presetSymbols = generatePresetSymbols(window.gameConfig.symbols.length);
window.gameConfig.preset = generateRandomPreset(window.gameConfig.presetSymbols, 25);

window.currentSymbolWidth = 208;
window.currentSymbolHeight = 208;