#!/bin/sh

nativefier \
  'https://mail.google.com' \
  --name 'Google Gmail' \
  --icon './icons/Google_Gmail.icns' \
  --min-width 720 \
  --min-height 450 \
  --fast-quit \
  --counter \
  --bounce \
  --conceal \
  --internal-urls '(?!)' \
  --inject './injects/Google_Gmail.css' \
  --title-bar-style 'hidden' \
  --darwin-dark-mode-support