import { SHA512 } from "@stablelib/sha512";
const arrayBufferToHex = require("array-buffer-to-hex");
import { hmac } from "@stablelib/hmac";

export const DIGEST_LENGTH = 28;
export const BLOCK_SIZE = 128;

export class SHA512_224 extends SHA512 {
    readonly digestLength = DIGEST_LENGTH;

    protected _initState() {
        this._stateHi[0] = 0x8C3D37C8;
        this._stateHi[1] = 0x73E19966;
        this._stateHi[2] = 0x1DFAB7AE;
        this._stateHi[3] = 0x679DD514;
        this._stateHi[4] = 0x0F6D2B69;
        this._stateHi[5] = 0x77E36F73;
        this._stateHi[6] = 0x3F9D85A8;
        this._stateHi[7] = 0x1112E6AD;

        this._stateLo[0] = 0x19544DA2;
        this._stateLo[1] = 0x89DCD4D6;
        this._stateLo[2] = 0x32FF9C82;
        this._stateLo[3] = 0x582F9FCF;
        this._stateLo[4] = 0x7BD44DA8;
        this._stateLo[5] = 0x04C48942;
        this._stateLo[6] = 0x6A1D36C8;
        this._stateLo[7] = 0x91D692A1;
    }
}

export function hash(data: Uint8Array): Uint8Array {
    const h = new SHA512_224();
    h.update(data);
    const digest = h.digest();
    h.clean();
    return digest;
}

export function sha512_224(s: string): string {
    let enc = new TextEncoder();
    let arr = enc.encode(s);
    let h = hash(arr);
    return arrayBufferToHex(h.buffer);
}

export function hashWithHmac(key: Uint8Array, data: Uint8Array): Uint8Array {
    return hmac(SHA512_224, key, data);
}

export function HmacSHA512_224(key: string, data: string): string {
    let enc = new TextEncoder();
    let k = enc.encode(key);
    let d = enc.encode(data);
    let h = hashWithHmac(k, d);
    return arrayBufferToHex(h.buffer);
}
