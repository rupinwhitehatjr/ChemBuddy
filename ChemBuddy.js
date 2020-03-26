readRecords("AllELEMENTS", {}, function(records) {
  var ElementList = [];
  appendItem(ElementList,"");
  for (var i =0; i < records.length; i++) {
    appendItem(ElementList,(records[i]).Element);
  }
  setProperty("El1", "options", ElementList);
  setProperty("El2", "options", ElementList);
  setProperty("El3", "options", ElementList);
  setProperty("El4", "options", ElementList);
  setProperty("El5", "options", ElementList);
  setProperty("El6", "options", ElementList);
});
onEvent("button1", "click", function( ) {
  var El1Choice = getText("El1");
  var El2Choice = getText("El2");
  var El3Choice = getText("El3");
  var El4Choice = getText("El4");
  var El5Choice = getText("El5");
  var El6Choice = getText("El6");
  var x = {};
  var choiceList=[El1Choice,El2Choice,El3Choice,El4Choice,El5Choice,El6Choice];
  //console.log(choiceList)
  var finalCl=[];
  var AtomicNumberList=[]
  for(i=0;i<choiceList.length;i++)
  {
    if(choiceList[i]=="")
    {
    continue;  
    }
   //console.log(choiceList[i]);
    appendItem(finalCl,choiceList[i]);
    var labelid="AN"+(i+1);
  
    
  }
  var Atomic_numberList=[]
  for(i=0;i<finalCl.length;i++)
  {

//getKeyValue(finalCl[i], function (value) {
  // appendItem(Atomic_numberList,value)
});

  }  

 console.log(finalCl,Atomic_numberList);
});

onEvent("El1", "change", function( ) {
var elementName=getText("El1")
getKeyValue(elementName, function (value) {
setText("AN1", value);
    
});

});
onEvent("El2", "change", function( ) {
var elementName=getText("El2")
console.log(elementName)
getKeyValue(elementName, function (value) {
setText("AN2", value);
    
});

});
onEvent("El3", "change", function( ) {
var elementName=getText("El3")
getKeyValue(elementName, function (value) {
setText("AN3", value);
    
});

});
onEvent("El4", "change", function( ) {
var elementName=getText("El4")
getKeyValue(elementName, function (value) {
setText("AN4", value);
    
});

});
onEvent("El5", "change", function( ) {
var elementName=getText("El5")
getKeyValue(elementName, function (value) {
setText("AN5", value);

});

});

onEvent("El6", "change", function( ) {
var elementName=getText("El6")
getKeyValue(elementName, function (value) {
setText("AN6", value);
});
});
function myFunction(n) {
 var searchterm={};
 searchterm.Element1=El1Choice;
 searchterm.Element2=El2Choice;
 searchterm.Element3=El3Choice;
 searchterm.Element4=El4Choice;
 searchterm.Element5=El5Choice;
searchterm.Element6=El6Choice;
 console.log(searchterm);
console.log(El1Choice);
  readRecords("ALLCOMPOUNDS", searchterm , function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + records[i].Compound_Name);
    }
  });
}
