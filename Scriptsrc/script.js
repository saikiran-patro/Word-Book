let search=()=>{





     let string=document.getElementById("input_box").value;
     string=string.replace(/\s+/g, ' ').trim()
     let Word=0;
     let meaning=0;
     let example=0;
     let synonyms=0;
     let antonyms=0;

    


     if(string!==''){
        

         
        let searchWord="https://api.dictionaryapi.dev/api/v2/entries/en/"+string;

        try {
            fetch(searchWord).then(data=> data.json()).then( wordData =>{

                try{
                Word=wordData[0].word;
                if(example===0 && Word===0 && meaning===0 && synonyms===0 && antonyms===0){

                    document.getElementById("word").innerText='None';
                    document.getElementById("meaning").innerText='None';
                    document.getElementById("example").innerText='None';
                    document.getElementById("synonyms").innerText='None';
                    document.getElementById("antonyms").innerText='None';
                   
                   
            
            
            
            
            
                }
                
                 }
                 catch(error){

                    alert("Please check your word")
                 }
                
                meaning=wordData[0].meanings[0].definitions[0].definition;
                example=wordData[0].meanings[0].definitions[0].example;
   
   
                for(let i=0;i<wordData[0].meanings[0].definitions.length;i++){
   
                        if (wordData[0].meanings[0].definitions[i].synonyms.length!==0){
                           synonyms=wordData[0].meanings[0].definitions[i].synonyms;
                           break;
               
   
                        }
                        else{
   
                           synonyms=[]
                        }
   
   
                }
                
                for(let i=0;i<wordData[0].meanings[0].definitions.length;i++){
   
                   if (wordData[0].meanings[0].definitions[i].antonyms.length!==0){
                      antonyms=wordData[0].meanings[0].definitions[i].antonyms;
                      break;
          
   
                   }
                   else{
   
                      antonyms=[]
                   }
   
   
                  }
                  for(let i=0;i<wordData[0].meanings[0].definitions.length;i++){
   
                   if (typeof(wordData[0].meanings[0].definitions[i].example)!="undefined"){
                      example=wordData[0].meanings[0].definitions[i].example;
                      break;
          
   
                   }
                   else{
   
                      example="None"
                   }
   
   
                  }
           
           
   
                
   
                document.getElementById("word").innerText=Word;
                document.getElementById("meaning").innerText=meaning;
   
               
                    
                if (example){
                   document.getElementById("example").innerText=example;
   
                }
                
                document.getElementById("synonyms").innerText=synonyms;
           
               if(synonyms.length!=0){
   
                   let string_=""
                   for(let i=0;i<synonyms.length;i++){
                       string_=string_+synonyms[i]+", "
                   }
   
                   document.getElementById("synonyms").innerText=string_
   
   
   
               }
               else{
   
   
                   document.getElementById("synonyms").innerText="None"
               }
   
               if(antonyms.length!=0){
   
   
                   let string_=""
                   for(let i=0;i<antonyms.length;i++){
   
                           string_=string_+antonyms[i]+", "
   
   
                   }
                   document.getElementById("antonyms").innerText=string_
   
               }
               else{
   
                   document.getElementById("antonyms").innerText="None"
               }
   
            })
   
            
        }
   
            
         catch (error) {
            alert("Please search for a word")
        }
         
    }
    else{


        alert("Please enter a word")
    }




}
 document.getElementById("search_Img").addEventListener("click",search);


 document.getElementById("input_box").addEventListener("keyup", function(event) {
   
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      search();
    }
  });


 

 