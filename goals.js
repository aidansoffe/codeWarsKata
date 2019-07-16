function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}

////////////////////////

const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);

/////////////////////////

https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
