if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const c=e=>a(e,n),b={module:{uri:n},exports:r,require:c};i[n]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/_icons/postman.png",revision:"7f5fadc660d859decbc057fa5e1bb649"},{url:"_assets/_icons/xampp-logo.png",revision:"2f29019d50f0e0006fcfc71a4e39c973"},{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/backend/schema_db_login.svg",revision:"e2aac058e5cc856111bf04e7a961b255"},{url:"_assets/backend/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/backend/session_login.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/omgevingen/xampp-start-screen.png",revision:"9b0655bd7c1945451a8b45795d8ab8f2"},{url:"_assets/projecten/boekProjectmanagement.jpg",revision:"cf3ce70000c430a44245f799dcbcf182"},{url:"_assets/projecten/project-laptop.png",revision:"07b746a95550e27c63d86845663caa34"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/themas/design.png",revision:"22205138c4cdc9b7b46d04b6b7e40574"},{url:"_assets/themas/diagram.png",revision:"30ec7250132648324e0645030981ac72"},{url:"_assets/themas/process.png",revision:"88ef44328040c7d4db1f46fbd498df23"},{url:"_assets/themas/webserver.png",revision:"2fc6a23d2b456ea023e25025009b419f"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/base.css",revision:"59e3272b41e2dae79b858941906e32b5"},{url:"_css/code.css",revision:"8bd3662b3cc12cd7954c55f0ea6655c8"},{url:"_css/deltion-colors.css",revision:"929b9e62c11267e41aeeaa0104d41306"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_css/prism-one-light.css",revision:"f8656635695ae1695994e9a30e3e40f6"},{url:"_css/text.css",revision:"8185c56ec4175298a32c3e7184330f4c"},{url:"_css/video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"backend/api-c/index.html",revision:"f7589a76ce25216c71dce001854b942f"},{url:"backend/api-rbac-php/index.html",revision:"79b6fa8d754fd414ce35b1d4e62a4477"},{url:"backend/api-server-php/index.html",revision:"768cb8d17b1fecfe7fcc5a29e06cf3b8"},{url:"backend/database-login/index.html",revision:"deb0fc58e8e73cb53a7ae520619de1ea"},{url:"backend/featuretesting-php/index.html",revision:"23f83c5ffec8c18b7e69c1541d40dbb5"},{url:"backend/functions-php/index.html",revision:"586a17ef8784f8dbfeafe74d850152a8"},{url:"backend/introductie/index.html",revision:"4663b7c60a79d5dd2de3e7acddd404fc"},{url:"backend/mvc-basics-php/index.html",revision:"31fc0b7a20ec2722721cde89d7bdf13a"},{url:"backend/mvc-framework-c/index.html",revision:"abf801fdcfa382df8e7004ab32275822"},{url:"backend/mvc-framework-php/index.html",revision:"0f435c0feeccef463a8252ed279b1364"},{url:"backend/oop-php/index.html",revision:"d49e6def2b25fd81ec097121dd334043"},{url:"backend/pizza/index.html",revision:"5613c02a26649369f46b00e8f03d1b05"},{url:"backend/sessie-login/index.html",revision:"162cba88363df0479020e98459fd0797"},{url:"backend/simpele-login/index.html",revision:"af55b677dbf76d33a0903f221cd789f8"},{url:"backend/timmerbedrijf/index.html",revision:"aef24a5370073da7661bcda2a30a2974"},{url:"basis/afstanden/index.html",revision:"c1134dadabd020d66c9b643659430771"},{url:"basis/array-met-getallen/index.html",revision:"fca47d9db11b7e64ea23f1580cb7ad7c"},{url:"basis/array/index.html",revision:"ae05d9150c4c6e2132d8a9db5a1b1db0"},{url:"basis/boodschappenlijst/index.html",revision:"e421711f288709ae50ecc63cbc80f0f7"},{url:"basis/brackets/index.html",revision:"82787637a458195bdcf13fcab0e625a3"},{url:"basis/breuken/index.html",revision:"a43d2023e9893d02015c3e810f66ada0"},{url:"basis/cirkel-omtrek/index.html",revision:"e7f12dcb0e7e2225a3a96c0dbc30c217"},{url:"basis/cirkel/index.html",revision:"8fed3df8c920c8d8d41cf0c11cc05349"},{url:"basis/combinaties/index.html",revision:"d57a5e67339ba30a65d9780c722af4be"},{url:"basis/decimale-combinaties/index.html",revision:"bf57cf8ec314e90e225d0e45844c40b2"},{url:"basis/deelbaar/index.html",revision:"1e268974920583a9f910b74c6fa75bde"},{url:"basis/diamant-tekenen/index.html",revision:"32f2238666ae9b19fd524f23c5d752fb"},{url:"basis/echte-pyramide/index.html",revision:"38e7a14715a1f5f0bee79c85a6079626"},{url:"basis/elementen-tellen/index.html",revision:"9fecfaee4e6bd370f2d2931b36056969"},{url:"basis/faculteit/index.html",revision:"474a5bf18baa142668b5fe013651b7bf"},{url:"basis/fizz-buzz/index.html",revision:"14de8716d0b2e64bc9cc1181ad8fa9bf"},{url:"basis/geheimschrijver/index.html",revision:"7a428f9525024700e165fe58c1002300"},{url:"basis/getallenreeks/index.html",revision:"da723a5d4c7b16f986bc332caf74ead7"},{url:"basis/grootste-getal/index.html",revision:"d6305b8c62fd77af78b6c9f7fd96df9c"},{url:"basis/hoeveel-dagen/index.html",revision:"6fc7936793136ea540e17af399a71434"},{url:"basis/hoofdletters/index.html",revision:"890a2a805cac1625724289e449ed8781"},{url:"basis/introductie/index.html",revision:"17aff74b119c19af66d839611e35151d"},{url:"basis/kassa-systeem/index.html",revision:"859a7ffbf39433fcf9da02bf53c45aad"},{url:"basis/kleinste-getal/index.html",revision:"9dec312bbecade6d7a35e70b7fbde59e"},{url:"basis/kleurkiezer/index.html",revision:"fb8ad418b3cc33905e977ef6e1779243"},{url:"basis/klok/index.html",revision:"27c3f9b71d18d66736b25cd08b43700f"},{url:"basis/knikkers/index.html",revision:"afae228cecd89443e4d62862c177bd8d"},{url:"basis/leeftijd/index.html",revision:"acdc7de6c85997d18e53232b3b519cb4"},{url:"basis/leeftijdchecker/index.html",revision:"e9ecb169936fd20b9008e78cdde77ab2"},{url:"basis/leeftijdgrenzen/index.html",revision:"72e649c4e95edaf2653e67b94e75ea6e"},{url:"basis/letter-a/index.html",revision:"f0a0c9c29cdd0f86e419b820dcb98363"},{url:"basis/lotto/index.html",revision:"c279fe3494447d4b59669fa0e8d9bbe3"},{url:"basis/mail-to-username/index.html",revision:"87ee43fe4e464db3eba9f289f61956c0"},{url:"basis/mijn-info/index.html",revision:"eedf53a4e71ef0c5540b7b066423a9da"},{url:"basis/mini-maxi/index.html",revision:"873eff1e133c6b521c37f08e307392a4"},{url:"basis/mogelijke-opties/index.html",revision:"08052906e4dda635f03966e8985c7b58"},{url:"basis/muntje-gooien/index.html",revision:"cad8a2f17b064db58dc5c77c6cbfc9c2"},{url:"basis/namenlijst/index.html",revision:"d590e286c4cd56e486338f4104bac383"},{url:"basis/oneven-getal/index.html",revision:"7d8fc31a0edb545528b8446cb7b71d6b"},{url:"basis/oppervlakte-berekenen/index.html",revision:"3e12ad94366a869f2bb6d98ce4fac4f7"},{url:"basis/patroon-tekenen-2/index.html",revision:"9d96067dbd6c4b97762d44feaccadc6a"},{url:"basis/patroon-tekenen/index.html",revision:"8cde8a194fd02ae31e7e293d7d8e7bea"},{url:"basis/poll/index.html",revision:"31408a26efd4a719e5e9b03d31489c69"},{url:"basis/pyramide/index.html",revision:"70113075db70561f7fb2a4704b3c3168"},{url:"basis/raad-het-getal/index.html",revision:"aaa5a3a2d9ef4b3d1f60988dd09e278f"},{url:"basis/raad-het-woord/index.html",revision:"2caaba0a4c97ba3dd7c362cad7c1a7e5"},{url:"basis/romeinse-getallen/index.html",revision:"ebd441429fd9a92aa519a002526954f8"},{url:"basis/schaakbord/index.html",revision:"135dfbf0c6fc9a132c7f8dead147f6f9"},{url:"basis/schoenverkoper/index.html",revision:"8c25b576e278a75c7d06d01e064f06d7"},{url:"basis/steen-papier-schaar/index.html",revision:"7eb7bcc34bdc79263cee39faff85842d"},{url:"basis/tafels/index.html",revision:"b33161df5d8464bb38055ed725b9d34f"},{url:"basis/tekst-doorlopen/index.html",revision:"a0d31b04cea784dcdf42f152d95a1f5a"},{url:"basis/tijd-naar-tekst/index.html",revision:"fb5985f606c194c910357d7280279686"},{url:"basis/urenregistratie/index.html",revision:"3ff68b3e372648b229a58927268125d2"},{url:"basis/user-repeat/index.html",revision:"389556cb460af05bae3263004ea5a190"},{url:"basis/verbruik-auto/index.html",revision:"bfa2ecdad74bb16cdd4e5150cb5e0adc"},{url:"basis/vermoeden-van-collatz/index.html",revision:"6b01c37d73d85ebb8f1748a4473966f8"},{url:"basis/weather-app/index.html",revision:"cb8cde1c9ed39f63be97a53833602bba"},{url:"basis/wie-is-de-winnaar/index.html",revision:"f74622446a39635f9e11bbac2160afd5"},{url:"basis/witregel/index.html",revision:"0f696abae9263c54645021181a126637"},{url:"basis/xml-to-json/index.html",revision:"e50695c88584f0dc160fba50eea06ab6"},{url:"basis/zuurstof/index.html",revision:"0a1f0b42e54007d7c137790410fba5b3"},{url:"databases/introductie/index.html",revision:"1b47c38e87cffb0045f64517f28f1c86"},{url:"frontend/afbeeldingen-aanpassen/index.html",revision:"8ff9a0ec0fb25276ad1ecc3ea77ee33b"},{url:"frontend/casino-kaarten-delen/index.html",revision:"ea84ed9e397e94ba7392b8c5da093e40"},{url:"frontend/css-basis/index.html",revision:"a2583b89cc860faaa2e96135887df50e"},{url:"frontend/eenvoudige-website/index.html",revision:"8b3cdac64274cdcee2cf7bc7a68d6d62"},{url:"frontend/introductie/index.html",revision:"ba58fdfd1cfa9e9f448a2f79dc4906bc"},{url:"frontend/just-testing/index.html",revision:"3acd2e7a810276b2eb68f60030be9b4b"},{url:"frontend/kleurkiezer/index.html",revision:"f14741cd5c3f74bbceabf2f7f34659ef"},{url:"index.html",revision:"a8f1d9ba07aa18665a3fb675e6bfa748"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"omgeving/c-omgeving/index.html",revision:"5f7cf3d8cd6f3bfefce8fa1ad398986f"},{url:"omgeving/docker/index.html",revision:"d311290a11225f1b89e008e8ee7f6d12"},{url:"omgeving/introductie/index.html",revision:"6771ac4dad1e1a6fecacc48e5b85a517"},{url:"omgeving/postman/index.html",revision:"7e9e02fffbbc72a763ce38729c6bb341"},{url:"omgeving/pycharm/index.html",revision:"e3e786823e7ebdfbec78653a1bb3d791"},{url:"omgeving/tools-voor-webdevelopment/index.html",revision:"3daacfa70dfad61a2a614934c16bf1fe"},{url:"omgeving/xampp/index.html",revision:"4f56d9d41da88953c368441c6a835637"},{url:"projecten/beer-casus/index.html",revision:"d441ac229f9da9ead89423eeab1b99f9"},{url:"projecten/eigen-casus/index.html",revision:"fe08ccd55197e477062b5e786a269c82"},{url:"projecten/introductie/index.html",revision:"f735f476964521860c8313b1549467bb"},{url:"projecten/projectmanagement-scrum/index.html",revision:"b1f44ed44405d911ca815cbd26c83aec"},{url:"projecten/zwabbertje-casus/index.html",revision:"11fd61ac56f3557d0ce979d03552f332"},{url:"thema/activiteitendiagram/index.html",revision:"99e2568af03a3da566505dfbb4bed82e"},{url:"thema/classdiagram/index.html",revision:"a139dae435c66997606c3a99f4acbd3a"},{url:"thema/commentaar-in-de-code/index.html",revision:"ce424b2077118d7f03e205510d200ecd"},{url:"thema/entiteit-relatie-diagram-(erd)/index.html",revision:"8b7d59094592a0517cf081f55db35d0b"},{url:"thema/introductie/index.html",revision:"4ced6edf40b18cb2cedac029c335ab4f"},{url:"thema/local-domainnames/index.html",revision:"402fe104183726bfc02513ff888ad6bd"},{url:"thema/mockups/index.html",revision:"e8d93d7615fa367f91652c76e583fa4d"},{url:"thema/sequencediagram/index.html",revision:"2e4a973ba6f41a1ea8bca534f5ba4378"},{url:"thema/wireframes/index.html",revision:"22a5e6fb40672d9c43ccca2e8fa03022"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
