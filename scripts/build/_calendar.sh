#!/bin/sh

nativefier \
  'https://calendar.google.com' \
  --name 'Google Calendar' \
  --icon './icons/Google_Calendar.icns' \
  --min-width 930 \
  --min-height 450 \
  --fast-quit \
  --counter \
  --bounce \
  --conceal \
  --internal-urls '(?!)' \
  --inject './injects/Google_Calendar.css' \
  --title-bar-style 'hidden' \
  --darwin-dark-mode-support
