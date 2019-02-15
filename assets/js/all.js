var userFeed = new Instafeed({
    get: 'user',
    userId: '8987997106',
    clientId: '924f677fa3854436947ab4372ffa688d',
    accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 8,
    links: true
});
userFeed.run();

/* $.get("https://comune.settimomilanese.mi.it/rss", function (data) {
    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        console.log("------------------------");
        console.log("title      : " + el.find("title").text());
        console.log("author     : " + el.find("author").text());
        console.log("description: " + el.find("description").text());
    });
}); */

function createAlertCard(){

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://www.protezionecivilepop.tk/allerte?citta=015211&rischio=temporali&giorno=domani&formato=json",
    }).done(function(data) {
        let stormInfo = data.previsione
        const cardColor = $('#stormCardColor');
        const cardText = $('#stormText');

        if (stormInfo.alert == "VERDE"){
            cardColor.addClass('bg-success');
        }else if (stormInfo.alert == "GIALLO") {
            cardColor.addClass('bg-warning');
        }else {
            cardColor.addClass('bg-danger'); 
        }
        $('#updateTime').html(stormInfo.date);
        $('#civil_zone_id').html(stormInfo.civil_protection_zone_id);
        cardText.html(stormInfo.info);
    });

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://www.protezionecivilepop.tk/allerte?citta=015211&rischio=idraulico&giorno=domani&formato=json",
    }).done(function(data) {
        let hydraulicInfo = data.previsione
        const cardColor = $('#hydraulicCardColor');
        const cardText = $('#hydraulicText');

        if (hydraulicInfo.alert == "VERDE"){
            cardColor.addClass('bg-success');
        }else if (hydraulicInfo.alert == "GIALLO") {
            cardColor.addClass('bg-warning');
        }else {
            cardColor.addClass('bg-danger'); 
        }
        cardText.html(hydraulicInfo.info);
    });

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://www.protezionecivilepop.tk/allerte?citta=015211&rischio=idrogeologico&giorno=domani&formato=json",
    }).done(function(data) {
        let hydrogeologicalInfo = data.previsione
        const cardColor = $('#hydrogeologicalCardColor');
        const cardText = $('#hydrogeologicalText');

        if (hydrogeologicalInfo.alert == "VERDE"){
            cardColor.addClass('bg-success');
        }else if (hydrogeologicalInfo.alert == "GIALLO") {
            cardColor.addClass('bg-warning');
        }else {
            cardColor.addClass('bg-danger'); 
        }
        cardText.html(hydrogeologicalInfo.info);
    });

}

createAlertCard()
