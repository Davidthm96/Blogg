module.exports = function(eleventyConfig) {
    // Copia direttamente la cartella delle immagini nel sito finale
    eleventyConfig.addPassthroughCopy("img");

    // Configura la cartella di input e output
    return {
        dir: {
            input: ".",
            includes: "_includes", // Sposta qui il file layout.njk se vuoi ordine
            output: "_site"
        }
    };
};
