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
var EventEmitter = require("pilot/event_emitter").EventEmitter;

var WebDSLTokenizer = function() {
    this.parsed = [];
};

(function() {

    oop.implement(this, EventEmitter);

    this.fireUpdateEvent = function(firstRow, lastRow) {
        var data = {
            first: firstRow,
            last: lastRow
        };
        this._dispatchEvent("update", {data: data});
    };

    this.setTokens = function(tokens) {
        this.parsed = tokens;
        this.fireUpdateEvent(0, undefined);
    }

    this.shiftTokens = function(start, amount) {
        var args = [start, 0];
        for(var i = 0; i < amount; i++) {
            args.push({});
        }
        Array.prototype.splice.apply(this.parsed, args);
    }

    this.unshiftTokens = function(start, amount) {
        this.parsed.splice(start, amount);
    }

    this.unknownLine = function(text) {
        tokens = [];

        var token = {
            type: "plain",
            value: text
        };

        tokens.push(token);
        return tokens;
    }

    this.getLineTokens = function(text, line) {
        var tokens = [];
        if(line === 'start') {
            line = 0;
        }

        var p = this.parsed[line];

        if(p === undefined || p.text !== text || p.tokens.length === 0) {
            tokens = this.unknownLine(text);
        } else {
            tokens = p.tokens;
        }

        return {
            tokens : tokens,
            state : line + 1
        };
    };

}).call(WebDSLTokenizer.prototype);

exports.WebDSLTokenizer = WebDSLTokenizer;
});
