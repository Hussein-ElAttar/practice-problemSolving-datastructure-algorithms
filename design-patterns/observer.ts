/*
    The Observer Pattern (also known as Publish-Subscribe Pattern)
    -----------------------------------------------------------------------
    is a behavioral design pattern which defines a one-to-many(one subject many observers)
    relationship between objects such that, when one object changes its state,
    all dependent objects are notified and updated automatically
*/
interface IObserver {
    ReceiveNotification<T>(Message: T): void;
}

interface Subject {
    RegisterObserver(Observer: IObserver): void;
    RemoveObserver(Observer: IObserver): void;
    NotifyObservers(): void;
}

class WeatherDataServer implements Subject {

    // My "infrastructure" properties
    private _observers: IObserver[];

    // My "data" properties
    private _temp: number;
    private _humidity: number;
    private _pressure: number;

    constructor() {

        // Initialize the array of potential observers.
        this._observers = [];

        this._temp = 90;
        this._pressure = 100;
        this._humidity = 22;

    }

    // Once registered, the observer will be notified of any changes in state.
    public RegisterObserver(theObserver: IObserver): void {
        this._observers.push(theObserver);
    }

    // Give the observer a way to de-register
    public RemoveObserver(theObserver: IObserver): void {

        for (let i = 0; i < this._observers.length; i++) {
            if (this._observers[i] === theObserver) {
                this._observers.splice(i,1);
            }
        }
    }

    // Notify all the observers
    public NotifyObservers() {
        for (let i = 0; i < this._observers.length; i++) {

            // NOTE: this should pass the actual weather data to the client but this is a simplistic example.
            this._observers[i].ReceiveNotification("I have some new weather data for you.");
        }
    }
}

class WeatherDataClient implements IObserver {

    private _subject: Subject;
    private _myId: number;

    static NextClientId: number = 0;

    constructor(mySubject: Subject) {

        this._subject = mySubject;
        this._myId = WeatherDataClient.NextClientId++;

    }

    ReceiveNotification<T>(message: T): void {
        console.log("WeatherDataClient (" + this._myId + "): I received a notification:", message);
    }
}
