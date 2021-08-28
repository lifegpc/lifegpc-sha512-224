import { sha512_224, hash, HmacSHA512_224, hashWithHmac } from "./sha512_224"
const expect = require("expect");
const arrayBufferToHex = require("array-buffer-to-hex");

expect(sha512_224("")).toBe("6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4");
expect(sha512_224("Firefox vs Chrome")).toBe("b783aafd6a57304bece946f8daef136076a7bd0a3587040dfc5e5b84");
expect(sha512_224("123456789012345678901234567890123456789012345678901234567890")).toBe("854107269812b3c96d2d9043d9e4821ad04daaefcaff6e6802b067e6");
expect(sha512_224("花澤香菜")).toBe("2a7bc9fc9ea1a859fd0f01567f5b3f208bc263e80ca8844a0273a247");
expect(sha512_224("小倉唯")).toBe("8f69f113bfb5c17948c7707188f2e1ce8dc89b4d00884aa1b7db734e");
expect(arrayBufferToHex(hash(new Uint8Array([32, 48])).buffer)).toBe("a6f629937628fd8feb0c37b5869f16e5b01e47d05d4b84143edf41bb");
expect(HmacSHA512_224("key", "helloworld")).toBe("61fcac59dfbd528c24d8214f999b8a60ee8a13a6bd714a72e5299088");
expect(HmacSHA512_224("小倉唯", "花澤香菜")).toBe("a2c382f932ad0c3e23731804d22013f25549fcb967d9c0684288a441");
expect(arrayBufferToHex(hashWithHmac(new Uint8Array([48, 48]), new Uint8Array([48, 49])).buffer)).toBe("1699bf9a404cdd70d3fd483454066528b93f15b7744f453f79ff72f9")
