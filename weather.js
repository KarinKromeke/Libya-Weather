/*eslint-env browser*/
/*eslint "no-console": "off"*/
/*global $*/
var url = "https://api.myjson.com/bins/i8run"


//Sacamos informacion del JSON para poder colocarla en el HTML
$.getJSON(url,function (data) {
    var states = data.list;
    selectTheCity(states);
    
    
    $("select").change(function(){
    changeCity(data)
});
    
    
    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
    
//Funcion para poder crear una ciudad en options y no crearla manualmente.    
function selectTheCity(cityArray){
    var dropdown = $("#stateOption")
    var arraydropdown =[];
        for(var i = 0; i<cityArray.length; i++)
        if(!arraydropdown.includes(states[i].name)){
            arraydropdown.push(states[i].name);
            dropdown.append($("<option/>").val(states[i].name).text(states[i].name));
        }else if(dropdown === "Select the State:"){
            $("#firstpop").hide();
        }
    }

    
function changeCity(data){
    var city = $("select option:selected").val();
    for (var i = 0; i <data.list.length ; ++i){
        if(city == data.list[i].name){
            printTheInformation(data.list[i])
        }
    }
}    
    
function printTheInformation(city){
    $("#firstpop").html("<h3>" + city.name + "<br>" + 
                        + city.main.temp +"<br>"+ 
                        "Max. Temperature: " + city.main.temp_max +"<br>"+ 
                        "Min. Temperature: " + city.main.temp_min + "</h3>")}

    });