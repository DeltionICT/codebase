if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const c=e=>i(e,r),b={module:{uri:r},exports:d,require:c};a[r]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(n(...e),d)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/_icons/postman.png",revision:"7f5fadc660d859decbc057fa5e1bb649"},{url:"_assets/_icons/xampp-logo.png",revision:"2f29019d50f0e0006fcfc71a4e39c973"},{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/backend/cursus.png",revision:"b4f1102420169bb69a7dd123242ac097"},{url:"_assets/backend/hondenuitlaatservice.png",revision:"e05c12d6937e374309657507f5564e19"},{url:"_assets/backend/schema_db_login.svg",revision:"e2aac058e5cc856111bf04e7a961b255"},{url:"_assets/backend/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/backend/session_login.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/frontend/colorgame.png",revision:"84d4024db72c7c9164d13f7ae994c649"},{url:"_assets/frontend/js10_afb1.png",revision:"ebd7fc9198069a65868bb7d9c670f1e1"},{url:"_assets/frontend/js10_afb2.png",revision:"1e673bae5ff89201c9909d535a658bcc"},{url:"_assets/frontend/js22_tafels.png",revision:"7151eb9c4651a57f022cf30a4d5f23e1"},{url:"_assets/frontend/js27_form_validate_a.png",revision:"caa68814d4ba9482fd2064f0875b094c"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/omgevingen/test-api-postman-collection.png",revision:"6369bfc5f25e158a5969b87b30e67780"},{url:"_assets/omgevingen/xampp-start-screen.png",revision:"9b0655bd7c1945451a8b45795d8ab8f2"},{url:"_assets/projecten/beer/bier_ip.png",revision:"a366762765017091ea14e66228792fd7"},{url:"_assets/projecten/beer/bier_likes.png",revision:"64331fde7e99e685f45fdbfd79420cce"},{url:"_assets/projecten/beer/fase1.png",revision:"756888e709dc1bfae2dd17b099a768c4"},{url:"_assets/projecten/beer/prj_biertjes.png",revision:"9e6d79f6e49e29a8f324b4a53e31d434"},{url:"_assets/projecten/beer/rating.png",revision:"a3f12fe3e603cef7e14bb83e00cdba7f"},{url:"_assets/projecten/beer/user_inlog.png",revision:"eb73fbadd06352a133111dc908bff279"},{url:"_assets/projecten/beer/user-rating.png",revision:"cf6dd6e64535fec7dba19eedeeee03df"},{url:"_assets/projecten/boekProjectmanagement.jpg",revision:"cf3ce70000c430a44245f799dcbcf182"},{url:"_assets/projecten/handigjoh/handigjoh_erd.png",revision:"7377b13f333abee72b7daf243016f04b"},{url:"_assets/projecten/kraeken/erd_kraeken.png",revision:"5a876e9f0be73fa8810f3681c7f55a4d"},{url:"_assets/projecten/project-laptop.png",revision:"07b746a95550e27c63d86845663caa34"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/themas/activitydiagram-banking.png",revision:"3bef7d9754db1d090434ce4e256b0fff"},{url:"_assets/themas/activitydiagram.png",revision:"6c358320681c64040ca334c170de346d"},{url:"_assets/themas/challenge.png",revision:"0030872ef7faaeae84111dc8435dc14d"},{url:"_assets/themas/class-diagram-example.png",revision:"9c7e532da4d42d717bded884bf5e3304"},{url:"_assets/themas/classdiagram.png",revision:"a3425729876ae7a191b1838dd93997b2"},{url:"_assets/themas/design.png",revision:"22205138c4cdc9b7b46d04b6b7e40574"},{url:"_assets/themas/diagram.png",revision:"30ec7250132648324e0645030981ac72"},{url:"_assets/themas/Entity-Relationship-Diagram-ERD-of-Employee-Database.png",revision:"ec4a9770d7d7a1e3c57998a1f9e66711"},{url:"_assets/themas/Entity-Relationship-Diagram-ERD-of-the-database.png",revision:"3656c5bc2e67f6934d312dd819f85306"},{url:"_assets/themas/erd_xampp.png",revision:"cc164b302157d1c083d9ba4cdedf8929"},{url:"_assets/themas/mockup.png",revision:"3fd6ec4fe97ce38d53da895e7c7f92fc"},{url:"_assets/themas/process.png",revision:"88ef44328040c7d4db1f46fbd498df23"},{url:"_assets/themas/Sequence-diagram-of-data-exchange-between-data-owner-and-data-consumer.png",revision:"368beb110fc0bcedc2a6f56aa2724c90"},{url:"_assets/themas/sequence-diagram-overview.png",revision:"38bd9c6047e779e97dd6557825744ef2"},{url:"_assets/themas/UML_diagram.png",revision:"b5babf915b01290b506ecd7e76e2b376"},{url:"_assets/themas/uml-sequence-example.png",revision:"23f07903bf0c6028af549a1b341a7eca"},{url:"_assets/themas/webserver.png",revision:"2fc6a23d2b456ea023e25025009b419f"},{url:"_assets/themas/wireframe_webpage.png",revision:"d2cf772b6c23d427234e1beb69467aff"},{url:"_assets/themas/Wireframe-example.png",revision:"5cab974d5a86ba361b3ad41b65217ced"},{url:"_assets/themas/wireframe.png",revision:"053120f3a0ad8589b6b71b70debd748c"},{url:"_assets/themas/wireframes_app-process.jpg",revision:"cfec9fc7c03c1f740e03ea655ac6b610"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/05_deltion-colors.css",revision:"1731322ccfe3c058055cdbdc6ac6bf42"},{url:"_css/06_text.css",revision:"8965aa1f01531fe076b23c56100a73c8"},{url:"_css/07_prism-one-light.css",revision:"11212ad6347911b5ac970d6018e90bfc"},{url:"_css/08_video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"_css/10_base.css",revision:"c189fa0e6cc2b7083e52b94df5621e72"},{url:"_css/20_code.css",revision:"29f3e3eed2f338288a5a63c55fa28b7c"},{url:"_css/30_mobile.css",revision:"6c01eae7d844e11519324e96dac170a1"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_js/toggleNav.js",revision:"a114fab31b184d09bd7629df4eed100c"},{url:"authors/cstegeman/index.html",revision:"055c57c524fc524c3afe50ca097b8bb0"},{url:"authors/index.html",revision:"6f2bc6ce217ae0cbf3b08f03c9e7235d"},{url:"authors/jheuvelman/index.html",revision:"2bb6f3b606405e8a88a281208eb2ce57"},{url:"authors/jsiewers/index.html",revision:"76b9d836b84f87b1195323035069a63e"},{url:"authors/kstarreveld/index.html",revision:"f020490d3ada152a3555e9ab3c22dc7e"},{url:"authors/rkerssies/index.html",revision:"08519dac93b041d31fd8d2ec0fb4eb62"},{url:"backend/api-c/index.html",revision:"7257ac04f9c977439b591a1c7fa07251"},{url:"backend/api-rbac-php/index.html",revision:"81291ef4d729e9f4cb18b7a5a222b62e"},{url:"backend/api-server-php/index.html",revision:"1cab57aaf84a90f528a4d35246acbaa2"},{url:"backend/dbq-cursussen/index.html",revision:"3a673af4a382a97abcdfc17febeb33b0"},{url:"backend/erd-vakantiepark/index.html",revision:"79f0a61df12bec2312fd8fe3c72a7505"},{url:"backend/featuretesting-php/index.html",revision:"13b6c387ca4d903497ef8d8f590b293a"},{url:"backend/functions-php/index.html",revision:"a706c76daccf4e0b84c1f5e151c693fc"},{url:"backend/introductie/index.html",revision:"af50350ecb3766efd93ded6d83a17038"},{url:"backend/mvc-basics-php/index.html",revision:"f303cb33b8022916d51908122e6809a6"},{url:"backend/mvc-framework-c/index.html",revision:"6b5e202e7e73a13d62a7adc3255635e3"},{url:"backend/mvc-framework-php/index.html",revision:"b910605636f4d4e3c671ab8e83129ec2"},{url:"backend/oop-php/index.html",revision:"0a08b4c5f45ad4920699f01a17a52d3d"},{url:"backend/phpb-autoformulier/index.html",revision:"1e5f4c12615cb1a565284a85302d1084"},{url:"backend/phpb-database-login/index.html",revision:"dce28c4f03228bc0fcac40e6466968f7"},{url:"backend/phpb-functions/index.html",revision:"c6a7ca5790c3dbff530a41d8eac0efd1"},{url:"backend/phpb-loops/index.html",revision:"54d74c0c87a4733e722d399a88bcdc5e"},{url:"backend/phpb-pizza/index.html",revision:"1e2ebed8b7e312ccc980ef7141bf2031"},{url:"backend/phpb-sessie-login/index.html",revision:"570f60db078f6716688c7b0a08dd46ca"},{url:"backend/phpb-simpele-login/index.html",revision:"5b5343114acbd7c6c1945d3dcaf49a3a"},{url:"backend/phpb-timmerbedrijf/index.html",revision:"948b1f94c6a745787edf655ae0888a6e"},{url:"basis/afstanden/index.html",revision:"bff2591f8b0bac56fe4d8949ac5e0ad2"},{url:"basis/array-met-getallen/index.html",revision:"d20c90a5f7486a16935ab616ed58c941"},{url:"basis/array/index.html",revision:"8bb2767eb631bef031f5bf9b6883e984"},{url:"basis/boodschappenlijst/index.html",revision:"4823f5de4243aac0a3bb9be96362590c"},{url:"basis/brackets/index.html",revision:"5dea71ffd622cf0bf80f61b34a9cce59"},{url:"basis/breuken/index.html",revision:"fa93c358de7618615115142290f9d2f3"},{url:"basis/cirkel-omtrek/index.html",revision:"4dc37225426a910452a07847245c0e3c"},{url:"basis/cirkel/index.html",revision:"b1b2ddb06f68fb3e9747f1325e07d093"},{url:"basis/combinaties/index.html",revision:"cef80b08f609844dba5c6993d4a0d4f0"},{url:"basis/decimale-combinaties/index.html",revision:"f35dbe202a04b0f41119ac21b7967ae7"},{url:"basis/deelbaar/index.html",revision:"90d590c748b5f4598659ec48a6580e8e"},{url:"basis/diamant-tekenen/index.html",revision:"4bf17b248767e9615250d77658eba84f"},{url:"basis/echte-pyramide/index.html",revision:"7594262f7e891c11f8ba331810d0dfd9"},{url:"basis/elementen-tellen/index.html",revision:"70cd65242815b381d577bd7b079dc5ac"},{url:"basis/faculteit/index.html",revision:"0989e5a1de65c13db0e602f7d43ada72"},{url:"basis/fizz-buzz/index.html",revision:"1b01ad8aa96f147bd9b1eafde0ef1ae1"},{url:"basis/geheimschrijver/index.html",revision:"22c3b589d7a61cc549816f7b8c4dbc77"},{url:"basis/getallenreeks/index.html",revision:"1c4a8c8c0d84c6c020b6c38e9319c515"},{url:"basis/grootste-getal/index.html",revision:"a65192f4eaaae37cb600f8c1c552b8a8"},{url:"basis/hoeveel-dagen/index.html",revision:"1d7e039683dd007f55ff1cc9cc4b5c48"},{url:"basis/hoofdletters/index.html",revision:"b8211f6de93e167207b1b3a5e5eb84ea"},{url:"basis/introductie/index.html",revision:"f8347a454856b990dfd326006ec9e3e6"},{url:"basis/kassa-systeem/index.html",revision:"15f26aae34b2158fdd561eb0594eff01"},{url:"basis/kleinste-getal/index.html",revision:"abb270c7342f12864c9fe2b6bc5c6e3d"},{url:"basis/kleurkiezer/index.html",revision:"089fc9eb10a15883edafbf1b3abfb0eb"},{url:"basis/klok/index.html",revision:"7de75f5c3bca7494169be18af4f59744"},{url:"basis/knikkers/index.html",revision:"ce9fb2e34aad52cd12925dbc76aa1117"},{url:"basis/leeftijd/index.html",revision:"3d9718080cfc81497b7b835ade5f4cc1"},{url:"basis/leeftijdchecker/index.html",revision:"4c3e14c5f92ea01e7174ca03c7b79ff9"},{url:"basis/leeftijdgrenzen/index.html",revision:"0c7a3ae012e0204045875e3c4c6f21b4"},{url:"basis/letter-a/index.html",revision:"7cdf697f54d5d391fc8dce2e5b3f3ced"},{url:"basis/lotto/index.html",revision:"f8dafff4058f17c8c874ab4e477cc487"},{url:"basis/mail-to-username/index.html",revision:"4d2d1fe41fd816ac123958108999dac4"},{url:"basis/mijn-info/index.html",revision:"d154fa33bf44360e73c9ff95fb48a738"},{url:"basis/mini-maxi/index.html",revision:"1d24430a0ec9b0e805b29ee4f00ef347"},{url:"basis/mogelijke-opties/index.html",revision:"e20a0283411aced213a1c0346ba53a19"},{url:"basis/muntje-gooien/index.html",revision:"18e21dc080d70c836b3fe3eba0e9b57f"},{url:"basis/namenlijst/index.html",revision:"fb84c6a63bb3ba4a8f3abd0af2f5a0f5"},{url:"basis/oneven-getal/index.html",revision:"e07bc7c1991b52a2771d6aa13586417a"},{url:"basis/oppervlakte-berekenen/index.html",revision:"5ad85cff4c87766071267d1ec2a00084"},{url:"basis/patroon-tekenen-2/index.html",revision:"ab5e2703220e68cb683375d02955e14c"},{url:"basis/patroon-tekenen/index.html",revision:"be51a7bc57e0eb0d49f62035c6ace785"},{url:"basis/poll/index.html",revision:"ad1c6e2871e6a8ebac95532e3309e6e7"},{url:"basis/pyramide/index.html",revision:"eb3c829f4b8ce854604afe9b5d4cd6d7"},{url:"basis/raad-het-getal/index.html",revision:"903a86569e9d6b03bc1a4fdde4c0f3c5"},{url:"basis/raad-het-woord/index.html",revision:"04ab3135d7e70a23f8fcd9b44bb6a206"},{url:"basis/romeinse-getallen/index.html",revision:"c1ad3bdcbac9a5dcabb81fa750f73429"},{url:"basis/schaakbord/index.html",revision:"b4d04bc3b3c8f1baf763d5b52dbea940"},{url:"basis/schoenverkoper/index.html",revision:"0bfef7df284b8bd468ba0ca0cce59062"},{url:"basis/steen-papier-schaar/index.html",revision:"aa294a99631ab201ccc83ef1bfba2c12"},{url:"basis/tafels/index.html",revision:"94ce344fff92f2a892b3b6bc74489bad"},{url:"basis/tekst-doorlopen/index.html",revision:"0f68c5242d71458e899df276c1caa657"},{url:"basis/tijd-naar-tekst/index.html",revision:"acb3941d8c47c0ca0d09240d5ab2258b"},{url:"basis/urenregistratie/index.html",revision:"20aacfccebde4a1ba23a02e5dbb287bf"},{url:"basis/user-repeat/index.html",revision:"d3660f3551b0b3364c7fd5ecc594ddaf"},{url:"basis/variabelen-weergeven/index.html",revision:"a2d9c87ede95811621c75154968dc5d2"},{url:"basis/verbruik-auto/index.html",revision:"6c018ad47695abc92338d1ffaa616f81"},{url:"basis/vermoeden-van-collatz/index.html",revision:"aa7e271a3ff70fd4cea440122c1a6bf4"},{url:"basis/weather-app/index.html",revision:"c04c7ae8188af7ad603460c0c2469065"},{url:"basis/wie-is-de-winnaar/index.html",revision:"4805fdeb925f7f01a214d3fd239c27d3"},{url:"basis/witregel/index.html",revision:"0709ea2d005be95b6410998840b57fcf"},{url:"basis/xml-to-json/index.html",revision:"1d06797e93097ebc7dd3df0a4e626992"},{url:"basis/zuurstof/index.html",revision:"c3d5cc454be052b230d4c067afbea4c0"},{url:"frontend/afbeeldingen-aanpassen/index.html",revision:"e1dca276ab2964d6b2913df5ec3df318"},{url:"frontend/casino-kaarten-delen/index.html",revision:"4967c6591f0b2685043856083f48b7bd"},{url:"frontend/eenvoudige-website/index.html",revision:"8dfb0ed6f366ed8f7b79b1695b56afa6"},{url:"frontend/introductie/index.html",revision:"a677ea52b9dc7cfc9f9045d48b6fb1a1"},{url:"frontend/js10-or-input-value/index.html",revision:"8f8bfdae0219fe08554ef75d82a06322"},{url:"frontend/js22-or-tafels/index.html",revision:"9bbb0669becbcf444f3586d630230f9d"},{url:"frontend/js27-or-form-validate-a/index.html",revision:"fe384bebf564aad83b8173471418ae7a"},{url:"frontend/js27b-or-js-events/index.html",revision:"e8de0528fe33d2c0638c3fc93f2de77d"},{url:"frontend/js40-or-colorgame/index.html",revision:"49f435ea9909bb237c53b9fb31e3b0cb"},{url:"frontend/kleurkiezer/index.html",revision:"4e01c4b02c7ab31eb1f6a0f669d30765"},{url:"index.html",revision:"70b06cda862a97d0c32fed06b3cd4d93"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"omgeving/c-omgeving/index.html",revision:"2b91da65645ee393fb2d64e7c1cdad7f"},{url:"omgeving/docker/index.html",revision:"7a013f63c7834ae139f2a15aba5b58b8"},{url:"omgeving/introductie/index.html",revision:"8b99dafdd52e3cd4fca47b81d46bfdd0"},{url:"omgeving/postman/index.html",revision:"c8ca65a93b1a8315ccdce336f821f1c5"},{url:"omgeving/pycharm/index.html",revision:"f646395a477c0d7c7d202e5825b2df70"},{url:"omgeving/tools-voor-webdevelopment/index.html",revision:"2841b941682b27e5d706c1cf321c1422"},{url:"omgeving/xampp/index.html",revision:"ab696e60733784deaf6be78710da9e6f"},{url:"projecten/beer-casus/index.html",revision:"a8d84869513825428151cfa6264d5b98"},{url:"projecten/eigen-casus/index.html",revision:"a5b9c637e0d1ca65591bde7b52dda398"},{url:"projecten/introductie/index.html",revision:"3f24079e1d43b14399f7c7a3efd8643e"},{url:"projecten/proj-farout/index.html",revision:"fdc3baf228fd621b9f21a84a5ab78661"},{url:"projecten/proj-handig-joh/index.html",revision:"193576e021f7748c4cc3fc5ff05e1510"},{url:"projecten/proj-kraeken/index.html",revision:"84a6f5dbb3c3f3bf8acb897092340073"},{url:"projecten/proj-stembus/index.html",revision:"9b3d2665252061f29962edf57f14be9c"},{url:"projecten/projectmanagement-scrum/index.html",revision:"e4ae2a937e349cfc7efa9ab28b3f8dd7"},{url:"projecten/zwabbertje-casus/index.html",revision:"bc602b646a2fcdfd9ee48975bdaeff8e"},{url:"technologies/all/index.html",revision:"fadfe4e19d64db4152431573e4a7bcc7"},{url:"technologies/api/index.html",revision:"61cae0f631c84d9b1d90e30ef50a722b"},{url:"technologies/c/index.html",revision:"805b36b77cfda584c83b42579523172c"},{url:"technologies/css/index.html",revision:"eb243b79ac09ecd81cf2a53d43361fde"},{url:"technologies/database/index.html",revision:"5b864ba40e56875ee40e1f2ff97b0d9d"},{url:"technologies/html/index.html",revision:"59d112f115203c5ef47981536f40cd4d"},{url:"technologies/js/index.html",revision:"df8062e03742135da20353d6c89ed4af"},{url:"technologies/php/index.html",revision:"4e665551da57ec08aca6c46366cd7258"},{url:"technologies/scrum/index.html",revision:"00c06c4ca1a2453679a53ab322210bb4"},{url:"technologies/testen/index.html",revision:"bd3d710250bee2a0a373d7384f27ea23"},{url:"technologies/uml/index.html",revision:"da6406b8c2745e52269d7c45b65195bc"},{url:"thema/advent-of-code/index.html",revision:"18b64a80845f59410e621a74fbdffc9f"},{url:"thema/app1-or-rn-helloworld/index.html",revision:"e7252871f7a7bcf7a3f7d10d0a38be57"},{url:"thema/app1b-or-rn-calculator/index.html",revision:"59fc483f3f14d12beea23e0979e1546e"},{url:"thema/app2-or-rn-lists-and-beer/index.html",revision:"574466533d93607750441ee5c8aec918"},{url:"thema/app3-or-rn-geolocation/index.html",revision:"779af3815adc5ea5550b649f099cdba6"},{url:"thema/commentaar-in-de-code/index.html",revision:"f3a46c38244e51ab86dd55c50278d2bb"},{url:"thema/introductie/index.html",revision:"19cac82cccfc4304905d49040743732e"},{url:"thema/ontwerpen-or-activiteitendiagram/index.html",revision:"ccb9a8e6d22970f195997f94e6d9f8f3"},{url:"thema/ontwerpen-or-classdiagram/index.html",revision:"9091fa47dce4f23f7b945a0e512fcc8b"},{url:"thema/ontwerpen-or-entiteit-relatie-diagram-(erd)/index.html",revision:"b8582ce7970e6a14a3cad7ef0954559e"},{url:"thema/ontwerpen-or-mockups/index.html",revision:"ec9b67b0e548969df4bd65798f7c733a"},{url:"thema/ontwerpen-or-sequencediagram/index.html",revision:"5f7520b68fa7f8e18885e3a064647e0c"},{url:"thema/ontwerpen-or-wireframes/index.html",revision:"0f6661ae5624ae0e5cba61323041ccb3"},{url:"thema/webservices-or-local-domainnames/index.html",revision:"4f9041586aa4fcfb74acce6cc6e6f169"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
