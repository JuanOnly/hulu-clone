const apiKey = process.env.apiKey;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week/?api_key=${apiKey}&language=en-US`
    }
}