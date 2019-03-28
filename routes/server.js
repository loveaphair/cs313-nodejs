const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ae14a9ea6acf4d7d94b1e221351c1757');
newsapi.v2.topHeadlines({
		sources: 'bbc-news,the-verge, associated-press, cnn, espn, fortune, fox-news, google-news, the-huffington-post, the-wall-street-journal, time, wired, the-washington-post',
		// q: 'bitcoin',
		// category: 'business',
		language: 'en',
		// country: 'us',
		pageSize:100,
	  }).then(response => {
		module.exports.newsHeadlines = response;
	  });

module.exports = {
	searchNews: function (res, query, source){
		newsapi.v2.topHeadlines({
			sources: source,
			pageSize:100,
			q: query,
			language: 'en',
			sortBy: 'relevance'
		}).then(response => {
			res.send(response);
		});
	}
}
