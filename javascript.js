function myFunction() {
  idArray = new Array()
  idArray [1] = "You are not stupid,you are definitnely not ugly,you are no loser,you are no fake person,you are ok the way you are and you shouldnt let others tell you what you are and what you can become in this world."
  idArray [2] = "People might not see their own purpouse in this life but dont worry you will one day find that purpouse and when you do you will look back and ask why were you worried in the first place."
  idArray [3] = "People may say alot of bad things to me but guess what they can keep saying those words and they wont affect me im staying the same a loving,caring and helpfull person doing what is best for me and the people who care for me."
  idArray [4] = "You have to learn that bad people are just not worth it if someone has caused you alot of pain or suffering then there not worth remembering and try and get as far from them and out of your life."
  idArray [5] = "Many people may leave you because you are doing what is best for you and not what they want from you."
  idArray [6] = "Most people have only one perspective on negative thigns if you can change there perspective to something good then you are a miraculous person."
  idArray [7] = "When you start doing something new people will make fun of you then you start proving them wrong and they will set you as a example of some one very dedicated."
  idArray [8] = "Dont be something that you arent always be yourself no matter what."
  document.getElementById("select").onclick = myFunction;
  randomParagraph = Math.floor(Math.random()*8);

  document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
}
