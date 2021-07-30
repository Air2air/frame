const instructions = ('<p>TWO LISTS - Initially we should see all assets in the asset list, and all metrics in the metric list.</p><ul><li>Each item should be represented by its full name and its ID / ticker symbol.</li><li>At the top of each column, there should be a text box that we can use to search for items.</li><li>Full name of the asset may be a partial match from the beginning of the name (e.g.,“tcoin” does not match, “bitc” matches, “bitcoin” matches)</li><li>IDs must be matched in entirety to count as a match (e.g., “18c” matches but not “18”)</li><li>Match must be made case-insensitively (e.g., “BTC” and “btc” give the same result).</li><li>When we click an item in either list, the other list is immediately filtered to show matching items.</li><li>When selecting assets, “matching items” in the metric list are those that are supported by the selected asset.</li><li>When selecting metrics, “matching items” in the asset list are those that support the selected metric.</li><li>Only one item can be selected across both lists (so only one asset or only one metric)</li><li>Keyword filter and filter based on asset/metric selection apply together.</li><li>We should be able to differentiate between selected and deselected items.</li><li>RESET BUTTON: We should be able to click a button to reset both selections and keywords in both lists at once.</li></ul>'
);

export {instructions}



