$('#login').click(function () {
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('John', 'Doe');

    // hide the login on the screen
    $('#logindiv').hide();

    var language = $('#lang').val();
    loginGrtr.setLang(language).HTMLGreeting('#greeting', false).log();
});
