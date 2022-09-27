export const state = () => ({
    article: {},
    news: []
})

export const getters = {
    article: (state) => state.article,
    news: (state) => state.news,
}

export const mutations = {
    add(state, articlePayload) {
        state.article = articlePayload
    },

    addNews(state, newsPayload) {
        state.news = newsPayload
    }
}
