const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const path = require('path');
const fs = require('fs');
const nunjucks = require('nunjucks');
const dateFilter = require('nunjucks-date-filter');
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


    eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {	
        return posts.filter(p => {
            authorstxt = p.data.author + '';
            authors = authorstxt.split(',');
            trimmed = authors.map(a => a.trim())
            return (trimmed.includes(author)) ?  true :  false;
        })
	});

    eleventyConfig.addFilter("getObj", (keys, objs) => {
        keyobjs = objs.filter(c => keys.includes(c.key))
        let sortedkeys = []
        let foundObj = {}
        if(keyobjs.length > 0) {
            keys.forEach(k => {
                (foundObj = keyobjs.find(obj => obj.key == k)) ? sortedkeys.push(foundObj) : false;
            })
        }
        return sortedkeys
    })

    eleventyConfig.addFilter("getOnlyPosts", (posts, labels) => {
        mylabels = (labels + '').split(', ')
        trimmedlabels = mylabels.map(a => a.trim())
        filteredposts = posts.filter(p => {
            datacomplete = 0
            trimmedlabels.forEach(l => {       
                datacomplete += (p.data[l]) ? 1 : 0;

            })
            return datacomplete == trimmedlabels.length
        })
        return filteredposts
    })

    eleventyConfig.addFilter("getNewKey", (objs) => {
        let keys = []
        objs.forEach(obj => keys.push(obj.data.key))
        return (Math.max(...keys) + 1)
    })

    eleventyConfig.addFilter("getPostsByTechnology", (posts, technology) => {	
        return posts.filter(p => {
            pagetechnologytxt = p.data.technology + '';
            pagetechnologies = pagetechnologytxt.split(',');
            pagetrimmed = pagetechnologies.map(a => a.trim())
            return (pagetrimmed.includes(technology)) ?  true :  false;
        })
	});

    eleventyConfig.addFilter("getPostsByKeys", (posts, keys) => {

        x = posts.filter(p => {
            return (p.data.key) ? keys.includes(p.data.key) : false;
        })
        items = []
        keys.forEach(key =>
            items.push(x.find(item => item.data.key == key))
        );
        return items
	});

    eleventyConfig.addFilter("getAssignments", (posts, assignments) => {
        let asstypes = Object.keys(assignments)
        let postobjects = {}
        let sorteditems = []
        asstypes.forEach(key => {
            filteredposts = posts.filter(p => {
                return (p.data.key) ? assignments[key].includes(p.data.key) : false;
            })
            sorteditems[key] = []
            assignments[key].forEach(k =>
                sorteditems[key].push(filteredposts.find(p => p.data.key == k))
            );          
            postobjects[key] = sorteditems[key]
        })
        // x = posts.filter(p => {
        //     return (p.data.key) ? keys.includes(p.data.key) : false;
        // })
        // items = []
        // keys.forEach(key =>
        //   
          //items.push(x.find(item => item.data.key == key))
        // );
        // return items
        return postobjects
	});
    
    eleventyConfig.addFilter("postsAscending", (collection) => {
        return collection.sort((a,b) => {
            // console.log(a.data.page.inputPath)
            if (a.data.page.inputPath > b.data.page.inputPath) return 1;
            else if (a.data.page.inputPath < b.data.page.inputPath) return -1;
            else return 0;
        })
    });


    eleventyConfig.addFilter('toArray', (text) => {
        thetxt = text + ''
        let myarray = thetxt.split(',')
        trimmed = myarray.map(a => a.trim())
        return trimmed
    });

    eleventyConfig.addFilter('date', dateFilter)

    eleventyConfig.addFilter("getAuthors", (authors, author) => {
        authortxt = author + ''
		let myauthors  = authortxt.split(',');
        trimmed = myauthors.map(a => a.trim())
        theauthors =  authors.filter(a => trimmed.includes(a.key));
        authornames = theauthors.map(a => a.name)
        return authornames.join(', ')
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
        for (i = 0; i < 2; i++) {
            mypath += "/";
            mypath += parts[i];
          }
        return mypath
    });

    eleventyConfig.addFilter("image", function(url, alt, size){
        return `<img src="${url}" alt="${alt}" style="width:${size}%;">`;  
    })

    eleventyConfig.addFilter("author", function(date, name){
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



