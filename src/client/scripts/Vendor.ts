// Jquery
import jQuery = require("jquery");

// Lodash
import * as lodash from "lodash";

// Set globals
window["$"] = jQuery;
window["jQuery"] = jQuery;
window["_"] = lodash;

// Bootstrap
import "bootstrap-sass";

// Angular
import "angular";
import "angular-sanitize";
import "angular-messages";
import "angular-animate";
// import "angular-ui-bootstrap";
import "angular-ui-router";
import "angular-toastr";

// Extra libraries

// Test
console.log("LOOK MA I WORK!!");