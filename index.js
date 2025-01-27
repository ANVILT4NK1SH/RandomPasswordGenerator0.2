const generatePassword = {
	promptBackground: document.querySelector("#promptBackground"),
	question: document.querySelector("#question"),
	generateBtn: document.querySelector("#generateBtn"),
	inputEl: document.querySelector("#inputEl"),
	length: 1,
	okBtn: document.querySelector("#okBtn"),
	yesBtn: document.querySelector("#yesBtn"),
	noBtn: document.querySelector("#noBtn"),
	cancelBtn: document.querySelector("#cancelBtn"),

  setLength: () => {
    this.length = this.inputEl.value;
    console.log(length)
  },

  promptNumbers: () => {
    if(this.okBtn.addEventListener("click")){

    }
  },

	promptCapitols: () => {
			this.okBtn.style.display = "none";
			this.yesBtn.style.display = "flex";
			this.noBtn.style.display = "flex";
      this.inputEl.style.display = "none";
      this.question.textContent = "Would you like to use Capitols?"
	},

	promptRun: () => {
		this.promptBackground.style.display = "flex";
		this.question.textContent = "How long would you like the password?";
		this.yesBtn.style.display = "none";
		this.noBtn.style.display = "none";
    this.okBtn.addEventListener("click", this.setLength)
	},
};

console.log(typeof input);

generatePassword.generateBtn.addEventListener(
	"click",
	generatePassword.promptRun
);


if (generatePassword.length && generatePassword.length >=1){
generatePassword.okBtn.addEventListener("click", generatePassword.promptCapitols);
}