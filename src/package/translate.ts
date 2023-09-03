// config domain server
enum DOMAIN {
  HOST = "http://localhost:4000",
  HOST_REAL = "https://severtranslate-production.up.railway.app",
}
export const DOMAIN_SERVER = DOMAIN.HOST_REAL;
import { langs } from "../type/translate.type";

type LangKey = keyof typeof langs;
enum API_TRANSLATE {
  TRANSLATE = DOMAIN_SERVER + "/api/create/translate",
  TRANSLATE_EXACTLY = DOMAIN_SERVER + "/api/create/translate/exactly",

  TRANSLATE_VOICES = DOMAIN_SERVER + "/api/create/sound",
}
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
export const translate = (word: string | number, lang: LangKey) => {
  return fetch(API_TRANSLATE.TRANSLATE, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ message: word, lang: lang }),
  }).then((res) => res.json());
};
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
export const translateExactly = (
  word: string | number,
  tranObj: { from: LangKey; to: LangKey }
) => {
  return fetch(API_TRANSLATE.TRANSLATE_EXACTLY, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ message: word, from: tranObj.from, to: tranObj.to }),
  }).then((res) => res.json());
};
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
export const translateHaveSound = (word: string | number, lang: LangKey) => {
  return fetch(API_TRANSLATE.TRANSLATE_VOICES, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ message: word, lang: lang }),
  }).then((res) => res.json());
};
