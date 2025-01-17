if(typeof window['AtKit'] == "undefined"){
	// Load AtKit
	
	d=document;jf=d.createElement('script');jf.src=('https:' == document.location.protocol ? 'https://ssl.atbar.org/c' : 'http://c.atbar.org') + '/atkit/AtKit.min.js';jf.type='text/javascript';jf.id='AtKitLib';d.getElementsByTagName('head')[0].appendChild(jf);

	window.AtKitLoaded = function(){
		var eventAction = null;
		
		this.subscribe = function(fn) {
			eventAction = fn;
		};
		
		this.fire = function(sender, eventArgs) {
			if (eventAction != null) {
				eventAction(sender, eventArgs);
			}
		};
	}

	window['AtKitLoaded'] = new AtKitLoaded();
	window['AtKitLoaded'].subscribe(function(){ __start(); });
} else {
	__start();
}

function __start(){
		
	// Start toolbar code
	(function (window, AtKit) { 

		$lib = AtKit.lib();
		
		var settings = {
			'version': '2.0.172'
		};
		
		settings.baseURL = ('https:' == document.location.protocol ? 'https://ssl.atbar.org/c/ATBar2/' : 'http://c.atbar.org/ATBar2/');
		
		var plugins = ["resize", "fonts", "spellng", "dictionary", "insipio-tts", "wordprediction", "css", "shortcutkeys", "tooltip"];
		
		var onLoad = function(){
		
			// Set our logo
			AtKit.setLogo(settings.baseURL + "images/atbar.png");
			AtKit.setName("ATBar");

			AtKit.setLanguage("ar");
			
			AtKit.addLocalisationMap("ar", {
				"exit": "&#1582;&#1585;&#1608;&#1580;",
				"reset": "&#1575;&#1587;&#1578;&#1593;&#1575;&#1583;&#1577; &#1575;&#1604;&#1608;&#1590;&#1593; &#1575;&#1604;&#1571;&#1589;&#1604;&#1610;"
			});

			var about = "Version " + settings.version;
			about += "<p style=\"line-height:120%\">Created by <a href=\"http://seb.skus.es/\">Sebastian Skuse</a> and the <a href=\"http://access.ecs.soton.ac.uk/\">Accessibility Team</a>.<br>Web and Internet Science, ECS<br> &copy; University of Southampton 2010-2012.<br><br>Fugue Icons &copy; <a href=\"http://www.pinvoke.com/\">pinvoke</a> under Creative Commons licence, Dictionary &copy; <a href=\"http://en.wiktionary.org/\">Wiktionary</a> under Creative Commons licence.<br><a href=\"http://famspam.com/facebox/\">Facebox</a> jQuery plugin &copy; Chris Wanstrath under MIT licence, Portions of the spelling engine &copy; <a href=\"http://brandonaaron.net\">Brandon Aaron</a> under MIT licence. Word prediction provided by <a href='http://www.aitype.com/'>AIType</a>.</p>";
			
			AtKit.setAbout(about);
			
			// Add all the plugins to the toolbar
			
			$lib.each(plugins, function(i, v){
				AtKit.addPlugin(v);
			});

			AtKit.addResetFn('reset-saved', function(){
				AtKit.clearStorage();
				
				if(typeof localStorage != null) localStorage.removeItem("ATBarAutoLoad");
			});	
			
			AtKit.addCloseFn('close-saved', function(){
				if(typeof localStorage != null) localStorage.removeItem("ATBarAutoLoad");
			});	
		
			// Run
			AtKit.render();
			
			// Select the first button.
			$lib('.at-btn:first a').focus();
			
			// Save state
			if(typeof localStorage != null) localStorage.setItem("ATBarAutoLoad", 1);
		};
		
		
		AtKit.importPlugins(plugins, onLoad);
		
		
	}(window, AtKit));

}