let search=()=>{





     let string=document.getElementById("input_box").value;
     let Word=" ";
     let meaning=' ';
     let example=' ';
     let synonyms=' ';
     let antonyms=' ';
     if(string!==''){

        console.log(string)
        let searchWord="https://api.dictionaryapi.dev/api/v2/entries/en/"+string;
         fetch(searchWord).then(data=> data.json()).then( wordData =>{

             Word=wordData[0].word;
             
             meaning=wordData[0].meanings[0].definitions[0].definition;
             example=wordData[0].meanings[0].definitions[0].example;
             synonyms=wordData[0].meanings[0].definitions[0].synonyms;
             antonyms=wordData[0].meanings[0].definitions[0].antonyms;

             

             document.getElementById("word").innerText=Word;
             document.getElementById("meaning").innerText=meaning;

            
                 
             
             document.getElementById("example").innerText=example;
             document.getElementById("synonyms").innerText=synonyms;
        
            if(synonyms.length!=0){

                let string=""
                for(let i=0;i<synonyms.length;i++){
                    string=string+synonyms[i]+", "
                }

                document.getElementById("synonyms").innerText=string



            }

         })

         
     }





}
 document.getElementById("search_Img").addEventListener("click",search);


 