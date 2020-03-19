	//<script id="modecode">
	CodeMirror.defineSimpleMode("simplemode", {
	  start: [
		{regex: /((--\s*\w+\s*(,|\((\s*\w+\s*)|\s*\(\s*)\)?)|(--\s*(.+)))/,token: "islist"},
		{regex: /([.]{2}[a-z_]+\s*,)/,token: "keyword"},
		{regex: /([.]{2}\[[a-z_].*?\])/,token: "conteiner"},// ..[w]
		{regex: /(\.\.{|\.\.})/,token: "conteiner"},// ..{}
		{regex: /(<.*>)|\*JavaScript\*/,token: "ishtml"},//	
		{regex: /(\(.*?\))/,token: "inn"},//
		{regex: /alert|Panel_Open/, token: "java"},
		
		{regex: /(\.\.button|\.\.input_text|\.\.##|\.\.checkbox|\.\.radio)/,token: "keyword"},
		{regex: /(\.\.select|\.\.slider)|\.\.flip|\.\.listview|\.\.label|\.\.info/,token: "keyword"},
		
	
		{regex: /alert|Panel_Open|put_input_text/, token: "java"},
		
	  ],
	});
	//</script>