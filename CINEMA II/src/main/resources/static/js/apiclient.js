var apiclient = function () {
    function getFunctionsByCinema(cinemaName, callback) {
        $.getJSON("http://localhost:8080/cinemas/" + cinemaName, function (data) {
            callback(data);
        });
    }
    function getFunctionByCinemaAndDate(cinemaName, date, callback) {
        $.getJSON("http://localhost:8080/cinemas/" + date + "/" + cinemaName, function (data) {
            callback(data);
        });
    }

    function getFunctionByNameAndDate(cinemaName, fDate, movieName, callback) {
        $.getJSON("http://localhost:8080/cinemas/"+cinemaName+"/"+ fDate+"/"+movieName, function (data) {
            callback(data);
        });
    }
    return {
        getFunctionsByCinema: getFunctionsByCinema,
        getFunctionsByCinemaAndDate: getFunctionsByCinemaAndDate,
        getFunctionByNameAndDate : getFunctionByNameAndDate
    }
}
