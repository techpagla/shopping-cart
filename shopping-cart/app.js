 var symbol;
 function calculate(inputId,symbol,showId){
    var SiliconInputValue = document.getElementById(inputId).value;
    var SiliconInputValueNum = parseFloat(SiliconInputValue);
    
     if (SiliconInputValueNum > 0 ) {
        sum0 = SiliconInputValueNum - 1;
        }
     var sum = parseFloat(sum0);
       
    //   silicon = document.getElementById('siliconShowPrice').innerText;
     var siliconPrice = parseFloat(iphoneShowPrice);  
     var TotallSiliconPrice = sum * siliconPrice;
    document.getElementById(inputId).value = sum;
    document.getElementById('siliconShowPrice').innerText = TotallSiliconPrice;
 }
 
 //silicon Iphone
var iphoneShowPrice = document.getElementById('siliconShowPrice').innerText;

   document.getElementById('btn-iphone-silicon').addEventListener('click', function() {
      symbol = true;
      calculate('input-iphone-silicon',symbol,showId)

});

                //Black Iphone
document.getElementById('btn-iphone-black').addEventListener('click', function() {
    var SiliconInputValue = document.getElementById('input-iphone-silicon').value;
    var SiliconInputValueNum = parseFloat(SiliconInputValue);
     sum = SiliconInputValueNum + 1;
    
     var siliconPrice = parseFloat(iphoneShowPrice);  
     var TotallSiliconPrice = sum * siliconPrice;
    document.getElementById('input-iphone-silicon').value = sum;
    console.log(sum);
    console.log(typeof(sum));
    document.getElementById('siliconShowPrice').innerText = TotallSiliconPrice;
   
    
});