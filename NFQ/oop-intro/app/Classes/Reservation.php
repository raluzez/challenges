<?php

namespace Nfq;

class Reservation
{
    private $startDate;
    private $endDate;
    private $guest;

    public function __construct(\DateTime $startDate, \DateTime $endDate, Guest $guest)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->guest = $guest;
    }

    public function __toString():string
    {
        return (
            "Start date: ".$this->startDate->format('Y-m-d')."\r\n".
            "End date: ".$this->endDate->format('Y-m-d')."\r\n".
            "Guest: ".$this->guest."\r\n"
        );
    }

    public function getStartDate()
    {
        return $this->startDate;
    }

    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate()
    {
        return $this->endDate;
    }

    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getGuest()
    {
        return $this->guest;
    }

    public function setGuest($guest)
    {
        $this->guest = $guest;

        return $this;
    }
}