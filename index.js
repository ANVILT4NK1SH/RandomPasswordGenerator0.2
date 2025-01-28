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
	useCapitols: false,
	useNumbers: false,
	useSpecials: false,

	promptRun: () => {
		this.promptBackground.style.display = "flex";
		this.question.textContent = "How long would you like the password?";
		this.yesBtn.style.display = "none";
		this.noBtn.style.display = "none";

		this.okBtn.addEventListener("click", () => {
			this.length = this.inputEl.value;
			console.log(length);
			generatePassword.promptCapitols();
		});
	},

	promptCapitols: () => {
		this.okBtn.style.display = "none";
		this.yesBtn.style.display = "flex";
		this.noBtn.style.display = "flex";
		this.inputEl.style.display = "none";
		this.question.textContent = "Would you like to use capitols?";

		this.yesBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use capitols?") {
				this.useCapitols = true;
				console.log("Usecapitals? ", this.useCapitols);
				generatePassword.promptNumbers();
			}
		});
		this.noBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use capitols?") {
				this.useCapitols = false;
				console.log("Usecapitals? ", this.useCapitols);
				generatePassword.promptNumbers();
			}
		});
	},
	promptNumbers: () => {
		this.question.textContent = "Would you like to use numbers?";
		yesBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use numbers?") {
				this.useNumbers = true;
				console.log("UseNumbers? ", this.useNumbers);
				generatePassword.promptSpecials();
			}
		});
		noBtn.addEventListener("click", () => {
			if (this.question.textContent === "Would you like to use numbers?") {
				this.useNumbers = false;
				console.log("UseNumbers? ", this.useNumbers);

				generatePassword.promptSpecials();
			}
		});
	},

	promptSpecials: () => {
		this.question.textContent = "Would you like to use special characters?";
		yesBtn.addEventListener("click", () => {
      
    });
		noBtn.addEventListener("click", () => {});
	},

	promptSubmit: () => {},
};

generatePassword.generateBtn.addEventListener(
	"click",
	generatePassword.promptRun
);

generatePassword.cancelBtn.addEventListener("click", () => {
  document.location.reload();
})


