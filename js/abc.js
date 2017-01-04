function taggleOn(val){
	val.hover(
		function(){
			$(this).addClass("on");
		},
		function(){
			$(this).removeClass("on");
		}
	)
}

taggleOn($("#li1"));
taggleOn($("#li2"));
taggleOn($("#li3"));
taggleOn($("#li4"));
taggleOn($("#li5"));
taggleOn($("#li6"));


function popupOn(a,b){
	a.hover(
		function(){
			b.addClass("on");
		},
		function(){
			b.removeClass("on");
		}

	)
}


popupOn($("#popup1"),$("#poPup1"))
popupOn($("#popup2"),$("#poPup2"))
popupOn($("#popup3"),$("#poPup3"))
popupOn($("#popup4"),$("#poPup4"))
popupOn($("#popup5"),$("#poPup5"))
popupOn($("#popup6"),$("#poPup6"))
popupOn($("#popup7"),$("#poPup7"))