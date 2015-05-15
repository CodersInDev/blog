// test comment!!

test("Check the document has loaded fully", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
//find the element with id hello in the iframe and get its contents
	var ready = target.readyState;

	equal(ready, "complete", "it works!")

});



test("Check the title is Coders in Dev", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
//find the title in the iframe and get its contents
	var title = target.title;
//check the title has a right value
	equal(title, "Coders In Dev", "it works!");

});


test("Check that logo says CID", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
// find logo element value
	var logo = target.getElementById('logo').innerHTML;

	equal(logo, "CID", "awesome");
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

	equal(h2, "We are", "awesome")
});



test("Check there is an element with ID featuredProj, and it has an image", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
//find featuredProj element
	var proj = target.getElementById("featuredProj");

	var image = proj.children[1].children[0].alt;

	equal(image, "Featured Project", "HELLYES")
});

test("Check the menu is hidden on front page", function(){
//assign the iframe object to a varaiabl called iframe
	var iframe = document.getElementById("iframe");
//extract the contents(DOM) of the iframe and assign to var target
	var target = iframe.contentDocument || iframe.contentWindow.document;
//find featuredProj element
	var navbar = target.getElementById('navbar');
//get external stysheet rule for navbar
	var style = window.getComputedStyle(navbar, null);

	equal(style.display, "none", "HELLYES")
});

setTimeout(function() { // this is only here so you can see the page change!
  test("Check that the navbar on click display menu", function(assert){
    var done = assert.async();
    var iframe = document.getElementById('iframe');
    var target = iframe.contentDocument || iframe.contentWindow.document;
    target.getElementById('navbar').click();

    // wait for the next page to load
    setTimeout(function() {
      var navbar = target.getElementById('navbar');
//get external stysheet rule for navbar
	var style = window.getComputedStyle(navbar, null);
      // console.log('>>> '+hello)
      notEqual(style, 'none', 'as expected');
      done();
    }, 1000);
  });
}, 2000); 

setTimeout(function() { // this is only here so you can see the page change!
  test("Check there is a link to meet the team and it goes to team.html", function(assert){
    var done = assert.async();
    var iframe = document.getElementById('iframe');
    var target = iframe.contentDocument || iframe.contentWindow.document;
    target.getElementById('team').children[0].click();

    // wait for the next page to load
    setTimeout(function() {
      var iframe = document.getElementById('iframe');
      var target = iframe.contentDocument || iframe.contentWindow.document;
      var alex = target.getElementsByTagName('h3')[0].innerHTML;
      // console.log('>>> '+hello)
      equal(alex, 'Alex', 'as expected');
      done();
    }, 1000);
  });
}, 4000); 

