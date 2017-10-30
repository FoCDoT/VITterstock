var flag1=1;
var flag2=0;
function english(){

   $('.english').addClass('act');
   $('.hindi').removeClass('act');
   flag1=1;
   flag2=0;
   };
function hindi(){
   $('.hindi').addClass('act');
   $('.english').removeClass('act');
   flag1=0;
   flag2=1;
   };

function englishHover(){
        if(flag1==1){}
            else if(flag1==0){
    $(".english").hover(function(){

        $(".english").css({"opacity":"0.8","cursor":"pointer"});
        }, function(){
            $(".english").css({"opacity":"0.3","cursor":"default"});
        }
    )};
};


function hindiHover(){
        if(flag2==1){}
            else if(flag2==0){
    $(".hindi").hover(function(){

        $(".hindi").css({"opacity":"0.8","cursor":"pointer"});
        }, function(){
            $(".hindi").css({"opacity":"0.3","cursor":"default"});
        }
    )};
};