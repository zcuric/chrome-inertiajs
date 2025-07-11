(() => {
  // node_modules/@andypf/json-viewer/dist/esm/index.js
  var oe = Object.defineProperty;
  var ne = (a, d, e) => d in a ? oe(a, d, { enumerable: true, configurable: true, writable: true, value: e }) : a[d] = e;
  var H = (a, d, e) => (ne(a, typeof d != "symbol" ? d + "" : d, e), e);
  var Z = (a, d, e) => {
    if (!d.has(a)) throw TypeError("Cannot " + e);
  };
  var o = (a, d, e) => (Z(a, d, "read from private field"), e ? e.call(a) : d.get(a));
  var S = (a, d, e) => {
    if (d.has(a)) throw TypeError("Cannot add the same private member more than once");
    d instanceof WeakSet ? d.add(a) : d.set(a, e);
  };
  var T = (a, d, e, c) => (Z(a, d, "write to private field"), c ? c.call(a, e) : d.set(a, e), e);
  var G = `.container{background-color:var(--base00);color:var(--base05);padding:10px;letter-spacing:0.5px;font-family:monospace;border-radius:3px}.toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:5px;border-bottom:solid 1px var(--base02)}.toolbar .options,.toolbar .search-wrapper{display:flex;align-items:center}.toolbar .icon-wrapper{height:15px;display:flex;align-items:center;padding:2px 5px}.toolbar .icon-wrapper:hover{background-color:var(--base02);border-radius:3px}.toolbar .icon-wrapper:first-child{margin-left:0px}.toolbar .search.icon{margin-right:5px}.toolbar .search-input{border:none;background:transparent;outline:none;flex:1;font-size:16px;color:var(--base0D)}.match{background-color:yellow;font-weight:bold;color:red}.data-row{padding:3px 0}.data-row .data-row{border-left:solid 1px var(--base02);padding-left:20px;margin-left:5px;display:none}.data-row.expanded>.data-row{display:block}.data-row .key-value-wrapper{display:flex;align-items:center}.data-row .key{color:var(--base07)}.data-row .key.number{color:var(--base0C)}.data-row .colon{color:var(--base07);margin:0 5px}.clickable{cursor:pointer}.data-row .opening-parenthesis,.data-row .closing-parenthesis{color:var(--base07)}.data-row .ellipsis{color:var(--base09)}.data-row.expanded>.key-value-wrapper .closing-parenthesis,.data-row.expanded>.key-value-wrapper .ellipsis{display:none}.data-row>.closing-parenthesis{display:none}.data-row.expanded>.closing-parenthesis{display:inline-block}.data-row .items-size{margin-left:10px;color:var(--base04);font-style:italic;display:none}.show-size .data-row .items-size{display:inline-block}.data-row .value.bool,.data-row .value.boolean{color:var(--base0E)}.data-row .value.function{color:var(--base0D)}.data-row .value.int,.data-row .value.integer{color:var(--base0F)}.data-row .value.float{color:var(--base0B)}.data-row .value.string{color:var(--base09)}.data-row .value.string .content{overflow-wrap:break-word}.data-row .value.string .content::before{content:open-quote}.data-row .value.string .content::after{content:close-quote}.data-row .value.regexp{color:var(--base0A)}.data-row .value.nan{color:var(--base08)}.data-row .value.null{color:var(--base0A)}.data-row .value.undefined{color:var(--base05)}.data-row .value.date{color:var(--base0D)}.data-row .value.nan,.data-row .value.null,.data-row .value.undefined{border-radius:3px;background-color:var(--base02);padding:1px 2px}.data-row .value .type{font-size:smaller;margin-right:4px;opacity:0.8;display:none}.data-row .value .value-data{word-break:break-all}.show-data-types .data-row .value .type{display:inline-block}.icon-wrapper,.copy-icon-wrapper{display:inline-block;cursor:pointer}.icon{display:block;position:relative}.icon:before,.icon:after{content:"";position:absolute;display:block}.expand.icon{margin-right:5px}.expand-icon-arrow .expand.icon{margin-left:3px;width:0;height:0;border-left:solid 6px var(--base0E);border-top:solid 6px transparent;border-bottom:solid 6px transparent}.expand-icon-arrow .expanded>.key-value-wrapper .expand.icon,.expand-icon-arrow .expanded.icon.expand{transform:rotate(90deg);border-left-color:var(--base0D)}.expand-icon-square .expand.icon,.expand-icon-circle .expand.icon{display:block;width:9px;height:9px;border-radius:2px;border:solid 1px var(--base0E)}.expand-icon-circle .expand.icon{border-radius:50%}.expand-icon-square .expand.icon:before,.expand-icon-circle .expand.icon:before,.expand-icon-square .expand.icon:after,.expand-icon-circle .expand.icon:after{width:5px;height:1px;background-color:var(--base0E);left:2px;top:4px}.expand-icon-square .expand.icon:after,.expand-icon-circle .expand.icon:after{transform:rotate(90deg)}.expand-icon-square .expanded>.key-value-wrapper .expand.icon:after,.expand-icon-circle .expanded>.key-value-wrapper .expand.icon:after,.expand-icon-square .expand.icon.expanded:after,.expand-icon-circle .expand.icon.expanded:after{display:none}.expand-icon-square .expanded>.key-value-wrapper .expand.icon,.expand-icon-circle .expanded>.key-value-wrapper .expand.icon,.expand-icon-square .expand.icon.expanded,.expand-icon-circle .expanded.expand.icon{border-color:var(--base0D)}.expand-icon-square .expanded>.key-value-wrapper .expand.icon:before,.expand-icon-circle .expanded>.key-value-wrapper .expand.icon:before,.expand-icon-square .expanded.expand.icon:before,.expand-icon-circle .expanded.expand.icon:before{background-color:var(--base0D)}.icon-wrapper{display:inline-block;cursor:pointer}.show-copy .key-value-wrapper:hover .icon.copy{display:block}.copy.icon{margin-left:10px;display:none;width:8px;height:10px;border:solid 1px var(--base0D);border-radius:1px;position:relative;top:4px;transition:0.2s all}.copy.icon:active{transform:scale(1.6);background-color:var(--base0B)}.copy.icon:before{content:"";display:block;left:-3px;top:-3px;width:8px;height:10px;border-top:solid 1px var(--base0D);border-left:solid 1px var(--base0D);border-radius:1px 0 0 0}.plus.icon{width:11px;height:1px;background-color:var(--base0D)}.plus.icon:after{content:"";width:11px;height:1px;background-color:var(--base0D);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.minus.icon{width:11px;height:1px;background-color:var(--base0D)}.indent.icon{color:var(--base0D);width:17px;height:8px;border-top:solid 1px var(--base0D);border-bottom:solid 1px var(--base0D)}.indent.icon:before{content:"";position:absolute;top:2px;right:0;width:11px;height:2px;border-top:solid 1px var(--base0D);border-bottom:solid 1px var(--base0D)}.indent.icon:after{content:"";position:absolute;top:1px;width:0;height:0;border-top:solid 3px transparent;border-bottom:solid 3px transparent;border-left:solid 3px var(--base0D);border-right:solid 3px transparent}.outdent.icon{color:var(--base0D);margin-left:2px;width:17px;height:8px;border-top:solid 1px var(--base0D);border-bottom:solid 1px var(--base0D)}.outdent.icon:before{content:"";top:2px;right:0;width:11px;height:2px;border-top:solid 1px var(--base0D);border-bottom:solid 1px var(--base0D)}.outdent.icon:after{content:"";top:1px;left:-3px;width:0;height:0;border-top:solid 3px transparent;border-bottom:solid 3px transparent;border-left:solid 3px transparent;border-right:solid 3px var(--base0D)}.refresh.icon{color:var(--base0D);width:10px;height:10px;border-radius:50%;border-top:solid 1px var(--base0D);border-bottom:solid 1px var(--base0D);border-left:solid 1px transparent;border-right:solid 1px var(--base0D)}.refresh.icon:before{content:"";left:1px;top:8px;width:3px;height:3px;border-top:solid 1px var(--base0D);border-left:solid 1px var(--base0D);-webkit-transform:rotate(-22.5deg);transform:rotate(-22.5deg)}.info.icon{width:12px;height:11px;border:solid 1px var(--base0D);border-radius:2px}.info.icon::before{top:5px;left:5px;width:2px;height:5px;background-color:var(--base0D)}.info.icon::after{top:2px;left:5px;width:2px;height:2px;background-color:var(--base0D)}.info.icon.active{background-color:var(--base0D)}.info.icon.active::before,.info.icon.active::after{background-color:var(--base02)}.search.icon{color:var(--base0D);width:11px;height:11px;border:solid 1px var(--base0D);border-radius:100%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.search.icon:before{content:"";top:11px;left:5px;height:6px;width:1px;background-color:var(--base0D)}
`;
  var M = { apathy: ["#031a16", "#0b342d", "#184e45", "#2b685e", "#5f9c92", "#81b5ac", "#a7cec8", "#d2e7e4", "#3e9688", "#3e7996", "#3e4c96", "#883e96", "#963e4c", "#96883e", "#4c963e", "#3e965b"], ashes: ["#1c2023", "#393f45", "#565e65", "#747c84", "#adb3ba", "#c7ccd1", "#dfe2e5", "#f3f4f5", "#c7ae95", "#c7c795", "#aec795", "#95c7ae", "#95aec7", "#ae95c7", "#c795ae", "#c79595"], "atelier-dune-light": ["#fefbec", "#e8e4cf", "#a6a28c", "#999580", "#7d7a68", "#6e6b5e", "#292824", "#20201d", "#d73737", "#b65611", "#ae9513", "#60ac39", "#1fad83", "#6684e1", "#b854d4", "#d43552"], "atelier-dune": ["#20201d", "#292824", "#6e6b5e", "#7d7a68", "#999580", "#a6a28c", "#e8e4cf", "#fefbec", "#d73737", "#b65611", "#ae9513", "#60ac39", "#1fad83", "#6684e1", "#b854d4", "#d43552"], atlas: ["#002635", "#00384d", "#517f8d", "#6c8b91", "#869696", "#a1a19a", "#e6e6dc", "#fafaf8", "#ff5a67", "#f08e48", "#ffcc1b", "#7fc06e", "#14747e", "#5dd7b9", "#9a70a4", "#c43060"], bespin: ["#28211c", "#36312e", "#5e5d5c", "#666666", "#797977", "#8a8986", "#9d9b97", "#baae9e", "#cf6a4c", "#cf7d34", "#f9ee98", "#54be0d", "#afc4db", "#5ea6ea", "#9b859d", "#937121"], "black-metal": ["#000000", "#121212", "#222222", "#333333", "#999999", "#c1c1c1", "#999999", "#c1c1c1", "#5f8787", "#aaaaaa", "#a06666", "#dd9999", "#aaaaaa", "#888888", "#999999", "#444444"], brewer: ["#0c0d0e", "#2e2f30", "#515253", "#737475", "#959697", "#b7b8b9", "#dadbdc", "#fcfdfe", "#e31a1c", "#e6550d", "#dca060", "#31a354", "#80b1d3", "#3182bd", "#756bb1", "#b15928"], bright: ["#000000", "#303030", "#505050", "#b0b0b0", "#d0d0d0", "#e0e0e0", "#f5f5f5", "#ffffff", "#fb0120", "#fc6d24", "#fda331", "#a1c659", "#76c7b7", "#6fb3d2", "#d381c3", "#be643c"], brogrammer: ["#1f1f1f", "#f81118", "#2dc55e", "#ecba0f", "#2a84d2", "#4e5ab7", "#1081d6", "#d6dbe5", "#d6dbe5", "#de352e", "#1dd361", "#f3bd09", "#1081d6", "#5350b9", "#0f7ddb", "#ffffff"], "brushtrees-dark": ["#485867", "#5a6d7a", "#6d828e", "#8299a1", "#98afb5", "#b0c5c8", "#c9dbdc", "#e3efef", "#b38686", "#d8bba2", "#aab386", "#87b386", "#86b3b3", "#868cb3", "#b386b2", "#b39f9f"], brushtrees: ["#e3efef", "#c9dbdc", "#b0c5c8", "#98afb5", "#8299a1", "#6d828e", "#5a6d7a", "#485867", "#b38686", "#d8bba2", "#aab386", "#87b386", "#86b3b3", "#868cb3", "#b386b2", "#b39f9f"], chalk: ["#151515", "#202020", "#303030", "#505050", "#b0b0b0", "#d0d0d0", "#e0e0e0", "#f5f5f5", "#fb9fb1", "#eda987", "#ddb26f", "#acc267", "#12cfc0", "#6fc2ef", "#e1a3ee", "#deaf8f"], circus: ["#191919", "#202020", "#303030", "#5f5a60", "#505050", "#a7a7a7", "#808080", "#ffffff", "#dc657d", "#4bb1a7", "#c3ba63", "#84b97c", "#4bb1a7", "#639ee4", "#b888e2", "#b888e2"], "classic-dark": ["#151515", "#202020", "#303030", "#505050", "#b0b0b0", "#d0d0d0", "#e0e0e0", "#f5f5f5", "#ac4142", "#d28445", "#f4bf75", "#90a959", "#75b5aa", "#6a9fb5", "#aa759f", "#8f5536"], "classic-light": ["#f5f5f5", "#e0e0e0", "#d0d0d0", "#b0b0b0", "#505050", "#303030", "#202020", "#151515", "#ac4142", "#d28445", "#f4bf75", "#90a959", "#75b5aa", "#6a9fb5", "#aa759f", "#8f5536"], codeschool: ["#232c31", "#1c3657", "#2a343a", "#3f4944", "#84898c", "#9ea7a6", "#a7cfa3", "#b5d8f6", "#2a5491", "#43820d", "#a03b1e", "#237986", "#b02f30", "#484d79", "#c59820", "#c98344"], cupcake: ["#fbf1f2", "#f2f1f4", "#d8d5dd", "#bfb9c6", "#a59daf", "#8b8198", "#72677e", "#585062", "#d57e85", "#ebb790", "#dcb16c", "#a3b367", "#69a9a7", "#7297b9", "#bb99b4", "#baa58c"], cupertino: ["#ffffff", "#c0c0c0", "#c0c0c0", "#808080", "#808080", "#404040", "#404040", "#5e5e5e", "#c41a15", "#eb8500", "#826b28", "#007400", "#318495", "#0000ff", "#a90d91", "#826b28"], darcula: ["#2b2b2b", "#323232", "#323232", "#606366", "#a4a3a3", "#a9b7c6", "#ffc66d", "#ffffff", "#4eade5", "#689757", "#bbb529", "#6a8759", "#629755", "#9876aa", "#cc7832", "#808080"], darktooth: ["#1d2021", "#32302f", "#504945", "#665c54", "#928374", "#a89984", "#d5c4a1", "#fdf4c1", "#fb543f", "#fe8625", "#fac03b", "#95c085", "#8ba59b", "#0d6678", "#8f4673", "#a87322"], "default-dark": ["#181818", "#282828", "#383838", "#585858", "#b8b8b8", "#d8d8d8", "#e8e8e8", "#f8f8f8", "#ab4642", "#dc9656", "#f7ca88", "#a1b56c", "#86c1b9", "#7cafc2", "#ba8baf", "#a16946"], "default-light": ["#ffffff", "#e8e8e8", "#d8d8d8", "#b8b8b8", "#585858", "#383838", "#282828", "#181818", "#ab4642", "#dc9656", "#ab4642", "#a1b56c", "#86c1b9", "#7cafc2", "#ba8baf", "#a16946"], dracula: ["#282936", "#3a3c4e", "#4d4f68", "#626483", "#62d6e8", "#e9e9f4", "#f1f2f8", "#f7f7fb", "#ea51b2", "#b45bcf", "#00f769", "#ebff87", "#a1efe4", "#62d6e8", "#b45bcf", "#00f769"], eighties: ["#2d2d2d", "#393939", "#515151", "#747369", "#a09f93", "#d3d0c8", "#e8e6df", "#f2f0ec", "#f2777a", "#f99157", "#ffcc66", "#99cc99", "#66cccc", "#6699cc", "#cc99cc", "#d27b53"], embers: ["#16130f", "#2c2620", "#433b32", "#5a5047", "#8a8075", "#a39a90", "#beb6ae", "#dbd6d1", "#826d57", "#828257", "#6d8257", "#57826d", "#576d82", "#6d5782", "#82576d", "#825757"], flat: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7", "#e0e0e0", "#f5f5f5", "#ecf0f1", "#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#1abc9c", "#3498db", "#9b59b6", "#be643c"], "fruit-soda": ["#f1ecf1", "#e0dee0", "#d8d5d5", "#b5b4b6", "#979598", "#515151", "#474545", "#2d2c2c", "#fe3e31", "#fe6d08", "#f7e203", "#47f74c", "#0f9cfd", "#2931df", "#611fce", "#b16f40"], github: ["#ffffff", "#f5f5f5", "#c8c8fa", "#969896", "#e8e8e8", "#333333", "#ffffff", "#969896", "#ed6a43", "#0086b3", "#795da3", "#183691", "#183691", "#795da3", "#a71d5d", "#333333"], "google-dark": ["#1d1f21", "#282a2e", "#373b41", "#969896", "#b4b7b4", "#c5c8c6", "#e0e0e0", "#ffffff", "#cc342b", "#f96a38", "#fba922", "#198844", "#3971ed", "#3971ed", "#a36ac7", "#3971ed"], "google-light": ["#ffffff", "#e0e0e0", "#c5c8c6", "#b4b7b4", "#969896", "#373b41", "#282a2e", "#1d1f21", "#cc342b", "#f96a38", "#fba922", "#198844", "#3971ed", "#3971ed", "#a36ac7", "#3971ed"], "grayscale-dark": ["#101010", "#252525", "#464646", "#525252", "#ababab", "#b9b9b9", "#e3e3e3", "#f7f7f7", "#7c7c7c", "#999999", "#a0a0a0", "#8e8e8e", "#868686", "#686868", "#747474", "#5e5e5e"], "grayscale-light": ["#f7f7f7", "#e3e3e3", "#b9b9b9", "#ababab", "#525252", "#464646", "#252525", "#101010", "#7c7c7c", "#999999", "#a0a0a0", "#8e8e8e", "#868686", "#686868", "#747474", "#5e5e5e"], greenscreen: ["#001100", "#003300", "#005500", "#007700", "#009900", "#00bb00", "#00dd00", "#00ff00", "#007700", "#009900", "#007700", "#00bb00", "#005500", "#009900", "#00bb00", "#005500"], "gruvbox-dark-hard": ["#1d2021", "#3c3836", "#504945", "#665c54", "#bdae93", "#d5c4a1", "#ebdbb2", "#fbf1c7", "#fb4934", "#fe8019", "#fabd2f", "#b8bb26", "#8ec07c", "#83a598", "#d3869b", "#d65d0e"], "gruvbox-light-hard": ["#f9f5d7", "#ebdbb2", "#d5c4a1", "#bdae93", "#665c54", "#504945", "#3c3836", "#282828", "#9d0006", "#af3a03", "#b57614", "#79740e", "#427b58", "#076678", "#8f3f71", "#d65d0e"], "harmonic-dark": ["#0b1c2c", "#223b54", "#405c79", "#627e99", "#aabcce", "#cbd6e2", "#e5ebf1", "#f7f9fb", "#bf8b56", "#bfbf56", "#8bbf56", "#56bf8b", "#568bbf", "#8b56bf", "#bf568b", "#bf5656"], "harmonic-light": ["#f7f9fb", "#e5ebf1", "#cbd6e2", "#aabcce", "#627e99", "#405c79", "#223b54", "#0b1c2c", "#bf8b56", "#bfbf56", "#8bbf56", "#56bf8b", "#568bbf", "#8b56bf", "#bf568b", "#bf5656"], "heetch-light": ["#feffff", "#392551", "#7b6d8b", "#9c92a8", "#ddd6e5", "#5a496e", "#470546", "#190134", "#27d9d5", "#bdb6c5", "#5ba2b6", "#f80059", "#c33678", "#47f9f5", "#bd0152", "#dedae2"], heetch: ["#190134", "#392551", "#5a496e", "#7b6d8b", "#9c92a8", "#bdb6c5", "#dedae2", "#feffff", "#27d9d5", "#5ba2b6", "#8f6c97", "#c33678", "#f80059", "#bd0152", "#82034c", "#470546"], helios: ["#1d2021", "#383c3e", "#53585b", "#6f7579", "#cdcdcd", "#d5d5d5", "#dddddd", "#e5e5e5", "#d72638", "#eb8413", "#f19d1a", "#88b92d", "#1ba595", "#1e8bac", "#be4264", "#c85e0d"], hopscotch: ["#322931", "#433b42", "#5c545b", "#797379", "#989498", "#b9b5b8", "#d5d3d5", "#ffffff", "#dd464c", "#fd8b19", "#fdcc59", "#8fc13e", "#149b93", "#1290bf", "#c85e7c", "#b33508"], "horizon-dark": ["#1c1e26", "#232530", "#2e303e", "#676a8d", "#ced1d0", "#cbced0", "#dcdfe4", "#e3e6ee", "#e93c58", "#e58d7d", "#efb993", "#efaf8e", "#24a8b4", "#df5273", "#b072d1", "#e4a382"], "ia-dark": ["#1a1a1a", "#222222", "#1d414d", "#767676", "#b8b8b8", "#cccccc", "#e8e8e8", "#f8f8f8", "#d88568", "#d86868", "#b99353", "#83a471", "#7c9cae", "#8eccdd", "#b98eb2", "#8b6c37"], "ia-light": ["#f6f6f6", "#dedede", "#bde5f2", "#898989", "#767676", "#181818", "#e8e8e8", "#898989", "#9c5a02", "#c43e18", "#c48218", "#38781c", "#2d6bb1", "#48bac2", "#a94598", "#8b6c37"], icy: ["#021012", "#031619", "#041f23", "#052e34", "#064048", "#095b67", "#0c7c8c", "#109cb0", "#16c1d9", "#b3ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7"], isotope: ["#000000", "#404040", "#606060", "#808080", "#c0c0c0", "#d0d0d0", "#e0e0e0", "#ffffff", "#ff0000", "#ff9900", "#ff0099", "#33ff00", "#00ffff", "#0066ff", "#cc00ff", "#3300ff"], macintosh: ["#000000", "#404040", "#404040", "#808080", "#808080", "#c0c0c0", "#c0c0c0", "#ffffff", "#dd0907", "#ff6403", "#fbf305", "#1fb714", "#02abea", "#0000d3", "#4700a5", "#90713a"], marrakesh: ["#201602", "#302e00", "#5f5b17", "#6c6823", "#86813b", "#948e48", "#ccc37a", "#faf0a5", "#c35359", "#b36144", "#a88339", "#18974e", "#75a738", "#477ca1", "#8868b3", "#b3588e"], materia: ["#263238", "#2c393f", "#37474f", "#707880", "#c9ccd3", "#cdd3de", "#d5dbe5", "#ffffff", "#ec5f67", "#ea9560", "#ffcc00", "#8bd649", "#80cbc4", "#89ddff", "#82aaff", "#ec5f67"], "material-lighter": ["#fafafa", "#e7eaec", "#cceae7", "#ccd7da", "#8796b0", "#80cbc4", "#80cbc4", "#666666", "#ff5370", "#f76d47", "#ffb62c", "#91b859", "#39adb5", "#6182b8", "#7c4dff", "#e53935"], material: ["#263238", "#2e3c43", "#314549", "#546e7a", "#b2ccd6", "#eeffff", "#eeffff", "#ffffff", "#f07178", "#f78c6c", "#ffcb6b", "#c3e88d", "#89ddff", "#82aaff", "#c792ea", "#ff5370"], "mellow-purple": ["#1e0528", "#1a092d", "#331354", "#320f55", "#873582", "#ffeeff", "#ffeeff", "#f8c0ff", "#00d9e9", "#aa00a3", "#955ae7", "#05cb0d", "#b900b1", "#550068", "#8991bb", "#4d6fff"], "mexico-light": ["#f8f8f8", "#e8e8e8", "#d8d8d8", "#b8b8b8", "#585858", "#383838", "#282828", "#181818", "#ab4642", "#dc9656", "#f79a0e", "#538947", "#4b8093", "#7cafc2", "#96609e", "#a16946"], mocha: ["#3b3228", "#534636", "#645240", "#7e705a", "#b8afad", "#d0c8c6", "#e9e1dd", "#f5eeeb", "#cb6077", "#d28b71", "#f4bc87", "#beb55b", "#7bbda4", "#8ab3b5", "#a89bb9", "#bb9584"], monokai: ["#272822", "#383830", "#49483e", "#75715e", "#a59f85", "#f8f8f2", "#f5f4f1", "#f9f8f5", "#f92672", "#fd971f", "#f4bf75", "#a6e22e", "#a1efe4", "#66d9ef", "#ae81ff", "#cc6633"], nord: ["#2e3440", "#3b4252", "#434c5e", "#4c566a", "#d8dee9", "#e5e9f0", "#eceff4", "#8fbcbb", "#88c0d0", "#81a1c1", "#5e81ac", "#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#b48ead"], ocean: ["#2b303b", "#343d46", "#4f5b66", "#65737e", "#a7adba", "#c0c5ce", "#dfe1e8", "#eff1f5", "#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#96b5b4", "#8fa1b3", "#b48ead", "#ab7967"], "one-light": ["#fafafa", "#f0f0f1", "#e5e5e6", "#a0a1a7", "#696c77", "#383a42", "#202227", "#090a0b", "#ca1243", "#d75f00", "#c18401", "#50a14f", "#0184bc", "#4078f2", "#a626a4", "#986801"], onedark: ["#282c34", "#353b45", "#3e4451", "#545862", "#565c64", "#abb2bf", "#b6bdca", "#c8ccd4", "#e06c75", "#d19a66", "#e5c07b", "#98c379", "#56b6c2", "#61afef", "#c678dd", "#be5046"], "papercolor-dark": ["#1c1c1c", "#af005f", "#5faf00", "#d7af5f", "#5fafd7", "#808080", "#d7875f", "#d0d0d0", "#585858", "#5faf5f", "#afd700", "#af87d7", "#ffaf00", "#ff5faf", "#00afaf", "#5f8787"], "papercolor-light": ["#eeeeee", "#af0000", "#008700", "#5f8700", "#0087af", "#878787", "#005f87", "#444444", "#bcbcbc", "#d70000", "#d70087", "#8700af", "#d75f00", "#d75f00", "#005faf", "#005f87"], paraiso: ["#2f1e2e", "#41323f", "#4f424c", "#776e71", "#8d8687", "#a39e9b", "#b9b6b0", "#e7e9db", "#ef6155", "#f99b15", "#fec418", "#48b685", "#5bc4bf", "#06b6ef", "#815ba4", "#e96ba8"], pico: ["#000000", "#1d2b53", "#7e2553", "#008751", "#ab5236", "#5f574f", "#c2c3c7", "#fff1e8", "#ff004d", "#ffa300", "#fff024", "#00e756", "#29adff", "#83769c", "#ff77a8", "#ffccaa"], pop: ["#000000", "#202020", "#303030", "#505050", "#b0b0b0", "#d0d0d0", "#e0e0e0", "#ffffff", "#eb008a", "#f29333", "#f8ca12", "#37b349", "#00aabb", "#0e5a94", "#b31e8d", "#7a2d00"], railscasts: ["#2b2b2b", "#272935", "#3a4055", "#5a647e", "#d4cfc9", "#e6e1dc", "#f4f1ed", "#f9f7f3", "#da4939", "#cc7833", "#ffc66d", "#a5c261", "#519f50", "#6d9cbe", "#b6b3eb", "#bc9458"], seti: ["#151718", "#282a2b", "#3b758c", "#41535b", "#43a5d5", "#d6d6d6", "#eeeeee", "#ffffff", "#cd3f45", "#db7b55", "#e6cd69", "#9fca56", "#55dbbe", "#55b5db", "#a074c4", "#8a553f"], "solarized-dark": ["#002b36", "#073642", "#586e75", "#657b83", "#839496", "#93a1a1", "#eee8d5", "#fdf6e3", "#dc322f", "#cb4b16", "#b58900", "#859900", "#2aa198", "#268bd2", "#6c71c4", "#d33682"], "solarized-light": ["#fdf6e3", "#eee8d5", "#93a1a1", "#839496", "#657b83", "#586e75", "#073642", "#002b36", "#dc322f", "#cb4b16", "#b58900", "#859900", "#2aa198", "#268bd2", "#6c71c4", "#d33682"], spacemacs: ["#1f2022", "#282828", "#444155", "#585858", "#b8b8b8", "#a3a3a3", "#e8e8e8", "#f8f8f8", "#f2241f", "#ffa500", "#b1951d", "#67b11d", "#2d9574", "#4f97d7", "#a31db1", "#b03060"], "summerfruit-dark": ["#151515", "#202020", "#303030", "#505050", "#b0b0b0", "#d0d0d0", "#e0e0e0", "#ffffff", "#ff0086", "#fd8900", "#aba800", "#00c918", "#1faaaa", "#3777e6", "#ad00a1", "#cc6633"], "summerfruit-light": ["#ffffff", "#e0e0e0", "#d0d0d0", "#b0b0b0", "#000000", "#101010", "#151515", "#202020", "#ff0086", "#fd8900", "#aba800", "#00c918", "#1faaaa", "#3777e6", "#ad00a1", "#cc6633"], "tomorrow-night": ["#1d1f21", "#282a2e", "#373b41", "#969896", "#b4b7b4", "#c5c8c6", "#e0e0e0", "#ffffff", "#cc6666", "#de935f", "#f0c674", "#b5bd68", "#8abeb7", "#81a2be", "#b294bb", "#a3685a"], tomorrow: ["#ffffff", "#e0e0e0", "#d6d6d6", "#8e908c", "#969896", "#4d4d4c", "#282a2e", "#1d1f21", "#c82829", "#f5871f", "#eab700", "#718c00", "#3e999f", "#4271ae", "#8959a8", "#a3685a"], tube: ["#231f20", "#1c3f95", "#5a5758", "#737171", "#959ca1", "#d9d8d8", "#e7e7e8", "#ffffff", "#ee2e24", "#f386a1", "#ffd204", "#00853e", "#85cebc", "#009ddc", "#98005d", "#b06110"], twilight: ["#1e1e1e", "#323537", "#464b50", "#5f5a60", "#838184", "#a7a7a7", "#c3c3c3", "#ffffff", "#cf6a4c", "#cda869", "#f9ee98", "#8f9d6a", "#afc4db", "#7587a6", "#9b859d", "#9b703f"], woodland: ["#231e18", "#302b25", "#48413a", "#9d8b70", "#b4a490", "#cabcb1", "#d7c8bc", "#e4d4c8", "#d35c5c", "#ca7f32", "#e0ac16", "#b7ba53", "#6eb958", "#88a4d3", "#bb90e2", "#b49368"], zenburn: ["#383838", "#404040", "#606060", "#6f6f6f", "#808080", "#dcdccc", "#c0c0c0", "#ffffff", "#dca3a3", "#dfaf8f", "#e0cf9f", "#5f7f5f", "#93e0e3", "#7cb8bb", "#dc8cc3", "#000000"] };
  var pe = Object.keys(M);
  var K = (a) => {
    let d;
    if (typeof a == "string") {
      if (M[a] === void 0) throw new Error(`${a} not found`);
      d = M[a].reduce((e, c, r) => {
        let t = `base0${r.toString(16).toUpperCase()}`;
        return e[t] = c, e;
      }, {});
    } else d = a;
    return `.container{${Object.keys(d).map((e) => `--${e}: ${d[e]};`).join("")}}`;
  };
  var Q = (a) => {
    try {
      return !!new URL(a);
    } catch {
      return false;
    }
  };
  var X = (a) => {
    if (Array.isArray(a)) return "array";
    if (a === null) return "null";
    if (a instanceof RegExp) return "regexp";
    let d = typeof a;
    return d === "number" ? isNaN(a) ? "NaN" : isFinite(a) ? Number.isInteger(a) ? "int" : "float" : "Infinity" : d === "boolean" ? "bool" : d === "object" && a instanceof Date ? "date" : d;
  };
  var O = (a) => {
    if (typeof a == "boolean") return a;
    if (a === "true") return true;
    if (a === "false") return false;
    throw new Error("should be a boolean!");
  };
  var Y = (a) => {
    if (typeof a == "string") return a;
    throw new Error("should be a string!");
  };
  var V = (a) => {
    if (typeof a == "number" && a >= 0) return a;
    if (typeof a == "string" && (a = parseFloat(a)), isNaN(a) || a < 0) throw new Error("should be a positive number!");
    return a;
  };
  var _ = (a) => {
    if (typeof a == "boolean" || typeof a == "number") return a;
    if (a === "true") return true;
    if (a === "false") return false;
    if (typeof a == "string" && (a = parseFloat(a), !isNaN(a) && a >= 0)) return a;
    throw new Error("should be a boolean or a positive number!");
  };
  var F = (a) => {
    if (typeof a == "object") return a;
    if (typeof a == "string") try {
      return JSON.parse(a);
    } catch {
      return a;
    }
    throw new Error("should be a string or JSON!");
  };
  var ee = function({ key: a, value: d, expanded: e, indent: c, onToggleExpand: r, level: t = 0, parentRow: u }) {
    let f = document.createElement("div");
    this.maxLevel = t;
    let s = X(d), y = s === "array" || s === "object", g = e === true || e > t, h, v, l, m;
    f.className = `data-row ${g ? "expanded" : ""}`, f.dataset.key = a, f.dataset.level = t, t > 0 && (f.style.paddingLeft = `${c * 5}px`);
    let i = document.createElement("span");
    i.className = "key-value-wrapper", f.appendChild(i);
    let k = () => {
      f.classList.toggle("expanded"), r && (f.classList.contains("expanded") ? r(t + 1) : r(t));
    };
    if (y) {
      let n = document.createElement("span");
      n.className = "icon-wrapper", i.appendChild(n), h = document.createElement("span"), h.className = "expand icon clickable", h.setAttribute("title", g ? "Collapse" : "Expand"), n.appendChild(h), n.addEventListener("click", () => k());
    }
    if (a !== null && a !== "") {
      let n = typeof a;
      l = document.createElement("span"), l.className = `key clickable ${n === "number" ? "number" : ""}`, l.textContent = n === "number" ? a : `"${a}"`, l.addEventListener("click", () => k()), i.appendChild(l);
      let b = document.createElement("span");
      b.classList.add("colon"), b.textContent = ":", i.appendChild(b);
    }
    if (y) {
      let n = document.createElement("span");
      n.className = "opening-parenthesis", n.textContent = s === "array" ? "[" : "{", i.appendChild(n);
      let b = document.createElement("span");
      b.className = "ellipsis clickable", b.textContent = "...", b.addEventListener("click", () => k()), i.appendChild(b);
      let x = document.createElement("span");
      x.className = "closing-parenthesis", x.textContent = s === "array" ? "]" : "}", i.appendChild(x);
      let D = document.createElement("span"), z = s === "array" ? d.length : Object.keys(d).length;
      D.className = "items-size", D.textContent = `${z} item${z === 1 ? "" : "s"}`, i.appendChild(D), v = [], (s === "array" ? d.map((L, N) => N) : Object.keys(d)).forEach((L) => {
        let N = new ee({ key: L, value: d[L], expanded: e, indent: c, onToggleExpand: r, level: t + 1, parentRow: f });
        v.push(N), f.appendChild(N.element), this.maxLevel = Math.max(this.maxLevel, N.maxLevel);
      });
      let W = document.createElement("span");
      W.className = "closing-parenthesis", W.textContent = s === "array" ? "]" : "}", f.appendChild(W);
    } else {
      let n = null;
      ["nan", "NaN", "undefined", "null"].includes(s) || (n = document.createElement("span"), n.className = "type", n.textContent = s.toLowerCase());
      let b = document.createElement("span");
      b.className = `value ${s.toLowerCase()}`, m = document.createElement("span"), m.className = "value-data", m.textContent = s === "string" ? `"${d}"` : d, n && b.appendChild(n), b.appendChild(m), i.appendChild(b);
    }
    let w = document.createElement("span");
    w.className = "copy icon", w.setAttribute("title", "Copy to clipboard");
    let E = document.createElement("span");
    E.className = "icon-wrapper", E.addEventListener("click", () => {
      navigator.clipboard.writeText(JSON.stringify(d, null, c));
    }), E.appendChild(w), i.appendChild(E);
    let A = (n) => {
      let b = new RegExp(n, "gi"), x = [];
      l && x.push(l), m && x.push(m);
      let D = false;
      x.forEach((z) => {
        let j = z.textContent;
        if (z.innerHTML = j, !n || n === "") return;
        let W = [...j.matchAll(b)].map((B) => B.index), L = [], N = 0;
        W.forEach((B) => {
          D = true, L.push(j.slice(N, B)), L.push(`<span class="match">${n}</span>`), N = B + n.length;
        }), L.push(j.slice(N)), z.innerHTML = L.join("");
      }), D && !f.classList.contains("expanded") && (k(), u && u.classList.add("expanded"));
    };
    this.update = ({ expanded: n, indent: b, searchTerm: x }) => {
      b !== void 0 && t > 0 && (f.style.paddingLeft = `${b * 5}px`), n !== void 0 && (g = n === true || n > t, f.classList.toggle("expanded", g), h && (h.title = g ? "Collapse" : "Expand")), x != null && A(x), v && v.forEach((D) => D.update({ expanded: n, indent: b, searchTerm: x }));
    }, this.element = f;
  };
  var ae = ee;
  var fe = function({ expanded: a, indent: d, onChange: e, onSearch: c, showDetails: r }) {
    this.indent = d || 2, this.expanded = typeof a == "number" ? a : 2, this.showDetails = r !== false, this.maxExpandLevel = 0;
    let t, u = document.createElement("div");
    u.className = "toolbar";
    let f = document.createElement("div");
    f.className = "options", u.appendChild(f);
    let s = document.createElement("div");
    s.className = "search-wrapper", u.appendChild(s);
    let y = document.createElement("div");
    y.className = "icon-wrapper clickable", f.appendChild(y);
    let g = document.createElement("span");
    g.className = "icon refresh", y.onclick = () => this.refresh(), y.appendChild(g);
    let h = document.createElement("div");
    h.className = "icon-wrapper clickable", f.appendChild(h);
    let v = document.createElement("span");
    v.className = "icon plus", h.appendChild(v), h.onclick = () => {
      this.expanded < this.maxExpandLevel && (this.expanded += 1), e({ expanded: this.expanded });
    };
    let l = document.createElement("div");
    l.className = "icon-wrapper clickable", f.appendChild(l);
    let m = document.createElement("span");
    m.className = "icon minus", l.appendChild(m), l.onclick = () => {
      this.expanded > this.maxExpandLevel && (this.expanded = this.maxExpandLevel), this.expanded > 0 && (this.expanded -= 1), e({ expanded: this.expanded });
    };
    let i = document.createElement("div");
    i.className = "icon-wrapper clickable", f.appendChild(i);
    let k = document.createElement("span");
    k.className = "icon indent", i.onclick = () => {
      this.indent += 1, e({ indent: this.indent });
    }, i.appendChild(k);
    let w = document.createElement("div");
    w.className = "icon-wrapper clickable", f.appendChild(w);
    let E = document.createElement("span");
    E.className = "icon outdent", w.onclick = () => {
      this.indent -= 1, e({ indent: this.indent });
    }, w.appendChild(E);
    let A = document.createElement("div");
    A.className = "icon-wrapper clickable", f.appendChild(A);
    let n = document.createElement("span");
    n.className = `icon info ${this.showDetails ? "active" : ""}`, A.onclick = () => {
      n.classList.toggle("active"), this.showDetails = !this.showDetails, e({ showDetails: this.showDetails });
    }, A.appendChild(n);
    let b = document.createElement("span");
    b.className = "icon search", s.appendChild(b), t = document.createElement("input"), t.className = "search-input", t.placeholder = "Search", t.oninput = (x) => {
      c(x.target.value);
    }, s.appendChild(t), this.refresh = () => {
      this.expanded = 1, this.indent = 2, t && (t.value = ""), e({ indent: 2, expanded: 1 }), c("");
    }, this.updateShowDetails = (x) => {
      this.showDetails = x, this.showDetails ? n.classList.add("active") : n.classList.remove("active");
    }, this.element = u;
  };
  var te = fe;
  function ie(a, d = {}) {
    let e = document.createElement("div");
    e.className = "container", a.appendChild(e);
    let c = null, r = null, t = {};
    this.update = ({ data: u, expanded: f, indent: s, expandIconType: y, showDataTypes: g, showToolbar: h, showSize: v, showCopy: l }) => {
      if (u) {
        let i = JSON.stringify(u);
        t.dataComapreString !== i && (t.dataComapreString = i, c = new ae({ key: "", value: u, expanded: f, indent: s, onToggleExpand: (k) => {
          r && (r.expanded = k), t.expanded = k;
        } }), e.replaceChildren(c.element), t.showToolbar && r && (e.prepend(r.element), r.maxExpandLevel = c.maxLevel, r.refresh()));
      }
      if (h !== void 0 && t.showToolbar !== h) if (t.showToolbar = h, h) r || (r = new te({ expanded: t.expanded, indent: t.indent, onChange: ({ expanded: i, indent: k, showDetails: w }) => {
        let E = { expanded: i, indent: k };
        w !== void 0 && (E.showCopy = w, E.showSize = w, E.showDataTypes = w), this.update(E);
      }, onSearch: (i) => {
        c && c.update({ searchTerm: i });
      } })), c && (r.maxExpandLevel = c.maxLevel), e.prepend(r.element);
      else {
        let i = e.querySelector(".toolbar");
        i && i.remove();
      }
      let m = {};
      f !== void 0 && t.expanded !== f && (t.expanded = f, m.expanded = f), s !== void 0 && t.indent !== s && (t.indent = s, m.indent = s), Object.keys(m).length > 0 && c && c.update(m), l !== void 0 && t.showCopy !== l && (t.showCopy = l, e.classList.toggle("show-copy", l)), v !== void 0 && t.showSize !== v && (t.showSize = v, e.classList.toggle("show-size", v), r && r.updateShowDetails(t.showSize || t.showDataTypes)), g !== void 0 && t.showDataTypes !== g && (t.showDataTypes = g, e.classList.toggle("show-data-types", g), r && r.updateShowDetails(t.showSize || t.showDataTypes)), y !== void 0 && t.expandIconType !== y && (e.classList.add(`expand-icon-${y}`), e.classList.remove(`expand-icon-${t.expandIconType}`), t.expandIconType = y);
    }, this.update(d);
  }
  var de = ie;
  var ce = { indent: 2, expanded: 1, theme: "default-light", showDataTypes: true, showToolbar: false, expandIconType: "arrow", showCopy: true, showSize: true, data: null };
  var $;
  var p;
  var q;
  var J;
  var I;
  var C;
  var R;
  var U = class extends HTMLElement {
    constructor() {
      super();
      S(this, $, void 0);
      S(this, p, void 0);
      S(this, q, void 0);
      S(this, J, void 0);
      S(this, I, (...e2) => {
        console.warn(`JsonViewer${this.id ? ` (${this.id})` : ""}:`, ...e2);
      });
      S(this, C, (e2, c2, r, t) => {
        try {
          if (c2 = r(c2), t && !t.includes(c2)) throw new Error(`should be one of ${t.join(", ")}`);
          if (o(this, p)[e2] === c2) return;
          o(this, p)[e2] = c2, o(this, R).call(this);
        } catch (u) {
          o(this, I).call(this, `Attribute ${e2}: ${u.message}`);
        }
      });
      S(this, R, () => {
        o(this, J).update({ data: o(this, q), expanded: o(this, p).expanded, expandIconType: o(this, p).expandIconType, indent: o(this, p).indent, showDataTypes: o(this, p).showDataTypes, showToolbar: o(this, p).showToolbar, showSize: o(this, p).showSize, showCopy: o(this, p).showCopy });
      });
      T(this, p, { ...ce }), T(this, $, document.createElement("style"));
      let e = this.attachShadow({ mode: "open" }), c = document.createElement("style");
      c.textContent = `${G}`, e.appendChild(c), e.appendChild(o(this, $)), this.theme = o(this, p).theme, T(this, J, new de(e, o(this, p)));
    }
    static get observedAttributes() {
      return Object.keys(ce).map((e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase());
    }
    set showDataTypes(e) {
      o(this, C).call(this, "showDataTypes", e, O);
    }
    set showToolbar(e) {
      o(this, C).call(this, "showToolbar", e, O);
    }
    set indent(e) {
      o(this, C).call(this, "indent", e, V);
    }
    set expandIconType(e) {
      o(this, C).call(this, "expandIconType", e, Y, ["arrow", "square", "circle"]);
    }
    set expanded(e) {
      o(this, C).call(this, "expanded", e, _);
    }
    set showSize(e) {
      o(this, C).call(this, "showSize", e, O);
    }
    set showCopy(e) {
      o(this, C).call(this, "showCopy", e, O);
    }
    set theme(e) {
      try {
        if (e = F(e), o(this, p).theme === e && o(this, $).textContent !== "") return;
        o(this, $).textContent = K(e), o(this, p).theme = e;
      } catch (c) {
        o(this, I).call(this, `Attribute theme: ${c.message}`);
      }
    }
    set data(e) {
      try {
        e = F(e);
        let c = JSON.stringify(e);
        if (o(this, p).data === c) return;
        o(this, p).data = c, Q(e) ? fetch(e).then((r) => r.json()).then((r) => {
          T(this, q, r), o(this, R).call(this);
        }) : (T(this, q, e), o(this, R).call(this));
      } catch (c) {
        o(this, I).call(this, `Attribute data: ${c.message}`);
      }
    }
    get options() {
      return o(this, p);
    }
    connectedCallback() {
      window.addEventListener("DOMContentLoaded", () => {
        let e = this.textContent;
        this.textContent = "", e && (this.data = e);
      });
    }
    attributeChangedCallback(e, c, r) {
      if (U.allowedAttributes.indexOf(e) > -1) {
        let t = e.replace(/-([a-z])/g, (u) => u[1].toUpperCase());
        this[t] = r;
      } else o(this, I).call(this, `Attribute ${e} is not supported and will be ignored!`), this.removeAttribute(e);
    }
  };
  var P = U;
  $ = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), H(P, "allowedAttributes", ["id"].concat(U.observedAttributes));
  customElements.get("andypf-json-viewer") || customElements.define("andypf-json-viewer", P);

  // src/panel.js
  function initializePanel() {
    let inertiaPage = {};
    let jsonViewer = null;
    let userSettings = {
      // Appearance
      theme: "dracula",
      fontSize: 16,
      // Display Options
      showDataTypes: false,
      showToolbar: true,
      showCopy: true,
      showSize: true,
      // Structure
      defaultOpenDepth: 2,
      indent: 2,
      expandIconType: "square"
    };
    const themeMapping = {
      // Dark themes
      "dracula": "dracula",
      "monokai": "monokai",
      "ambiance": "tomorrow-night",
      "chaos": "default-dark",
      "clouds_midnight": "default-dark",
      "gob": "default-dark",
      "gruvbox": "gruvbox-dark",
      "idle_fingers": "default-dark",
      "kr_theme": "default-dark",
      "merbivore": "default-dark",
      "merbivore_soft": "default-dark",
      "mono_industrial": "default-dark",
      "nord_dark": "nord",
      "pastel_on_dark": "default-dark",
      "solarized_dark": "solarized-dark",
      "terminal": "default-dark",
      "tomorrow_night": "tomorrow-night",
      "tomorrow_night_blue": "tomorrow-night-blue",
      "tomorrow_night_bright": "tomorrow-night-bright",
      "tomorrow_night_eighties": "tomorrow-night-eighties",
      "twilight": "twilight",
      "vibrant_ink": "default-dark",
      // Light themes
      "chrome": "default-light",
      "clouds": "default-light",
      "crimson_editor": "default-light",
      "dawn": "default-light",
      "dreamweaver": "default-light",
      "eclipse": "default-light",
      "github": "github",
      "iplastic": "default-light",
      "solarized_light": "solarized-light",
      "sqlserver": "default-light",
      "textmate": "default-light",
      "tomorrow": "tomorrow",
      "xcode": "xcode"
    };
    const initializeJsonViewer = () => {
      const container = document.querySelector("#json-viewer-container");
      if (!container) return;
      container.innerHTML = "";
      const viewerTheme = themeMapping[userSettings.theme] || "default-dark";
      jsonViewer = document.createElement("andypf-json-viewer");
      jsonViewer.setAttribute("theme", viewerTheme);
      jsonViewer.setAttribute("expanded", userSettings.defaultOpenDepth.toString());
      jsonViewer.setAttribute("show-toolbar", userSettings.showToolbar.toString());
      jsonViewer.setAttribute("show-data-types", userSettings.showDataTypes.toString());
      jsonViewer.setAttribute("show-copy", userSettings.showCopy.toString());
      jsonViewer.setAttribute("show-size", userSettings.showSize.toString());
      jsonViewer.setAttribute("expand-icon-type", userSettings.expandIconType);
      jsonViewer.setAttribute("indent", userSettings.indent.toString());
      jsonViewer.style.fontSize = `${userSettings.fontSize}px`;
      container.appendChild(jsonViewer);
      setTimeout(() => {
        if (jsonViewer) {
          jsonViewer.data = { message: "Refresh your page to see Inertia.js page json" };
        }
      }, 100);
    };
    const updateJsonViewerSettings = () => {
      if (!jsonViewer) return;
      const viewerTheme = themeMapping[userSettings.theme] || "default-dark";
      jsonViewer.setAttribute("theme", viewerTheme);
      jsonViewer.setAttribute("expanded", userSettings.defaultOpenDepth.toString());
      jsonViewer.setAttribute("show-toolbar", userSettings.showToolbar.toString());
      jsonViewer.setAttribute("show-data-types", userSettings.showDataTypes.toString());
      jsonViewer.setAttribute("show-copy", userSettings.showCopy.toString());
      jsonViewer.setAttribute("show-size", userSettings.showSize.toString());
      jsonViewer.setAttribute("expand-icon-type", userSettings.expandIconType);
      jsonViewer.setAttribute("indent", userSettings.indent.toString());
      jsonViewer.style.fontSize = `${userSettings.fontSize}px`;
    };
    const updateBodyTheme = (theme) => {
      const darkThemes = [
        "ambiance",
        "chaos",
        "clouds_midnight",
        "dracula",
        "gob",
        "gruvbox",
        "idle_fingers",
        "kr_theme",
        "merbivore",
        "merbivore_soft",
        "mono_industrial",
        "monokai",
        "nord_dark",
        "pastel_on_dark",
        "solarized_dark",
        "terminal",
        "tomorrow_night",
        "tomorrow_night_blue",
        "tomorrow_night_bright",
        "tomorrow_night_eighties",
        "twilight",
        "vibrant_ink"
      ];
      if (darkThemes.includes(theme)) {
        document.body.classList.add("theme-dark");
        document.body.classList.remove("theme-light");
      } else {
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
      }
    };
    chrome.storage.sync.get(userSettings, (items) => {
      userSettings = items;
      updateBodyTheme(items.theme);
      initializeJsonViewer();
    });
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === "sync") {
        let settingsChanged = false;
        for (let key in changes) {
          if (userSettings.hasOwnProperty(key)) {
            userSettings[key] = changes[key].newValue;
            settingsChanged = true;
          }
        }
        if (settingsChanged) {
          if (changes.theme) {
            updateBodyTheme(changes.theme.newValue);
          }
          updateJsonViewerSettings();
        }
      }
    });
    const mergePage = (nextPage, isPartial = false) => {
      if (typeof nextPage !== "object" || nextPage === null || !nextPage.component) {
        return inertiaPage;
      }
      if (isPartial && typeof inertiaPage === "object" && inertiaPage !== null && inertiaPage.component === nextPage.component) {
        return inertiaPage = { ...nextPage, props: { ...inertiaPage.props, ...nextPage.props } };
      }
      return inertiaPage = nextPage;
    };
    let renderJson = (page, isPartial = false) => {
      const newPage = mergePage(page, isPartial);
      if (typeof newPage !== "object" || newPage === null) return;
      if (jsonViewer) {
        setTimeout(() => {
          if (jsonViewer) {
            jsonViewer.data = newPage;
            jsonViewer.setAttribute("expanded", userSettings.defaultOpenDepth.toString());
            jsonViewer.style.fontSize = `${userSettings.fontSize}px`;
          }
        }, 50);
      }
      handleZiggy(newPage);
    };
    const sendJson = () => {
      if (jsonViewer && jsonViewer.data) {
        const jsonString = JSON.stringify(jsonViewer.data);
        chrome.devtools.inspectedWindow.eval(`dispatchEvent(new PopStateEvent("popstate", {state: ${jsonString}}))`);
      }
    };
    document.querySelector("#send").addEventListener("click", sendJson);
    const port = chrome.runtime.connect({ name: `panel-${chrome.devtools.inspectedWindow.tabId}` });
    port.onMessage.addListener((message) => {
      if (message.type === "INERTIA_SUCCESS") renderJson(message.page);
    });
    chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, { type: "GET_INERTIA_PAGE" }, (page) => {
      if (page) {
        renderJson(page);
      } else {
        setTimeout(() => {
          if (jsonViewer) {
            jsonViewer.data = { message: "This page doesn't seem to be using Inertia.js" };
          }
        }, 100);
      }
    });
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      if (request.response.status === 200 && request.response.headers.find((h) => h.name.toLowerCase() === "x-inertia")) {
        const isPartial = request.request.headers.some((h) => h.name.toLowerCase() === "x-inertia-partial-data");
        request.getContent((content) => {
          try {
            if (content) renderJson(JSON.parse(content), isPartial);
          } catch (e) {
            console.error("Inertia Devtools: Error parsing X-Inertia response.", e);
          }
        });
      }
    });
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const routesTab = document.querySelector('[data-tab="routes"]');
    const routeListContainer = document.querySelector("#route-list");
    const routeSearchInput = document.querySelector("#route-search");
    let allRoutes = [];
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
        if (button.dataset.tab === "props" && jsonViewer) {
        }
      });
    });
    function handleZiggy(page) {
      if (page && page.props && page.props.ziggy && page.props.ziggy.routes) {
        routesTab.style.display = "block";
        allRoutes = Object.entries(page.props.ziggy.routes).map(([name, route]) => ({ name, ...route }));
        renderRoutes(allRoutes);
      } else {
        routesTab.style.display = "none";
      }
    }
    function renderRoutes(routes) {
      routeListContainer.innerHTML = "";
      routes.forEach((route) => {
        const routeItem = document.createElement("div");
        routeItem.className = "route-item";
        const methods = route.methods.map((m) => `<span class="route-method route-method-${m.toLowerCase()}">${m}</span>`).join("");
        const bindings = route.bindings ? Object.entries(route.bindings).map(([k, v]) => `${k}: ${v}`).join("<br>") : "<em>none</em>";
        const wheres = route.wheres ? JSON.stringify(route.wheres, null, 2) : "<em>none</em>";
        routeItem.innerHTML = `<div class="route-name">${route.name}</div><div class="route-details"><div class="route-detail-label">URI:</div><div class="route-detail-value">${route.uri}</div><div class="route-detail-label">Methods:</div><div class="route-detail-value route-methods">${methods}</div><div class="route-detail-label">Bindings:</div><div class="route-detail-value">${bindings}</div><div class="route-detail-label">Wheres:</div><div class="route-detail-value">${wheres}</div></div>`;
        routeListContainer.appendChild(routeItem);
      });
    }
    routeSearchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredRoutes = allRoutes.filter((r) => r.name.toLowerCase().includes(searchTerm) || r.uri.toLowerCase().includes(searchTerm));
      renderRoutes(filteredRoutes);
    });
    const settingsModal = document.getElementById("settings-modal");
    const settingsBtn = document.getElementById("settings-btn");
    const settingsClose = document.getElementById("settings-close");
    function openSettingsModal() {
      document.getElementById("modal-theme").value = userSettings.theme;
      document.getElementById("modal-fontSize").value = userSettings.fontSize;
      document.getElementById("modal-showDataTypes").checked = userSettings.showDataTypes;
      document.getElementById("modal-showToolbar").checked = userSettings.showToolbar;
      document.getElementById("modal-showCopy").checked = userSettings.showCopy;
      document.getElementById("modal-showSize").checked = userSettings.showSize;
      document.getElementById("modal-defaultOpenDepth").value = userSettings.defaultOpenDepth;
      document.getElementById("modal-indent").value = userSettings.indent;
      const expandIconRadio = document.querySelector(`input[name="expandIconType"][value="${userSettings.expandIconType}"]`);
      if (expandIconRadio) {
        expandIconRadio.checked = true;
      }
      settingsModal.classList.add("show");
    }
    function closeSettingsModal() {
      settingsModal.classList.remove("show");
    }
    function showSettingsSavedFeedback() {
      let feedback = document.getElementById("settings-feedback");
      if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = "settings-feedback";
        feedback.className = "settings-feedback";
        feedback.textContent = "Settings saved!";
        document.body.appendChild(feedback);
      }
      feedback.classList.add("show");
      setTimeout(() => {
        feedback.classList.remove("show");
      }, 2e3);
    }
    function saveSettings() {
      const newSettings = {
        theme: document.getElementById("modal-theme").value,
        fontSize: parseInt(document.getElementById("modal-fontSize").value),
        showDataTypes: document.getElementById("modal-showDataTypes").checked,
        showToolbar: document.getElementById("modal-showToolbar").checked,
        showCopy: document.getElementById("modal-showCopy").checked,
        showSize: document.getElementById("modal-showSize").checked,
        defaultOpenDepth: parseInt(document.getElementById("modal-defaultOpenDepth").value),
        indent: parseInt(document.getElementById("modal-indent").value),
        expandIconType: document.querySelector('input[name="expandIconType"]:checked')?.value || "square"
      };
      chrome.storage.sync.set(newSettings, () => {
        console.log("Settings saved");
        showSettingsSavedFeedback();
      });
    }
    settingsBtn.addEventListener("click", openSettingsModal);
    settingsClose.addEventListener("click", closeSettingsModal);
    settingsModal.addEventListener("click", (e) => {
      if (e.target === settingsModal) {
        closeSettingsModal();
      }
    });
    const settingsInputs = settingsModal.querySelectorAll("select, input");
    settingsInputs.forEach((input) => {
      input.addEventListener("change", saveSettings);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && settingsModal.classList.contains("show")) {
        closeSettingsModal();
      }
    });
  }
  document.addEventListener("DOMContentLoaded", initializePanel);
})();
