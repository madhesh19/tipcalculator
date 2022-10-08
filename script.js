//get global access to all inputs/divs
//bill input,tip input,number of people and per person total
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberofPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

//get number of people from number of people div
let numberOfPeople = Number(numberofPeopleDiv.innerText)


//calculate total bill per person
const calculateBill = () => {
  //get bill from user input & convert into a number
  const bill = Number(billInput.value)

  //get tip from user and convert it to a percentage
  const tippercentage = Number(tipInput.value)/100
  

  //get the total tip amount 
  const tipamount = bill * tippercentage

  //calculate the total (tip+bill)
  const total = tipamount + bill

  //calculate per person total(total div by no of people)
  const perpersontotal = total/numberOfPeople

  //update per person total on dom 
  perPersonTotalDiv.innerText = `$${perpersontotal.toFixed(2)}`
}

//spliting the bill b/w more people
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  //update the dom with new number of people
  numberofPeopleDiv.innerText = numberOfPeople

  //calculate the bill based on the new people
  calculateBill()
}

//splitting the bill b/w fewer people
const decreasePeople = () => {
  if (numberOfPeople <= 1){
    alert('you cannot have less than 1 person')
    return
  }
  
  
  
  //decrement the number of people
  numberOfPeople -= 1

  //update the dom with new number of people
  numberofPeopleDiv.innerText = numberOfPeople

  //calculate the bill based on the new people
  calculateBill()

}