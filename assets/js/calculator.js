

$(function(){
    
    let ops = '';
    let result = $("#result")

    

    //showResult();   

    $(".btncal").on('click', function(){
        let boton = $(this).text();
        if(boton == 'C') {
            ops = ''
            result.val(ops);
        }
        else if(boton == '=') {
            ops = eval(ops);
            result.val(ops);
            
        }

        else{
            ops+=boton;
            result.val(ops);
        }
        
    });


});