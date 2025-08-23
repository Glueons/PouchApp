#!/bin/sh

eas build --platform android --local
mv *.aab ~/Desktop/Apps/PouchApp.aab
cd ~/Desktop/Apps
install-apk.sh

