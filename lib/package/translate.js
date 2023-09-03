"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateHaveSound = exports.translateExactly = exports.translate = exports.DOMAIN_SERVER = void 0;
// config domain server
var DOMAIN;
(function (DOMAIN) {
    DOMAIN["HOST"] = "http://localhost:4000";
    DOMAIN["HOST_REAL"] = "https://severtranslate-production.up.railway.app";
})(DOMAIN || (DOMAIN = {}));
exports.DOMAIN_SERVER = DOMAIN.HOST_REAL;
var API_TRANSLATE;
(function (API_TRANSLATE) {
    API_TRANSLATE["TRANSLATE"] = "https://severtranslate-production.up.railway.app/api/create/translate";
    API_TRANSLATE["TRANSLATE_EXACTLY"] = "https://severtranslate-production.up.railway.app/api/create/translate/exactly";
    API_TRANSLATE["TRANSLATE_VOICES"] = "https://severtranslate-production.up.railway.app/api/create/sound";
})(API_TRANSLATE || (API_TRANSLATE = {}));
/**
 *  translate will return data translate
 * @param word  word is first parameter
 * @param lang  lang is  country's code parameter you will translate to
 * @returns its will render translate new vocab follow lang
 * Promise   {sound,
          vocab,
          vocab_translate,
          lang,
          country,
          statusCode}
 */
const translate = (word, lang) => {
    return fetch(API_TRANSLATE.TRANSLATE, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: word, lang: lang }),
    }).then((res) => res.json());
};
exports.translate = translate;
/**
 *  translateExactly will return data translate
 * @param word  word is first parameter
 * @param tranObj  {from:"",to:""} from is current country's code follow word **  to is new country's code you want render
 * @returns its will render very faster translate new vocab follow to
 * Promise   {sound,
          vocab,
          vocab_translate,
          lang,
          country,
          statusCode}
 */
const translateExactly = (word, tranObj) => {
    return fetch(API_TRANSLATE.TRANSLATE_EXACTLY, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: word, from: tranObj.from, to: tranObj.to }),
    }).then((res) => res.json());
};
exports.translateExactly = translateExactly;
/**
 *  translateHaveSound will return data translate
 * @param word  word is first parameter
 * @param lang  lang is country's code   about 52 country support in the world
 * @returns its will render sound's word, follow lang param Remember follow Promise Data
 * Promise   {sound,
          vocab,
          vocab_translate,
          lang,
          country,
          statusCode}
 */
const translateHaveSound = (word, lang) => {
    return fetch(API_TRANSLATE.TRANSLATE_VOICES, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: word, lang: lang }),
    }).then((res) => res.json());
};
exports.translateHaveSound = translateHaveSound;
