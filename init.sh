#!/bin/sh 

rm -rf .expo
rm -rf iOS
rm -rf android
rm -rf node-modules

npm install
npx expo prebuild --clean
