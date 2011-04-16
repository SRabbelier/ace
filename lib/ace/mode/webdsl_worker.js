define(function(require, exports, module) {

var oop = require("pilot/oop");
var Mirror = require("ace/worker/mirror").Mirror;
var WebDSL = require("ace/webdsl").WebDSL;

var WebDSLWorker = exports.WebDSLWorker = function(sender) {
    $self.sender = sender;
    Mirror.call(this, sender);
    this.setTimeout(500);
    this.webdsl = new WebDSL();
    this.parser = null;
    this.load();
};

oop.inherits(WebDSLWorker, Mirror);

(function() {
    this.log = function(value) {
        if(typeof(console) !== 'undefined' && console.log !== undefined) {
            console.log(value);
        } else {
            sender.emit("log", value);
        }
    }

    this.load = function() {
        var before = new Date().getTime();
        this.log("Parsing webdsl table");
        var ast = this.webdsl.parse();
        var after = new Date().getTime();
        this.log("Table parsed in " + (after - before) + " ms.");
        this.parser = self.spoofax.createParserSync(ast);
        var post = new Date().getTime();
        this.log("Parser created in " + (post - after) + " ms.");
        sender.emit("loaded", "");
    }

    this.onUpdate = function() {
        var value = this.doc.getValue();

        if(this.parser === null || this.parser.loadFailed()) {
            this.load();
            return;
        }
        if (!this.parser.isReady()) {
            sender.emit("log", "He's not done yet jim.");
            return;
        }
        value = value.replace(/^#!.*\n/, "\n");
        sender.emit("log", "webdsl_worker.onUpdate enter");
        var splitlines = value.split('\n');
        var result = this.parser.parseAndTokenize(splitlines.length, value);
        var length = result.tokens.length;
        var parsed = [];
        for(var i = 0; i < length; i++) {
            var line = splitlines[i];
            var tokens = result.tokens[i];
            parsed[i] = {text: line, tokens: tokens};
        }
        sender.emit("jsglr", {
            parsed: parsed,
            errors: result.errors
        });
        sender.emit("log", "webdsl_worker.onUpdate exit");
    }

}).call(WebDSLWorker.prototype);

});
