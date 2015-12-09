Package.describe({
  name: 'heaven7:wsl-files',
  version: '0.0.1',
  summary: 'Files package for image and attachment handling',
  git: 'https://github.com/heaven7/wsl-files.git',
  documentation: 'README.md'
});

var packages = [
    'heaven7:wsl-core@0.0.2',
    'cfs:standard-packages',
    'cfs:gridfs',
    'cfs:ui',
    'cfs:filesystem',
    'cfs:graphicsmagick',
    'yogiben:autoform-file'
],
both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use(packages, both);
    api.imply(packages);

    api.addFiles([
        'lib/both/attachments.js',
        'lib/both/images.js'
    ], both);

    api.addFiles([
        'lib/server/allow.js',
        'lib/server/publish.js'
    ], 'server');

    api.export([
        'Images'
    ]);
});
