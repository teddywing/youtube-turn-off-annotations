// ==UserScript==
// @name YouTube Turn Off Annotations
// @description Turn off video annotation overlays on YouTube videos
// @namespace com.teddywing
// @match https://www.youtube.com/*
// ==/UserScript==


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

if (annotations_menu_item) {
	annotations_menu_item.singleNodeValue.click();
}
