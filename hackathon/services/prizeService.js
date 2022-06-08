import { getRightAnswer, getFakeAnswers, isAnswerBD, isAuth  } from "../data/db";



export async function getAnswers(minute, auth){
    
 if(isAuth(auth)){
    const fake = shuffle( await getFakeAnswers())
    const right = await getRightAnswer(minute)
    
    const answers = [fake[0].author, fake[1].author, fake[2].author, right.author]
    console.log("Services", answers)
    
    return shuffle(answers)

  } else { return res.status(404).json({ message: "Utilizador já jogou!" })}
  
  
}


export async function isAnswerService(answer){
        return await isAnswerBD(answer)
}





function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }