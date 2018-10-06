<?php
$page_title = "LR #2 v8";
$n = 8;
$m = 5;
include('top_template.inc');
include('car.inc');

   $bibika = new Car;
   $bibika ->model = "VAZ 2101";
   $bibika ->color = "Red";
   $bibika ->engine = "1.3l";
   $bibika ->price = ($n*15000)/$m;
?>

<table>
	<tr>
		<td colspan=5>Bibika</td>
	</tr>
	<tr>
		<td>Model</td>
		<td>Engine</td>
		<td>Color</td>
		<td>Price</td>
		<td>Price category</td>
	</tr>
	<tr>
		<td><?php echo $bibika->model ?></td>
		<td><?php echo $bibika->engine ?></td>
		<td><?php echo $bibika->color ?></td>
		<td><?php echo $bibika->price ?></td>
		<td><?php echo $bibika->describe_price() ?></td>
	</tr>
</table>

<?php
$student = "Denys Melnychuk";
include('bottom_template.inc');
?>