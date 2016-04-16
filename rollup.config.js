import babel from 'rollup-plugin-babel';
import preset from 'babel-preset-es2015-minimal-rollup';

export default {
	plugins: [
		babel({
			babelrc: false,
			sourceMap: true,
			exclude: 'node_modules/**',
			presets: ['stage-0'],
			plugins: [
				'transform-class-properties',
				['transform-react-jsx', { pragma:'h' }]
			].concat(preset.plugins)

			// Waiting on https://github.com/rollup/rollup-plugin-babel/issues/47
			// presets: [
			// 	'stage-0',
			// 	'es2015-minimal-rollup'
			// ],
			// plugins: [
			// 	'transform-class-properties',
			// 	['transform-react-jsx', { pragma:'h' }]
			// ]
		})
	]
};
