<?php
$handle = @fopen("./m2m.dat", "r");
print "<pre>";
if ($handle) {
    while (($buffer = fgets($handle)) !== false) {
    	$isFile = "/\.(.*?)/";
    	if(strpos($buffer, "/home/biogeog/projects/macrosystem/m2m/project/data") === 0) {
    		$buffer = str_replace("/home/biogeog/projects/macrosystem/m2m/project/data", "", $buffer) . "\r\n";
    		$buffer = str_replace(":", "", $buffer);
    		$buffer = explode("/", $buffer);
    		//if($buffer[])
    		array_shift($buffer);
    		print_r($buffer);
    	} else {
    		preg_match($isFile, $buffer, $bool);
    		if($bool) print "is file: ";
    		print "$buffer\r\n";
    	}
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}
?>