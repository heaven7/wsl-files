Package.describe({
  name: 'heaven7:wsl-files',
  version: '0.0.3',
  summary: 'Files package for image and attachment handling',
  git: 'https://github.com/heaven7/wsl-files.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
    'heaven7:wsl-core@0.0.3_1',
    'cfs:standard-packages@0.5.9',
    'cfs:gridfs@0.0.33',
    'cfs:ui@0.1.3',
    'cfs:filesystem@0.1.2',
    'cfs:graphicsmagick@0.0.18',
    'cfs:ejson-file@0.0.0',
    'yogiben:autoform-file@0.4.1'
];

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
