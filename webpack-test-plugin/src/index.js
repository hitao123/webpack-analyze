const { ConcatSource } = require('webpack-sources');


const wrapComment = str => {
	return `/** ${str.split("\n").join("\n * ")}\n */`;
};


class WebpackTestPlugin {

    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        const {banner} = this.options || {};

        compiler.hooks.compilation.tap('TestPlugin', compilation => {
            compilation.hooks.optimizeChunkAssets.tap('TestPlugin', chunks => {
                for (const chunk of chunks) {
                    
                    for (const file of chunk.files) {
                        compilation.updateAsset(
                            file, 
                            old => new ConcatSource(wrapComment(banner), "\n", old)
                        );
                    }
                }
            });
        });
    }
}


module.exports = WebpackTestPlugin;
