/*! snoros v0.0.1 | (c) 2020 Instynct | MIT License | http://link-to-your-git-repo.com */
// OPEN MENU

moduleTitle = document.querySelector('.module-title');
moduleContainer = document.querySelector('.module-container');
console.log(moduleTitle);

moduleTitle.addEventListener('mouseover', (function (e) {
	console.log('What?');
	moduleContainer.classList.toggle('blue');
}));
