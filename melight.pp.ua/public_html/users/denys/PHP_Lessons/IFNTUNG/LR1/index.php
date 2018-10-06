<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Labolatory work #1 v8</title>
	</head>
	<body>
		<?php
			$student = "Denys Melnychuk";
			echo "Виконав: $student<br>";
			$variant = 8;
			if ($variant < 15) {
				echo "First group<br>";
			} else {
				echo "Second group<br>";
			}
			$variable;
			for ($i=1; $i <= $variant; $i++) { 
				$variable = $i * $i;
				echo "$i^2 = $variable<br>";
			}
		?>
	</body>
</html>