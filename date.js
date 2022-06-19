module.exports.getDate = function() {

    var today = new Date();
    const options = {
        weekday: "long",
        day: 'numeric',
        month: 'long'

    };
    return today.toLocaleString('en-US', options);

}

//Now lets make a module for the day only

module.exports.getDay = getDay;

function getDay() {

    var today = new Date();
    const options = {
        weekday: "long"
    };
    let day = today.toLocaleString('en-US', options);
    return day;
}