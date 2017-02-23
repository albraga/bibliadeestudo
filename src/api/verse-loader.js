import oboe from 'oboe'

function getBcv(book, chapter, verse, store) {
	const verseId = `${book}. ${chapter}:${verse}`.charAt(0).toUpperCase() + `${book}. ${chapter}:${verse}`.slice(1)
	oboe(`./staticdata/${book}.json`)
		.node({
			[`${book}_${chapter}_${verse}`]: function(verseText) {
				store.commit('addVerse', { verseId, verseText })
			}
		})
}

module.exports.getBcv = getBcv
