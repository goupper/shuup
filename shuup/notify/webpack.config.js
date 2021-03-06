/**
 * This file is part of Shuup.
 *
 * Copyright (c) 2012-2016, Shoop Ltd. All rights reserved.
 *
 * This source code is licensed under the AGPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    entry: "./static_src/script-editor.js",
    output: {
        path: "static/notify/admin",
        filename: "script-editor-bundle.js",
        library: "ScriptEditor",
        libraryTarget: "var"
    },
    externals: {
        "mithril-js": "m",
        "lodash": "_"
    }
};
