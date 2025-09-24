import {Injectable} from '@angular/core';
import {WinCondition} from '../models/wincondition.model';
import {Score} from '../models/score.model';

@Injectable({
	providedIn:"root"
})
export class GameMechanics {
	
	private currentTarget:number = 0;
	private topList:Score[] = [];
	private numberOfGuesses:number = 0;
	private playerName:string = "";
	
	startGame(name:string) {
		let temp = localStorage.getItem("toplist");
		if(temp) {
			this.topList = JSON.parse(temp);
		}
		this.playerName = name;
		this.numberOfGuesses = 0;
		this.currentTarget = Math.floor(Math.random()*100)+1;
	}
	
	runGame(guess:number):WinCondition {
		this.numberOfGuesses++;
		if(guess < this.currentTarget) {
			return {
				type:"high",
				guesses:this.numberOfGuesses
			}
		}
		if(guess > this.currentTarget {
			return {
				type:"low",
				guesses:this.numberOfGuesses
			}
		}
		if(guess === this.currentTarget) {
			this.topList.push({
				name:this.playerName,
				score:this.numberOfGuesses
			})
			this.topList = this.sortTopList(this.topList);
			localStorage.setItem("toplist",JSON.stringify(this.topList));
			this.playerName = "";
			this.currentTarget = 0;
			let winObject = {
				type:"win",
				guesses:this.numberOfGuesses
			}
			this.numberOfGuesses = 0;
			return winObject;
		}
		return {
			type:"",
			guesses:0
		}
	}
}