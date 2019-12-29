<?php 

namespace Nfq;

class Apartment extends Room
{
    public function __construct(int $roomNumber, int $price)
    {
        parent::__construct(
            'Diamond',
            true,
            true,
            4,
            array('TV', 'air-conditioner', 'refrigerator','kitchen box', 'mini-bar', 'bathtub', 'free Wi-fi'),
            $roomNumber,
            $price
        );
    }
}