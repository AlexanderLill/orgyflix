module.exports.createEvent = function(req, res, next) {
    this.createEvent(req.title, req.imdbNr);
};

module.exports.createRawEvent = function(title, imdbNr) {
    // do magic
};