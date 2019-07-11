(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{297:function(e,a,t){"use strict";t.r(a);var r=t(2),n=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"menu-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menu-manager","aria-hidden":"true"}},[e._v("#")]),e._v(" Menu Manager")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/MenuManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/MenuManager&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/3f2ff01a8dc04044a13c6f4fbb9e21bd",alt:"Codacy Badge"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://styleci.io/repos/94800927",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://styleci.io/repos/94800927/shield?branch=master",alt:"StyleCI"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/menumanager",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/menumanager/license",alt:"License"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/menumanager",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/menumanager/downloads",alt:"Total Downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/menumanager",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/menumanager/version",alt:"Latest Stable Version"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Menu Manager dependency for "),t("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://laravel-enso.github.io/menumanager/videos/bulma_menu_management.webm",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://laravel-enso.github.io/menumanager/screenshots/bulma_012_thumb.png",alt:"Watch the demo"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[t("sup",[e._v("click on the photo to view a short demo in compatible browsers")])]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("ul",[t("li",[e._v("allow for the easy management of the main (sidebar) menus of the application")]),e._v(" "),t("li",[e._v("permits the creation, update, delete, ordering of the menus")])]),e._v(" "),t("h2",{attrs:{id:"under-the-hood"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[e._v("#")]),e._v(" Under the Hood")]),e._v(" "),t("ul",[t("li",[e._v("a menu element may have several roles attached and is rendered only for the users with the respective roles")]),e._v(" "),t("li",[e._v("menu element attributes:\n"),t("ul",[t("li",[t("code",[e._v("parent_id")]),e._v(": the id of its parent menu, if he has a parent, or null")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": the label that is translated and visible in the UI")]),e._v(" "),t("li",[t("code",[e._v("icon")]),e._v(": the icon classes, visible in the UI")]),e._v(" "),t("li",[t("code",[e._v("order_index")]),e._v(": used for ordering the elements of the menu in the desired sequence")]),e._v(" "),t("li",[t("code",[e._v("link")]),e._v(": is the link that's going to be accessed when clicking on the menu")]),e._v(" "),t("li",[t("code",[e._v("has_children")]),e._v(": is a flag telling us if a menu element has children and is used when rendering the menu")])])]),e._v(" "),t("li",[e._v("for the menu changes to take effect, a page refresh or a re-login is needed")])]),e._v(" "),t("h2",{attrs:{id:"usage-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage Notes")]),e._v(" "),t("p",[e._v("Please note that because we want to keep the compiled size down, throughout the enso ecosistem,\nicons are imported selectively.")]),e._v(" "),t("p",[e._v("What this means for the menu editor, is that when adding/changing a menu, you should also make sure you\nimport the required icons. The proper place to include the new icons is:")]),e._v(" "),t("p",[t("code",[e._v("assest/js/pages/layout/sidebar/icons/app.js")])]),e._v(" "),t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishes")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("php artisan vendor:publish --tag=menus-assets")]),e._v(" - the VueJS pages and components")]),e._v(" "),t("li",[t("code",[e._v("php artisan vendor:publish --tag=enso-assets")]),e._v(" - a common alias for when wanting to update the VueJS assets,\nonce a newer version is released, can be used with the "),t("code",[e._v("--force")]),e._v(" flag")]),e._v(" "),t("li",[t("code",[e._v("php artisan vendor:publish --tag=menus-factory")]),e._v(" - the factory for the "),t("code",[e._v("Menu")]),e._v(" model")]),e._v(" "),t("li",[t("code",[e._v("php artisan vendor:publish --tag=enso-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),t("code",[e._v("--force")]),e._v(" flag")])]),e._v(" "),t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso Core"),t("OutboundLink")],1),e._v(" package comes with this package included.")]),e._v(" "),t("p",[e._v("Depends on:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core"),t("OutboundLink")],1),e._v(" for middleware")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/VueDatatable",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueDatatable"),t("OutboundLink")],1),e._v(" for displaying the list of menus")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/FormBuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("FormBuilder"),t("OutboundLink")],1),e._v(" for creating the forms when managing languages")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/Helpers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helpers"),t("OutboundLink")],1),e._v(" for timestamp formatting")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/RoleManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("RoleManager"),t("OutboundLink")],1),e._v(" for the integration with the roles system")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Structure manager"),t("OutboundLink")],1),e._v(" for the migrations")])])])},[],!1,null,null,null);a.default=n.exports}}]);