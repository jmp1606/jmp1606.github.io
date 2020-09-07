/*CORE FUNCTIONS*/

$(document).on('click', '.instructionsScreen', {}, function(e) {
  changeAppPage('instructionsScreen');
});

$(document).on('click', '.main', {}, function(e) {
    changeAppPage('main');
  });

  $(document).on('click', '.hub', {}, function(e) {
    changeAppPage('hub');
  });

  $(document).on('click', '.theatre', {}, function(e) {
    changeAppPage('theatre');
  });

  $(document).on('click', '.menu', {}, function(e) {
    changeAppPage('menu');
  });

  $(document).on('click', '.contact', {}, function(e) {
    changeAppPage('contact');
  });

  $(document).on('click', '.events', {}, function(e) {
    changeAppPage('events');
  });

function changeAppPage(gameScreen) {

    //the screen to goto
    var gameScreen;

    console.log("changeAppPage called with " + gameScreen + " as partial view");
    switch (gameScreen) {

    case 'home':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('home');

    break;

    case 'main':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('main');

    break;

    case 'hub':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('hub');

    break;

    case 'theatre':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('theatre');

    break;

    case 'menu':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('menu');

    break;
    
    case 'contact':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('contact');

    break;

    case 'events':

    $(".contentRoot").empty();
    //newView = gameScreen;
    getPartialView(gameScreen);

    navHashHistory('events');

    break;

    } //close switch

} //close changeAppPage function




//Get content
function getPartialView(screen) {
  var contentLoaded ;
  console.log("screen content injection for "+screen);
  $.get('partialViews/'+screen+'.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);
    contentLoaded = true;

  }); //end get


} //close getPartialView function

function navHashHistory(saveHash) {
    //Hash Hijack Method for SPA
    //for each new SPA partial view, add the hash to the URL bar
    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');
    if (hashValue != saveHash) {
        window.history.pushState("", "", "#" + saveHash);
    } else {
        //Must be first initialise
        window.history.pushState("", "", "#" + saveHash);
    }

} //end navHashHistory




/*modify changeAppPage - adding function and what you want to add to the hash


case 'home':


    navHashHistory('home');

    break;


*/
