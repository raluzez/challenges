<?php

namespace Nfq\Interfaces;

use Nfq\Reservation;

interface ReservableInterface
{
    public function addReservation(Reservation $reservation);
    public function removeReservation(Reservation $reservation);
}