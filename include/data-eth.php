<?php
	$json_url = "https://vlb.io/rates";
	$json = file_get_contents($json_url);
	$data = json_decode($json);
	print_r($data->eth);
?>
