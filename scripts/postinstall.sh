#!/bin/sh

BASEDIR=$(dirname $0)

if [ ! -h "${BASEDIR}/../.git/hooks/pre-commit" ]; then
  ln -sf "${BASEDIR}/pre-commit.sh" "${BASEDIR}/../.git/hooks/pre-commit"
fi

if [ ! -f "${BASEDIR}/../.envrc" -a -x "`which direnv`" ]; then
  echo 'export PATH="$(npm bin):$PATH"' > "${BASEDIR}/../.envrc"
  direnv allow
fi
