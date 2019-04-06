function myFunction() {
  idArray = new Array()
  idArray [1] = "You are not stupid,you are definitnely not ugly,you are no loser,you are no fake person,you are ok the way you are and you shouldnt let others tell you what you are and what you can become in this world."
  idArray [2] = "People might not see their own purpouse in this life but dont worry you will one day find that purpouse and when you do you will look back and ask why were you worried in the first place."
  idArray [3] = "People may say alot of bad things to me but guess what they can keep saying those words and they wont affect me im staying the same a loving,caring and helpfull person doing what is best for me and the people who care for me."
  idArray [4] = "You have to learn that bad people are just not worth it if someone has caused you alot of pain or suffering then there not worth remembering and try and get as far from them and out of your life."
  	
  document.getElementById("select").onclick = myFunction;
  randomParagraph = Math.floor(Math.random()*5);

  document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
}