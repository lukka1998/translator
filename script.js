let georgianToEnglish = [
    ["ლუკა", "luka"],
    ["გამარჯობა", "hello"],
  ];
  
  let englishToGeorgian = [
    ["luka", "ლუკა"],
    ["hello", "გამარჯობა"],
  ];
  
  let georgianToRussian = [
    ["ლუკა", "лука"],
    ["გამარჯობა", "привет"],
  ];
  
  let russianToGeorgian = [
    ["лука", "ლუკა"],
    ["привет", "გამარჯობა"],
  ];
  //შევქმნათ 4 მასივი 4 თარგმანისთვის.
 let user=Number(prompt(
    "Enter your number:\n1. Georgian to English\n2. English to Georgian\n3. Georgian to Russian\n4. Russian to Georgian"
  ));
  if(user===1){
    let userword=prompt("enter word to translate")
    for(let i=0;i<georgianToEnglish.length;i++){
        if(georgianToEnglish[i][0]===userword){
            alert("your word is "+georgianToEnglish[i][0]+" and transleted is "+georgianToEnglish[i][1])
            break;
        }
        else if(georgianToEnglish[i][0]!=userword){
            let arr=[];
            alert("there is not this word in Dictionary")
            let userword1=prompt("enter word to translate")
            let userword2=prompt("enter transleted word")
            arr.push(userword1)
            arr.push(userword2)
            georgianToEnglish.push(arr);
            alert("this word added in dictionary and looks like "+arr[0]+" : " +arr[1])
            console.log(georgianToEnglish);
           break;
        }
        
    }
    
    

  }
  else if(user===2){
    let userword=prompt("enter word to translate")
    for(let i=0;i<englishToGeorgian.length;i++){
        if(englishToGeorgian[i][0]===userword){
            alert("your word is "+englishToGeorgian[i][0]+" and transleted is "+englishToGeorgian[i][1])
            break;
        }
        else if(englishToGeorgian[i][0]!=userword){
            let arr=[];
            alert("there is not this word in Dictionary")
            let userword1=prompt("enter word to translate")
            let userword2=prompt("enter transleted word")
            arr.push(userword1)
            arr.push(userword2)
            englishToGeorgian.push(arr);
            alert("this word added in dictionary and looks like "+arr[0]+" : "+arr[1])
            console.log(englishToGeorgian);
           break;
        }
        
    }
  }
  else if(user===3){
    let userword=prompt("enter word to translate")
    for(let i=0;i<georgianToRussian.length;i++){
        if(georgianToRussian[i][0]===userword){
            alert("your word is "+georgianToRussian[i][0]+" and transleted is "+georgianToRussian[i][1])
            break;
        }
        else if(georgianToRussian[i][0]!=userword){
            let arr=[];
            alert("there is not this word in Dictionary")
            let userword1=prompt("enter word to translate")
            let userword2=prompt("enter transleted word")
            arr.push(userword1)
            arr.push(userword2)
            georgianToRussian.push(arr);
            alert("this word added in dictionary and looks like "+arr[0]+" : "+arr[1])
            console.log(georgianToRussian);
           break;
        }
        
    }
  }
 else if(user===4){
    let userword=prompt("enter word to translate")
    for(let i=0;i<russianToGeorgian.length;i++){
        if(russianToGeorgian[i][0]===userword){
            alert("your word is "+russianToGeorgian[i][0]+" and transleted is "+russianToGeorgian[i][1])
            break;
        }
        else if(russianToGeorgian[i][0]!=userword){
            let arr=[];
            alert("there is not this word in Dictionary")
            let userword1=prompt("enter word to translate")
            let userword2=prompt("enter transleted word")
            arr.push(userword1)
            arr.push(userword2)
            russianToGeorgian.push(arr);
            alert("this word added in dictionary and looks like "+arr[0]+" : "+arr[1])
            console.log(russianToGeorgian);
           break;
        }
        
    }
  }
  else {
    alert("Invalid choice")
  }