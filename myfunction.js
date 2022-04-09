function myfunction()
{
    var name = prompt("Enter Your Name to start your game");
    if (name == null || name == "")
    {
        txt = "No Name provided.Please Click The 'START GAME' Button To Run The Game.";
    }
    else{
        txt = " Your Game Will Start Now";
    }
    alert(txt);
    
}