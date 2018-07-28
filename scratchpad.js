var x = document.evaluate("//div[contains(@class, 'ytp-settings-menu')]//div[contains(@class, 'ytp-menuitem-label') and contains(., 'Annotations')]/..", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
x.singleNodeValue

var x = document.evaluate("//div[contains(@class, 'ytp-settings-menu')]//div[contains(@class, 'ytp-menuitem-label') and contains(., 'Annotations')]/../div[@aria-checked='true']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)

var x = document.evaluate("//div[contains(@class, 'ytp-settings-menu')]//div[@aria-checked='true' and //div[contains(@class, 'ytp-menuitem-label') and contains(., 'Annotations')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
var x = document.evaluate("//div[contains(@class, 'ytp-settings-menu')]//div[@aria-checked='true' and //div[contains(@class, 'ytp-menuitem-label') and contains(., 'Annotations')]]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
