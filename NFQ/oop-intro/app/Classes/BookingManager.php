<?php

namespace Nfq;


class BookingManager
{
    public static function bookRoom(Room $room, Reservation $reservation)
    {
        $room->addReservation($reservation);
        return print(
            'Room <strong>'.
            $room->getRoomNumber().
            '</strong> successfully booked for <strong>'.
            $reservation->getGuest().
            '</strong> from <time>'.
            $reservation->getStartDate()->format('Y-m-d').
            '</time> to <time>'
            .$reservation->getEndDate()->format('Y-m-d').
            '</time>!'.
            "\r\n"
        );
    }
}