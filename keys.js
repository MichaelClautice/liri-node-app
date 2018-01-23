

console.log("Hey Mike, this key.js file is now loaded.");


// use the exports keyword for making properties & methods avail outside this module file:

// this obj will b avail in other js files via the require() function in that other js file

exports.twitterKeys = {

  consumer_key: process.env."2XBrXQ2fgwpBGZIB34zkYxSj1",

  consumer_secret: process.env."LNvKGtgKjLx74uOtpLhNaQQvDbpmndOstqAmtsc6n9H7qLiBdB",

  access_token_key: process.env."953053896645185536-2HAftOcKaifpGboFGAaAn4cFJwT1II8",

  access_token_secret: process.env."2tJENNb3PdSsMujzIaU7w1D8WmVP2xWKdEhUykJxTYV2w"

};

// use the exports keyword for making properties & methods avail outside this module file:

// this obj will b avail in other js files via the require() function in that other js file

exports.spotifyKeys = {

  id: process.env."f76e73c0cfeb44df976ba3e8e111ab50",

  secret: process.env."52994fb2b9664b308fca7e39005c4d17"

};

// •••••••••••••••••••••••••••

// https://github.com/the-realest-stu/liri-node-app/blob/master/keys.js

// var twitterKeys = {

//     consumer_key: 'm8Wz8f8SWBe0Mxrs5l9PMyeV1',

//     consumer_secret: 'wmwu6SKVwMZyCtbBljH1zfxTsrlvHBY4jL1S4mTKOLAstqwky1',

//     access_token_key: '930858886189518848-ISovMWxmBd8hhiLSgC2sxkd9kw1usb1',

//     access_token_secret: 'Rc3XevjZTSoE5jTKcCSDwo5v1o6OnhR8Cu87OKZpcUXQ1',

// };

// var spotifyKeys = {

//     id: 'a389f79e76c748d884ecc94feaa287e9',

//     secret: '24e2b8991bc54d81b568dac54d8ab3e4',

// };

// module.exports = { twitterKeys, spotifyKeys };

// •••••••••••••••••••••••••••

// •••••••••••••••••••••••••••

// https://github.com/alexvirdee/liri-node-app/blob/master/keys.js

// console.log('this is loaded');

// exports.twitterKeys = {

//   consumer_key: 'r6tZR79ntzSjm1NwFBMRAFGWc',

//   consumer_secret: '60GYcMr9N6ZELRnLAtl872hPaVOFPqFNjpl4lva7VPRjUd1YJX',

//   access_token_key: '856222797684781058-xZAA3qlFFSHlPAn7Vv3tDJCGKTfNjV8',

//   access_token_secret: 'm27b6rs1tiZJfNBqFPjbqeIYXykuHRI8jcrnDcwtE91YF',
// }

// •••••••••••••••••••••••••••