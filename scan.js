
function hideBot() {
	let botDiv = document.querySelector('#J_xiaomi_dialog');
	if(botDiv && botDiv.style.display != 'none'){
		console.log('Hiding the bot..');
		botDiv.style.display = 'none';
		console.log('Bot is hidden');
	}
}

setTimeout(()=>{
	hideBot();
}, 1400);