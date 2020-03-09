




var demoWorkspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox'),
     zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2},
     trashcan: true});



    function showCode() {
      // Generate JavaScript code and display it.
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
      //alert(code);
		var output = document.getElementById('importExport');
		output.value = code;
		//output.focus();
		//output.select();
    }

	function runCode() {
		// Generate JavaScript code and run it.
		window.LoopTrap = 1000;
		Blockly.JavaScript.INFINITE_LOOP_TRAP =
		  'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
		var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
		Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
		try {
			//eval(code);
		} catch (e) {
			//alert(e);
		}
	}
	
      function toXml() {
        //var output = document.getElementById('importExport');
        var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
		var Text_XML = Blockly.Xml.domToPrettyText(xml);
        //output.value = Blockly.Xml.domToPrettyText(xml);
        //output.focus();
        //output.select();		
		Save_File(Text_XML);
      }
	  

      function fromXml() {
        var input = document.getElementById('importExport');
        var xml = Blockly.Xml.textToDom(input.value);
        Blockly.Xml.domToWorkspace(xml, demoWorkspace);
      }	
	  
function ggg() {
		demoWorkspace.clear();
		//Blockly.mainWorkspace.clear();
}

		 
	function Read_File() {
		var input = document.createElement('input');
		input.type = 'file';
		input.onchange = e => { 
		   // getting a hold of the file reference
		   var file = e.target.files[0]; 
		   // setting up the reader
		   var reader = new FileReader();
		   reader.readAsText(file); // this is reading as data url
		   // here we tell the reader what to do when it's done reading...
		   reader.onload = readerEvent => {
			  var content = readerEvent.target.result; // this is the content!
			  console.log(content);
			//var input = document.getElementById('importExport');
			Blockly.mainWorkspace.clear();
			var xml = Blockly.Xml.textToDom(content);
			Blockly.Xml.domToWorkspace(xml, demoWorkspace);
		   }
		}
		input.click();
	}	
	  	 
	 
	 
	function Save_File(is_data) {
		var isFile;
		var fname = prompt("Please enter your name:", "project.xml");
		if (fname == null || fname == "") {
		isFile = "project.xml";
		} else {
		//isFile = fname + ".xml";
		isFile = fname;
		}

		let a = document.createElement('a');
		a.href = "data:application/octet-stream,"+encodeURIComponent(is_data);
		a.download = isFile;
		a.click();
	}




