export interface IController {
    /**
     * Will be called by GameLogic for every game step
     */
    update(elapsedTime:number):void;
}