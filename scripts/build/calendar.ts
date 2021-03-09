#!/usr/bin/env ts-node

import os from 'os';
import { promises as fs } from 'fs';
import path from 'path';
import nativefier from 'nativefier';

(async () => {
  const injectPath = path.join(await fs.mkdtemp(path.join(os.tmpdir(), 'build-google-apps')), 'inject.css');
  const injectBody = [
    await fs.readFile(path.join(__dirname, '..', '..', 'injects', 'common.css'), 'utf-8'),
    await fs.readFile(path.join(__dirname, '..', '..', 'injects', 'google-calendar.css'), 'utf-8'),
  ].join('\n');
  await fs.writeFile(injectPath, injectBody);

  await new Promise((resolve, reject) => {
    nativefier(
      {
        name: 'Google Calendar',
        targetUrl: 'https://calendar.google.com',
        out: path.join(__dirname, '..', '..', 'dist'),
        overwrite: true,
        asar: true,
        icon: path.join(__dirname, '..', '..', 'icons', 'google-calendar.icns'),
        counter: true,
        bounce: true,
        width: 930,
        height: 450,
        showMenuBar: false,
        fastQuit: true,
        ignoreCertificate: false,
        ignoreGpuBlacklist: false,
        enableEs3Apis: false,
        internalUrls: 'accounts\\.google\\.com',
        blockExternalUrls: false,
        inject: [injectPath],
        titleBarStyle: 'hiddenInset',
        darwinDarkModeSupport: true,
      },
      (e, v) => (e ? reject(e) : resolve(v)),
    );
  });
})();
