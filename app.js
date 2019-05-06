// take input from form
document.querySelector("#formButton").addEventListener("click", function(event){
    event.preventDefault();
    console.log(`the button has been clicked dude`)
    // grabs user input
    var trainName = document.querySelector("#trainNameInput").value.trim();
    var destination = document.querySelector("#destinationInput").value.trim();
    var firstTrainTime = document.querySelector("#firstTrainTimeInput").value.trim();
    var frequency = document.querySelector("#frequencyInput").value.trim();
    //console.log(`the train name you inputed was: ${trainName}`);
    //console.log(`the train name you inputed was: ${destination}`);
    //console.log(`the train name you inputed was: ${firstTrainTime}`);
    //console.log(`the train name you inputed was: ${frequency}`);
class Train{
    constructor(trainName,destination,firstTrainTime,frequency){
        this.trainName=trainName
        this.destination=destination
        this.firstTrainTime=firstTrainTime
        this.frequency=frequency
    }
    testObject(){
        console.log(`this is the created object ${this.trainName}+${this.destination}+${this.firstTrainTime}+${this.frequency}`)
    }
}
let newTrain = new Train (trainName, destination, firstTrainTime,frequency)
newTrain.testObject()
})






