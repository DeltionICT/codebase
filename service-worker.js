if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const c=e=>a(e,r),b={module:{uri:r},exports:d,require:c};i[r]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(n(...e),d)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_assets/_icons/postman.png",revision:"7f5fadc660d859decbc057fa5e1bb649"},{url:"_assets/_icons/xampp-logo.png",revision:"2f29019d50f0e0006fcfc71a4e39c973"},{url:"_assets/api/functions/jungle_home.png",revision:"28204240da92aa360e4d02dc57c979f4"},{url:"_assets/api/functions/jungle_login.png",revision:"a030411270e7629db649a162eac99711"},{url:"_assets/api/functions/jungle_logoff.png",revision:"0a06d1b0507f8915eccd0c8e2768b3e9"},{url:"_assets/api/functions/jungle_userdata.png",revision:"a9dc2c6e29ec4997899003c21a0485c5"},{url:"_assets/api/Laravel-logo.png",revision:"f17b1720fc57eedc286ec2b0ce6c2428"},{url:"_assets/api/mvc-concept.png",revision:"00b771e6bf805ee482012199b19d1883"},{url:"_assets/api/PHP-logo.png",revision:"a64aa98408a0d6df8f0accb876456b7c"},{url:"_assets/backend/cursus.png",revision:"b4f1102420169bb69a7dd123242ac097"},{url:"_assets/backend/hondenuitlaatservice.png",revision:"e05c12d6937e374309657507f5564e19"},{url:"_assets/backend/schema_db_login.svg",revision:"e2aac058e5cc856111bf04e7a961b255"},{url:"_assets/backend/schema_loginform.svg",revision:"0885303ef53850a01345e17667453d89"},{url:"_assets/backend/session_login.svg",revision:"773c15a104163a06e978d9a44d59cb60"},{url:"_assets/basis/schaakbord.svg",revision:"e70672c1bec68fbdf00c2d0fbf664732"},{url:"_assets/csharp/VSinstall.png",revision:"caa1bb58de1b58fa924fffd8f884af29"},{url:"_assets/deltion.svg",revision:"68e26a799f30abcb831573894c87d8e9"},{url:"_assets/favicon.ico",revision:"e4c171f66d7add873bbb162f106b692b"},{url:"_assets/frontend/colorgame.png",revision:"84d4024db72c7c9164d13f7ae994c649"},{url:"_assets/frontend/js10_afb1.png",revision:"ebd7fc9198069a65868bb7d9c670f1e1"},{url:"_assets/frontend/js10_afb2.png",revision:"1e673bae5ff89201c9909d535a658bcc"},{url:"_assets/frontend/js22_tafels.png",revision:"7151eb9c4651a57f022cf30a4d5f23e1"},{url:"_assets/frontend/js27_form_validate_a.png",revision:"caa68814d4ba9482fd2064f0875b094c"},{url:"_assets/green_pepper.svg",revision:"9f01083082d9b7c40a10ffefec5c1bbe"},{url:"_assets/omgevingen/test-api-postman-collection.png",revision:"6369bfc5f25e158a5969b87b30e67780"},{url:"_assets/omgevingen/xampp-start-screen.png",revision:"9b0655bd7c1945451a8b45795d8ab8f2"},{url:"_assets/projecten/beer/bier_ip.png",revision:"a366762765017091ea14e66228792fd7"},{url:"_assets/projecten/beer/bier_likes.png",revision:"64331fde7e99e685f45fdbfd79420cce"},{url:"_assets/projecten/beer/fase1.png",revision:"756888e709dc1bfae2dd17b099a768c4"},{url:"_assets/projecten/beer/prj_biertjes.png",revision:"9e6d79f6e49e29a8f324b4a53e31d434"},{url:"_assets/projecten/beer/rating.png",revision:"a3f12fe3e603cef7e14bb83e00cdba7f"},{url:"_assets/projecten/beer/user_inlog.png",revision:"eb73fbadd06352a133111dc908bff279"},{url:"_assets/projecten/beer/user-rating.png",revision:"cf6dd6e64535fec7dba19eedeeee03df"},{url:"_assets/projecten/boekProjectmanagement.jpg",revision:"cf3ce70000c430a44245f799dcbcf182"},{url:"_assets/projecten/handigjoh/handigjoh_erd.png",revision:"7377b13f333abee72b7daf243016f04b"},{url:"_assets/projecten/kraeken/erd_kraeken.png",revision:"5a876e9f0be73fa8810f3681c7f55a4d"},{url:"_assets/projecten/project-laptop.png",revision:"07b746a95550e27c63d86845663caa34"},{url:"_assets/purple_pepper.svg",revision:"bc6f4d317d05ed33900e2c1431656ba3"},{url:"_assets/red_pepper.svg",revision:"a79d08c61f076a0bfc12b3c4c10d76bd"},{url:"_assets/themas/activitydiagram-banking.png",revision:"3bef7d9754db1d090434ce4e256b0fff"},{url:"_assets/themas/activitydiagram.png",revision:"6c358320681c64040ca334c170de346d"},{url:"_assets/themas/challenge.png",revision:"0030872ef7faaeae84111dc8435dc14d"},{url:"_assets/themas/class-diagram-example.png",revision:"9c7e532da4d42d717bded884bf5e3304"},{url:"_assets/themas/classdiagram.png",revision:"a3425729876ae7a191b1838dd93997b2"},{url:"_assets/themas/design.png",revision:"22205138c4cdc9b7b46d04b6b7e40574"},{url:"_assets/themas/diagram.png",revision:"30ec7250132648324e0645030981ac72"},{url:"_assets/themas/Entity-Relationship-Diagram-ERD-of-Employee-Database.png",revision:"ec4a9770d7d7a1e3c57998a1f9e66711"},{url:"_assets/themas/Entity-Relationship-Diagram-ERD-of-the-database.png",revision:"3656c5bc2e67f6934d312dd819f85306"},{url:"_assets/themas/erd_xampp.png",revision:"cc164b302157d1c083d9ba4cdedf8929"},{url:"_assets/themas/mockup.png",revision:"3fd6ec4fe97ce38d53da895e7c7f92fc"},{url:"_assets/themas/process.png",revision:"88ef44328040c7d4db1f46fbd498df23"},{url:"_assets/themas/Sequence-diagram-of-data-exchange-between-data-owner-and-data-consumer.png",revision:"368beb110fc0bcedc2a6f56aa2724c90"},{url:"_assets/themas/sequence-diagram-overview.png",revision:"38bd9c6047e779e97dd6557825744ef2"},{url:"_assets/themas/UML_diagram.png",revision:"b5babf915b01290b506ecd7e76e2b376"},{url:"_assets/themas/uml-sequence-example.png",revision:"23f07903bf0c6028af549a1b341a7eca"},{url:"_assets/themas/webserver.png",revision:"2fc6a23d2b456ea023e25025009b419f"},{url:"_assets/themas/wireframe_webpage.png",revision:"d2cf772b6c23d427234e1beb69467aff"},{url:"_assets/themas/Wireframe-example.png",revision:"5cab974d5a86ba361b3ad41b65217ced"},{url:"_assets/themas/wireframe.png",revision:"053120f3a0ad8589b6b71b70debd748c"},{url:"_assets/themas/wireframes_app-process.jpg",revision:"cfec9fc7c03c1f740e03ea655ac6b610"},{url:"_assets/tools/postman.png",revision:"fe0e1d40b667f8437a28e1cc7097c206"},{url:"_assets/weather.png",revision:"f0ca9629a6960522ab0e5f8e23fc9100"},{url:"_css/05_deltion-colors.css",revision:"1731322ccfe3c058055cdbdc6ac6bf42"},{url:"_css/06_text.css",revision:"8965aa1f01531fe076b23c56100a73c8"},{url:"_css/07_prism-one-light.css",revision:"11212ad6347911b5ac970d6018e90bfc"},{url:"_css/08_video.css",revision:"516009c90917ebe4a61805b9dab55add"},{url:"_css/10_base.css",revision:"ee09187e63415155a445430f4ad46f06"},{url:"_css/20_code.css",revision:"29f3e3eed2f338288a5a63c55fa28b7c"},{url:"_css/30_mobile.css",revision:"6c01eae7d844e11519324e96dac170a1"},{url:"_css/fonts/FiraCode-VariableFont_wght.ttf",revision:"a3df227f3a1fbdf3481d8cc26f043e13"},{url:"_css/fonts/PublicSans-Italic-VariableFont_wght.ttf",revision:"bf9c207d75cfd1a5b4505cc5363b8030"},{url:"_css/fonts/PublicSans-VariableFont_wght.ttf",revision:"0895a4e6e560a84db0efa8f55e841c63"},{url:"_js/toggleNav.js",revision:"a114fab31b184d09bd7629df4eed100c"},{url:"authors/cstegeman/index.html",revision:"994d7af071fcf0b0dc118ce720fa2306"},{url:"authors/index.html",revision:"ac454b591aa69a4eee33916e8ddf2620"},{url:"authors/jheuvelman/index.html",revision:"06dedda76feecf53315c4b42fe6495e0"},{url:"authors/jsiewers/index.html",revision:"153281d665ea75e95dfc676ce1af140e"},{url:"authors/kstarreveld/index.html",revision:"3974d3a81e0770118e93510e0f376055"},{url:"authors/rkerssies/index.html",revision:"faa661fdfb42fcbd16c2b5e533abb5a9"},{url:"backend/api-c/index.html",revision:"345c9de00c1bf819f98df2ea6be8af21"},{url:"backend/api-rbac-php/index.html",revision:"569e187d91f3a0f2de872a003f0a014d"},{url:"backend/api-server-php/index.html",revision:"2150cfed2c2ac4cb1d3b7f0d1addbd67"},{url:"backend/dbq-cursussen/index.html",revision:"aefc7cd7d332594f32d6f547049f6030"},{url:"backend/erd-vakantiepark/index.html",revision:"f5b01ebd5517bc9c87742a26b0c44bb1"},{url:"backend/featuretesting-php/index.html",revision:"2336c93da5a87715deea6c3102e68dd7"},{url:"backend/functions-php/index.html",revision:"0aab3e8cf4b3f6c42490a57338527a5e"},{url:"backend/introductie/index.html",revision:"30c9ad8fb564ed038e661904b1412d49"},{url:"backend/mvc-basics-php/index.html",revision:"fdcc81022b21f027a6e84fef6f37e05d"},{url:"backend/mvc-framework-c/index.html",revision:"faea6678d0bde5442d8514389c798fa9"},{url:"backend/mvc-framework-php/index.html",revision:"81937185088a9452fa7e677a306b9260"},{url:"backend/oop-php/index.html",revision:"02eb08bd701f4ecf644c3fd71c167e24"},{url:"backend/phpb-autoformulier/index.html",revision:"a2bb9f451cf8117218c8c9b05a32d355"},{url:"backend/phpb-database-login/index.html",revision:"db23357a3c7a0e5f2fd3989225ac204e"},{url:"backend/phpb-functions/index.html",revision:"5bf251eed66de3f645b29fdf79913315"},{url:"backend/phpb-kleurkiezer/index.html",revision:"b75604d4419fb3e5bffd779a477df513"},{url:"backend/phpb-loops/index.html",revision:"5d7d642465cbb3b079805bbac9ebb779"},{url:"backend/phpb-pizza/index.html",revision:"bd763dd1efb2b6e05344e52dc91d91cb"},{url:"backend/phpb-sessie-login/index.html",revision:"446be52f513240f72af042cfb6b429f8"},{url:"backend/phpb-simpele-login/index.html",revision:"f6416e6a5bcf9e05d6b7abbebf54c6f4"},{url:"backend/phpb-timmerbedrijf/index.html",revision:"5e0bc3eab765c4947476a7af32437966"},{url:"basis/afstanden/index.html",revision:"aa952fbc275eae2f9323f4b400a4c222"},{url:"basis/array-met-getallen/index.html",revision:"d4fa1a88858acd086bc659b69b9cc341"},{url:"basis/array/index.html",revision:"37215d545a33be9e71f1fa7291e13fcb"},{url:"basis/boodschappenlijst/index.html",revision:"a813678a42fb60ec0e59f06d724ef75e"},{url:"basis/brackets/index.html",revision:"b6958709a65173122997276784792add"},{url:"basis/breuken/index.html",revision:"2b09363283c27f4b0ef207f652b9653f"},{url:"basis/cirkel/index.html",revision:"15ede6cc00b33456de6b1a7aa17c7529"},{url:"basis/combinaties/index.html",revision:"614c894aee67972751e77cd97735c8c5"},{url:"basis/decimale-combinaties/index.html",revision:"7bc56065761322e6601ca4c0c1c0a8f6"},{url:"basis/deelbaar/index.html",revision:"27c6c28f250f0c5e5cbb7407fbb9cd26"},{url:"basis/diamant-tekenen/index.html",revision:"3a84c6bff3d9a451c8442623ce6cf32e"},{url:"basis/echte-pyramide/index.html",revision:"df6e924cc088182f619297d3454b95d9"},{url:"basis/elementen-tellen/index.html",revision:"666210e6c5a5ae8c22f9bf27c912d21b"},{url:"basis/faculteit/index.html",revision:"779207c37db286bb45c436a5d821e05e"},{url:"basis/fizz-buzz/index.html",revision:"e26b19b540b0c92c020265ddffda47a3"},{url:"basis/geheimschrijver/index.html",revision:"b6abdb79a34a566037c42a1248ee9853"},{url:"basis/getallenreeks/index.html",revision:"0c37bf55b9cd9a8fe17ca351f5e4be17"},{url:"basis/grootste-getal/index.html",revision:"735a2d631ff655001a211d75c49ecc14"},{url:"basis/hoeveel-dagen/index.html",revision:"cc57c01556b8dc0c2d44fd5b021fbc06"},{url:"basis/hoofdletters/index.html",revision:"f8f51f9fc1287111f6cb667412923352"},{url:"basis/introductie/index.html",revision:"e2835442c7ea884d2684f6c6f16ec576"},{url:"basis/kassa-systeem/index.html",revision:"45f49c2632b58133fcd2ce3f76595fe8"},{url:"basis/kleinste-getal/index.html",revision:"7867c1fac43861fb630a9fe9b225166b"},{url:"basis/klok/index.html",revision:"8121214bd7fde46386d264406e9febd1"},{url:"basis/knikkers/index.html",revision:"39589a5027ba38ca7bfe00be0243c52a"},{url:"basis/leeftijd/index.html",revision:"d84b35cd67fdc3c2405fa0d76d2ca2ef"},{url:"basis/leeftijdchecker/index.html",revision:"e29e826cb6d298356b2aecb0595f4c29"},{url:"basis/leeftijdgrenzen/index.html",revision:"725af5a760939719ee5778588419e8a9"},{url:"basis/letter-a/index.html",revision:"013afd4ea86586658e475e31868eaac5"},{url:"basis/lotto/index.html",revision:"79a4eb1551be972918d0f33eee252eec"},{url:"basis/mail-to-username/index.html",revision:"c75684c91a8003fb3ad86febf440b99e"},{url:"basis/mijn-info/index.html",revision:"19955606c50b7cd13016266bab871f8a"},{url:"basis/mini-maxi/index.html",revision:"e60789453a9df1f811965f11825e8b28"},{url:"basis/mogelijke-opties/index.html",revision:"7301cb201da32f1b515d7ade286fdc09"},{url:"basis/muntje-gooien/index.html",revision:"9bf08b34ba20d53eb78c9612fdb9f86b"},{url:"basis/namenlijst/index.html",revision:"a66890ca61c0b011c602e77a9a6faa9c"},{url:"basis/oneven-getal/index.html",revision:"a2afb1e01238ff0959fe69cc722b1931"},{url:"basis/oppervlakte-berekenen/index.html",revision:"20dad0a85a72117f2591c6e29fdb6c05"},{url:"basis/patroon-tekenen-2/index.html",revision:"ba57d657bd16dd3d5caf72e89af0542e"},{url:"basis/patroon-tekenen/index.html",revision:"a9a468273ff56d84d37276197746e415"},{url:"basis/poll/index.html",revision:"382a1ce84bb608158e18182991cf83f5"},{url:"basis/pyramide/index.html",revision:"a16b839db8b696a886113b35eb1496b8"},{url:"basis/raad-het-getal/index.html",revision:"5de8c3030b34d55c7c9592cdcaa07f0b"},{url:"basis/raad-het-woord/index.html",revision:"803ac270a56e520bac379afb4345c6dc"},{url:"basis/romeinse-getallen/index.html",revision:"55b86c70039a43861559f3f64a4c4f4a"},{url:"basis/schaakbord/index.html",revision:"43d1cdccbdce3ff43e3f030374fb4cba"},{url:"basis/schoenverkoper/index.html",revision:"c4acf3b2ace8a4abf8a9975463f27b25"},{url:"basis/steen-papier-schaar/index.html",revision:"a4a03283b8e10ce6ecd324f756ec998b"},{url:"basis/tafels/index.html",revision:"4092f1195f0355ec68b25ed8fe86045f"},{url:"basis/tekst-doorlopen/index.html",revision:"1efacc90490fa2c118cbce754347db6f"},{url:"basis/tijd-naar-tekst/index.html",revision:"8c71c6a5f8445bd4e4fb7de194bf4cec"},{url:"basis/urenregistratie/index.html",revision:"b821f77d69f8869c6dcd04f00d0f3047"},{url:"basis/user-repeat/index.html",revision:"883b869cb14118fee11a1b574a793142"},{url:"basis/variabelen-weergeven/index.html",revision:"64eba7343553786c109060a4e4cd1178"},{url:"basis/verbruik-auto/index.html",revision:"492fee85e79868c340aa8ebe81884ea5"},{url:"basis/vermoeden-van-collatz/index.html",revision:"6a0eeca162bc8525f220daa6264dc50b"},{url:"basis/weather-app/index.html",revision:"bbdcd767b32954638b701676769969bb"},{url:"basis/wie-is-de-winnaar/index.html",revision:"3559853d493b221189bc5389d9cc5a2d"},{url:"basis/witregel/index.html",revision:"e3915101fc0b9868e7531b48850e12e8"},{url:"basis/xml-to-json/index.html",revision:"03e7df701783a80c30a7d21d195d58cc"},{url:"basis/zuurstof/index.html",revision:"400a37dd39d5ae634214993820f2542c"},{url:"downloads/xampp/index.html",revision:"3b727dee8bc7cd9008905348db723412"},{url:"frontend/html-afbeeldingen/index.html",revision:"80dbc2dde1a9d6e2f0f7f6db1e01f88b"},{url:"frontend/html-eerste-website/index.html",revision:"e2610fa9bcb5d1d5744dc783434c1e46"},{url:"frontend/html-formulier/index.html",revision:"e921a22aefb5d65a126091ae6f06e685"},{url:"frontend/html-tabellen/index.html",revision:"bb070773f774f3bd1854a77e069842ee"},{url:"frontend/introductie/index.html",revision:"d8f88bb4d3237e2a29fb14eff004fac3"},{url:"frontend/js-casino/index.html",revision:"dfe03d2cf012a62c25f7e5ad52bbc5c7"},{url:"frontend/js10-or-input-value/index.html",revision:"4f0ca2033679f6831d8393d1efdef262"},{url:"frontend/js22-or-tafels/index.html",revision:"1dbc23b17dcbfe90027c23a8fedf465e"},{url:"frontend/js27-or-form-validate-a/index.html",revision:"a819421b337430796e588ff7c2a766fa"},{url:"frontend/js27b-or-js-events/index.html",revision:"114a6c89d1aab7ac9e125c2726a2f52d"},{url:"frontend/js40-or-colorgame/index.html",revision:"b534b51d48e71c8f25e93397e31971cc"},{url:"index.html",revision:"ab89d99d1d772b636ff71e7ebc382158"},{url:"manifest.json",revision:"65683dbf468f7a69906d946197f3a273"},{url:"omgeving/ide-api/index.html",revision:"bec8c27fd9b36964e956390a13086694"},{url:"omgeving/ide-c/index.html",revision:"1ef8f385748a087bf0830b335e134e37"},{url:"omgeving/ide-python/index.html",revision:"04ecf00862b904b001fbd3862594eaab"},{url:"omgeving/ide-webdevelopment/index.html",revision:"04728cc489066411e3be2712a3d6a27f"},{url:"omgeving/introductie/index.html",revision:"ec4e85d9f863c7fe0260e756d640e55d"},{url:"projecten/beer-casus/index.html",revision:"67bd77a9f99f2d8fc7d651dd1bd7bf30"},{url:"projecten/eigen-casus/index.html",revision:"86f3a77ae051ba95e860e4dc8e38f7b6"},{url:"projecten/introductie/index.html",revision:"5f6b44dc7c168f3a039b5fe9fb286eb0"},{url:"projecten/proj-farout/index.html",revision:"cf5fbfc515e053101a69b139cc03de29"},{url:"projecten/proj-handig-joh/index.html",revision:"0e874ea00309215e1afd1fb6df337acf"},{url:"projecten/proj-kraeken/index.html",revision:"b3300585947d7f64eef2b037c9ae2fbc"},{url:"projecten/proj-stembus/index.html",revision:"a6164ab9371bebff572c3862a1260d39"},{url:"projecten/projectmanagement-scrum/index.html",revision:"7009cf80ea110ed684c0a602615f47ba"},{url:"projecten/zwabbertje-casus/index.html",revision:"de1163be5491764bc298c527de29d2f2"},{url:"technologies/all/index.html",revision:"c32d2ab284f9cdfd73a4469fbcef864a"},{url:"technologies/api/index.html",revision:"ecfc1952c2ebdcd8fd731dc1bdd2527b"},{url:"technologies/c/index.html",revision:"3716487485ba658ceb3eafdb0c898a71"},{url:"technologies/css/index.html",revision:"295637422e2f54805543e5ba302b0200"},{url:"technologies/database/index.html",revision:"0a7ba8069729b7ab6824cf0b89754cd4"},{url:"technologies/html/index.html",revision:"c6d7c21f980cb476908c517304593632"},{url:"technologies/js/index.html",revision:"045c98396ce51333d1462e0dda0a2d03"},{url:"technologies/php/index.html",revision:"757621188d90aa274ad76fae92856f9d"},{url:"technologies/scrum/index.html",revision:"e4761445fe19275cc4f6ba32998b8bef"},{url:"technologies/testen/index.html",revision:"caa14dba5c6512138f1e23dea945640e"},{url:"technologies/uml/index.html",revision:"677bf5d416a9a194e25a6973855e4986"},{url:"thema/advent-of-code/index.html",revision:"b005b1fda29712e5c30c5632f4f14c23"},{url:"thema/app1-or-rn-helloworld/index.html",revision:"d9c2b1263a23cc5122f0bd50c6b5129b"},{url:"thema/app1b-or-rn-calculator/index.html",revision:"18512fd81e2952bc9c24ff2b6e6e00db"},{url:"thema/app2-or-rn-lists-and-beer/index.html",revision:"b4c8fcb606c9f63226d240fafe5a0e91"},{url:"thema/app3-or-rn-geolocation/index.html",revision:"56d337961f3d486c3606e8be8cb0675d"},{url:"thema/commentaar-in-de-code/index.html",revision:"caae432c16531643d91fe6916ea226ef"},{url:"thema/introductie/index.html",revision:"b5b331b3738e3b938e1e41c78489bd05"},{url:"thema/ontwerpen-or-activiteitendiagram/index.html",revision:"348c1565ddf2f0ece87953787a5e82b8"},{url:"thema/ontwerpen-or-classdiagram/index.html",revision:"33133fba246c523f3bcd08cb1a4e69be"},{url:"thema/ontwerpen-or-entiteit-relatie-diagram-(erd)/index.html",revision:"90c577bc64a00dc73125544bacb95987"},{url:"thema/ontwerpen-or-mockups/index.html",revision:"cb965893093e914f7747398b1cdb0280"},{url:"thema/ontwerpen-or-sequencediagram/index.html",revision:"b4cf52e704fbb646d35c01db0fb566ce"},{url:"thema/ontwerpen-or-wireframes/index.html",revision:"e58a58084407bce10b51ec47436e03f5"},{url:"thema/sec-or-sec-1-caesar-cipher/index.html",revision:"d4d03f0b8abfefa3fdd0d399ebcb79da"},{url:"thema/sec-or-sec-2-vigenere-cipher/index.html",revision:"91b380234abf68946270bc499e48edf3"},{url:"thema/webservices-or-local-domainnames/index.html",revision:"8d2d3b2c35cf4622514ac0a933fdb359"}],{}),e.registerRoute(/^.*\.(html|css|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
