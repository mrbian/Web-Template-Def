/**
 * Created by bian on 2016/4/25.
 */
(function(){
    var sidebar_num = $("#num").html();
    var sidebar = $("#menu ul li");
    sidebar = sidebar.splice(2,sidebar.length - 2);
    for(var idx in sidebar){
        if(idx === sidebar_num){
            $(sidebar[idx]).addClass("active");
            break;
        }
    }
}());