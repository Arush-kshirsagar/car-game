class Form{
    constructor(){}
    display(){
        var title=createElement('h2')
        title.html("car game")
        title.position(200,0)

        var input=createInput("name")
        var button=createButton('play')
        var greetings=createElement('h3')

        input.position(200,200)
        button.position(250,250)

        button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        greetings.html("hi! "+name)
        greetings.position(200,200)
        
        })
    }
}