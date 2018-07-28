// ==UserScript==
// @name YouTube Turn Off Annotations
// @description Turn off video annotation overlays on YouTube videos
// @namespace com.teddywing
// @match https://www.youtube.com/*
// ==/UserScript==

// Copyright (c) 2018  Teddy Wing
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.


var settings_button = document.querySelector('.ytp-settings-button');

// Load annotations menu item by activating & deactivating the settings menu
// since the menu starts out empty
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
