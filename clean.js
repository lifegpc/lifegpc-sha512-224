const fs = require("fs");

/**
 * Clean exports.xxx = void 0;
 * @param {string} fn File name
 */
function clean(fn) {
    if (fs.existsSync(fn)) {
        let f = fs.readFileSync(fn, {"encoding": "utf-8"})
        let l = f.split('\n');
        let r = [];
        let fi = false;
        for (let i = 0; i < l.length; i++) {
            let s = l[i].trim();
            if (s.startsWith('exports.') && s.endsWith('= void 0;') && fi) continue;
            if (s.startsWith('Object.defineProperty(exports,')) fi = true;
            else fi = false;
            r.push(s);
        }
        let t = r.join('\n');
        fs.writeFileSync(fn, t, {"encoding": "utf-8"});
    }
}

clean("lib/sha512_224.js")
