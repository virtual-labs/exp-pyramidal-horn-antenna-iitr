importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"9f586948547054880835273cae5ffa74","url":"contributors.html"},{"revision":"7b85428d8085c92836683894e6018a65","url":"details.json"},{"revision":"5824aad75b8d41416710c68134553084","url":"feedback.html"},{"revision":"065b9c4881d5606c765d41b723d4e5a1","url":"images/block1.png"},{"revision":"dbe317ba22c165c8de70adf9c7fb26e3","url":"images/horn1.png"},{"revision":"fe9ff74a84a1734c2b697a88a67c6634","url":"images/horn2.png"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"images/iitb_logo_30dpi.png"},{"revision":"3823d1d1f0fdb9f357c3e5bd024e42e0","url":"images/output-onlinepngtools (88).png"},{"revision":"99a1c8272e4756b4b2789acf308c954b","url":"images/PIC1.png"},{"revision":"efa3109113023d55941d820c4423ff88","url":"images/PIC2.png"},{"revision":"853a870ccdfa1224eb6e9429dbcbb556","url":"images/pic3.png"},{"revision":"e52f9abc42baa6b857f90b4b4d57eac2","url":"images/pic4.png"},{"revision":"8d0808e6a44ed08430d256822717fa17","url":"images/setup2.jpg"},{"revision":"8f8b08d8ac969d818a0d6b687aed7663","url":"index.html"},{"revision":"e50e68cb52bd5ad6cd382213d9458a1a","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"79cf51516a7dc72a9dceec8ee2fbcf44","url":"posttest.html"},{"revision":"17c0d502b3a5e637fad3a22fd5f273a2","url":"posttest.json"},{"revision":"d78152fbf75190eaa2e4e15fc4c8de92","url":"pretest.html"},{"revision":"8014361ba60978e5015909e987dc8ce6","url":"pretest.json"},{"revision":"06053e903c72f49efd31662feeaa44f2","url":"procedure.html"},{"revision":"010d6c68fc01bfaf148d7700126e59fc","url":"references.html"},{"revision":"2583a60a14a2b99cf703f53e1551749e","url":"simulation.html"},{"revision":"68b329da9893e34099c7d8ad5cb9c940","url":"simulation/a.html"},{"revision":"6466f5a28c9d1370e0515378c7131006","url":"simulation/css/index.css"},{"revision":"411217dd354bf0600409ff4ef3e5d4cb","url":"simulation/css/task7.css"},{"revision":"f6fbf5282bac6a96ef9b9446c7e3cabd","url":"simulation/images/10.png"},{"revision":"ef749480950c8498db610ac00786d149","url":"simulation/images/20.png"},{"revision":"c5e7cd66c54b56ce6b2abe5c3549639e","url":"simulation/images/30.png"},{"revision":"52a1dbb0b8b927b780e8885517e30879","url":"simulation/images/33.png"},{"revision":"813fb7cced715b7838b21a092d6576bc","url":"simulation/images/360 (1).png"},{"revision":"e58a2572d99b7775df79a57077bba3d4","url":"simulation/images/360 (2).png"},{"revision":"52a1dbb0b8b927b780e8885517e30879","url":"simulation/images/360 (3).png"},{"revision":"32700a91cd484a6f53569b3fc164396d","url":"simulation/images/360 (4).png"},{"revision":"01a7241d342518fa221bc2eb948a20f6","url":"simulation/images/360 (5).png"},{"revision":"e1a2880f4fa28b4c2954b659b05b91ca","url":"simulation/images/360 (6).png"},{"revision":"2f1c4ad7e9293eb713a4dade7a10e7d9","url":"simulation/images/360 (7).png"},{"revision":"7e5b0f408c39a45c1a1d16da271e7051","url":"simulation/images/360 (8).png"},{"revision":"d2f14355e9c2cb6bbd4f66620265fc00","url":"simulation/images/360 (9).png"},{"revision":"3f84af1b466e261879159e7114d1766b","url":"simulation/images/40.png"},{"revision":"169f57ea8ab67cce0b4c3c169902169f","url":"simulation/images/50.png"},{"revision":"1395827e66dbaaac8df1752e9a582f4f","url":"simulation/images/60.png"},{"revision":"1395827e66dbaaac8df1752e9a582f4f","url":"simulation/images/70.png"},{"revision":"f1520295e1911f20eeac28b1feccb596","url":"simulation/images/80.png"},{"revision":"971c6b8609cba305e7e11878c6212465","url":"simulation/images/90.png"},{"revision":"003295954647e30f25fea5a534a4aeb1","url":"simulation/images/attenuator.png"},{"revision":"93f9b1a9cd9367206060bae12fe5ad9c","url":"simulation/images/block4.jpg"},{"revision":"039240917fd521547974bdfe9600cbc5","url":"simulation/images/clock (9).png"},{"revision":"af37bb04adfe4006967fcb30d012e1a3","url":"simulation/images/cro.png"},{"revision":"16981dd91604248cd9e3527138533be8","url":"simulation/images/detector.png"},{"revision":"4d5b18d1e932225abe1e3198fe37b084","url":"simulation/images/directional.png"},{"revision":"d00709608cb0ec16ed1f64c849f3a567","url":"simulation/images/empty-room-with-white-brick-walls-studio_107791-1349.jpg"},{"revision":"8cd099ebd12413ffb81f0dbae54434b1","url":"simulation/images/fixedhorn.png"},{"revision":"7e5f6864e61977b50af21ac63baa62b4","url":"simulation/images/frequency.png"},{"revision":"fadfc177622d3e6a1fc346f9a70aafc1","url":"simulation/images/GUEST_077f6c4f-f318-48f2-b4cd-05940d284553.jpg"},{"revision":"c04b17dad8eba42e94dfd963d5df4985","url":"simulation/images/gunn-diode.png"},{"revision":"ba2e49d2fdbba074a6d2669b8d5d5514","url":"simulation/images/image.png"},{"revision":"b34c62f929a2333a0150692a89f25a69","url":"simulation/images/isolator.png"},{"revision":"731ad342119cb8c855f6c7a79dbc8a25","url":"simulation/images/klystron mount.png"},{"revision":"01e6789322cb90155e338788418c1bce","url":"simulation/images/littledot.png"},{"revision":"21ff73b201372a3e2866b7f629eb0c6e","url":"simulation/images/millivoltmeter.png"},{"revision":"3ed157b9b8fc9310c496fc5882b185f8","url":"simulation/images/output-onlinepngtools (90).png"},{"revision":"cdba8a304849c978645f62ad95a51512","url":"simulation/images/pin-modulator.png"},{"revision":"6da74ee08a7fa5275dc4177280b0ece6","url":"simulation/images/rotating.png"},{"revision":"8d0808e6a44ed08430d256822717fa17","url":"simulation/images/setup2.jpg"},{"revision":"26e7a3562ad96b63be246255e17bdeac","url":"simulation/images/SharedScreenshot.jpg"},{"revision":"c3fa114e5d4a24779f8b7755c236897d","url":"simulation/images/stand.png"},{"revision":"273fd5ea65c3d8111f0895ffac0ee8fb","url":"simulation/images/stand2.png"},{"revision":"53f8386df6c330eceb198963692a604f","url":"simulation/images/table.png"},{"revision":"7fb1dfc2bf24c400fc362fbc20190ce1","url":"simulation/index.html"},{"revision":"cf7ebd29f76e4d2dbf2c5045c59e669e","url":"simulation/index1.html"},{"revision":"11d14a8a5ef905d2a39eea73ec4240ef","url":"simulation/js/demo.js"},{"revision":"324b99296073c64eaddb20ce8ef19e93","url":"simulation/js/demo0.js"},{"revision":"c6e7af467b515f2badcfb80eff1746a7","url":"simulation/js/demo1.js"},{"revision":"9e42476feb7a87d8a847e1aeae013d68","url":"simulation/js/jogDial0.js"},{"revision":"fd255415839568e52a48da5de5af244c","url":"simulation/js/jquery-ui.min.js"},{"revision":"5503bbb24bf439d2c8a8a8315546e79f","url":"simulation/js/jquery.knob.js"},{"revision":"7274fe544004af69b735be1b9bd4b281","url":"simulation/js/jquery.knob.min.js"},{"revision":"397754ba49e9e0cf4e7c190da78dda05","url":"simulation/js/jquery.min.js"},{"revision":"de2a03f7c358bac31c706ebc72b752fd","url":"simulation/js/jsplumb1.js"},{"revision":"16651b549a485484401ca12c06fa001b","url":"simulation/js/knockout-2.2.1.js"},{"revision":"cf496d2796d7e26cb073c7cf33f5cfe8","url":"simulation/js/script.js"},{"revision":"160e5588cb6873079952e8300f21626b","url":"simulation/js/sevenSeg.js"},{"revision":"b9c5ec9d6a95e2b873f0fa63d23d4b86","url":"theory.html"},{"revision":"b0a5bad4a208e0810095f4682ac6232f","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );