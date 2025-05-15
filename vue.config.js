process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"home":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./home/index.html","lang":"pt","cacheVersion":12,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/home/"},{"rel":"alternate","hreflang":"pt","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/home/"}],"chunks":["chunk-vendors","chunk-common","home"]},"notas":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./notas/index.html","lang":"pt","cacheVersion":12,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/notas/"},{"rel":"alternate","hreflang":"pt","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/notas/"}],"chunks":["chunk-vendors","chunk-common","notas"]},"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"pt","cacheVersion":12,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/"}],"chunks":["chunk-vendors","chunk-common","index"]},"materia":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./materia/index.html","lang":"pt","cacheVersion":12,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/materia/"},{"rel":"alternate","hreflang":"pt","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/materia/"}],"chunks":["chunk-vendors","chunk-common","materia"]},"aluno":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./aluno/index.html","lang":"pt","cacheVersion":12,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/aluno/"},{"rel":"alternate","hreflang":"pt","href":"https://567d149f-22b7-40d9-9421-5f8ebde831e0.weweb-preview.io/aluno/"}],"chunks":["chunk-vendors","chunk-common","aluno"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
