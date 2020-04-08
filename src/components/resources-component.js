/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The resources-component.js 
		file contains the template for the
		resourcescomponent component
===========================================
*/
ko.components.register("resourcescomponent", {
	template:
 '<div class="home-background"></div>\
		<div class="resources-backdrop" >\
			<div class="resources-title">A FEW RESOURCES</div>\
			<div class="resources-item-container">\
				<h1 class="Resources-item-header">The Modern JavaScript Tutorial</h3>\
				<a target="_blank" href="https://javascript.info/" class="resources-item-link unselectable">TAKE A LOOK</a>\
			</div>\
			<div class="resources-item-container">\
				<h1 class="Resources-item-header">The Best JavaScript Tutorials</h3>\
				<a target="_blank" href="https://www.freecodecamp.org/news/best-javascript-tutorial/" class="resources-item-link unselectable">TAKE A LOOK</a>\
			</div>\
			<div class="resources-item-container">\
				<h1 class="Resources-item-header">MDN: JavaScript</h3>\
				<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="resources-item-link unselectable">TAKE A LOOK</a>\
			</div>\
	</div>'
});