// test comment!!

test("Check the body has a background image", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
//find the element with id hello in the iframe and get its contents
	var header = target.getElementsByTagName("header")[0];
// get bg image from external(!!!!) stylesheet
	var style = window.getComputedStyle(header, null);
	var bg = style.backgroundImage
	var slice = bg.slice(-21)
//check the bg image is correct url
	equal(slice, "headerBackground.jpg)", "it works!")

});


test("Check there is an h1 element that says 'Coders In Dev'", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
// find header element
	var header = target.getElementsByTagName("header")[0];
// find h1 which is first child of header
	var h1 = header.children[0].innerHTML;

	equal(h1, "Coders In Dev", "awesome")
});




test("Check there is an h2 that says 'tag line'", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
// find header element
	var header = target.getElementsByTagName("header")[0];
// find h1 which is first child of header
	var h2 = header.children[1].innerHTML;

	equal(h2, "We are learning to code.", "awesome")
});



test("Check there is an element with ID featuredProj, and it has an image", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
//find featuredProj element
	var proj = target.getElementById("featuredProj");

	var image = proj.children[1].alt;

	equal(image, "Featured Project", "HELLYES")
});
