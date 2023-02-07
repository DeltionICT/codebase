const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const path = require('path');
const fs = require('fs');
const nunjucks = require('nunjucks');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');
const pluginPWA = require('@piraces/eleventy-plugin-pwa');
const CleanCSS = require("clean-css");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("pages", function(collection) {
        const coll = collection.getFilteredByTag("pages");

        for(let i = 0; i < coll.length ; i++) {
            const prevPost = coll[i-1];
            const nextPost = coll[i + 1];

            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }

        return coll;
    });

    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
    });

    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
    ) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
    });

    // eleventyConfig.addFilter("getPost2ByAuthor", (posts, author) => {
	// 	posts.filter(p => p.data.author == author)
	// });


    // eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {
	// 	const result = posts.filter(p => {
    //         myauthors = p.data.author + '';
    //         theAuthors = myauthors.split(',');
    //         if(theAuthors.includes(author)) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     result.forEach((x, i) => console.log(`${x.data.author} ${x.data.title}`))
    //     return result;
	// });
    eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {	
        return posts.filter(p => {
            authorstxt = p.data.author + '';
            authors = authorstxt.split(',');
            trimmed = authors.map(a => a.trim())
            return (trimmed.includes(author)) ?  true :  false;
        })
	});


    eleventyConfig.addFilter("getAuthors", (authors,label) => {
		let labels = label.split(',');
		return authors.filter(a => labels.includes(a.key));
	});

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("pepperoni", function(color) {
        return `/_assets/${color}_pepper.svg`;
    });

    eleventyConfig.addFilter("dir", function(url){
        parts = url.split('/')
        let mypath = ""
        for (i = 0; i < (parts.length - 2); i++) {
            mypath += "/";
            mypath += parts[i];
          }
        return mypath
    });

    eleventyConfig.addLiquidFilter("image", function(url, alt, size){
        return `<img src="${url}" alt="${alt}" style="width:${size}%;">`;
        
    })

    eleventyConfig.addLiquidFilter("author", function(date, name){
        return `<div class="author">${name} | ${date}</div>`;
        
    })
 
    eleventyConfig.addPlugin(pluginPWA, {
        swDest: "./docs/service-worker.js",
        globDirectory: "./docs",
        clientsClaim: true,
        skipWaiting: true
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginTOC, {
        tags:['h2'],
        wrapper:'div',
        ul: true
    })
    
    eleventyConfig.addPassthroughCopy("./src/_css");
    eleventyConfig.addPassthroughCopy("./src/_assets");
    eleventyConfig.addPassthroughCopy("./src/_js");
    eleventyConfig.addPassthroughCopy("./manifest.json");
    eleventyConfig.addShortcode("year", () =>
        `${new Date().getFullYear()}`
    );
    eleventyConfig.addShortcode("video", (yt_id) => {
        // Path to the button component file.
        const filePath = path.join(__dirname, "./src/_includes/video.njk");
        // If the file doesn't exist, render nothing.
        if (!fs.existsSync) {
            return "";
        }
        // If the file does exist, read it.
        const content = fs.readFileSync(filePath).toString();
        // Tell nunjucks to render the file's content, passing the
        // arguments to it as the "component" object.
        return nunjucks.renderString(content, {video: yt_id});

    });

    // eleventyConfig.addShortcode("user", function(firstName, lastName) {
    //     return firstName + ' ' + lastName;
    // });

    // eleventyConfig.addShortcode("pepper", function(color) {
    //     return '/_assets/' + color + '_pepper.svg';
    // });

    //eleventyConfig.addWatchTarget("./src/_css/");
    eleventyConfig.addWatchTarget("./src/**/*");
    //eleventyConfig.addWatchTarget('./src/_js/');
    const markdownItOptions = {
        html:true,
        breaks: false
    }

    const markdownItAnchorOptions = {
        permalink: false,
        tabIndex: false
    }

    const markdownLib = markdownIt(markdownItOptions).use(
        markdownItAnchor,
        markdownItAnchorOptions
    )

    eleventyConfig.setLibrary("md", markdownLib)

    return {
        pathPrefix: "/codebase/",
        dir: {
            input: "src",
            output: "docs",
        },
    };
};



