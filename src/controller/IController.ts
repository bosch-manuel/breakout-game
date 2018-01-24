export interface IController {
    /**
     * Will be called by GameLogic
     */
    processInput(keyboardEvent:KeyboardEvent):void;
    /**
     * Will be called by GameLogic for every game step
     */
    update(elapsedTime:number):void;
}