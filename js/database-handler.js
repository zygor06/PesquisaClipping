var config = {
    apiKey: "AIzaSyAmVwuuyrGJgWWkY5h03kxfGtKKNQclpuM",
    authDomain: "pesquisaclipping-8ac6a.firebaseapp.com",
    databaseURL: "https://pesquisaclipping-8ac6a.firebaseio.com",
    projectId: "pesquisaclipping-8ac6a",
    storageBucket: "pesquisaclipping-8ac6a.appspot.com",
    messagingSenderId: "933174562993"
};
firebase.initializeApp(config);

firebase.database().ref('pesquisas').once('value').then(function(snapshot) {
    var pesquisas = snapshot.val();
    var defesa = pesquisas.defesa;
    var seguranca = pesquisas.seguranca;

    for (var key in seguranca) {

        var id = key;
        var checked = (seguranca[key].check == true) ? "checked" : "";
        var termos = seguranca[key].termos;

        var str =  '<div class="input-group pd-20" id="seguranca_'+id+'">'+
                '   <span class="input-group-addon"><input type="checkbox" '+ checked +'></span>'+
                '   <input type="text" class="form-control" value="'+ termos +'" readonly>'+
                '   <button id="_btn_1" type="submit" class="btn btn-primary input-group-addon">Editar</button>'+
                '</div>';

        var pesquisa_seguranca = document.getElementById('pesquisas_seguranca');
        pesquisa_seguranca.insertAdjacentHTML('afterbegin', str);
    }

    for (var key in defesa) {

        var id = key;
        var checked = (defesa[key].check == true) ? "checked" : "";
        var termos = defesa[key].termos;

        var str =  '<div class="input-group pd-20" id="defesa_'+id+'">'+
            '   <span class="input-group-addon"><input type="checkbox" '+ checked +'></span>'+
            '   <input type="text" class="form-control" value="'+ termos +'" readonly>'+
            '   <button id="_btn_1" type="submit" class="btn btn-primary input-group-addon">Editar</button>'+
            '</div>';

        var pesquisa_defesa = document.getElementById('pesquisas_defesa');
        pesquisa_defesa.insertAdjacentHTML('afterbegin', str);
    }

});


function escreverNovaPesquisa(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
}

/*
var $log = $( "#log" ),
    str = "hello, <b>my name is</b> jQuery.",
    html = $.parseHTML( str ),
    nodeNames = [];

// Append the parsed HTML
$log.append( html );

// Gather the parsed HTML's node names
$.each( html, function( i, el ) {
    nodeNames[ i ] = "<li>" + el.nodeName + "</li>";
});

// Insert the node names
$log.append( "<h3>Node Names:</h3>" );
$( "<ol></ol>" )
    .append( nodeNames.join( "" ) )
    .appendTo( $log );
*/