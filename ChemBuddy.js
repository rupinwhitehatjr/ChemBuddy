readRecords("AllELEMENTS", {}, function(records) {
  var ElementList = [];
  appendItem(ElementList,"");
  for (var i =0; i < records.length; i++) {
    appendItem(ElementList,(records[i]).Element);
   /* setKeyValue(records[i].Element, records[i].Atomic_number, function () {
      
    });*/
    
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
  var AtomicNumberList=[];
  for(i=0;i<choiceList.length;i++)
  {
    if(choiceList[i]=="")
    {
    continue;  
    }
   //console.log(choiceList[i]);
    appendItem(finalCl,choiceList[i]);
    var labelid="AN"+(i+1);
    //console.log(getNumber(labelid));
    appendItem(AtomicNumberList,getNumber(labelid));
    
  }
  
  
 console.log(finalCl,AtomicNumberList);
 var temp;
 for(i=0;i<finalCl.length-1;i++)
 {
   for(j=0;j<finalCl.length-1;j++)
   {
     if(AtomicNumberList[j]>AtomicNumberList[j+1])
     {
       temp=AtomicNumberList[j];
       AtomicNumberList[j]=AtomicNumberList[j+1]
       AtomicNumberList[j+1]=temp;
       
       
       temp=finalCl[j];
       finalCl[j]=finalCl[j+1]
       finalCl[j+1]=temp;
     }
   }
 }
 console.log(finalCl,AtomicNumberList);
 GetAllMatchingCompounds(finalCl);
 
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


function GetAllMatchingCompounds(elementList) {
 var searchterm={};
  searchterm.Element1="";
  searchterm.Element2="";
  searchterm.Element3="";
  searchterm.Element4="";
  searchterm.Element5="";
  searchterm.Element6="";
 for(var i=0;i<elementList.length;i++)
 {
   if(i==0)
   {
     searchterm.Element1=elementList[i];
   }
    if(i==1)
   {
     searchterm.Element2=elementList[i];
   }
    if(i==2)
   {
     searchterm.Element3=elementList[i];
   }
    if(i==3)
   {
     searchterm.Element4=elementList[i];
   }
    if(i==4)
   {
     searchterm.Element5=elementList[i];
   }
    if(i==5)
   {
     searchterm.Element6=elementList[i];
   }
 }
 

  readRecords("ALLCOMPOUNDS", searchterm , function(records) {
    var result=[];
    for (var i =0; i < records.length; i++) {
      
        appendItem(result,records[i].Compound_Name);
    }
    
    setProperty("compoundList", "options", result);
    setScreen("DisplayScreen");
    
  });
}
onEvent("compoundList", "change", function( ) {
  var compoundName=getText("compoundList")
  searchterm={};
  searchterm.Compound_Name=compoundName
  readRecords("ALLCOMPOUNDS", searchterm , function(records) {
    //console.log(records[0].Molecular_Formula)
    setText("resultsLabel", records[0].Molecular_Formula);
    
  });
  
});
onEvent("Back", "click", function( ) {
  setScreen("SearchScreen");
});


