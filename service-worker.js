if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const c=e=>a(e,d),b={module:{uri:d},exports:r,require:c};i[d]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/_icons/postman.png",revision:"7f5fadc660d859decbc057fa5e1bb649"},{url:"_assets/_icons/xampp-logo.png",revision:"2f29019d50f0e0006fcfc71a4e39c973"},{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/omgevingen/xampp-start-screen.png",revision:"9b0655bd7c1945451a8b45795d8ab8f2"},{url:"_assets/projecten/boekProjectmanagement.jpg",revision:"cf3ce70000c430a44245f799dcbcf182"},{url:"_assets/projecten/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/projecten/sessionlogin.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/themas/design.png",revision:"22205138c4cdc9b7b46d04b6b7e40574"},{url:"_assets/themas/diagram.png",revision:"30ec7250132648324e0645030981ac72"},{url:"_assets/themas/process.png",revision:"88ef44328040c7d4db1f46fbd498df23"},{url:"_assets/themas/webserver.png",revision:"2fc6a23d2b456ea023e25025009b419f"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/base.css",revision:"59e3272b41e2dae79b858941906e32b5"},{url:"_css/code.css",revision:"8bd3662b3cc12cd7954c55f0ea6655c8"},{url:"_css/deltion-colors.css",revision:"929b9e62c11267e41aeeaa0104d41306"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_css/prism-one-light.css",revision:"4f05f10368379a1ad0cc653bf32d84c7"},{url:"_css/text.css",revision:"8185c56ec4175298a32c3e7184330f4c"},{url:"_css/video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"backend/api-c/index.html",revision:"6fcf88890a9db48f111518af6ccc2f04"},{url:"backend/api-rbac-php/index.html",revision:"ec9b5547bdda8e980af588b044b0b75a"},{url:"backend/api-server-php/index.html",revision:"66f915b1f5446053906f2434adb2f886"},{url:"backend/evenement/index.html",revision:"bc3a8ea3b168617593ef580a42647514"},{url:"backend/featuretesting-php/index.html",revision:"ec53ddc13920b82e6decd631e7583983"},{url:"backend/functions-php/index.html",revision:"7771898c980f7b9f57288871e956ae36"},{url:"backend/introductie/index.html",revision:"5d37023c5fcf3025354174ec57966c2f"},{url:"backend/mvc-basics-php/index.html",revision:"08ca31027c7811050d53b5461fc2770b"},{url:"backend/mvc-framework-c/index.html",revision:"f889128557651e2c8523dcc516c16b0b"},{url:"backend/mvc-framework-php/index.html",revision:"cb9f7f8f842aa7a822bc2d023c41c40f"},{url:"backend/oop-php/index.html",revision:"a8c7b6e4bdb4ba0a1e242f586a5c3dab"},{url:"backend/sessie-login/index.html",revision:"8e15c72b15abf2596b42ec4640954c80"},{url:"backend/simpele-login/index.html",revision:"05734e8352507235611b04c3727a7d26"},{url:"basis/afstanden/index.html",revision:"12719f1e03d436bd2fffc9b5131bc174"},{url:"basis/array-met-getallen/index.html",revision:"b7438c34315979f1a11290d8588c87d2"},{url:"basis/array/index.html",revision:"66a0aebdb35c65f095cbe69bca05520c"},{url:"basis/boodschappenlijst/index.html",revision:"57e408110e5a9b6c8419ce9ea42dbf4c"},{url:"basis/brackets/index.html",revision:"7397fdc24f2d7f0f602db4badd089c7c"},{url:"basis/breuken/index.html",revision:"a2e0780036c77b05aea8c1836e74a87c"},{url:"basis/cirkel-omtrek/index.html",revision:"778e1537cd4cb8b4edfd8bcfb9699a12"},{url:"basis/cirkel/index.html",revision:"f2dcf6841730e84060bc567894333105"},{url:"basis/combinaties/index.html",revision:"8349872bf8102aff5167b310502f00a5"},{url:"basis/decimale-combinaties/index.html",revision:"2eaaca81665251f893ed2b08bc6fcae6"},{url:"basis/deelbaar/index.html",revision:"30faea9d9aecda4da8b328dec3745561"},{url:"basis/diamant-tekenen/index.html",revision:"980908a4c59fc6c815d4ca3c1d27ee61"},{url:"basis/echte-pyramide/index.html",revision:"05b6f7568c4019d71ec4c593da4a27e7"},{url:"basis/elementen-tellen/index.html",revision:"9dca51815bea3f44ddb3b446ec9b6ac2"},{url:"basis/faculteit/index.html",revision:"7d05c26cecb3ca8cfcf71fa68dbb17c1"},{url:"basis/fizz-buzz/index.html",revision:"f0bcaa18011e6a12b7b97c1177bdd2e1"},{url:"basis/geheimschrijver/index.html",revision:"f6e931053e83e3eb441b9b3ac8d875bf"},{url:"basis/getallenreeks/index.html",revision:"73fc41feff27789d4ab54f5aba429923"},{url:"basis/grootste-getal/index.html",revision:"feb150210159b4bd05b936940a80e259"},{url:"basis/hoeveel-dagen/index.html",revision:"e8edbe4ac7002c3457ab352cb380898b"},{url:"basis/hoofdletters/index.html",revision:"eaff04d45f55d8f5a51b72a9e2156a5f"},{url:"basis/introductie/index.html",revision:"e06a50809d260c2fc73a8b43eb41135a"},{url:"basis/kassa-systeem/index.html",revision:"2cefdac6ec79e7baa4c0149444aad99b"},{url:"basis/kleinste-getal/index.html",revision:"1dbffcf2119e35776067709eb3216c56"},{url:"basis/kleurkiezer/index.html",revision:"a60cd13e18df29b71761da8a9e070608"},{url:"basis/klok/index.html",revision:"6b380ef5400811758587100f2e7f019e"},{url:"basis/knikkers/index.html",revision:"85783c5bd974d635fa3550ca9d65ebb7"},{url:"basis/leeftijd/index.html",revision:"6fd9fc18f175d5c0f0ff577a2b0d6b64"},{url:"basis/leeftijdchecker/index.html",revision:"7420d31c0d46e483aa5aa2adb0505e34"},{url:"basis/leeftijdgrenzen/index.html",revision:"bd366837db2d6bee90dbf27deccf3801"},{url:"basis/letter-a/index.html",revision:"aca9954cc5dec218a88690c5d2edd10f"},{url:"basis/lotto/index.html",revision:"6f7a00408d70e175d85ed5579c438fd1"},{url:"basis/mail-to-username/index.html",revision:"28922f5e565b3d969708c7d8598d5024"},{url:"basis/mijn-info/index.html",revision:"6e7bc43ef3399372d8fe6c66f499c596"},{url:"basis/mini-maxi/index.html",revision:"c9ac7b89bf02a7cc9a1b96aa0459a462"},{url:"basis/mogelijke-opties/index.html",revision:"00e4f066a3d047995409bcfdd64ee747"},{url:"basis/muntje-gooien/index.html",revision:"6d81ac8e44812b187a3cdbe3e0d89eb7"},{url:"basis/namenlijst/index.html",revision:"e4d59456d0252a62ed016f4ffdaa333a"},{url:"basis/oneven-getal/index.html",revision:"7a36c00890ab8f0a940cca64bcefea3a"},{url:"basis/oppervlakte-berekenen/index.html",revision:"8db290849a962dc2ef9a91da27267797"},{url:"basis/patroon-tekenen-2/index.html",revision:"ee402452f282e7941ec1eebb3dad6b82"},{url:"basis/patroon-tekenen/index.html",revision:"08c2cb40eeeba17af59d0bc3b164f31d"},{url:"basis/poll/index.html",revision:"98123441546824d0f292ac127d344e13"},{url:"basis/pyramide/index.html",revision:"c1d558463d2ad272cfe4fc90b2ccbded"},{url:"basis/raad-het-getal/index.html",revision:"d006a018d2bd88fc1ee7b48c8933ec68"},{url:"basis/raad-het-woord/index.html",revision:"585d4e2810d38ab7b82739e27855e528"},{url:"basis/romeinse-getallen/index.html",revision:"18a71a9935740e00685c4a988ba430d3"},{url:"basis/schaakbord/index.html",revision:"4c79036746bd1435bd5c9791da4d4f39"},{url:"basis/schoenverkoper/index.html",revision:"72b45289b679eec4ac4bcd72eb3be4b1"},{url:"basis/steen-papier-schaar/index.html",revision:"88dcea734a2a881095896d3e4e25c933"},{url:"basis/tafels/index.html",revision:"855a642660d0d41eb46c8bff11518c34"},{url:"basis/tekst-doorlopen/index.html",revision:"798596e0427864b29b66b5e4f8af5b33"},{url:"basis/tijd-naar-tekst/index.html",revision:"e2b51c1df6a30d5022a0faabe1df53af"},{url:"basis/urenregistratie/index.html",revision:"1ed9b59d7e92dcfa585bb82f1d971079"},{url:"basis/user-repeat/index.html",revision:"1d9429ce85b0cde6a5883eadb07c8370"},{url:"basis/verbruik-auto/index.html",revision:"d11f612f84faaebba5fd2373733688c0"},{url:"basis/vermoeden-van-collatz/index.html",revision:"1c0d5e143f14245b68e39ac745898091"},{url:"basis/weather-app/index.html",revision:"7095e0fb6ba8f808f3e3592b6fad27d4"},{url:"basis/wie-is-de-winnaar/index.html",revision:"31080a2386bf408774303056ee0ff6da"},{url:"basis/witregel/index.html",revision:"a4ec4397c5599b5c424eb57b91d0af2e"},{url:"basis/xml-to-json/index.html",revision:"be009d816bd7631be0ad62e9e496bd7d"},{url:"basis/zuurstof/index.html",revision:"accdd2ebf81c1dc4f38e00083521d729"},{url:"databases/introductie/index.html",revision:"e452eac982828e84f679fa42017e1034"},{url:"frontend/casino-kaarten-delen/index.html",revision:"7ce2a31c65adebd75b9dffa9ba1aef38"},{url:"frontend/css-basis/index.html",revision:"b134ff94121f6acc222918444819402f"},{url:"frontend/html/index.html",revision:"921839ad44152ff118f634326a7cf06b"},{url:"frontend/introductie/index.html",revision:"7431ddd97410caf3997104a5773d34ed"},{url:"frontend/kleurkiezer/index.html",revision:"f67f1fc87ec8f1ed23bedb9e9f4e25a9"},{url:"index.html",revision:"d14d0cdebeaa247c4d915f06ffd820d2"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"omgeving/c-omgeving/index.html",revision:"854774777574b8c23883665c0cf087bb"},{url:"omgeving/docker/index.html",revision:"1f5f8b89ee9e2f4e6ae7eb706e0f192c"},{url:"omgeving/git/index.html",revision:"cf3266d96697936f0daba1abfedea5b7"},{url:"omgeving/introductie/index.html",revision:"4256d813b63458f2c98bfce749ab19d8"},{url:"omgeving/postman/index.html",revision:"c757acf6128a70d08dcb9909be916ca2"},{url:"omgeving/pycharm/index.html",revision:"563628f07e7abaccfc5ccbd884117fe1"},{url:"omgeving/python-omgeving/index.html",revision:"7a8fc4b873ecab57d9f042cb936ffafe"},{url:"omgeving/tools-voor-webdevelopment/index.html",revision:"10c8f25017fa6cfb76dc86c4d69a5236"},{url:"omgeving/virtualenv/index.html",revision:"936d8f6bbbf0ae0444329e4363a0e678"},{url:"omgeving/visual-studio-code/index.html",revision:"076d54d715fb334a0ddbb7844df1b61a"},{url:"omgeving/xampp/index.html",revision:"6fa5db1717edaaedd5bfef481396aa5f"},{url:"projecten/casussen/index.html",revision:"e12ef3e0b9f46d3c964c70bfd7131a9b"},{url:"projecten/eigen-casus/index.html",revision:"bef892a2bcb84dbfb3b4469616e0639a"},{url:"projecten/introductie/index.html",revision:"6fe3630119b4c525e419a829718d86a9"},{url:"projecten/projectmanagement-scrum/index.html",revision:"c9a93677150fa9108ec14fd0739901a5"},{url:"thema/activiteitendiagram/index.html",revision:"b9a13eb784345e29dc482e7dafe13028"},{url:"thema/classdiagram/index.html",revision:"646c73855078df6fb5f4be9f13d6aac9"},{url:"thema/commentaar-in-de-code/index.html",revision:"f766001b8757aca7e717b6a17f10824f"},{url:"thema/entiteit-relatie-diagram-(erd)/index.html",revision:"045f8433ab056fe5c3df7c33239e77a7"},{url:"thema/introductie/index.html",revision:"8f587d6ec1713294c7b58d88ee655cb9"},{url:"thema/local-domainnames/index.html",revision:"b53d83a6eaa076f7bd3105cc54ae1fac"},{url:"thema/mockups/index.html",revision:"9215d3e80ea294c5cbabacbf498e2710"},{url:"thema/sequencediagram/index.html",revision:"10d93b4ee0e20dbbe32f07a890078c0f"},{url:"thema/wireframes/index.html",revision:"f64651844ae311c172ee3138b4444dfb"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
