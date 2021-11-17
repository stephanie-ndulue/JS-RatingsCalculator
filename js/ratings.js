function collect_ratings() {
    var ratings = {
        'count': 0,
        'sum': 0,
        'average': 0
    };
    let rating = 0;

    return ratings;
};

document.addEventListener('change', () => {
    const ratings = collect_ratings();
    ratings.average = document.querySelector("#average").toFixed(2);
});

const elements = document.querySelectorAll(".rating");
elements.forEach((element) => {
    rating = parseInt(element.id.replace("star", ""));
    ratings.count += parseInt(element.value);
    ratings.sum += parseInt(element.value) * rating;
});

if (ratings.count !== 0) {
    ratings.average = ratings.sum / ratings.count;
};