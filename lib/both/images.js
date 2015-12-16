Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("images", {
            transformWrite: function(fileObj, readStream, writeStream) {
                if (gm.isAvailable) {
                    return gm(readStream, fileObj.name()).autoOrient().stream().pipe(writeStream);
                } else {
                    return readStream.pipe(writeStream);
                }
            }
        }), new FS.Store.GridFS("card", {
            transformWrite: function(fileObj, readStream, writeStream) {
                var size;
                if (gm.isAvailable) {
                    size = {
                        width: 290,
                        height: 290
                    };
                    return gm(readStream, fileObj.name()).autoOrient().resize(size.width + "^>", size.height + "^>").gravity("Center").extent(size.width, size.height).stream().pipe(writeStream);
                } else {
                    return readStream.pipe(writeStream);
                }
            }
        }), new FS.Store.GridFS("thumbs", {
            transformWrite: function(fileObj, readStream, writeStream) {
                var size;
                if (gm.isAvailable) {
                    size = {
                        width: 100,
                        height: 100
                    };
                    return gm(readStream, fileObj.name()).autoOrient().resize(size.width + "^>", size.height + "^>").gravity("Center").extent(size.width, size.height).stream().pipe(writeStream);
                } else {
                    return readStream.pipe(writeStream);
                }
            }
        }), new FS.Store.GridFS("minithumbs", {
            transformWrite: function(fileObj, readStream, writeStream) {
                var size;
                if (gm.isAvailable) {
                    size = {
                        width: 55,
                        height: 55
                    };
                    return gm(readStream, fileObj.name()).autoOrient().resize(size.width + "^>", size.height + "^>").gravity("Center").extent(size.width, size.height).stream().pipe(writeStream);
                } else {
                    return readStream.pipe(writeStream);
                }
            }
        })
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});
