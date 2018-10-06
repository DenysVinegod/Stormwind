<?php 
 class Car
  {
    public $model;
    public $color;
    public $engine;
    public $price;
    public function describe_price()
    {
       if ($this->price < 15000)
       {
         echo "Low price<br>";
       }
       else if ($this->price >= 15000 && $this->price <= 40000)
       {
        echo "Normal price<br>"; 
       }
       else if ($this->price > 40000)
       {
        echo "High price<br>";
       }
     }
   }
?>