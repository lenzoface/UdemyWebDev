import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { franc, francAll } from 'franc';

const colors = require('colors');
const langs = require('langs');

const fs = require('fs');
const langText = process.argv[2];

try {
    const detectLang = franc(langText);
    const lang = langs.where("3", detectLang);
    console.log(`Our best guess is: ${lang.name.green}`);
    console.log('More words, more accuracy!'.rainbow);
} catch (error) {
    console.log(`Something went wrong, try to enter more text. ${error}`.red)
}


// console.log(Object.keys(langs.where('3', detectLang)));
// console.log(Object.values(franc(langText)));