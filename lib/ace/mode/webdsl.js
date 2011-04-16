/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Fabian Jakobs <fabian AT ajax DOT org>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {

var oop = require("pilot/oop");
var TextMode = require("ace/mode/text").Mode;
var WebDSLTokenizer = require("ace/mode/webdsl_tokenizer").WebDSLTokenizer;
var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
var Range = require("ace/range").Range;
var WorkerClient = require("ace/worker/worker_client").WorkerClient;

var WebDSLMode = function() {
    this.$tokenizer = new WebDSLTokenizer();
    this.$outdent = new MatchingBraceOutdent();
    this.$worker = null;
    this.debugWorker = true;
};
oop.inherits(WebDSLMode, TextMode);

var before;
var after;

(function() {
    this.createWorker = function(session) {
        console.log("Creating worker");
        before = new Date().getTime();
        var tokenizer = this.$tokenizer;
        var doc = session.getDocument();
        var worker = new WorkerClient(["ace", "pilot"], "build/src/worker-webdsl.js", "ace/mode/webdsl_worker", "WebDSLWorker");
        worker.call("setValue", [doc.getValue()]);

        var onChange = function(e) {
            var d = e.data;
            var r = e.data.range;
            if(d.action === "insertText" && d.text === '\n') {
                tokenizer.shiftTokens(r.start.row, 1);
            }
            if(d.action === "insertLines") {
                tokenizer.shiftTokens(r.start.row, d.lines.length);
            }
            if(d.action === "removeText" && d.text === '\n') {
                tokenizer.unshiftTokens(r.start.row, 1);
            }
            if(d.action === "removeLines"){
                tokenizer.unshiftTokens(r.start.row, d.lines.length);
            }

            worker.emit("change", e);
        };
        doc.on("change", onChange);

        if(this.debugWorker) {
            worker.on("log", function(e) {
                console.log("worker:" + e.data);
            });

            worker.on("debug", function(e) {
                console.log(e.data);
            });
        }

        worker.on("loaded", function(e) {
            after = new Date().getTime();
            console.log("Loading completed in " + (after-before) + " ms.");
            worker.call("setValue", [doc.getValue()]);
        });

        worker.on("jsglr", function(e) {
            tokenizer.setTokens(e.data.parsed);
            session.setAnnotations(e.data.errors);
        });

        worker.on("terminate", function() {
            doc.removeListener("change", onChange);
            session.clearAnnotations();
        });

        this.$worker = worker;

        return worker;
    };

}).call(WebDSLMode.prototype);

exports.Mode = WebDSLMode;
});
