if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const c=e=>a(e,n),b={module:{uri:n},exports:r,require:c};i[n]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/_icons/postman.png",revision:"7f5fadc660d859decbc057fa5e1bb649"},{url:"_assets/_icons/xampp-logo.png",revision:"2f29019d50f0e0006fcfc71a4e39c973"},{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/backend/cursus.png",revision:"b4f1102420169bb69a7dd123242ac097"},{url:"_assets/backend/hondenuitlaatservice.png",revision:"e05c12d6937e374309657507f5564e19"},{url:"_assets/backend/schema_db_login.svg",revision:"e2aac058e5cc856111bf04e7a961b255"},{url:"_assets/backend/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/backend/session_login.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/frontend/colorgame.png",revision:"84d4024db72c7c9164d13f7ae994c649"},{url:"_assets/frontend/js10_afb1.png",revision:"ebd7fc9198069a65868bb7d9c670f1e1"},{url:"_assets/frontend/js10_afb2.png",revision:"1e673bae5ff89201c9909d535a658bcc"},{url:"_assets/frontend/js22_tafels.png",revision:"7151eb9c4651a57f022cf30a4d5f23e1"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/omgevingen/xampp-start-screen.png",revision:"9b0655bd7c1945451a8b45795d8ab8f2"},{url:"_assets/projecten/boekProjectmanagement.jpg",revision:"cf3ce70000c430a44245f799dcbcf182"},{url:"_assets/projecten/project-laptop.png",revision:"07b746a95550e27c63d86845663caa34"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/themas/design.png",revision:"22205138c4cdc9b7b46d04b6b7e40574"},{url:"_assets/themas/diagram.png",revision:"30ec7250132648324e0645030981ac72"},{url:"_assets/themas/process.png",revision:"88ef44328040c7d4db1f46fbd498df23"},{url:"_assets/themas/webserver.png",revision:"2fc6a23d2b456ea023e25025009b419f"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/05_deltion-colors.css",revision:"1731322ccfe3c058055cdbdc6ac6bf42"},{url:"_css/06_text.css",revision:"7d750f3dc9fb9c0bb9a278badab0d4d4"},{url:"_css/07_prism-one-light.css",revision:"11212ad6347911b5ac970d6018e90bfc"},{url:"_css/08_video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"_css/10_base.css",revision:"e0259e4d7e70bee8de77a8f84624b7f6"},{url:"_css/20_code.css",revision:"29f3e3eed2f338288a5a63c55fa28b7c"},{url:"_css/30_mobile.css",revision:"bba87ad392787fdc8420acd5e6a23a1f"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_js/toggleNav.js",revision:"71d47dae2879cc67d88fb964f78b2148"},{url:"backend/api-c/index.html",revision:"8a2fb5d2bdfa748d24bfeae63c32547d"},{url:"backend/api-rbac-php/index.html",revision:"f3cc3d0e4ed75dc85e16748c67abbea6"},{url:"backend/api-server-php/index.html",revision:"58319ad03e502fd181246e7ccda52a82"},{url:"backend/database-login/index.html",revision:"03079f80d313ad7215d1139d4e59ddba"},{url:"backend/erd-vakantiepark/index.html",revision:"57675b5eff20e9ae9ee85690a63143b8"},{url:"backend/featuretesting-php/index.html",revision:"bb1dbe51bc5604371b581a602bed6d6f"},{url:"backend/functions-php/index.html",revision:"235a3ce9387c4cdaf7ff857e3b5b24cc"},{url:"backend/introductie/index.html",revision:"0193f96e1d34ea9db60ef156a88f313b"},{url:"backend/mvc-basics-php/index.html",revision:"9099fdc3e103f12b1298582ecaa08ee0"},{url:"backend/mvc-framework-c/index.html",revision:"2e52822dcc2809f3882f223afd1d52ad"},{url:"backend/mvc-framework-php/index.html",revision:"54d346af1cabbe03a29ccdbdfd5e1dd5"},{url:"backend/oop-php/index.html",revision:"904f88a48ad2be2fc39fde9e296df1f9"},{url:"backend/pizza/index.html",revision:"15ef1ce455717941003e3ff77d3e7ba7"},{url:"backend/sessie-login/index.html",revision:"9abdc810002bf07315e71474a8384ae0"},{url:"backend/simpele-login/index.html",revision:"b2fb210a28c70090cf6f51f2b0264dc8"},{url:"backend/sql-cursusdb/index.html",revision:"aa769c5b8665b332dbb67eda49dbbde8"},{url:"backend/timmerbedrijf/index.html",revision:"22e1b6feafc3ba37fcc9548ebab2207d"},{url:"basis/afstanden/index.html",revision:"a7709b71664b55b12e11ff0a44034f0d"},{url:"basis/array-met-getallen/index.html",revision:"4f4f533b96106dba57d2222b8ea974df"},{url:"basis/array/index.html",revision:"aa839e7496af2f62f03e3eb3731cb92d"},{url:"basis/boodschappenlijst/index.html",revision:"8eaf59ce0153ddca555fddf3194af789"},{url:"basis/brackets/index.html",revision:"6d6ac0bff9ff9e594a85ac059d045d3b"},{url:"basis/breuken/index.html",revision:"93c974888c9e1f1fe0bae7c300fcdd40"},{url:"basis/cirkel-omtrek/index.html",revision:"e6720372f35e15fd9ab83e50c7207e23"},{url:"basis/cirkel/index.html",revision:"befe596cd2754a355717f3c21a3496aa"},{url:"basis/combinaties/index.html",revision:"c626cfb939b098d01762ebb053addb8c"},{url:"basis/decimale-combinaties/index.html",revision:"920f11e247c406d2853fd87febcff503"},{url:"basis/deelbaar/index.html",revision:"8bc7499581ba9785ef2009b8af22ffdd"},{url:"basis/diamant-tekenen/index.html",revision:"8ceed623fc6fdfa3937f36ef2385f9c4"},{url:"basis/echte-pyramide/index.html",revision:"c35e3c729dc1bc13d9c6ee9f7cb6e20e"},{url:"basis/elementen-tellen/index.html",revision:"0fb25f613c195dbc0795d0ab95cd1902"},{url:"basis/faculteit/index.html",revision:"4ecb69754705dc388ab7baa9cbf2a998"},{url:"basis/fizz-buzz/index.html",revision:"77f1d6096a36d563ecf7e4b306f138b2"},{url:"basis/geheimschrijver/index.html",revision:"659590a36a24d76e1a0e22d9c52493d2"},{url:"basis/getallenreeks/index.html",revision:"a4caa546c37afb8709910ea1f4285767"},{url:"basis/grootste-getal/index.html",revision:"7e44469d55b2920426318124a6638c60"},{url:"basis/hoeveel-dagen/index.html",revision:"9af1227af374418b4a2506031e680ae1"},{url:"basis/hoofdletters/index.html",revision:"cf1568deb3dc80390228ad782704aec7"},{url:"basis/introductie/index.html",revision:"fb0c4811af014168fde45300bdbc87ae"},{url:"basis/kassa-systeem/index.html",revision:"79206b19539b20221bea47530d8c55d3"},{url:"basis/kleinste-getal/index.html",revision:"92fa816427fee9ae70e9e8f6562e31c6"},{url:"basis/kleurkiezer/index.html",revision:"8759cea2878ef5a2e805daa571483137"},{url:"basis/klok/index.html",revision:"57d6f2b75d4646584e21e19f552282b8"},{url:"basis/knikkers/index.html",revision:"3f083519ab76b29d256513d44325bac9"},{url:"basis/leeftijd/index.html",revision:"791a26e061ff2464236dc84026f7c227"},{url:"basis/leeftijdchecker/index.html",revision:"02539183d0fceeb165bb5856b5b8831d"},{url:"basis/leeftijdgrenzen/index.html",revision:"2603331022ceb2f921f3cbcebe01cae8"},{url:"basis/letter-a/index.html",revision:"b34aec315384ec4abfb52aae79c7aaae"},{url:"basis/lotto/index.html",revision:"56c9774fd9f3032ec06f9b7e198fd510"},{url:"basis/mail-to-username/index.html",revision:"aeeeb77c0dbf7e51316d5528659693e4"},{url:"basis/mijn-info/index.html",revision:"d3371d946a5bc4f77c702af500ef89a0"},{url:"basis/mini-maxi/index.html",revision:"0f2e53d9de6456397a4d3f903a4ace25"},{url:"basis/mogelijke-opties/index.html",revision:"3d5819b064130223be93b2cf4fd8152d"},{url:"basis/muntje-gooien/index.html",revision:"701c4c34ad7951e45ec68ae8f6625add"},{url:"basis/namenlijst/index.html",revision:"8fe9e73b7888ce17292abce28ad8931c"},{url:"basis/oneven-getal/index.html",revision:"3dc87d1c405746e6cfa41d60b6e72bd4"},{url:"basis/oppervlakte-berekenen/index.html",revision:"8908e2f1a7ec0b452247946a241b479f"},{url:"basis/patroon-tekenen-2/index.html",revision:"9b9df884a2f5ca2cac38a8ebc9331ac1"},{url:"basis/patroon-tekenen/index.html",revision:"606af644abb7fb9a31527f0c19389f1b"},{url:"basis/poll/index.html",revision:"55aa9c5f02d7e392bd46f1165070a879"},{url:"basis/pyramide/index.html",revision:"6f2c9b3c050bf339460b6381a4163f32"},{url:"basis/raad-het-getal/index.html",revision:"e0b479e2569c2f6d939265eb50bcb31a"},{url:"basis/raad-het-woord/index.html",revision:"5e4ad9a8dd60863fdb7a7cdb764d5480"},{url:"basis/romeinse-getallen/index.html",revision:"bbae5bfd0b19e8ec74c37919632eaf40"},{url:"basis/schaakbord/index.html",revision:"d5ae202e9036e83a59195a6b0b169c02"},{url:"basis/schoenverkoper/index.html",revision:"519a58d174a6cbe5a659ebac4fe88048"},{url:"basis/steen-papier-schaar/index.html",revision:"2895fef92e6d5a9cb880c56dfbc91c34"},{url:"basis/tafels/index.html",revision:"f9ab0624b20e3236b2587523d4407463"},{url:"basis/tekst-doorlopen/index.html",revision:"7ee6441f2c4bf7cef089c3cfcaff7588"},{url:"basis/tijd-naar-tekst/index.html",revision:"ed2952d9338af9d9074084a879f5ad1a"},{url:"basis/urenregistratie/index.html",revision:"9febe81a73a0a342e821f412e55dc579"},{url:"basis/user-repeat/index.html",revision:"1b9adaf6fa4d39db5c462750db8b639f"},{url:"basis/verbruik-auto/index.html",revision:"c4999f1023db077512f5937618aee817"},{url:"basis/vermoeden-van-collatz/index.html",revision:"740d9cf1069b31204d39ab2a61940d9b"},{url:"basis/weather-app/index.html",revision:"a2cd91a4ded38a1ac3e1356160dc7597"},{url:"basis/wie-is-de-winnaar/index.html",revision:"35b8347112e4b5ae6f6e011b4dd5f19f"},{url:"basis/witregel/index.html",revision:"1999a05585b4b622d415d3c06622bbe3"},{url:"basis/xml-to-json/index.html",revision:"27d7053c312f8d988bc5a3716f7f7329"},{url:"basis/zuurstof/index.html",revision:"971ec253667030455744beff521336d6"},{url:"databases/introductie/index.html",revision:"63de62a52bdc61c444a513e973675c3f"},{url:"frontend/afbeeldingen-aanpassen/index.html",revision:"a370c7af526d4ca55e440252c09d4bcd"},{url:"frontend/casino-kaarten-delen/index.html",revision:"1e4b9caca3ea769f8df5d3e4a1ccfcd0"},{url:"frontend/eenvoudige-website/index.html",revision:"c58b03968af39ae24dd5870b8ecad18d"},{url:"frontend/introductie/index.html",revision:"d1a2db925a775741d36b77b26e8c0bd1"},{url:"frontend/js10-or-input-value/index.html",revision:"089b46d30cc17d631a50592e94337d50"},{url:"frontend/js22-or-tafels/index.html",revision:"aa29468eaa6634e85d7ad087aa18ec3f"},{url:"frontend/js40-or-colorgame/index.html",revision:"a57c172f22753f85499e20ffaeeb256d"},{url:"frontend/kleurkiezer/index.html",revision:"890bd51adb732f4fc9708b1cb432b47f"},{url:"index.html",revision:"8e338b45d725dac665b18dbb105c68e5"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"omgeving/c-omgeving/index.html",revision:"28e415cc6eb93c1656711a82fbcab1a3"},{url:"omgeving/docker/index.html",revision:"ea95fe447a9b309fa8599941848a1a40"},{url:"omgeving/introductie/index.html",revision:"b94c451b8d1f0d1b8218785ed5eb624d"},{url:"omgeving/postman/index.html",revision:"a0ba5dfcd9af76a33f415c8d4b34ef19"},{url:"omgeving/pycharm/index.html",revision:"168912c108ab1c521c88d74c265f9e36"},{url:"omgeving/tools-voor-webdevelopment/index.html",revision:"e6f4b3d728450b9509cd5a888799b95c"},{url:"omgeving/xampp/index.html",revision:"6cb3134135be30f744a7d9b703f5b80e"},{url:"projecten/beer-casus/index.html",revision:"51294bf345fd00700949f679bd6afde1"},{url:"projecten/eigen-casus/index.html",revision:"633e80d3e5afcdefdb5e26018ad595a6"},{url:"projecten/introductie/index.html",revision:"73cf4cd9736731112026d70bb33452d6"},{url:"projecten/projectmanagement-scrum/index.html",revision:"c11d236e73b01d445f48d9ebba1d886d"},{url:"projecten/zwabbertje-casus/index.html",revision:"e41155a7f1e03f4c80cae554c346ab6d"},{url:"thema/activiteitendiagram/index.html",revision:"138db50c921732fd64a7c600a7fdcbc2"},{url:"thema/classdiagram/index.html",revision:"b5c1914b0648049f7797cec657a5557d"},{url:"thema/commentaar-in-de-code/index.html",revision:"4549f5521158bd87e765831f464e655e"},{url:"thema/entiteit-relatie-diagram-(erd)/index.html",revision:"cd50a144c63a7fba0a23c2adfe5c8a5e"},{url:"thema/introductie/index.html",revision:"3bbb9647c5a7efc8d51f5de09976367a"},{url:"thema/local-domainnames/index.html",revision:"fd01f8bf8943e234bfea24a483a7b333"},{url:"thema/mockups/index.html",revision:"14dc7be4bb2a2912e4d741e367032384"},{url:"thema/sequencediagram/index.html",revision:"5096021fbd3d28109bf4d53ed1c4da39"},{url:"thema/wireframes/index.html",revision:"b701b01516c370bd663d2c0ce63c0265"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
