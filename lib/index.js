"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langs = exports.translateHaveSoundWithCurrent = exports.translateHaveSound = exports.translateExactly = exports.translate = void 0;
/**
 * Author : Phạm Hoài Nam
 * Position : FullStack Developer
 * Facebook : https://www.facebook.com/namhoai2102
 * Email: namph2102@gmail.com
 */
const translate_type_1 = require("./type/translate.type");
Object.defineProperty(exports, "langs", { enumerable: true, get: function () { return translate_type_1.langs; } });
const translate_1 = require("./package/translate");
Object.defineProperty(exports, "translate", { enumerable: true, get: function () { return translate_1.translate; } });
Object.defineProperty(exports, "translateExactly", { enumerable: true, get: function () { return translate_1.translateExactly; } });
Object.defineProperty(exports, "translateHaveSound", { enumerable: true, get: function () { return translate_1.translateHaveSound; } });
Object.defineProperty(exports, "translateHaveSoundWithCurrent", { enumerable: true, get: function () { return translate_1.translateHaveSoundWithCurrent; } });
exports.default = translate_1.translate;
