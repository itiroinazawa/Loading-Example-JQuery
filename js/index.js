function LoadContent(){

    AddLoadingCircle();
    setTimeout(function(){ 
        var conteudo = '<div style="width: 150px; height: 200px; border: 1px solid #000; float: left;"><img src="img/pokemon.jpg" style="width: 150px; height: 200px;"></div>';
    $('#content').append(conteudo); 
    removeLoadingCircle();
    }, 3000);
}

function AddLoadingCircle(){
    var div_ = '<div id="loading" style="width: 100%; height: 100%; top: 0px; left: 0px; position: fixed;display: block; opacity: 0.7; background-color: #fff; z-index: 99; text-align: center;"><img id="loading-image" src="img/loading.gif" style=" position: absolute; top: 50%; left: 50%; z-index: 100;" alt="Loading..." /></div>';
    $('#bodycontent').append(div_);
}

function removeLoadingCircle() {    
    $('#loading').remove();
}