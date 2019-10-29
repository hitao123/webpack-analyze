const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const loaderUtils = require('loader-utils');


function warpper(content) {
    return `
    import React from 'react';

    export default class MarkCompoent extends React.Component {
        render() {

            return (
                <div>
                    ${content}
                </div>
            );
        }
    }
    `;
}


module.exports = function (content, map, meta) {
    const loaderContext = this;
    const options = loaderUtils.getOptions(loaderContext);

    console.log(this.cacheable);
    const parser = MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) { }
            }

            return '';
        }
    });

    return warpper(parser.render(content));

};