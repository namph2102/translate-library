/**
 * Author : Phạm Hoài Nam
 * Position : FullStack Developer
 * Facebook : https://www.facebook.com/namhoai2102
 * Email: namph2102@gmail.com
 */
import { langs } from "./type/translate.type";
import {
  translate,
  translateExactly,
  translateHaveSound,
  translateHaveSoundWithCurrent,
  LangKey,
} from "./package/translate";

export {
  translate,
  translateExactly,
  translateHaveSound,
  translateHaveSoundWithCurrent,
  langs,
  LangKey as ILang,
};

export default translate;
