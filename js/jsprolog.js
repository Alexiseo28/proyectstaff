//31-08-2023 21-17
$("#formmainheuristica").validate({
    rules : {
        tdnimain : {
            required : true
        },
        tnomapemain : {
            required : true
        },
        ttelmain : {
            required : true            
        },
        temailcoormain : {
            required : true
        },
        tcolprocemain : {
            required : true
        },
        tprovinmain : {
            required : true
        },
        tcomentariomain : {
            required : true
        }
    },
    messages : {
        tdnimain : {
            required : "campo requerido"
        },
        tnomapemain : {
            required : "campo requerido"
        },
        ttelmain : {
            required : "campo requerido"            
        },
        temailcoormain : {
            required : "campo requerido"
        },
        tcolprocemain : {
            required : "campo requerido"
        },
        tprovinmain : {
            required : "campo requerido"
        },
        tcomentariomain : {
            required : "campo requerido"
        }
    },
    errorElement : "div",
    submitHandler : function() {
        msnSweet("success", "Formulario Heuristica", "La reunion fue correctamente agendado");
        $("#formmainheuristica")[0].reset();
    }
});