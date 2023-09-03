# translate-audio

A JavaScript library for translating from text to audio or new language follow text or vocab. Supports multiple ReactJs, NextJS and NodeJS

## Installation

You can install the `translate-audio` library using npm:

```bash
# npm install translate-audio
# yarn add  translate-audio
```

## Features

- translateHaveSound
- translate
- translateExactly

### Usage

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
  sound: null,
  idSound: null,
  country: 'English',
  lang: 'en',
  statusCode: 200
}
```

#### translateExactly

```
import {translateExactly} from "translate-audio";

->⚡translateExactly return Promise

translateExactly("học sinh", { from: "vi", to: "en" })
.then(console.log)
.catch(console.error);


->😊😊 Result
{
  vocab: 'contact',
  vocab_translate: 'liên hệ',
  sound: null,
  idSound: null,
  country: 'Vietnamese',
  lang: 'vi',
  statusCode: 200
}
```

#### Thanks for using my library

- You can use react-swisskit (My package 😊😊😊😊😊😊)
#   t r a n s l a t e - l i b r a r y  
 