<?php

namespace Nfq;

use Nfq\Interfaces\ReservableInterface;

class Room implements ReservableInterface
{
    private $roomType;
    private $hasRestroom;
    private $hasBalcony;
    private $bedCount;
    private $extras;
    private $roomNumber;
    private $price;
    private $reservations = [];

    public function __construct(string $roomType, bool $hasRestroom, bool $hasBalcony, int $bedCount, array $extras, int $roomNumber, int $price )
    {
        $this->roomType = $roomType;
        $this->hasRestroom = $hasRestroom;
        $this->hasBalcony = $hasBalcony;
        $this->bedCount = $bedCount;
        $this->extras = $extras;
        $this->roomNumber = $roomNumber;
        $this->price = $price;
    }

    public function addReservation(Reservation $reservation)
    {
        array_push($this->reservations, $reservation);
    }

    public function removeReservation(Reservation $reservation)
    {
        $thisReservation = array_search($reservation, $this->reservations);
        array_splice($this->reservations, $thisReservation,1);
    }

    public function showReservations()
    {
        var_dump($this->reservations);
    }

    public function __toString():string
    {
        if($this->hasRestroom)
        {
            $rest="True";
        }
        else
        {
            $rest="False";
        }

        if($this->hasBalcony)
        {
            $balc="True";
        }
        else
        {
            $balc="False";
        }

        return (
            "Room type: ".$this->roomType."\r\n".
            "Has restroom: ".$rest."\r\n".
            "Has balcony: ".$balc."\r\n".
            "Bed count: ".$this->bedCount."\r\n".
            "Extras: ".implode(', ',$this->extras)."\r\n".
            "Price: $".$this->price."\r\n"
        );
    }

    public function getRoomType()
    {
        return $this->roomType;
    }

    public function setRoomType($roomType)
    {
        $this->roomType = $roomType;

        return $this;
    }
 
    public function getHasRestroom()
    {
        return $this->hasRestroom;
    }

    public function setHasRestroom($hasRestroom)
    {
        $this->hasRestroom = $hasRestroom;

        return $this;
    }

    public function getHasBalcony()
    {
        return $this->hasBalcony;
    }

    public function setHasBalcony($hasBalcony)
    {
        $this->hasBalcony = $hasBalcony;

        return $this;
    }
 
    public function getBedCount()
    {
        return $this->bedCount;
    }

    public function setBedCount($bedCount)
    {
        $this->bedCount = $bedCount;

        return $this;
    }

    public function getExtras()
    {
        return $this->extras;
    }

    public function setExtras($extras)
    {
        $this->extras = $extras;

        return $this;
    }

    public function getRoomNumber()
    {
        return $this->roomNumber;
    }

    public function setRoomNumber($roomNumber)
    {
        $this->roomNumber = $roomNumber;

        return $this;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }
}