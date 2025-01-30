let usedCharacters = "";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specials = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
let password = "";

//generate button starts password generator
generatePassword.generateBtn.addEventListener(
	"click",
	generatePassword.promptRun
);

//reloads page on cancel click
generatePassword.cancelBtn.addEventListener("click", () => {
	document.location.reload();
});

const generatePassword = {
	promptBackground: document.querySelector("#promptBackground"),
	question: document.querySelector("#question"),
	generateBtn: document.querySelector("#generateBtn"),
	incorrectInput: document.querySelector("#incorrectInput"),
	inputEl: document.querySelector("#inputEl"),
	length: 0,
	okBtn: document.querySelector("#okBtn"),
	yesBtn: document.querySelector("#yesBtn"),
	noBtn: document.querySelector("#noBtn"),
	cancelBtn: document.querySelector("#cancelBtn"),
	useCapitals: false,
	useNumbers: false,
	useSpecials: false,

	//builds string to use for password generation
	concatUsedCharacters: (stringToConcat) => {
		usedCharacters += stringToConcat;
	},

	// Starting prompt asking length, sets length and runs capital prompt on okBtn click.
	promptRun: () => {
		usedCharacters = "";
		this.promptBackground.style.display = "flex";
		this.question.textContent = "How long would you like the password?";
		this.yesBtn.style.display = "none";
		this.noBtn.style.display = "none";
		console.log(usedCharacters);

		this.okBtn.addEventListener("click", () => {
			if (
				this.question.textContent === "How long would you like the password?"
			) {
				this.length = this.inputEl.value;
				//has to be greater than 3 as there are 4 possible character types. Less than 4 would cause an endless loop.
				if (this.length > 3) {
					this.incorrectInput.textContent = "";
					console.log(length);
					generatePassword.concatUsedCharacters(lowerCase);
					generatePassword.promptCapitals();
				} else {
					this.incorrectInput.textContent = "Must be greater than 3!!!";
					generatePassword.promptRun();
				}
			}
		});
	},
	//changes this.useCapitals to true and concats capital string if yes is clicked
	promptCapitals: () => {
		this.okBtn.style.display = "none";
		this.yesBtn.style.display = "flex";
		this.noBtn.style.display = "flex";
		this.inputEl.style.display = "none";
		this.question.textContent = "Would you like to use capitals?";

		this.yesBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use capitals?") {
				this.useCapitals = true;
				generatePassword.concatUsedCharacters(capitals);
				console.log("Usecapitals? ", this.useCapitals);
				console.log(usedCharacters);

				generatePassword.promptNumbers();
			}
		});
		this.noBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use capitals?") {
				this.useCapitals = false;
				console.log("Usecapitals? ", this.useCapitals);
				console.log(usedCharacters);
				generatePassword.promptNumbers();
			}
		});
	},
	////changes this.useNumbers to true and concats numbers string if yes is clicked
	promptNumbers: () => {
		this.question.textContent = "Would you like to use numbers?";
		yesBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use numbers?") {
				this.useNumbers = true;
				generatePassword.concatUsedCharacters(numbers);
				console.log("UseNumbers? ", this.useNumbers);
				console.log(usedCharacters);
				generatePassword.promptSpecials();
			}
		});
		noBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use numbers?") {
				this.useNumbers = false;
				console.log("UseNumbers? ", this.useNumbers);
				console.log(usedCharacters);
				generatePassword.promptSpecials();
			}
		});
	},
	//changes this.useSpecials to true and concats special string if yes is clicked
	promptSpecials: () => {
		this.question.textContent = "Would you like to use special characters?";
		yesBtn.addEventListener("click", () => {
			if (
				this.question.textContent ===
				"Would you like to use special characters?"
			) {
				this.useSpecials = true;
				generatePassword.concatUsedCharacters(specials);
				console.log("useSpecials? ", this.useSpecials);
				console.log(usedCharacters);
				generatePassword.promptSubmit();
			}
		});
		noBtn.addEventListener("click", () => {
			if (
				this.question.textContent ===
				"Would you like to use special characters?"
			) {
				this.useSpecials = false;
				console.log("useSpecials? ", this.useSpecials);
				console.log(usedCharacters);
				generatePassword.promptSubmit();
			}
		});
	},

	//Shows users input and runs the password generator on okBtn click
	promptSubmit: () => {
		this.yesBtn.style.display = "none";
		this.noBtn.style.display = "none";
		this.okBtn.style.display = "flex";
		this.question.textContent = "";
		this.question.innerHTML = `Length: ${this.length}<br>
Use capitals: ${this.useCapitals}<br>
Use numbers: ${this.useNumbers}<br>
User specials: ${this.useSpecials}<br>
Would you like to submit?`;
		console.log(this.question.textContent);

		this.okBtn.addEventListener("click", () => {
			if (
				this.question.textContent !== "How long would you like the password?"
			) {
				generatePassword.createPassword();
			}
		});
	},

	//changes string(lowerCase, capitals, numbers, specials) into an aray. If any character from password matches any character in the array the function returns true.
	containsChar: (password, characters) => {
		return [...characters].some((char) => password.includes(char));
	},

	//checks useParameters and impliments the code to build the password until it contains wanted characters
	createPassword: () => {
		if (this.useCapitals && !this.useNumbers && !this.useSpecials) {
			//do until password contains wanted characters.
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				//will run if password doesn't contain at least 1 lower case letter and 1 capital
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, capitals)
			);
			console.log(password);
		} 
		
		else if (this.useCapitals && this.useNumbers && !this.useSpecials) {
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, capitals) ||
				!generatePassword.containsChar(password, numbers)
			);
			console.log(password);
		} 
		
		else if (this.useCapitals && !this.useNumbers && this.useSpecials) {
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, capitals) ||
				!generatePassword.containsChar(password, specials)
			);
			console.log(password);
		} 
		
		else if (this.useCapitals && this.useNumbers && this.useSpecials) {
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, capitals) ||
				!generatePassword.containsChar(password, numbers) ||
				!generatePassword.containsChar(password, specials)
			);
			console.log(password);
		} 
		
		else if (!this.useCapitals && this.useNumbers && !this.useSpecials) {
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, numbers)
			);
			console.log(password);
		} 
		
		else if (!this.useCapitals && this.useNumbers && this.useSpecials) {
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, numbers) ||
				!generatePassword.containsChar(password, specials)
			);
			console.log(password);
		} 
		
		else if (!this.useCapitals && !this.useNumbers && this.useSpecials) {
			do {
				password = "";
				let i = 0;
				while (i < this.length) {
					password += usedCharacters.charAt(
						Math.floor(Math.random() * usedCharacters.length)
					);
					i++;
				}
			} while (
				!generatePassword.containsChar(password, lowerCase) ||
				!generatePassword.containsChar(password, specials)
			);
			console.log(password);
		} 
		//creates password using only lowercase letters as all other possible combinations are checked in the if/else if functions
		else {
			password = "";
			let i = 0;
			while (i < this.length) {
				password += usedCharacters.charAt(
					Math.floor(Math.random() * usedCharacters.length)
				);
				i++;
			}
		}

		this.incorrectInput.textContent = password;
	},
};
