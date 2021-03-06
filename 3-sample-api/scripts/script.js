let currentPage = 1;
let search = 'Boston';
let url = `https://api.unsplash.com/search/photos?query=${search}&per_page=50&page=${currentPage}&client_id=${APIKey}`;

d3.json(url)
.then(function(response) {
    console.log(response.results);

    d3.select('div.images')
        .selectAll('img')
        .data(response.results)
        .join('img')
        .attr('src', d => d.links.download);
})