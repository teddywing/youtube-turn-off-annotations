// ==UserScript==
// @name YouTube Turn Off Annotations
// @description Turn off video annotation overlays on YouTube videos
// @namespace com.teddywing
// @match https://www.youtube.com/*
// ==/UserScript==


var settings_button = document.querySelector('.ytp-settings-button');

// Load annotations menu item by activating & deactivating the settings menu
settings_button.click();
settings_button.click();

var annotations_menu_item = document.evaluate(
	"//div[contains(@class, 'ytp-settings-menu')] \
		//div[ \
			@aria-checked='true' and \
			//div[ \
				contains(@class, 'ytp-menuitem-label') and \
				contains(., 'Annotations') \
			] \
		]",
	document,
	null,
	XPathResult.FIRST_ORDERED_NODE_TYPE,
	null
);

if (annotations_menu_item.singleNodeValue) {
	annotations_menu_item.singleNodeValue.click();
}
