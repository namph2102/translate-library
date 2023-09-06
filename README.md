# translate-audio

A JavaScript library for translating from text to audio or new language follow text or vocab. Supports multiple ReactJs, NextJS and NodeJS

## Installation

You can install the `translate-audio` library using npm:

```bash
# npm install translate-audio
# yarn add  translate-audio
```

## Features

- [translateHaveSound](#translateHaveSound)
- [translateHaveSoundWithCurrent](#translateHaveSoundWithCurrent)
- [translate](#translate)
- [translateExactly](#translateExactly)
- [Use Sound audio](#how-to-use-sound-in-audio-tag)

### Usage

```
translate("student", "vi").then(console.log);
translateExactly("student", { from: "en", to: "ja" }).then(console.log);
translateHaveSound("học sinh", "en").then(console.log);
translateHaveSoundWithCurrent("student", { from: "en", to: "ja" })
.then(
  console.log
);
```

#### translateHaveSound

```
import {translateHaveSound} from "translate-audio";

//Ex1 ->translateHaveSound return Promise

translateHaveSound("i find my love", "en")
.then(console.log)
.catch(console.error);


->😊😊 Result
{
  sound: 'https://drive.google.com/uc?id=1o4_JfZ8QVCx8rsH05KWiM7VhmdhNQnrb', // This is sound you can use Audio Tag to listen
  idSound: '1o4_JfZ8QVCx8rsH05KWiM7VhmdhNQnrb',
  vocab: 'i find my love',
  vocab_translate: 'i find my love',
  lang: 'en',
  country: 'English',
  statusCode: 200
}

//Ex2 ->translateHaveSound return Promise

translateHaveSound("i find my love", "vi")
.then(console.log)
.catch(console.error);

->😊😊 Result
{
  sound: 'https://drive.google.com/uc?id=1BN01JNUrsPFO1poZaDjcv6QEYuSgbQQS',
  idSound: '1BN01JNUrsPFO1poZaDjcv6QEYuSgbQQS',
  vocab: 'i find my love',
  vocab_translate: 'Tôi tìm thấy tình yêu của tôi',
  lang: 'vi',
  country: 'Việt Nam',
  statusCode: 200
}
```

#### translateHaveSoundWithCurrent

```
import {translateHaveSoundWithCurrent} from "translate-audio";

//Ex1 ->translateHaveSoundWithCurrent return Promise

translateHaveSoundWithCurrent("student", { from: "en", to: "vi" })
.then(console.log)
.catch(console.error);


->😊😊 Result
{
  sound: 'https://drive.google.com/uc?id=1rTlSyknoTfuxRQp5Ul5YI1eofGJDKYWL',
  idSound: '1rTlSyknoTfuxRQp5Ul5YI1eofGJDKYWL',
  vocab: 'student',
  vocab_translate: 'học sinh',
  lang: 'vi',
  country: 'Việt Nam',
  lang_current: 'en',
  country_current: 'English',
  statusCode: 200
}

//Ex2

translateHaveSoundWithCurrent("student", { from: "en", to: "ja" })
.then(console.log)
.catch(console.error);

->😊😊 Result
{
  sound: 'https://drive.google.com/uc?id=1dHLTAM2mTtgKbUIfW9SgXXURPv4WKt2F',
  idSound: '1dHLTAM2mTtgKbUIfW9SgXXURPv4WKt2F',
  vocab: 'student',
  vocab_translate: '学生',
  lang: 'ja',
  country: 'Japanese',
  lang_current: 'en',
  country_current: 'English',
  statusCode: 200
}
```

#### translate

```
import {translate} from "translate-audio";

->⚡translate return Promise

translate("contact", "vi")
.then(console.log)
.catch(console.error);


->😊😊 Result
{
  vocab: 'học sinh',
  vocab_translate: 'pupil',
  country: 'English',
  lang: 'en',
  statusCode: 200
}
```

#### translateExactly

```
import {translateExactly} from "translate-audio";

->⚡translateExactly return Promise

translateExactly("học sinh", { from: "vi", to: "uk" })
.then(console.log)
.catch(console.error);


->😊😊 Result
{
  vocab: "học sinh",
  vocab_translate: "учень",
  lang: "uk",
  country: "Ukrainian",
  lang_current: "vi",
  country_current: "Việt Nam",
  statusCode: 200
}
```

#### How to use sound in audio tag

```
- HTML AUDIO>
 <audio controls>
    <source
      type="audio/ogg"
      src="https://drive.google.com/uc?id=1FRlMb51QHpmwjmKLmIDpZmgjvFy-B66k"
    />
    <source
      type="audio/mpeg"
      src="https://drive.google.com/uc?id=1FRlMb51QHpmwjmKLmIDpZmgjvFy-B66k"
   />
     Your browser does not support the audio tag.
 </audio>
```

#### Thanks for using my library

- You can use react-swisskit (My package 😊😊😊😊😊😊)
