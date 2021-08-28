# sha512-224
A Node.js module for hashing messages with SHA512/224.
## Function
```JavaScript
const sha512_224 = require("sha512-224");
sha512_224.sha512_224("test"); // 06001bf08dfb17d2b54925116823be230e98b5c6c278303bc4909a8c
// The string will encode with UTF-8
sha512_224.sha512_224("中文"); // 0f46a0ae7f226517dd66ece0ce1efa29ffb7ced05ac4566fdcaed188
// UInt8Array is also supported.
sha512_224.hash(new Uint8Array([32, 48]));
sha512_224.HmacSHA512_224("key", "helloworld"); // 61fcac59dfbd528c24d8214f999b8a60ee8a13a6bd714a72e5299088
sha512_224.hashWithHmac(new Uint8Array([32, 48]), new Uint8Array([32, 49]));
```
