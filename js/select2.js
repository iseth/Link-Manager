@media (min-width: 768px) {
	.navbar-right .dropdown-menu {
		left: auto;
		right: 0;
	}
	.navbar-right .dropdown-menu-left {
		left: 0;
		right: auto;
	}
}
.select {
	position: relative;
	display: inline-block;
	vertical-align: top;
	min-width: 220px;
	width: auto;
}
.form-group .select {
	width: 100%;
}
.form-group .select > .select2-choice {
	width: 100%;
}
.select.form-control,
.select.select2-search input[type="text"] {
	border: none;
	padding: 0;
	height: auto;
}
.select2-choice {
	width: 100%;
	display: inline-block;
	position: relative;
	border: none;
	font-size: 15px;
	font-weight: normal;
	line-height: 1.4;
	border-radius: 4px;
	padding: 10px 39px 10px 15px;
	-webkit-transition: border 0.25s linear, color 0.25s linear, background-color 0.25s linear;
					transition: border 0.25s linear, color 0.25s linear, background-color 0.25s linear;
}
.select2-choice:hover,
.select2-choice:focus {
	outline: none;
}
.select2-choice:active {
	outline: none;
	box-shadow: none;
}
.select2-container-disabled .select2-choice {
	opacity: 0.7;
	filter: alpha(opacity=70);
}
.select2-chosen {
	overflow: hidden;
	text-align: left;
}
.select2-arrow {
	display: inline-block;
	border-width: 8px 6px;
	border-color: #34495e transparent;
	border-style: solid;
	border-bottom-style: none;
	position: absolute;
	right: 16px;
	top: 42%;
	-webkit-transform: scale(1.001);
			-ms-transform: scale(1.001);
					transform: scale(1.001);
}
.select2-arrow b {
	display: none;
}
.btn-lg .select2-arrow {
	border-top-width: 8px;
	border-right-width: 6px;
	border-left-width: 6px;
}
.select-primary .select2-choice {
	color: #ffffff;
	background-color: #1abc9c;
}
.select-primary .select2-choice:hover,
.select-primary .select2-choice.hover,
.select-primary .select2-choice:focus,
.select-primary .select2-choice:active {
	color: #ffffff;
	background-color: #48c9b0;
	border-color: #48c9b0;
}
.select-primary .select2-choice:active {
	background: #16a085;
	border-color: #16a085;
}
.select-default .select2-choice {
	color: #ffffff;
	background-color: #bdc3c7;
}
.select-default .select2-choice:hover,
.select-default .select2-choice.hover,
.select-default .select2-choice:focus,
.select-default .select2-choice:active {
	color: #ffffff;
	background-color: #cacfd2;
	border-color: #cacfd2;
}
.select-default .select2-choice:active {
	background: #a1a6a9;
	border-color: #a1a6a9;
}
.select2-container-disabled.select-default .select2-choice,
.select2-container-disabled.select-default .select2-choice:hover,
.select2-container-disabled.select-default .select2-choice:focus,
.select2-container-disabled.select-default .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #bdc3c7;
}
.select-default .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select2-container-disabled.select-primary .select2-choice,
.select2-container-disabled.select-primary .select2-choice:hover,
.select2-container-disabled.select-primary .select2-choice:focus,
.select2-container-disabled.select-primary .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #1abc9c;
}
.select-primary .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select-info .select2-choice {
	color: #ffffff;
	background-color: #3498db;
}
.select-info .select2-choice:hover,
.select-info .select2-choice.hover,
.select-info .select2-choice:focus,
.select-info .select2-choice:active {
	color: #ffffff;
	background-color: #5dade2;
	border-color: #5dade2;
}
.select-info .select2-choice:active {
	background: #2c81ba;
	border-color: #2c81ba;
}
.select2-container-disabled.select-info .select2-choice,
.select2-container-disabled.select-info .select2-choice:hover,
.select2-container-disabled.select-info .select2-choice:focus,
.select2-container-disabled.select-info .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #3498db;
}
.select-info .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select-danger .select2-choice {
	color: #ffffff;
	background-color: #e74c3c;
}
.select-danger .select2-choice:hover,
.select-danger .select2-choice.hover,
.select-danger .select2-choice:focus,
.select-danger .select2-choice:active {
	color: #ffffff;
	background-color: #ec7063;
	border-color: #ec7063;
}
.select-danger .select2-choice:active {
	background: #c44133;
	border-color: #c44133;
}
.select2-container-disabled.select-danger .select2-choice,
.select2-container-disabled.select-danger .select2-choice:hover,
.select2-container-disabled.select-danger .select2-choice:focus,
.select2-container-disabled.select-danger .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #e74c3c;
}
.select-danger .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select-success .select2-choice {
	color: #ffffff;
	background-color: #2ecc71;
}
.select-success .select2-choice:hover,
.select-success .select2-choice.hover,
.select-success .select2-choice:focus,
.select-success .select2-choice:active {
	color: #ffffff;
	background-color: #58d68d;
	border-color: #58d68d;
}
.select-success .select2-choice:active {
	background: #27ad60;
	border-color: #27ad60;
}
.select2-container-disabled.select-success .select2-choice,
.select2-container-disabled.select-success .select2-choice:hover,
.select2-container-disabled.select-success .select2-choice:focus,
.select2-container-disabled.select-success .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #2ecc71;
}
.select-success .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select-warning .select2-choice {
	color: #ffffff;
	background-color: #f1c40f;
}
.select-warning .select2-choice:hover,
.select-warning .select2-choice.hover,
.select-warning .select2-choice:focus,
.select-warning .select2-choice:active {
	color: #ffffff;
	background-color: #f4d313;
	border-color: #f4d313;
}
.select-warning .select2-choice:active {
	background: #cda70d;
	border-color: #cda70d;
}
.select2-container-disabled.select-warning .select2-choice,
.select2-container-disabled.select-warning .select2-choice:hover,
.select2-container-disabled.select-warning .select2-choice:focus,
.select2-container-disabled.select-warning .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #f1c40f;
}
.select-warning .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select-inverse .select2-choice {
	color: #ffffff;
	background-color: #34495e;
}
.select-inverse .select2-choice:hover,
.select-inverse .select2-choice.hover,
.select-inverse .select2-choice:focus,
.select-inverse .select2-choice:active {
	color: #ffffff;
	background-color: #415b76;
	border-color: #415b76;
}
.select-inverse .select2-choice:active {
	background: #2c3e50;
	border-color: #2c3e50;
}
.select2-container-disabled.select-inverse .select2-choice,
.select2-container-disabled.select-inverse .select2-choice:hover,
.select2-container-disabled.select-inverse .select2-choice:focus,
.select2-container-disabled.select-inverse .select2-choice:active {
	background-color: #bdc3c7;
	border-color: #34495e;
}
.select-inverse .select2-choice .select2-arrow {
	border-top-color: #ffffff;
}
.select2-container.select-hg > .select2-choice {
	padding: 13px 20px;
	font-size: 22px;
	line-height: 1.227;
	border-radius: 6px;
	padding-right: 49px;
	min-height: 53px;
}
.select2-container.select-hg > .select2-choice .filter-option {
	left: 20px;
	right: 40px;
	top: 13px;
}
.select2-container.select-hg > .select2-choice .select2-arrow {
	right: 20px;
}
.select2-container.select-hg > .select2-choice > [class^="fui-"] {
	top: 2px;
}
.select2-container.select-lg > .select2-choice {
	padding: 10px 19px;
	font-size: 17px;
	line-height: 1.471;
	border-radius: 6px;
	padding-right: 47px;
	min-height: 45px;
}
.select2-container.select-lg > .select2-choice .filter-option {
	left: 18px;
	right: 38px;
}
.select2-container.select-sm > .select2-choice {
	padding: 9px 13px;
	font-size: 13px;
	line-height: 1.385;
	border-radius: 4px;
	padding-right: 35px;
	min-height: 36px;
}
.select2-container.select-sm > .select2-choice .filter-option {
	left: 13px;
	right: 33px;
}
.select2-container.select-sm > .select2-choice .select2-arrow {
	right: 13px;
}
.multiselect {
	position: relative;
	display: inline-block;
	vertical-align: top;
	min-width: 220px;
	background-color: #ffffff;
	border-radius: 6px;
	text-align: left;
	font-size: 0;
	width: auto;
	max-width: none;
}
.form-group .multiselect {
	width: 100%;
}
.form-group .multiselect > .select2-choice {
	width: 100%;
}
.multiselect.form-control,
.multiselect.select2-search input[type="text"] {
	height: auto;
	padding: 6px 1px 1px 6px;
	border: 2px solid #ebedef;
}
.select2-choices {
	margin: 0;
	padding: 0;
	position: relative;
	cursor: text;
	overflow: hidden;
	min-height: 26px;
}
.select2-choices li {
	float: left;
	list-style: none;
}
.select2-search-choice {
	border-radius: 4px;
	color: #ffffff;
	font-size: 13px;
	cursor: pointer;
	display: inline-block;
	position: relative;
	vertical-align: middle;
	overflow: hidden;
	margin: 0 5px 4px 0;
	line-height: 15px;
	height: 27px;
	padding: 6px 21px;
	-webkit-transition: .25s linear;
					transition: .25s linear;
}
.select2-search-choice:hover {
	padding-right: 28px;
	padding-left: 14px;
	color: #ffffff;
}
.select2-search-choice:hover .select2-search-choice-close {
	opacity: 1;
	-webkit-filter: none;
					filter: none;
	color: inherit;
}
.select2-search-choice .select2-search-choice-close {
	color: #ffffff;
	cursor: pointer;
	font-size: 12px;
	position: absolute;
	right: 0;
	text-align: right;
	text-decoration: none;
	top: 0;
	width: 100%;
	bottom: 0;
	padding-right: 10px;
	z-index: 2;
	opacity: 0;
	filter: alpha(opacity=0);
	-webkit-transition: opacity .25s linear;
					transition: opacity .25s linear;
}
.select2-search-choice .select2-search-choice-close:after {
	content: "\e609";
	font-family: "Flat-UI-Icons";
	line-height: 27px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.select2-search-field input[type="text"] {
	color: #34495e;
	font-size: 14px;
	border: none;
	box-shadow: none;
	outline: none;
	background-color: transparent;
	padding: 0;
	margin: 0;
	width: auto;
	max-width: inherit;
	min-width: 80px;
	vertical-align: top;
	height: 29px;
}
.select2-search-field:first-child input[type="text"] {
	height: 23px;
	margin: 3px 0 5px;
}
.select2-container-multi.multiselect-default {
	border-color: #bdc3c7;
}
.select2-container-multi.multiselect-default .select2-search-choice {
	background-color: #bdc3c7;
}
.select2-container-multi.multiselect-default .select2-search-choice:hover {
	background-color: #cacfd2;
}
.select2-container-multi.multiselect-primary {
	border-color: #1abc9c;
}
.select2-container-multi.multiselect-primary .select2-search-choice {
	background-color: #1abc9c;
}
.select2-container-multi.multiselect-primary .select2-search-choice:hover {
	background-color: #48c9b0;
}
.select2-container-multi.multiselect-info {
	border-color: #3498db;
}
.select2-container-multi.multiselect-info .select2-search-choice {
	background-color: #3498db;
}
.select2-container-multi.multiselect-info .select2-search-choice:hover {
	background-color: #5dade2;
}
.select2-container-multi.multiselect-danger {
	border-color: #e74c3c;
}
.select2-container-multi.multiselect-danger .select2-search-choice {
	background-color: #e74c3c;
}
.select2-container-multi.multiselect-danger .select2-search-choice:hover {
	background-color: #ec7063;
}
.select2-container-multi.multiselect-success {
	border-color: #2ecc71;
}
.select2-container-multi.multiselect-success .select2-search-choice {
	background-color: #2ecc71;
}
.select2-container-multi.multiselect-success .select2-search-choice:hover {
	background-color: #58d68d;
}
.select2-container-multi.multiselect-warning {
	border-color: #f1c40f;
}
.select2-container-multi.multiselect-warning .select2-search-choice {
	background-color: #f1c40f;
}
.select2-container-multi.multiselect-warning .select2-search-choice:hover {
	background-color: #f4d313;
}
.select2-container-multi.multiselect-inverse {
	border-color: #34495e;
}
.select2-container-multi.multiselect-inverse .select2-search-choice {
	background-color: #34495e;
}
.select2-container-multi.multiselect-inverse .select2-search-choice:hover {
	background-color: #415b76;
}
.select2-drop {
	min-width: 220px;
	margin-top: 9px;
	visibility: visible;
	opacity: 1;
	-webkit-filter: none;
					filter: none;
	border-radius: 4px;
	font-size: 14px;
	position: absolute;
	z-index: 9999;
	top: 100%;
	-webkit-transition: none;
					transition: none;
}
.select2-drop.select2-drop-above {
	margin-top: -9px;
}
.select2-drop.select2-drop-auto-width {
	width: auto;
}
.select2-drop.show-select-search .select2-search {
	display: block;
}
.select2-drop.show-select-search .select2-search + .select2-results > li:first-child .select2-result-label {
	border-radius: 0;
}
.select2-drop .select2-results {
	padding: 0;
	margin: 0;
	list-style: none;
}
.select2-drop .select2-results > li:first-child > .select2-result-label {
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
}
.select2-drop .select2-results > li:last-child > .select2-result-label {
	border-bottom-right-radius: 4px;
	border-bottom-left-radius: 4px;
}
.select2-drop .select2-result-sub {
	padding: 0;
	margin: 0;
	list-style: none;
}
.select2-drop .select2-result-sub > li:last-child > .select2-result-label {
	border-bottom-right-radius: 4px;
	border-bottom-left-radius: 4px;
}
.select2-drop .select2-no-results {
	padding: 8px 15px;
}
.select2-drop .select2-result-label {
	line-height: 1.429;
	padding: 8px 16px;
	-webkit-user-select: none;
		 -moz-user-select: none;
			-ms-user-select: none;
					user-select: none;
	-webkit-transition: background-color 0.25s, color 0.25s;
					transition: background-color 0.25s, color 0.25s;
}
.select2-drop .select2-result-selectable .select2-result-label {
	color: rgba(52, 73, 94, 0.85);
	cursor: pointer;
}
.select2-drop .select2-result-selectable .select2-result-label:focus,
.select2-drop .select2-result-selectable .select2-result-label:hover,
.select2-drop .select2-result-selectable .select2-result-label:active {
	background-color: #e1e4e7;
	color: inherit;
	outline: none;
}
.select2-drop .select2-disabled {
	cursor: default;
	color: rgba(52, 73, 94, 0.95);
	opacity: 0.4;
	filter: alpha(opacity=40);
}
.select2-drop .select2-disabled:focus,
.select2-drop .select2-disabled:hover,
.select2-drop .select2-disabled:active {
	background: none !important;
}
.select2-drop .select2-highlighted > .select2-result-label {
	background: #1abc9c;
	color: #ffffff;
}
.select2-drop .select2-result-with-children > .select2-result-label {
	font-size: 13px;
	text-transform: uppercase;
	color: rgba(52, 73, 94, 0.6);
	margin-top: 5px;
}
.select2-drop .select2-result-with-children + .select2-result-with-children > .select2-result-label {
	margin-top: 11px;
}
.select2-results {
	max-height: 200px;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.select2-search {
	padding: 8px 6px;
	width: 100%;
	display: none;
}
.select2-search input[type="text"] {
	width: 100%;
	height: auto !important;
}
.select-inverse-dropdown {
	background-color: #34495e;
	color: rgba(255, 255, 255, 0.75);
}
.select-inverse-dropdown .select2-results .select2-result-label {
	color: #ffffff;
}
.select-inverse-dropdown .select2-results .select2-result-label:focus,
.select-inverse-dropdown .select2-results .select2-result-label:hover,
.select-inverse-dropdown .select2-results .select2-result-label:active {
	background: #2c3e50;
}
.select-inverse-dropdown .select2-results.select2-disabled .select2-result-label:hover {
	color: #ffffff;
}
.select-inverse-dropdown .select2-result-with-children > .select2-result-label {
	color: rgba(255, 255, 255, 0.6);
}
.select-inverse-dropdown .select2-result-with-children > .select2-result-label:hover {
	color: #ffffff;
	background: none !important;
}
.select2-drop-multi {
	border-radius: 6px;
}
.select2-drop-multi .select2-results {
	padding: 2px 0;
}
.select2-drop-multi .select2-result {
	padding: 2px 4px;
}
.select2-drop-multi .select2-result-label {
	border-radius: 4px;
}
.select2-drop-multi .select2-selected {
	display: none;
}
.select2-offscreen,
.select2-offscreen:focus {
	clip: rect(0 0 0 0) !important;
	width: 1px !important;
	height: 1px !important;
	border: 0 !important;
	margin: 0 !important;
	padding: 0 !important;
	overflow: hidden !important;
	position: absolute !important;
	outline: 0 !important;
	left: 0 !important;
	top: 0 !important;
}
.select2-hidden-accessible {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.select2-offscreen,
.select2-offscreen:focus {
	clip: rect(0 0 0 0) !important;
	width: 1px !important;
	height: 1px !important;
	border: 0 !important;
	margin: 0 !important;
	padding: 0 !important;
	overflow: hidden !important;
	position: absolute !important;
	outline: 0 !important;
	left: 0 !important;
	top: 0 !important;
}
.select2-display-none {
	display: none;
}
.select2-measure-scrollbar {
	position: absolute;
	top: -10000px;
	left: -10000px;
	width: 100px;
	height: 100px;
	overflow: scroll;
}
.select2-drop-mask {
	border: 0;
	margin: 0;
	padding: 0;
	position: fixed;
	left: 0;
	top: 0;
	min-height: 100%;
	min-width: 100%;
	height: auto;
	width: auto;
	z-index: 9998;
	/* styles required for IE to work */
	background-color: #fff;
	opacity: 0;
	filter: alpha(opacity=0);
}
